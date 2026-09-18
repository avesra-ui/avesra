import type { AvCalendarVisibleDuration } from './calendar.types';
import { resolveVisibleMode } from './calendar.model';

export interface AvCalendarClassOptions {
  weekView?: boolean;
  dayView?: boolean;
}

export function avCalendarClasses(
  options: AvCalendarClassOptions | AvCalendarVisibleDuration | null | undefined = {},
): string {
  const classes = ['av-calendar'];

  if (
    options &&
    ('months' in options || 'weeks' in options || 'days' in options)
  ) {
    const mode = resolveVisibleMode(options as AvCalendarVisibleDuration);

    if (mode === 'week') {
      classes.push('av-calendar--week-view');
    }

    if (mode === 'day') {
      classes.push('av-calendar--day-view');
    }

    return classes.join(' ');
  }

  const opts = (options ?? {}) as AvCalendarClassOptions;

  if (opts.weekView) {
    classes.push('av-calendar--week-view');
  }

  if (opts.dayView) {
    classes.push('av-calendar--day-view');
  }

  return classes.join(' ');
}

export function avCalendarHeaderClasses(): string {
  return 'av-calendar__header';
}

export function avCalendarHeadingClasses(): string {
  return 'av-calendar__heading';
}

export function avCalendarNavButtonClasses(): string {
  return 'av-calendar__nav-button';
}

export function avCalendarNavButtonIconClasses(): string {
  return 'av-calendar__nav-button-icon';
}

export function avCalendarGridClasses(): string {
  return 'av-calendar__grid';
}

export function avCalendarGridHeaderClasses(): string {
  return 'av-calendar__grid-header';
}

export function avCalendarGridBodyClasses(): string {
  return 'av-calendar__grid-body';
}

export function avCalendarGridRowClasses(): string {
  return 'av-calendar__grid-row';
}

export function avCalendarHeaderCellClasses(): string {
  return 'av-calendar__header-cell';
}

export function avCalendarCellClasses(): string {
  return 'av-calendar__cell';
}

export function avCalendarCellIndicatorClasses(): string {
  return 'av-calendar__cell-indicator';
}

export function avCalendarYearPickerTriggerClasses(): string {
  return 'av-calendar-year-picker__trigger';
}

export function avCalendarYearPickerTriggerHeadingClasses(): string {
  return 'av-calendar-year-picker__trigger-heading';
}

export function avCalendarYearPickerTriggerIndicatorClasses(): string {
  return 'av-calendar-year-picker__trigger-indicator';
}

export function avCalendarYearPickerGridClasses(): string {
  return 'av-calendar-year-picker__year-grid';
}

export function avCalendarYearPickerCellClasses(): string {
  return 'av-calendar-year-picker__year-cell';
}
