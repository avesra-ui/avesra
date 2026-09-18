import type { AvCalendarVisibleDuration } from '../calendar/calendar.types';
import { resolveVisibleMode } from '../calendar/calendar.model';

export interface AvRangeCalendarClassOptions {
  weekView?: boolean;
  dayView?: boolean;
}

export function avRangeCalendarClasses(
  options: AvRangeCalendarClassOptions | AvCalendarVisibleDuration | null | undefined = {},
): string {
  const classes = ['av-range-calendar'];

  if (options && ('months' in options || 'weeks' in options || 'days' in options)) {
    const mode = resolveVisibleMode(options as AvCalendarVisibleDuration);

    if (mode === 'week') {
      classes.push('av-range-calendar--week-view');
    }

    if (mode === 'day') {
      classes.push('av-range-calendar--day-view');
    }

    return classes.join(' ');
  }

  const opts = (options ?? {}) as AvRangeCalendarClassOptions;

  if (opts.weekView) {
    classes.push('av-range-calendar--week-view');
  }

  if (opts.dayView) {
    classes.push('av-range-calendar--day-view');
  }

  return classes.join(' ');
}

export function avRangeCalendarHeaderClasses(): string {
  return 'av-range-calendar__header';
}

export function avRangeCalendarHeadingClasses(): string {
  return 'av-range-calendar__heading';
}

export function avRangeCalendarNavButtonClasses(): string {
  return 'av-range-calendar__nav-button';
}

export function avRangeCalendarNavButtonIconClasses(): string {
  return 'av-range-calendar__nav-button-icon';
}

export function avRangeCalendarGridClasses(): string {
  return 'av-range-calendar__grid';
}

export function avRangeCalendarGridHeaderClasses(): string {
  return 'av-range-calendar__grid-header';
}

export function avRangeCalendarGridBodyClasses(): string {
  return 'av-range-calendar__grid-body';
}

export function avRangeCalendarGridRowClasses(): string {
  return 'av-range-calendar__grid-row';
}

export function avRangeCalendarHeaderCellClasses(): string {
  return 'av-range-calendar__header-cell';
}

export function avRangeCalendarCellClasses(): string {
  return 'av-range-calendar__cell';
}

export function avRangeCalendarCellButtonClasses(): string {
  return 'av-range-calendar__cell-button';
}

export function avRangeCalendarCellIndicatorClasses(): string {
  return 'av-range-calendar__cell-indicator';
}

export function avRangeCalendarYearPickerTriggerClasses(): string {
  return 'av-range-calendar-year-picker__trigger';
}

export function avRangeCalendarYearPickerTriggerHeadingClasses(): string {
  return 'av-range-calendar-year-picker__trigger-heading';
}

export function avRangeCalendarYearPickerTriggerIndicatorClasses(): string {
  return 'av-range-calendar-year-picker__trigger-indicator';
}

export function avRangeCalendarYearPickerGridClasses(): string {
  return 'av-range-calendar-year-picker__year-grid';
}

export function avRangeCalendarYearPickerCellClasses(): string {
  return 'av-range-calendar-year-picker__year-cell';
}
