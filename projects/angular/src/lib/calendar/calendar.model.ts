import {
  CalendarDate,
  type DateValue,
  endOfMonth,
  getDayOfWeek,
  getLocalTimeZone,
  isSameDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  today,
} from '@internationalized/date';

import type {
  AvCalendarCellMeta,
  AvCalendarDateOffset,
  AvCalendarFirstDayOfWeek,
  AvCalendarModelOptions,
  AvCalendarMonthGrid,
  AvCalendarVisibleDuration,
  AvCalendarWeekdayStyle,
  AvCalendarYearOption,
} from './calendar.types';

const WEEKDAY_INDEX: Record<AvCalendarFirstDayOfWeek, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

export function toCalendarDate(value: DateValue): CalendarDate {
  return new CalendarDate(value.calendar, value.era, value.year, value.month, value.day);
}

export function applyDateOffset(
  date: CalendarDate,
  offset: AvCalendarDateOffset | null | undefined,
): CalendarDate {
  if (!offset) {
    return date;
  }

  return date.add(offset) as CalendarDate;
}

export function resolveVisibleMode(
  duration: AvCalendarVisibleDuration | null | undefined,
): 'month' | 'week' | 'day' {
  if (!duration) {
    return 'month';
  }

  if ('weeks' in duration && duration.weeks != null) {
    return 'week';
  }

  if ('days' in duration && duration.days != null) {
    return 'day';
  }

  return 'month';
}

export function getVisibleMonthCount(
  duration: AvCalendarVisibleDuration | null | undefined,
): number {
  if (duration && 'months' in duration && duration.months != null) {
    return Math.max(1, duration.months);
  }

  return 1;
}

export function createMonthGrid(
  anchor: CalendarDate,
  options: AvCalendarModelOptions,
  offset?: AvCalendarDateOffset | null,
): AvCalendarMonthGrid {
  const visibleMonth = startOfMonth(applyDateOffset(anchor, offset)) as CalendarDate;
  const monthStart = visibleMonth;
  const monthEnd = endOfMonth(visibleMonth) as CalendarDate;
  const weekStartIndex = WEEKDAY_INDEX[options.firstDayOfWeek];
  const leadingDays = (getDayOfWeek(monthStart, options.locale) - weekStartIndex + 7) % 7;
  const gridStart = monthStart.subtract({ days: leadingDays }) as CalendarDate;
  const fixedWeeks = options.weeksInMonth;
  const maxWeeks = fixedWeeks ?? 6;

  const weeks: (AvCalendarCellMeta | null)[][] = [];
  let cursor = gridStart;

  for (let week = 0; week < maxWeeks; week++) {
    const row: (AvCalendarCellMeta | null)[] = [];

    for (let day = 0; day < 7; day++) {
      row.push(createCellMeta(cursor, visibleMonth, options));
      cursor = cursor.add({ days: 1 }) as CalendarDate;
    }

    weeks.push(row);

    if (fixedWeeks == null && week >= 4 && cursor.compare(monthEnd) > 0) {
      break;
    }
  }

  return {
    weeks,
    visibleStart: monthStart,
    visibleEnd: monthEnd,
  };
}

export function createWeekGrid(
  anchor: CalendarDate,
  weekCount: number,
  options: AvCalendarModelOptions,
): AvCalendarMonthGrid {
  const count = Math.max(1, weekCount);
  const weekStart = startOfWeek(anchor, options.locale, options.firstDayOfWeek) as CalendarDate;
  const weeks: (AvCalendarCellMeta | null)[][] = [];
  let cursor = weekStart;

  for (let week = 0; week < count; week++) {
    const row: (AvCalendarCellMeta | null)[] = [];

    for (let day = 0; day < 7; day++) {
      row.push(createCellMeta(cursor, startOfMonth(anchor) as CalendarDate, options, false));
      cursor = cursor.add({ days: 1 }) as CalendarDate;
    }

    weeks.push(row);
  }

  const visibleEnd = weekStart.add({ weeks: count, days: -1 }) as CalendarDate;

  return {
    weeks,
    visibleStart: weekStart,
    visibleEnd,
  };
}

