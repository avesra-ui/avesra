import type { CalendarDate } from '@internationalized/date';
import { isSameDay } from '@internationalized/date';

/**
 * Immutable date range used by RangeCalendar selection / preview
 * (Material `DateRange` shape — start/end may be null while selecting).
 */
export class AvDateRange {
  constructor(
    readonly start: CalendarDate | null,
    readonly end: CalendarDate | null,
  ) {}

  static empty(): AvDateRange {
    return new AvDateRange(null, null);
  }

  get isEmpty(): boolean {
    return this.start == null && this.end == null;
  }

  get isComplete(): boolean {
    return this.start != null && this.end != null;
  }

  /** True when only the start endpoint is set. */
  get isIncomplete(): boolean {
    return this.start != null && this.end == null;
  }

  equals(other: AvDateRange | null | undefined): boolean {
    if (!other) {
      return this.isEmpty;
    }

    return sameNullableDay(this.start, other.start) && sameNullableDay(this.end, other.end);
  }
}

function sameNullableDay(a: CalendarDate | null, b: CalendarDate | null): boolean {
  if (a == null && b == null) {
    return true;
  }

  if (a == null || b == null) {
    return false;
  }

  return isSameDay(a, b);
}

/** Normalize so `start <= end` for painting / inclusive checks. */
export function normalizeDateRange(range: AvDateRange): AvDateRange {
  if (!range.start || !range.end) {
    return range;
  }

  if (range.start.compare(range.end) <= 0) {
    return range;
  }

  return new AvDateRange(range.end, range.start);
}

/** Inclusive membership using absolute calendar compare (Material compareValue idea). */
export function isDateInRange(date: CalendarDate, range: AvDateRange): boolean {
  const normalized = normalizeDateRange(range);

  if (!normalized.start) {
    return false;
  }

  if (!normalized.end) {
    return isSameDay(date, normalized.start);
  }

  return date.compare(normalized.start) >= 0 && date.compare(normalized.end) <= 0;
}
