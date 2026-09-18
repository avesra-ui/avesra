import {
  Time,
  type CalendarDateTime,
  type ZonedDateTime,
} from '@internationalized/date';

import type { AvDateFieldFormats } from '../date-field/date-field.formats';
import type { AvDateSegment, AvDateSegmentType } from '../date-field/date-field.types';
import type { AvTimeFieldGranularity, AvTimeFieldValue } from './time-field.types';

const EDITABLE_TYPES: ReadonlySet<AvDateSegmentType> = new Set([
  'hour',
  'minute',
  'second',
  'dayPeriod',
]);

function pad(value: number, length: number, force: boolean): string {
  const text = String(value);
  return force ? text.padStart(length, '0') : text;
}

function toHourParts(hour24: number): { hour12: number; dayPeriod: 0 | 1 } {
  const dayPeriod: 0 | 1 = hour24 >= 12 ? 1 : 0;
  const mod = hour24 % 12;
  return { hour12: mod === 0 ? 12 : mod, dayPeriod };
}

function mapHour(hourSeg: number, dayPeriod: number | null, hasDayPeriod: boolean): number {
  if (!hasDayPeriod || dayPeriod === null) {
    return hourSeg;
  }
  const normalized = hourSeg % 12;
  return dayPeriod === 1 ? normalized + 12 : normalized;
}

function limitsFor(
  type: AvDateSegmentType,
  hourCycle: 12 | 24 | undefined,
): { min: number; max: number; maxLength: number } {
  switch (type) {
    case 'hour':
      return hourCycle === 12
        ? { min: 1, max: 12, maxLength: 2 }
        : { min: 0, max: 23, maxLength: 2 };
    case 'minute':
    case 'second':
      return { min: 0, max: 59, maxLength: 2 };
    case 'dayPeriod':
      return { min: 0, max: 1, maxLength: 2 };
    default:
      return { min: 0, max: 0, maxLength: 0 };
  }
}

function readTimeParts(value: Exclude<AvTimeFieldValue, null>): {
  hour: number;
  minute: number;
  second: number;
} {
  return {
    hour: value.hour,
    minute: value.minute,
    second: value.second,
  };
}

function toNativeDate(parts: { hour: number; minute: number; second: number }): Date {
  return new Date(2000, 0, 1, parts.hour, parts.minute, parts.second);
}

function resolvePlaceholderTime(
  value: AvTimeFieldValue,
  placeholderValue: Exclude<AvTimeFieldValue, null> | null,
): { hour: number; minute: number; second: number } {
  if (value) {
    return readTimeParts(value);
  }
  if (placeholderValue) {
    return readTimeParts(placeholderValue);
  }
  return { hour: 0, minute: 0, second: 0 };
}

function formatOptionsFor(
  granularity: AvTimeFieldGranularity,
  hourCycle: 12 | 24 | undefined,
): Intl.DateTimeFormatOptions {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
  };

  if (hourCycle === 12) {
    options.hour12 = true;
  } else if (hourCycle === 24) {
    options.hour12 = false;
  }

  if (granularity === 'minute' || granularity === 'second') {
    options.minute = '2-digit';
  }

  if (granularity === 'second') {
    options.second = '2-digit';
  }

  return options;
}

function partType(part: Intl.DateTimeFormatPartTypes): AvDateSegmentType | null {
  switch (part) {
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
    default:
      return null;
  }
}