export function createDayGrid(
  anchor: CalendarDate,
  dayCount: number,
  options: AvCalendarModelOptions,
): AvCalendarMonthGrid {
  const count = Math.max(1, dayCount);
  const start = anchor;
  const end = start.add({ days: count - 1 }) as CalendarDate;

  if (count < 7) {
    const row: (AvCalendarCellMeta | null)[] = [];

    for (let index = 0; index < count; index++) {
      const date = start.add({ days: index }) as CalendarDate;
      row.push(createCellMeta(date, startOfMonth(date) as CalendarDate, options, false));
    }

    while (row.length < 7) {
      row.push(null);
    }

    return {
      weeks: [row],
      visibleStart: start,
      visibleEnd: end,
    };
  }

  const weeks = getDayViewGridRows(start, end, options.locale, options.firstDayOfWeek).map((row) =>
    row.map((date) =>
      date
        ? createCellMeta(toCalendarDate(date), startOfMonth(toCalendarDate(date)) as CalendarDate, options, false)
        : null,
    ),
  );

  return {
    weeks,
    visibleStart: start,
    visibleEnd: end,
  };
}

/**
 * Keep day/week/month windows stable when focusing/selecting inside them.
 * Only shifts the anchor when `date` falls outside the current visible span
 * Focus moves freely; the visible range moves on navigation or out-of-view focus.
 */
export function alignVisibleAnchor(
  date: CalendarDate,
  visibleAnchor: CalendarDate,
  duration: AvCalendarVisibleDuration | null | undefined,
  options: {
    locale: string;
    firstDayOfWeek: AvCalendarFirstDayOfWeek;
  },
): CalendarDate {
  const mode = resolveVisibleMode(duration);

  if (mode === 'day' && duration && 'days' in duration && duration.days != null) {
    const count = Math.max(1, duration.days);
    const start = visibleAnchor;
    const end = start.add({ days: count - 1 }) as CalendarDate;

    if (date.compare(start) < 0) {
      return date;
    }

    if (date.compare(end) > 0) {
      return date.subtract({ days: count - 1 }) as CalendarDate;
    }

    return visibleAnchor;
  }

  if (mode === 'week' && duration && 'weeks' in duration && duration.weeks != null) {
    const count = Math.max(1, duration.weeks);
    const weekStart = startOfWeek(
      visibleAnchor,
      options.locale,
      options.firstDayOfWeek,
    ) as CalendarDate;
    const visibleEnd = weekStart.add({ weeks: count, days: -1 }) as CalendarDate;

    if (date.compare(weekStart) < 0) {
      return startOfWeek(date, options.locale, options.firstDayOfWeek) as CalendarDate;
    }

    if (date.compare(visibleEnd) > 0) {
      const dateWeekStart = startOfWeek(
        date,
        options.locale,
        options.firstDayOfWeek,
      ) as CalendarDate;
      return dateWeekStart.subtract({ weeks: count - 1 }) as CalendarDate;
    }

    return visibleAnchor;
  }

  // Month mode (including multi-month visibleDuration.months)
  const monthCount =
    duration && 'months' in duration && duration.months != null
      ? Math.max(1, duration.months)
      : 1;
  const monthStart = startOfMonth(visibleAnchor) as CalendarDate;
  const monthEnd = endOfMonth(monthStart.add({ months: monthCount - 1 })) as CalendarDate;

  if (date.compare(monthStart) < 0) {
    return startOfMonth(date) as CalendarDate;
  }

  if (date.compare(monthEnd) > 0) {
    return startOfMonth(date.subtract({ months: monthCount - 1 })) as CalendarDate;
  }

  return monthStart;
}

/**
 * Build the visible grid.
 * `anchor` is the window start (month/week/day); focused date may differ within the window.
 */
