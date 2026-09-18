import type { CalendarDate } from '@internationalized/date';

import type {
  AvCalendarDateOffset,
  AvCalendarFirstDayOfWeek,
  AvCalendarVisibleDuration,
  AvCalendarWeekdayStyle,
} from '../calendar/calendar.types';

/** Committed range value. Incomplete selection is internal only. */
export type AvRangeCalendarValue = {
  start: CalendarDate;
  end: CalendarDate;
} | null;

export type AvRangeCalendarIsDateUnavailable = (
  date: CalendarDate,
  anchorDate: CalendarDate | null,
) => boolean;

export interface AvRangeCalendarCellMeta {
  date: CalendarDate;
  day: number;
  formattedDate: string;
  today: boolean;
  /** Inclusive in highlighted / committed / preview range. */
  selected: boolean;
  selectionStart: boolean;
  selectionEnd: boolean;
  outsideMonth: boolean;
  unavailable: boolean;
  disabled: boolean;
  focused: boolean;
}

export interface AvRangeCalendarMonthGrid {
  weeks: (AvRangeCalendarCellMeta | null)[][];
  visibleStart: CalendarDate;
  visibleEnd: CalendarDate;
}

export type {
  AvCalendarDateOffset as AvRangeCalendarDateOffset,
  AvCalendarFirstDayOfWeek as AvRangeCalendarFirstDayOfWeek,
  AvCalendarVisibleDuration as AvRangeCalendarVisibleDuration,
  AvCalendarWeekdayStyle as AvRangeCalendarWeekdayStyle,
};
