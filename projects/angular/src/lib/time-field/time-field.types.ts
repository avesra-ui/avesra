import type {
  CalendarDateTime,
  Time,
  ZonedDateTime,
} from '@internationalized/date';

/** Smallest unit displayed in the time field. */
export type AvTimeFieldGranularity = 'hour' | 'minute' | 'second';

/**
 * Supported `@internationalized/date` values for TimeField
 * (`@internationalized/date` time value).
 */
export type AvTimeFieldValue = Time | CalendarDateTime | ZonedDateTime | null;

export type { Time };
