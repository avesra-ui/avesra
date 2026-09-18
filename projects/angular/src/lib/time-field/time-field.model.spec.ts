import { Time } from '@internationalized/date';

import { AV_DATE_FIELD_FORMATS_DEFAULT } from '../date-field/date-field.formats';
import {
  buildTimeFieldSegments,
  commitTimeFieldValue,
  isTimeFieldComplete,
} from './time-field.model';

describe('time-field.model', () => {
  it('builds hour/minute segments by default', () => {
    const segments = buildTimeFieldSegments({
      locale: 'en-US',
      value: new Time(14, 30),
      placeholderValue: null,
      granularity: 'minute',
      hourCycle: 24,
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    const editable = segments.filter((segment) => segment.isEditable);
    expect(editable.map((segment) => segment.type).sort()).toEqual(['hour', 'minute']);
    expect(editable.every((segment) => !segment.isPlaceholder)).toBeTrue();
  });

  it('commits a complete minute value', () => {
    const segments = buildTimeFieldSegments({
      locale: 'en-US',
      value: new Time(9, 15),
      placeholderValue: null,
      granularity: 'minute',
      hourCycle: 24,
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    expect(isTimeFieldComplete(segments, 'minute')).toBeTrue();
    const committed = commitTimeFieldValue(segments, 'minute', null, null);
    expect(committed?.toString()).toBe('09:15:00');
  });

  it('uses 12-hour hour segments with dayPeriod', () => {
    const segments = buildTimeFieldSegments({
      locale: 'en-US',
      value: new Time(14, 5),
      placeholderValue: null,
      granularity: 'minute',
      hourCycle: 12,
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    const types = segments.filter((segment) => segment.isEditable).map((segment) => segment.type);
    expect(types).toContain('hour');
    expect(types).toContain('dayPeriod');
    expect(segments.find((segment) => segment.type === 'hour')?.value).toBe(2);
    expect(segments.find((segment) => segment.type === 'dayPeriod')?.value).toBe(1);
  });

  it('toggles AM to PM when dayPeriod segment is committed', () => {
    const segments = buildTimeFieldSegments({
      locale: 'en-US',
      value: new Time(3, 33),
      placeholderValue: null,
      granularity: 'minute',
      hourCycle: 12,
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    const next = segments.map((segment) =>
      segment.type === 'dayPeriod'
        ? { ...segment, value: 1, text: 'PM', isPlaceholder: false }
        : segment,
    );
    const committed = commitTimeFieldValue(next, 'minute', new Time(3, 33), null);
    expect(committed?.hour).toBe(15);
    expect(committed?.minute).toBe(33);
  });

  it('omits minute for hour granularity', () => {
    const segments = buildTimeFieldSegments({
      locale: 'en-US',
      value: new Time(8, 45),
      placeholderValue: null,
      granularity: 'hour',
      hourCycle: 24,
      formats: AV_DATE_FIELD_FORMATS_DEFAULT,
      amLabel: 'AM',
      pmLabel: 'PM',
    });

    const types = segments.filter((segment) => segment.isEditable).map((segment) => segment.type);
    expect(types).toContain('hour');
    expect(types).not.toContain('minute');
    expect(types).not.toContain('second');
  });
});
