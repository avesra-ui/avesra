import { CalendarDate, startOfMonth, startOfWeek } from '@internationalized/date';

import type { AvCalendarFirstDayOfWeek, AvCalendarVisibleDuration } from './calendar.types';
import { resolveVisibleMode } from './calendar.model';

const WEEK_START_INDEX: Record<AvCalendarFirstDayOfWeek, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

export function isSelectionKey(key: string): boolean {
  return key === 'Enter' || key === ' ';
}

export function isDismissKey(key: string): boolean {
  return key === 'Escape';
}

export function moveFocusedDate(
  current: CalendarDate,
  key: string,
  firstDayOfWeek: AvCalendarFirstDayOfWeek,
  locale: string,
  duration?: AvCalendarVisibleDuration | null,
  altKey = false,
  pageBehavior: 'visible' | 'single' = 'visible',
): CalendarDate | null {
  const step = getNavigationStep(duration, pageBehavior);

  switch (key) {
    case 'ArrowLeft':
      return current.subtract({ days: 1 }) as CalendarDate;
    case 'ArrowRight':
      return current.add({ days: 1 }) as CalendarDate;
    case 'ArrowUp':
      return current.subtract({ weeks: 1 }) as CalendarDate;
    case 'ArrowDown':
      return current.add({ weeks: 1 }) as CalendarDate;
    case 'Home':
      return getWeekStart(current, firstDayOfWeek, locale);
    case 'End':
      return getWeekEnd(current, firstDayOfWeek, locale);
    case 'PageUp':
      if (altKey) {
        return current.subtract({ years: 1 }) as CalendarDate;
      }

      return current.subtract(step) as CalendarDate;
    case 'PageDown':
      if (altKey) {
        return current.add({ years: 1 }) as CalendarDate;
      }

      return current.add(step) as CalendarDate;
    default:
      return null;
  }
}

export function moveFocusedYear(currentYear: number, key: string): number | null {
  switch (key) {
    case 'ArrowLeft':
      return currentYear - 1;
    case 'ArrowRight':
      return currentYear + 1;
    case 'ArrowUp':
      return currentYear - 3;
    case 'ArrowDown':
      return currentYear + 3;
    case 'Home':
      return currentYear - (currentYear % 3);
    case 'End':
      return currentYear - (currentYear % 3) + 2;
    case 'PageUp':
      return currentYear - 12;
    case 'PageDown':
      return currentYear + 12;
    default:
      return null;
  }
}

export function getNavigationStep(
  duration: AvCalendarVisibleDuration | null | undefined,
  pageBehavior: 'visible' | 'single' = 'visible',
): { months?: number; weeks?: number; days?: number } {
  const mode = resolveVisibleMode(duration);

  if (pageBehavior === 'single') {
    if (mode === 'week') {
      return { weeks: 1 };
    }

    if (mode === 'day') {
      return { days: 1 };
    }

    return { months: 1 };
  }

  if (mode === 'week' && duration && 'weeks' in duration && duration.weeks != null) {
    return { weeks: duration.weeks };
  }

  if (mode === 'day' && duration && 'days' in duration && duration.days != null) {
    return { days: duration.days };
  }

  const months =
    duration && 'months' in duration && duration.months != null ? duration.months : 1;

  return { months };
}

export function getPeriodStart(
  focused: CalendarDate,
  firstDayOfWeek: AvCalendarFirstDayOfWeek,
  locale: string,
  duration?: AvCalendarVisibleDuration | null,
): CalendarDate {
  const mode = resolveVisibleMode(duration);

  if (mode === 'week' || mode === 'day') {
    return startOfWeek(focused, locale, firstDayOfWeek) as CalendarDate;
  }

  return startOfMonth(focused) as CalendarDate;
}

function getWeekStart(
  date: CalendarDate,
  firstDayOfWeek: AvCalendarFirstDayOfWeek,
  locale: string,
): CalendarDate {
  return startOfWeek(date, locale, firstDayOfWeek) as CalendarDate;
}

function getWeekEnd(
  date: CalendarDate,
  firstDayOfWeek: AvCalendarFirstDayOfWeek,
  locale: string,
): CalendarDate {
  const start = getWeekStart(date, firstDayOfWeek, locale);
  return start.add({ days: 6 }) as CalendarDate;
}

export function weekStartIndex(firstDayOfWeek: AvCalendarFirstDayOfWeek): number {
  return WEEK_START_INDEX[firstDayOfWeek];
}
