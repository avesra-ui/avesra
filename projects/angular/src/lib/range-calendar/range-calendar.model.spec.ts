import { CalendarDate } from '@internationalized/date';

import { AvDateRange } from './date-range';
import { DefaultAvCalendarRangeStrategy } from './date-range-selection-strategy';
import { getRangeCellFlags } from './range-calendar.model';

describe('DefaultAvCalendarRangeStrategy', () => {
  const strategy = new DefaultAvCalendarRangeStrategy();
  const event = new Event('click');

  it('sets start on first selection', () => {
    const date = new CalendarDate(2026, 8, 5);
    const next = strategy.selectionFinished(date, AvDateRange.empty(), event);
    expect(next.start?.toString()).toBe('2026-08-05');
    expect(next.end).toBeNull();
  });

  it('sets end when date is on or after start', () => {
    const start = new CalendarDate(2026, 8, 5);
    const end = new CalendarDate(2026, 8, 10);
    const next = strategy.selectionFinished(end, new AvDateRange(start, null), event);
    expect(next.isComplete).toBeTrue();
    expect(next.end?.toString()).toBe('2026-08-10');
  });

  it('completes range when second date is before start (normalized)', () => {
    const start = new CalendarDate(2026, 8, 10);
    const earlier = new CalendarDate(2026, 8, 5);
    const next = strategy.selectionFinished(earlier, new AvDateRange(start, null), event);
    expect(next.isComplete).toBeTrue();
    expect(next.start?.toString()).toBe('2026-08-05');
    expect(next.end?.toString()).toBe('2026-08-10');
  });

  it('creates preview only for incomplete ranges', () => {
    const start = new CalendarDate(2026, 8, 5);
    const hover = new CalendarDate(2026, 8, 8);
    const preview = strategy.createPreview(hover, new AvDateRange(start, null), event);
    expect(preview.start?.toString()).toBe('2026-08-05');
    expect(preview.end?.toString()).toBe('2026-08-08');
  });

  it('creates normalized preview when hovering before start', () => {
    const start = new CalendarDate(2026, 8, 10);
    const hover = new CalendarDate(2026, 8, 5);
    const preview = strategy.createPreview(hover, new AvDateRange(start, null), event);
    expect(preview.start?.toString()).toBe('2026-08-05');
    expect(preview.end?.toString()).toBe('2026-08-10');
  });
});

describe('getRangeCellFlags', () => {
  it('marks only start for incomplete ranges', () => {
    const start = new CalendarDate(2026, 8, 5);
    const flags = getRangeCellFlags(start, new AvDateRange(start, null));
    expect(flags).toEqual({
      selected: true,
      selectionStart: true,
      selectionEnd: false,
    });
  });

  it('marks inclusive range for complete ranges', () => {
    const start = new CalendarDate(2026, 8, 5);
    const end = new CalendarDate(2026, 8, 7);
    const mid = new CalendarDate(2026, 8, 6);
    expect(getRangeCellFlags(mid, new AvDateRange(start, end)).selected).toBeTrue();
    expect(getRangeCellFlags(mid, new AvDateRange(start, end)).selectionStart).toBeFalse();
    expect(getRangeCellFlags(start, new AvDateRange(start, end)).selectionStart).toBeTrue();
    expect(getRangeCellFlags(end, new AvDateRange(start, end)).selectionEnd).toBeTrue();
  });
});
