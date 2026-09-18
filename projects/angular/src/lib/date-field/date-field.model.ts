import {
  CalendarDate,
  CalendarDateTime,
  getLocalTimeZone,
  toCalendarDate,
  toCalendarDateTime,
  today,
  type DateValue,
  type ZonedDateTime,
} from '@internationalized/date';

import type { AvDateFieldFormats } from './date-field.formats';
import type {
  AvDateFieldGranularity,
  AvDateFieldValue,
  AvDateSegment,
  AvDateSegmentType,
} from './date-field.types';

const EDITABLE_TYPES: ReadonlySet<AvDateSegmentType> = new Set([
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'dayPeriod',
]);

function pad(value: number, length: number, force: boolean): string {
  const text = String(value);
  return force ? text.padStart(length, '0') : text;
}

function limitsFor(
  type: AvDateSegmentType,
  year: number | null,
  month: number | null,
): { min: number; max: number; maxLength: number } {
  switch (type) {
    case 'year':
      return { min: 1, max: 9999, maxLength: 4 };
    case 'month':
      return { min: 1, max: 12, maxLength: 2 };
    case 'day': {
      const y = year ?? 2000;
      const m = month ?? 1;
      const max = new CalendarDate(y, m, 1).calendar.getDaysInMonth(new CalendarDate(y, m, 1));
      return { min: 1, max, maxLength: 2 };
    }
    case 'hour':
      return { min: 0, max: 23, maxLength: 2 };
    case 'minute':
    case 'second':
      return { min: 0, max: 59, maxLength: 2 };
    case 'dayPeriod':
      return { min: 0, max: 1, maxLength: 2 };
    default:
      return { min: 0, max: 0, maxLength: 0 };
  }
}

function toNativeDate(value: DateValue): Date {
  if ('timeZone' in value) {
    return value.toDate();
  }
  if ('hour' in value) {
    return value.toDate(getLocalTimeZone());
  }
  return value.toDate(getLocalTimeZone());
}

function resolvePlaceholderDate(
  value: AvDateFieldValue,
  placeholderValue: DateValue | null,
): DateValue {
  if (value) {
    return value;
  }
  if (placeholderValue) {
    return placeholderValue;
  }
  return today(getLocalTimeZone());
}

function formatOptionsFor(
  granularity: AvDateFieldGranularity,
  hourCycle: 12 | 24 | undefined,
  value: DateValue,
  hideTimeZone = false,
): Intl.DateTimeFormatOptions {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  // Granularity is the source of truth for visible units.
  const needsTime =
    granularity === 'hour' || granularity === 'minute' || granularity === 'second';

  if (needsTime) {
    options.hour = 'numeric';
    if (hourCycle === 12) {
      options.hour12 = true;
    } else if (hourCycle === 24) {
      options.hour12 = false;
    }
  }

  if (granularity === 'minute' || granularity === 'second') {
    options.minute = '2-digit';
  }

  if (granularity === 'second') {
    options.second = '2-digit';
  }

  if ('timeZone' in value) {
    options.timeZone = (value as ZonedDateTime).timeZone;
    if (!hideTimeZone) {
      options.timeZoneName = 'short';
    }
  }

  return options;
}

function partType(part: Intl.DateTimeFormatPartTypes): AvDateSegmentType | null {
  switch (part) {
    case 'era':
      return 'era';
    case 'year':
      return 'year';
    case 'month':
      return 'month';
    case 'day':
      return 'day';
    case 'hour':
      return 'hour';
    case 'minute':
      return 'minute';
    case 'second':
      return 'second';
    case 'dayPeriod':
      return 'dayPeriod';
    case 'literal':
      return 'literal';
    case 'timeZoneName':
      return 'timeZoneName';
    default:
      return null;
  }
}

function readPartValue(
  type: AvDateSegmentType,
  value: AvDateFieldValue,
  display: DateValue,
): number | null {
  if (!value) {
    return null;
  }

  const date = value;
  switch (type) {
    case 'year':
      return date.year;
    case 'month':
      return date.month;
    case 'day':
      return date.day;
    case 'hour':
      return 'hour' in date ? date.hour : null;
    case 'minute':
      return 'minute' in date ? date.minute : null;
    case 'second':
      return 'second' in date ? date.second : null;
    case 'dayPeriod':
      return 'hour' in date ? (date.hour >= 12 ? 1 : 0) : null;
    default:
      return null;
  }
}

function displayText(
  type: AvDateSegmentType,
  numeric: number | null,
  formats: AvDateFieldFormats,
  intlPart: string,
  amLabel: string,
  pmLabel: string,
): { text: string; isPlaceholder: boolean } {
  if (numeric === null) {
    const placeholder =
      type === 'year'
        ? formats.placeholders.year
        : type === 'month'
          ? formats.placeholders.month
          : type === 'day'
            ? formats.placeholders.day
            : type === 'hour'
              ? formats.placeholders.hour
              : type === 'minute'
                ? formats.placeholders.minute
                : type === 'second'
                  ? formats.placeholders.second
                  : type === 'dayPeriod'
                    ? formats.placeholders.dayPeriod
                    : intlPart;
    return { text: placeholder, isPlaceholder: true };
  }

  if (type === 'dayPeriod') {
    return { text: numeric === 1 ? pmLabel : amLabel, isPlaceholder: false };
  }

  if (type === 'year') {
    return { text: pad(numeric, 4, formats.forceLeadingZeros), isPlaceholder: false };
  }

  if (type === 'month' || type === 'day' || type === 'hour' || type === 'minute' || type === 'second') {
    return {
      text: pad(numeric, 2, formats.forceLeadingZeros),
      isPlaceholder: false,
    };
  }

  return { text: intlPart, isPlaceholder: false };
}

