import { Injectable, signal, type WritableSignal } from '@angular/core';
import { CalendarDate, getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import type {
  AvCalendarDateOffset,
  AvCalendarFirstDayOfWeek,
  AvCalendarVisibleDuration,
  AvCalendarWeekdayStyle,
} from '../calendar/calendar.types';
import { AvDateRange } from './date-range';
import type {
  AvRangeCalendarIsDateUnavailable,
  AvRangeCalendarValue,
} from './range-calendar.types';

/**
 * Shared state for compound range-calendar parts.
 * Root owns mutations; parts read signals and call methods.
 */
@Injectable()
export class AvRangeCalendarContext {
  readonly value: WritableSignal<AvRangeCalendarValue> = signal(null);
  /** Working selection (may be incomplete). */
  readonly workingRange: WritableSignal<AvDateRange> = signal(AvDateRange.empty());
  /** Hover/focus preview while incomplete. */
  readonly previewRange: WritableSignal<AvDateRange> = signal(AvDateRange.empty());
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
  readonly isDateUnavailable: WritableSignal<AvRangeCalendarIsDateUnavailable | null> =
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

  selectDate: (date: CalendarDate, event?: Event) => void = () => {};
  previewDate: (date: CalendarDate | null, event?: Event) => void = () => {};
  clearIncompleteSelection: (event?: Event) => void = () => {};
  setFocusedValue: (date: CalendarDate) => void = () => {};
  navigatePrevious: () => void = () => {};
  navigateNext: () => void = () => {};
  setYearPickerOpen: (open: boolean) => void = () => {};
  toggleYearPicker: () => void = () => {};
  selectYear: (year: number) => void = () => {};
  onGridKeydown: (event: KeyboardEvent) => void = () => {};
  getHeadingLabel: (offset?: AvCalendarDateOffset | null) => string = () => '';
  isUnavailable: (date: CalendarDate) => boolean = () => false;

  /** Range used for cell highlighting (preview > working > committed). */
  highlightRange(): AvDateRange {
    const preview = this.previewRange();
    if (!preview.isEmpty) {
      return preview;
    }

    const working = this.workingRange();
    if (!working.isEmpty) {
      return working;
    }

    const value = this.value();
    return value ? new AvDateRange(value.start, value.end) : AvDateRange.empty();
  }

  anchorDate(): CalendarDate | null {
    const working = this.workingRange();
    return working.isIncomplete ? working.start : null;
  }
}