export function buildVisibleGrid(
  anchor: CalendarDate,
  duration: AvCalendarVisibleDuration | null | undefined,
  options: AvCalendarModelOptions,
  offset?: AvCalendarDateOffset | null,
): AvCalendarMonthGrid {
  const mode = resolveVisibleMode(duration);

  if (mode === 'week' && duration && 'weeks' in duration && duration.weeks != null) {
    return createWeekGrid(applyDateOffset(anchor, offset), duration.weeks, options);
  }

  if (mode === 'day' && duration && 'days' in duration && duration.days != null) {
    return createDayGrid(applyDateOffset(anchor, offset), duration.days, options);
  }

  return createMonthGrid(anchor, options, offset);
}

export function getWeekDayLabels(
  locale: string,
  firstDayOfWeek: AvCalendarFirstDayOfWeek,
  weekdayStyle: AvCalendarWeekdayStyle = 'short',
  timeZone = getLocalTimeZone(),
): string[] {
  const weekStart = WEEKDAY_INDEX[firstDayOfWeek];
  const formatter = new Intl.DateTimeFormat(locale, { weekday: weekdayStyle, timeZone });
  const labels: string[] = [];

  for (let index = 0; index < 7; index++) {
    const day = (weekStart + index) % 7;
    const date = new Date(Date.UTC(2024, 0, 7 + day));
    labels.push(formatter.format(date));
  }

  return labels;
}

export function getDayViewWeekDayLabels(
  start: CalendarDate,
  locale: string,
  firstDayOfWeek: AvCalendarFirstDayOfWeek,
  weekdayStyle: AvCalendarWeekdayStyle = 'short',
  timeZone = getLocalTimeZone(),
): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: weekdayStyle, timeZone });
  const weekStart = startOfWeek(start, locale, firstDayOfWeek) as CalendarDate;
  const labels: string[] = [];
  let date = weekStart;

  for (let index = 0; index < 7; index++) {
    labels.push(formatter.format(date.toDate(timeZone)));
    const next = date.add({ days: 1 }) as CalendarDate;

    if (isSameDay(date, next)) {
      break;
    }

    date = next;
  }

  while (labels.length < 7) {
    labels.push('');
  }

  return labels;
}

function getDayViewGridRows(
  start: CalendarDate,
  end: CalendarDate,
  locale: string,
  firstDayOfWeek: AvCalendarFirstDayOfWeek,
): (CalendarDate | null)[][] {
  const rows: (CalendarDate | null)[][] = [];
  let rowStart = startOfWeek(start, locale, firstDayOfWeek) as CalendarDate;

  rows.push(buildDayViewWeekRow(rowStart, end));
  rowStart = rowStart.add({ weeks: 1 }) as CalendarDate;

  while (rowStart.compare(end) <= 0) {
    rows.push(buildDayViewWeekRow(rowStart, end));
    const nextWeek = rowStart.add({ weeks: 1 }) as CalendarDate;

    if (isSameDay(rowStart, nextWeek)) {
      break;
    }

    rowStart = nextWeek;
  }

  return rows;
}

function buildDayViewWeekRow(
  rowStart: CalendarDate,
  end: CalendarDate,
): (CalendarDate | null)[] {
  const row: (CalendarDate | null)[] = [];
  let date = rowStart;

  for (let index = 0; index < 7; index++) {
    row.push(date.compare(end) > 0 ? null : date);
    const next = date.add({ days: 1 }) as CalendarDate;

    if (isSameDay(date, next)) {
      while (row.length < 7) {
        row.push(null);
      }

      return row;
    }

    date = next;
  }

  return row;
}

export function resolveLocaleWithCalendar(locale: string, date: CalendarDate): string {
  try {
    const parsed = new Intl.Locale(locale);
    if (parsed.calendar) {
      return locale;
    }
  } catch {
    // Invalid locale — still try appending calendar when needed.
  }

  const identifier = date.calendar?.identifier;
  if (!identifier || identifier === 'gregory') {
    return locale;
  }

  // Locale plus Unicode calendar extension (e.g. hi-IN-u-ca-indian).
  return `${locale}-u-ca-${identifier}`;
}

