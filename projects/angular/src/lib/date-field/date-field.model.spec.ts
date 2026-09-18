import { CalendarDate, parseZonedDateTime } from '@internationalized/date';

import { AV_DATE_FIELD_FORMATS_DEFAULT } from './date-field.formats';
import {
  buildDateFieldSegments,
  commitDateFieldValue,
  isDateFieldComplete,
} from './date-field.model';

describe('date-field.model', () => {
  it('builds editable year/month/day segments for a value', () => {
    const segments = buildDateFieldSegments({
      locale: 'en-US',
      value: new CalendarDate(2025, 2, 3),
      placeholderValue: null,
      granularity: 'day',
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    const editable = segments.filter((segment) => segment.isEditable);
    expect(editable.map((segment) => segment.type).sort()).toEqual(['day', 'month', 'year']);
    expect(editable.every((segment) => !segment.isPlaceholder)).toBeTrue();
  });

  it('commits a complete day value', () => {
    const segments = buildDateFieldSegments({
      locale: 'en-US',
      value: new CalendarDate(2025, 2, 3),
      placeholderValue: null,
      granularity: 'day',
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    expect(isDateFieldComplete(segments, 'day')).toBeTrue();
    const committed = commitDateFieldValue(segments, 'day', null, null);
    expect(committed?.toString()).toBe('2025-02-03');
  });

  it('shows hour but not minute for hour granularity', () => {
    const segments = buildDateFieldSegments({
      locale: 'en-US',
      value: parseZonedDateTime('2025-02-03T08:45:00[America/Los_Angeles]'),
      placeholderValue: null,
      granularity: 'hour',
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    const types = segments.filter((segment) => segment.isEditable).map((segment) => segment.type);
    expect(types).toContain('hour');
    expect(types).not.toContain('minute');
    expect(types).not.toContain('second');
  });

  it('shows minute for minute granularity and second for second', () => {
    const minuteSegments = buildDateFieldSegments({
      locale: 'en-US',
      value: parseZonedDateTime('2025-02-03T08:45:00[America/Los_Angeles]'),
      placeholderValue: null,
      granularity: 'minute',
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });
    const minuteTypes = minuteSegments
      .filter((segment) => segment.isEditable)
      .map((segment) => segment.type);
    expect(minuteTypes).toContain('minute');
    expect(minuteTypes).not.toContain('second');

    const secondSegments = buildDateFieldSegments({
      locale: 'en-US',
      value: parseZonedDateTime('2025-02-03T08:45:22[America/Los_Angeles]'),
      placeholderValue: null,
      granularity: 'second',
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });
    const secondTypes = secondSegments
      .filter((segment) => segment.isEditable)
      .map((segment) => segment.type);
    expect(secondTypes).toContain('second');
  });
});
