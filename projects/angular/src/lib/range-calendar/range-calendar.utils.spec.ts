import { avRangeCalendarClasses } from './range-calendar.utils';

describe('avRangeCalendarClasses', () => {
  it('should return base class by default', () => {
    expect(avRangeCalendarClasses()).toBe('av-range-calendar');
  });

  it('should apply week-view modifier from duration', () => {
    expect(avRangeCalendarClasses({ weeks: 2 })).toBe(
      'av-range-calendar av-range-calendar--week-view',
    );
  });

  it('should apply day-view modifier from duration', () => {
    expect(avRangeCalendarClasses({ days: 7 })).toBe(
      'av-range-calendar av-range-calendar--day-view',
    );
  });
});
