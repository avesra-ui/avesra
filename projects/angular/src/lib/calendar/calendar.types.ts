import type { CalendarDate, DateValue } from '@internationalized/date';

export type AvCalendarSelectionMode = 'single' | 'multiple';

export type AvCalendarFirstDayOfWeek =
  | 'sun'
  | 'mon'
  | 'tue'
  | 'wed'
  | 'thu'
  | 'fri'
  | 'sat';

export type AvCalendarWeekdayStyle = 'narrow' | 'short' | 'long';

export type AvCalendarPageBehavior = 'visible' | 'single';

export type AvCalendarValue = CalendarDate | CalendarDate[] | null;

export type AvCalendarVisibleDuration =
  | { months: number; weeks?: never; days?: never }
  | { weeks: number; months?: never; days?: never }
  | { days: number; months?: never; weeks?: never };

export type AvCalendarDateOffset = {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
};

export interface AvCalendarCellMeta {
  date: CalendarDate;
  day: number;
  formattedDate: string;
  today: boolean;
  selected: boolean;
  outsideMonth: boolean;
  unavailable: boolean;
  disabled: boolean;
  focused: boolean;
}

export interface AvCalendarMonthGrid {
  weeks: (AvCalendarCellMeta | null)[][];
  visibleStart: CalendarDate;
  visibleEnd: CalendarDate;
}

export interface AvCalendarYearOption {
  year: number;
  date: CalendarDate;
  selected: boolean;
  disabled: boolean;
}

export interface AvCalendarModelOptions {
  locale: string;
  firstDayOfWeek: AvCalendarFirstDayOfWeek;
  timeZone: string;
  minValue: DateValue | null;
  maxValue: DateValue | null;
  isDateUnavailable: ((date: CalendarDate) => boolean) | null;
  selectionMode: AvCalendarSelectionMode;
  selectedValue: AvCalendarValue;
  focusedValue: CalendarDate;
  weeksInMonth?: number;
  weekdayStyle?: AvCalendarWeekdayStyle;
}
