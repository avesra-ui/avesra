import { isSameDay, type CalendarDate } from '@internationalized/date';

import {
  buildVisibleGrid,
  defaultFocusedValue as calendarDefaultFocusedValue,
  formatDayNumber,
  isDateUnavailableOrOutOfBounds,
} from '../calendar/calendar.model';
import type { AvCalendarDateOffset, AvCalendarVisibleDuration } from '../calendar/calendar.types';
import { isDateInRange, normalizeDateRange, AvDateRange } from './date-range';
import type {
  AvRangeCalendarCellMeta,
  AvRangeCalendarIsDateUnavailable,
  AvRangeCalendarMonthGrid,
  AvRangeCalendarValue,
} from './range-calendar.types';

export interface AvRangeCalendarHighlightOptions {
  locale: string;
  firstDayOfWeek: import('../calendar/calendar.types').AvCalendarFirstDayOfWeek;
  timeZone: string;
  minValue: import('@internationalized/date').DateValue | null;
  maxValue: import('@internationalized/date').DateValue | null;
  isDateUnavailable: AvRangeCalendarIsDateUnavailable | null;
  anchorDate: CalendarDate | null;
  highlightRange: AvDateRange;
  focusedValue: CalendarDate;
  weeksInMonth?: number;
  weekdayStyle?: import('../calendar/calendar.types').AvCalendarWeekdayStyle;
}

export function valueToDateRange(value: AvRangeCalendarValue): AvDateRange {
  if (!value) {
    return AvDateRange.empty();
  }

  return new AvDateRange(value.start, value.end);
}

export function dateRangeToValue(range: AvDateRange): AvRangeCalendarValue {
  if (!range.isComplete || !range.start || !range.end) {
    return null;
  }

  const normalized = normalizeDateRange(range);
  return { start: normalized.start!, end: normalized.end! };
}

export function defaultFocusedValue(
  value: AvRangeCalendarValue,
  timeZone?: string,
): CalendarDate {
  if (value?.start) {
    return value.start;
  }

  return calendarDefaultFocusedValue(null, timeZone);
}

export function getRangeCellFlags(
  date: CalendarDate,
  range: AvDateRange,
): Pick<AvRangeCalendarCellMeta, 'selected' | 'selectionStart' | 'selectionEnd'> {
  if (range.isEmpty || !range.start) {
    return { selected: false, selectionStart: false, selectionEnd: false };
  }

  // Incomplete: only the start endpoint is chrome'd (Material — no in-range fill).
  if (range.isIncomplete) {
    const isStart = isSameDay(date, range.start);
    return { selected: isStart, selectionStart: isStart, selectionEnd: false };
  }

  const normalized = normalizeDateRange(range);
  const selected = isDateInRange(date, normalized);
  return {
    selected,
    selectionStart: !!normalized.start && isSameDay(date, normalized.start),
    selectionEnd: !!normalized.end && isSameDay(date, normalized.end),
  };
}

export function isRangeDateUnavailable(
  date: CalendarDate,
  options: {
    minValue: AvRangeCalendarHighlightOptions['minValue'];
    maxValue: AvRangeCalendarHighlightOptions['maxValue'];
    isDateUnavailable: AvRangeCalendarIsDateUnavailable | null;
    anchorDate: CalendarDate | null;
  },
): boolean {
  if (
    isDateUnavailableOrOutOfBounds(date, {
      minValue: options.minValue,
      maxValue: options.maxValue,
      isDateUnavailable: options.isDateUnavailable
        ? (d) => options.isDateUnavailable!(d, options.anchorDate)
        : null,
    })
  ) {
    return true;
  }

  return false;
}

export function buildRangeVisibleGrid(
  focused: CalendarDate,
  visibleDuration: AvCalendarVisibleDuration | null,
  options: AvRangeCalendarHighlightOptions,
  offset: AvCalendarDateOffset | null = null,
): AvRangeCalendarMonthGrid {
  const base = buildVisibleGrid(
    focused,
    visibleDuration,
    {
      locale: options.locale,
      firstDayOfWeek: options.firstDayOfWeek,
      timeZone: options.timeZone,
      minValue: options.minValue,
      maxValue: options.maxValue,
      isDateUnavailable: options.isDateUnavailable
        ? (date) => options.isDateUnavailable!(date, options.anchorDate)
        : null,
      selectionMode: 'single',
      selectedValue: null,
      focusedValue: options.focusedValue,
      weeksInMonth: options.weeksInMonth,
      weekdayStyle: options.weekdayStyle,
    },
    offset,
  );

  return {
    visibleStart: base.visibleStart,
    visibleEnd: base.visibleEnd,
    weeks: base.weeks.map((week) =>
      week.map((cell) => {
        if (!cell) {
          return null;
        }

        const flags = getRangeCellFlags(cell.date, options.highlightRange);
        const unavailable = isRangeDateUnavailable(cell.date, options);

        return {
          date: cell.date,
          day: cell.day,
          formattedDate: formatDayNumber(cell.date, options.locale),
          today: cell.today,
          selected: flags.selected,
          selectionStart: flags.selectionStart,
          selectionEnd: flags.selectionEnd,
          outsideMonth: cell.outsideMonth,
          unavailable,
          disabled: unavailable,
          focused: isSameDay(cell.date, options.focusedValue),
        } satisfies AvRangeCalendarCellMeta;
      }),
    ),
  };
}

export function rangesEqual(
  a: AvRangeCalendarValue,
  b: AvRangeCalendarValue,
): boolean {
  if (a == null && b == null) {
    return true;
  }

  if (a == null || b == null) {
    return false;
  }

  return isSameDay(a.start, b.start) && isSameDay(a.end, b.end);
}

/** True if any exclusive interior day between start and end is unavailable. */
export function rangeSpansUnavailable(
  start: CalendarDate,
  end: CalendarDate,
  isUnavailable: (date: CalendarDate) => boolean,
): boolean {
  const normalized =
    start.compare(end) <= 0 ? { start, end } : { start: end, end: start };

  let cursor = normalized.start.add({ days: 1 });
  while (cursor.compare(normalized.end) < 0) {
    if (isUnavailable(cursor)) {
      return true;
    }

    cursor = cursor.add({ days: 1 });
  }

  return false;
}
