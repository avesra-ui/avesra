import { Injectable, signal, type WritableSignal } from '@angular/core';
import { CalendarDate, getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import type {
  AvCalendarDateOffset,
  AvCalendarFirstDayOfWeek,
  AvCalendarSelectionMode,
  AvCalendarValue,
  AvCalendarVisibleDuration,
  AvCalendarWeekdayStyle,
} from './calendar.types';

/**
 * Shared state for compound calendar parts (Material shell + Avesra context pattern).
 * The root component owns mutations; parts read signals and call methods.
 */
@Injectable()
export class AvCalendarContext {
  readonly selectionMode: WritableSignal<AvCalendarSelectionMode> = signal('single');
  readonly value: WritableSignal<AvCalendarValue> = signal(null);
  readonly focusedValue: WritableSignal<CalendarDate> = signal(
    today(getLocalTimeZone()) as CalendarDate,
  );
  /**
   * Start of the day/week visible window. Independent of focusedValue so
   * selecting a date inside the window does not re-anchor (page jump).
   */
  readonly visibleAnchor: WritableSignal<CalendarDate> = signal(
    today(getLocalTimeZone()) as CalendarDate,
  );
  readonly minValue: WritableSignal<DateValue | null> = signal(null);
  readonly maxValue: WritableSignal<DateValue | null> = signal(null);
  readonly isDateUnavailable: WritableSignal<((date: CalendarDate) => boolean) | null> =
    signal(null);
  readonly disabled: WritableSignal<boolean> = signal(false);
  readonly readonly: WritableSignal<boolean> = signal(false);
  readonly locale: WritableSignal<string> = signal('en-US');
  readonly firstDayOfWeek: WritableSignal<AvCalendarFirstDayOfWeek> = signal('sun');
  readonly weekdayStyle: WritableSignal<AvCalendarWeekdayStyle> = signal('short');
  readonly visibleDuration: WritableSignal<AvCalendarVisibleDuration | null> = signal(null);
  readonly pageBehavior: WritableSignal<'visible' | 'single'> = signal('visible');
  readonly weeksInMonth: WritableSignal<number | undefined> = signal(undefined);
  readonly yearPickerOpen: WritableSignal<boolean> = signal(false);
  readonly timeZone: WritableSignal<string> = signal('UTC');
  readonly ariaLabel: WritableSignal<string | undefined> = signal(undefined);

  selectDate: (date: CalendarDate) => void = () => {};
  setFocusedValue: (date: CalendarDate) => void = () => {};
  navigatePrevious: () => void = () => {};
  navigateNext: () => void = () => {};
  setYearPickerOpen: (open: boolean) => void = () => {};
  toggleYearPicker: () => void = () => {};
  selectYear: (year: number) => void = () => {};
  onGridKeydown: (event: KeyboardEvent) => void = () => {};
  getHeadingLabel: (offset?: AvCalendarDateOffset | null) => string = () => '';
  isSelected: (date: CalendarDate) => boolean = () => false;
  isUnavailable: (date: CalendarDate) => boolean = () => false;
}
