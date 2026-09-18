import { inject, Injectable, InjectionToken } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';

import { normalizeDateRange, AvDateRange } from './date-range';

/** Customize range click / preview behavior (Material `MAT_DATE_RANGE_SELECTION_STRATEGY`). */
export const AV_DATE_RANGE_SELECTION_STRATEGY =
  new InjectionToken<AvDateRangeSelectionStrategy>('AV_DATE_RANGE_SELECTION_STRATEGY');

export interface AvDateRangeSelectionStrategy {
  /**
   * Called when the user finishes selecting a date (click / Enter / Space).
   * `date` is null when clearing an incomplete selection (e.g. Escape).
   */
  selectionFinished(
    date: CalendarDate | null,
    currentRange: AvDateRange,
    event: Event,
  ): AvDateRange;

  /**
   * Hover / focus ghost range while the selection is incomplete.
   */
  createPreview(
    activeDate: CalendarDate | null,
    currentRange: AvDateRange,
    event: Event,
  ): AvDateRange;
}

/**
 * Default strategy: the second click completes the range
 * in either direction; start/end are normalized so start ≤ end.
 * A third click (when the range is already complete) starts a new selection.
 */
@Injectable()
export class DefaultAvCalendarRangeStrategy implements AvDateRangeSelectionStrategy {
  selectionFinished(date: CalendarDate | null, currentRange: AvDateRange): AvDateRange {
    if (date == null) {
      return AvDateRange.empty();
    }

    let { start, end } = currentRange;

    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }

    return normalizeDateRange(new AvDateRange(start, end));
  }

  createPreview(activeDate: CalendarDate | null, currentRange: AvDateRange): AvDateRange {
    if (currentRange.start && !currentRange.end && activeDate) {
      return normalizeDateRange(new AvDateRange(currentRange.start, activeDate));
    }

    return AvDateRange.empty();
  }
}

export function provideDefaultAvDateRangeSelectionStrategy() {
  return {
    provide: AV_DATE_RANGE_SELECTION_STRATEGY,
    useClass: DefaultAvCalendarRangeStrategy,
  };
}

/** Resolve strategy from DI or fall back to the default implementation. */
export function injectAvDateRangeSelectionStrategy(): AvDateRangeSelectionStrategy {
  return (
    inject(AV_DATE_RANGE_SELECTION_STRATEGY, { optional: true }) ??
    new DefaultAvCalendarRangeStrategy()
  );
}