export function formatMonthYear(
  date: CalendarDate,
  locale: string,
  timeZone = getLocalTimeZone(),
): string {
  return new Intl.DateTimeFormat(resolveLocaleWithCalendar(locale, date), {
    month: 'long',
    year: 'numeric',
    timeZone,
  }).format(date.toDate(timeZone));
}

export function formatYear(
  date: CalendarDate,
  locale: string,
  timeZone = getLocalTimeZone(),
): string {
  return new Intl.DateTimeFormat(resolveLocaleWithCalendar(locale, date), {
    year: 'numeric',
    timeZone,
  }).format(date.toDate(timeZone));
}

export function formatCellAriaLabel(
  date: CalendarDate,
  locale: string,
  timeZone = getLocalTimeZone(),
): string {
  return new Intl.DateTimeFormat(resolveLocaleWithCalendar(locale, date), {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone,
  }).format(date.toDate(timeZone));
}

export function formatDayNumber(
  date: CalendarDate,
  locale: string,
): string {
  return new Intl.NumberFormat(locale, { useGrouping: false }).format(date.day);
}

export function getYearRange(
  minValue: DateValue | null,
  maxValue: DateValue | null,
  focused: CalendarDate,
): AvCalendarYearOption[] {
  const minYear = minValue?.year ?? focused.year - 100;
  const maxYear = maxValue?.year ?? focused.year + 100;
  const years: AvCalendarYearOption[] = [];

  for (let year = minYear; year <= maxYear; year++) {
    const date = startOfYear(
      new CalendarDate(focused.calendar, focused.era, year, 1, 1),
    ) as CalendarDate;

    years.push({
      year,
      date,
      selected: year === focused.year,
      disabled: false,
    });
  }

  return years;
}

export function clampDate(
  date: CalendarDate,
  minValue: DateValue | null,
  maxValue: DateValue | null,
): CalendarDate {
  let next = date;

  if (minValue && next.compare(minValue) < 0) {
    next = toCalendarDate(minValue);
  }

  if (maxValue && next.compare(maxValue) > 0) {
    next = toCalendarDate(maxValue);
  }

  return next;
}

export function isDateUnavailableOrOutOfBounds(
  date: CalendarDate,
  options: Pick<AvCalendarModelOptions, 'minValue' | 'maxValue' | 'isDateUnavailable'>,
): boolean {
  if (options.minValue && date.compare(options.minValue) < 0) {
    return true;
  }

  if (options.maxValue && date.compare(options.maxValue) > 0) {
    return true;
  }

  return options.isDateUnavailable?.(date) ?? false;
}

export function isDateSelected(
  date: CalendarDate,
  value: AvCalendarModelOptions['selectedValue'],
  mode: AvCalendarModelOptions['selectionMode'],
): boolean {
  if (value == null) {
    return false;
  }

  if (mode === 'multiple' && Array.isArray(value)) {
    return value.some((item) => isSameDay(item, date));
  }

  if (!Array.isArray(value)) {
    return isSameDay(value, date);
  }

  return false;
}

export function defaultFocusedValue(
  value: AvCalendarModelOptions['selectedValue'],
  timeZone = getLocalTimeZone(),
): CalendarDate {
  if (Array.isArray(value) && value.length > 0) {
    return value[0];
  }

  if (value && !Array.isArray(value)) {
    return value;
  }

  return today(timeZone) as CalendarDate;
}

function createCellMeta(
  date: CalendarDate,
  visibleMonth: CalendarDate,
  options: AvCalendarModelOptions,
  trackOutsideMonth = true,
): AvCalendarCellMeta {
  const todayDate = today(options.timeZone) as CalendarDate;
  const unavailable = isDateUnavailableOrOutOfBounds(date, options);
  const outsideMonth =
    trackOutsideMonth &&
    (date.month !== visibleMonth.month || date.year !== visibleMonth.year);

  return {
    date,
    day: date.day,
    formattedDate: formatDayNumber(date, options.locale),
    today: isSameDay(date, todayDate),
    selected: isDateSelected(date, options.selectedValue, options.selectionMode),
    outsideMonth,
    unavailable,
    disabled: unavailable,
    focused: isSameDay(date, options.focusedValue),
  };
}