/** Build locale-ordered segments for the current value (Material view-model separation). */
export function buildDateFieldSegments(options: {
  locale: string;
  value: AvDateFieldValue;
  placeholderValue: DateValue | null;
  granularity: AvDateFieldGranularity;
  hourCycle?: 12 | 24;
  formats: AvDateFieldFormats;
  amLabel: string;
  pmLabel: string;
  /** When true, omit time-zone name segments for ZonedDateTime values. */
  hideTimeZone?: boolean;
}): AvDateSegment[] {
  const display = resolvePlaceholderDate(options.value, options.placeholderValue);
  const formatter = new Intl.DateTimeFormat(
    options.locale,
    formatOptionsFor(
      options.granularity,
      options.hourCycle,
      display,
      options.hideTimeZone ?? false,
    ),
  );
  const parts = formatter.formatToParts(toNativeDate(display));
  const year = options.value?.year ?? null;
  const month = options.value?.month ?? null;

  return parts
    .map((part, index) => {
      const type = partType(part.type);
      if (!type) {
        return null;
      }

      if (options.hideTimeZone && type === 'timeZoneName') {
        return null;
      }

      const editable = EDITABLE_TYPES.has(type);
      const numeric = editable ? readPartValue(type, options.value, display) : null;
      const { min, max, maxLength } = limitsFor(type, year, month);
      const { text, isPlaceholder } = displayText(
        type,
        numeric,
        options.formats,
        part.value,
        options.amLabel,
        options.pmLabel,
      );

      return {
        id: `${type}-${index}`,
        type,
        text: type === 'literal' || type === 'timeZoneName' || type === 'era' ? part.value : text,
        value: numeric,
        placeholder: text,
        isPlaceholder: editable ? isPlaceholder : false,
        isEditable: editable,
        minValue: min,
        maxValue: max,
        maxLength,
      } satisfies AvDateSegment;
    })
    .filter((segment): segment is AvDateSegment => segment !== null);
}

export function isDateFieldComplete(
  segments: readonly AvDateSegment[],
  granularity: AvDateFieldGranularity,
): boolean {
  const required = new Set<AvDateSegmentType>(['year', 'month', 'day']);
  if (granularity === 'hour' || granularity === 'minute' || granularity === 'second') {
    required.add('hour');
  }
  if (granularity === 'minute' || granularity === 'second') {
    required.add('minute');
  }
  if (granularity === 'second') {
    required.add('second');
  }

  for (const type of required) {
    const segment = segments.find((item) => item.type === type);
    if (!segment || segment.value === null) {
      return false;
    }
  }
  return true;
}

function mapHour(hour24: number, dayPeriod: number | null, hasDayPeriod: boolean): number {
  if (!hasDayPeriod || dayPeriod === null) {
    return hour24;
  }
  const hour12 = hour24 % 12;
  return dayPeriod === 1 ? hour12 + 12 : hour12;
}

/** Commit editable segment numbers into an `@internationalized/date` value. */
export function commitDateFieldValue(
  segments: readonly AvDateSegment[],
  granularity: AvDateFieldGranularity,
  previous: AvDateFieldValue,
  placeholderValue: DateValue | null,
): AvDateFieldValue {
  if (!isDateFieldComplete(segments, granularity)) {
    return null;
  }

  const read = (type: AvDateSegmentType): number =>
    segments.find((segment) => segment.type === type)?.value ?? 0;

  const year = read('year');
  const month = read('month');
  const day = read('day');
  const hasDayPeriod = segments.some((segment) => segment.type === 'dayPeriod');
  const dayPeriod = segments.find((segment) => segment.type === 'dayPeriod')?.value ?? null;
  const hourSeg = segments.find((segment) => segment.type === 'hour')?.value ?? 0;
  const hour = mapHour(hourSeg, dayPeriod, hasDayPeriod);
  const minute = segments.find((segment) => segment.type === 'minute')?.value ?? 0;
  const second = segments.find((segment) => segment.type === 'second')?.value ?? 0;

  const needsTime =
    granularity === 'hour' || granularity === 'minute' || granularity === 'second';

  if (!needsTime) {
    return new CalendarDate(year, month, day);
  }

  if (previous && 'timeZone' in previous) {
    return previous.set({ year, month, day, hour, minute, second });
  }

  if (placeholderValue && 'timeZone' in placeholderValue) {
    return (placeholderValue as ZonedDateTime).set({
      year,
      month,
      day,
      hour,
      minute,
      second,
    });
  }

  if (previous && 'hour' in previous) {
    return toCalendarDateTime(previous).set({ year, month, day, hour, minute, second });
  }

  return new CalendarDateTime(year, month, day, hour, minute, second);
}

export function clampDateFieldValue(
  value: AvDateFieldValue,
  minValue: DateValue | null,
  maxValue: DateValue | null,
  isDateUnavailable: ((date: DateValue) => boolean) | null,
): AvDateFieldValue {
  if (!value) {
    return null;
  }

  let next: DateValue = value;
  if (minValue && next.compare(minValue) < 0) {
    next = minValue;
  }
  if (maxValue && next.compare(maxValue) > 0) {
    next = maxValue;
  }
  if (isDateUnavailable?.(next)) {
    return null;
  }
  return next as AvDateFieldValue;
}

export function dateFieldValueToIso(value: AvDateFieldValue): string {
  if (!value) {
    return '';
  }
  return value.toString();
}

export function compareDateFieldValues(a: DateValue, b: DateValue): number {
  return a.compare(b);
}

export function toDateOnly(value: DateValue): CalendarDate {
  return toCalendarDate(value);
}
