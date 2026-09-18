import type {
  CalendarDate,
  CalendarDateTime,
  DateValue,
  ZonedDateTime,
} from '@internationalized/date';

/** Smallest unit displayed in the field. */
export type AvDateFieldGranularity = 'day' | 'hour' | 'minute' | 'second';

/** Supported `@internationalized/date` values for DateField. */
export type AvDateFieldValue = CalendarDate | CalendarDateTime | ZonedDateTime | null;

export type AvDateSegmentType =
  | 'era'
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'dayPeriod'
  | 'literal'
  | 'timeZoneName';

/** Editable / display segment used by the input. */
export interface AvDateSegment {
  id: string;
  type: AvDateSegmentType;
  /** Display text (formatted or placeholder). */
  text: string;
  /** Numeric value when known; null when showing placeholder. */
  value: number | null;
  placeholder: string;
  isPlaceholder: boolean;
  isEditable: boolean;
  minValue: number;
  maxValue: number;
  maxLength: number;
}

export type { DateValue };