function readPartValue(
  type: AvDateSegmentType,
  value: AvTimeFieldValue,
  hourCycle: 12 | 24 | undefined,
): number | null {
  if (!value) {
    return null;
  }

  switch (type) {
    case 'hour': {
      if (hourCycle === 12) {
        return toHourParts(value.hour).hour12;
      }
      return value.hour;
    }
    case 'minute':
      return value.minute;
    case 'second':
      return value.second;
    case 'dayPeriod':
      return toHourParts(value.hour).dayPeriod;
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
      type === 'hour'
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

  if (type === 'hour' || type === 'minute' || type === 'second') {
    return {
      text: pad(numeric, 2, formats.forceLeadingZeros),
      isPlaceholder: false,
    };
  }

  return { text: intlPart, isPlaceholder: false };
}

/** Build locale-ordered time segments for the current value. */
export function buildTimeFieldSegments(options: {
  locale: string;
  value: AvTimeFieldValue;
  placeholderValue: Exclude<AvTimeFieldValue, null> | null;
  granularity: AvTimeFieldGranularity;
  hourCycle?: 12 | 24;
  formats: AvDateFieldFormats;
  amLabel: string;
  pmLabel: string;
}): AvDateSegment[] {
  const display = resolvePlaceholderTime(options.value, options.placeholderValue);
  const formatter = new Intl.DateTimeFormat(
    options.locale,
    formatOptionsFor(options.granularity, options.hourCycle),
  );
  const resolvedHourCycle: 12 | 24 | undefined =
    options.hourCycle ?? (formatter.resolvedOptions().hour12 ? 12 : 24);
  const parts = formatter.formatToParts(toNativeDate(display));

  return parts
    .map((part, index) => {
      const type = partType(part.type);
      if (!type) {
        return null;
      }

      const editable = EDITABLE_TYPES.has(type);
      const numeric = editable ? readPartValue(type, options.value, resolvedHourCycle) : null;
      const { min, max, maxLength } = limitsFor(type, resolvedHourCycle);
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
        text: type === 'literal' ? part.value : text,
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

export function isTimeFieldComplete(
  segments: readonly AvDateSegment[],
  granularity: AvTimeFieldGranularity,
): boolean {
  const required = new Set<AvDateSegmentType>(['hour']);
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

function isPlainTime(value: Exclude<AvTimeFieldValue, null>): value is Time {
  return !('year' in value);
}

/** Commit editable segment numbers into an `@internationalized/date` time value. */
export function commitTimeFieldValue(
  segments: readonly AvDateSegment[],
  granularity: AvTimeFieldGranularity,
  previous: AvTimeFieldValue,
  placeholderValue: Exclude<AvTimeFieldValue, null> | null,
): AvTimeFieldValue {
  if (!isTimeFieldComplete(segments, granularity)) {
    return null;
  }

  const hasDayPeriod = segments.some((segment) => segment.type === 'dayPeriod');
  const dayPeriod = segments.find((segment) => segment.type === 'dayPeriod')?.value ?? null;
  const hourSeg = segments.find((segment) => segment.type === 'hour')?.value ?? 0;
  const hour = mapHour(hourSeg, dayPeriod, hasDayPeriod);
  const minute = segments.find((segment) => segment.type === 'minute')?.value ?? 0;
  const second = segments.find((segment) => segment.type === 'second')?.value ?? 0;

  if (previous && 'timeZone' in previous) {
    return (previous as ZonedDateTime).set({ hour, minute, second });
  }

  if (previous && !isPlainTime(previous)) {
    return (previous as CalendarDateTime).set({ hour, minute, second });
  }

  if (placeholderValue && 'timeZone' in placeholderValue) {
    return (placeholderValue as ZonedDateTime).set({ hour, minute, second });
  }

  if (placeholderValue && !isPlainTime(placeholderValue)) {
    return (placeholderValue as CalendarDateTime).set({ hour, minute, second });
  }

  return new Time(hour, minute, second);
}

export function clampTimeFieldValue(
  value: AvTimeFieldValue,
  minValue: Exclude<AvTimeFieldValue, null> | null,
  maxValue: Exclude<AvTimeFieldValue, null> | null,
): AvTimeFieldValue {
  if (!value) {
    return null;
  }

  let next = value;
  if (minValue && compareTimeValues(next, minValue) < 0) {
    next = copyTimeOnto(next, minValue);
  }
  if (maxValue && compareTimeValues(next, maxValue) > 0) {
    next = copyTimeOnto(next, maxValue);
  }
  return next;
}

function copyTimeOnto(
  target: Exclude<AvTimeFieldValue, null>,
  source: Exclude<AvTimeFieldValue, null>,
): Exclude<AvTimeFieldValue, null> {
  if (isPlainTime(target)) {
    return new Time(source.hour, source.minute, source.second);
  }
  return target.set({
    hour: source.hour,
    minute: source.minute,
    second: source.second,
  });
}

/** Compare time-of-day only (ignores calendar date on DateTime values). */
export function compareTimeValues(
  a: Exclude<AvTimeFieldValue, null>,
  b: Exclude<AvTimeFieldValue, null>,
): number {
  const aSeconds = a.hour * 3600 + a.minute * 60 + a.second;
  const bSeconds = b.hour * 3600 + b.minute * 60 + b.second;
  return aSeconds - bSeconds;
}

export function timeFieldValueToIso(value: AvTimeFieldValue): string {
  if (!value) {
    return '';
  }
  if (isPlainTime(value)) {
    return value.toString();
  }
  const hh = String(value.hour).padStart(2, '0');
  const mm = String(value.minute).padStart(2, '0');
  const ss = String(value.second).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}
