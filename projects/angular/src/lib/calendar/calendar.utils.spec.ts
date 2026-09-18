import { avCalendarClasses } from './calendar.utils';

describe('avCalendarClasses', () => {
  it('should return base class by default', () => {
    expect(avCalendarClasses()).toBe('av-calendar');
  });

  it('should apply week-view modifier from duration', () => {
    expect(avCalendarClasses({ weeks: 2 })).toBe('av-calendar av-calendar--week-view');
  });

  it('should apply day-view modifier from duration', () => {
    expect(avCalendarClasses({ days: 7 })).toBe('av-calendar av-calendar--day-view');
  });

  it('should apply flags from class options', () => {
    expect(avCalendarClasses({ weekView: true })).toBe('av-calendar av-calendar--week-view');
  });
});
