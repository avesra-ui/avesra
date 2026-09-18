import { CalendarDate, IndianCalendar, toCalendar, today } from '@internationalized/date';

import { moveFocusedDate, moveFocusedYear } from './calendar.keyboard';
import {
  alignVisibleAnchor,
  buildVisibleGrid,
  createMonthGrid,
  isDateSelected,
  resolveLocaleWithCalendar,
  resolveVisibleMode,
} from './calendar.model';

describe('calendar.model', () => {
  const focused = new CalendarDate(2024, 6, 15);

  const baseOptions = {
    locale: 'en-US',
    firstDayOfWeek: 'sun' as const,
    timeZone: 'UTC',
    minValue: null,
    maxValue: null,
    isDateUnavailable: null,
    selectionMode: 'single' as const,
    selectedValue: focused,
    focusedValue: focused,
  };

  it('should resolve visible modes', () => {
    expect(resolveVisibleMode(null)).toBe('month');
    expect(resolveVisibleMode({ months: 2 })).toBe('month');
    expect(resolveVisibleMode({ weeks: 2 })).toBe('week');
    expect(resolveVisibleMode({ days: 5 })).toBe('day');
  });

  it('should append unicode calendar extension for non-Gregorian dates', () => {
    const indian = toCalendar(today('UTC'), new IndianCalendar());
    expect(resolveLocaleWithCalendar('hi-IN', indian)).toBe('hi-IN-u-ca-indian');
    expect(resolveLocaleWithCalendar('hi-IN-u-ca-indian', indian)).toBe('hi-IN-u-ca-indian');
    expect(resolveLocaleWithCalendar('en-US', new CalendarDate(2024, 6, 15))).toBe('en-US');
  });

  it('should build a month grid with seven columns', () => {
    const grid = createMonthGrid(focused, baseOptions);
    expect(grid.weeks.length).toBeGreaterThanOrEqual(4);
    expect(grid.weeks[0].length).toBe(7);
  });

  it('should honor weeksInMonth', () => {
    const grid = createMonthGrid(focused, { ...baseOptions, weeksInMonth: 6 });
    expect(grid.weeks.length).toBe(6);
  });

  it('should build week and day grids', () => {
    const weekGrid = buildVisibleGrid(focused, { weeks: 2 }, baseOptions);
    expect(weekGrid.weeks.length).toBe(2);

    const dayGrid = buildVisibleGrid(focused, { days: 5 }, baseOptions);
    expect(dayGrid.weeks.length).toBe(1);
    expect(dayGrid.weeks[0].filter(Boolean).length).toBe(5);
  });

  it('should keep day visible anchor when focusing inside the window', () => {
    const anchor = new CalendarDate(2024, 6, 10);
    const inside = new CalendarDate(2024, 6, 12);
    const aligned = alignVisibleAnchor(inside, anchor, { days: 3 }, {
      locale: 'en-US',
      firstDayOfWeek: 'sun',
    });
    expect(aligned.toString()).toBe(anchor.toString());
  });

  it('should shift day visible anchor when focusing outside the window', () => {
    const anchor = new CalendarDate(2024, 6, 10);
    const outside = new CalendarDate(2024, 6, 14);
    const aligned = alignVisibleAnchor(outside, anchor, { days: 3 }, {
      locale: 'en-US',
      firstDayOfWeek: 'sun',
    });
    expect(aligned.toString()).toBe(new CalendarDate(2024, 6, 12).toString());
  });

  it('should keep multi-month visible anchor when focusing the second month', () => {
    const anchor = new CalendarDate(2024, 6, 1);
    const inSecondMonth = new CalendarDate(2024, 7, 15);
    const aligned = alignVisibleAnchor(inSecondMonth, anchor, { months: 2 }, {
      locale: 'en-US',
      firstDayOfWeek: 'sun',
    });
    expect(aligned.toString()).toBe(anchor.toString());
  });

  it('should shift multi-month visible anchor when focusing past the window', () => {
    const anchor = new CalendarDate(2024, 6, 1);
    const outside = new CalendarDate(2024, 8, 5);
    const aligned = alignVisibleAnchor(outside, anchor, { months: 2 }, {
      locale: 'en-US',
      firstDayOfWeek: 'sun',
    });
    expect(aligned.toString()).toBe(new CalendarDate(2024, 7, 1).toString());
  });

  it('should detect selected dates', () => {
    expect(isDateSelected(focused, focused, 'single')).toBe(true);
    expect(isDateSelected(focused, [focused], 'multiple')).toBe(true);
    expect(isDateSelected(focused, null, 'single')).toBe(false);
  });
});

describe('calendar.keyboard', () => {
  const focused = new CalendarDate(2024, 6, 15);

  it('should move focus by arrows', () => {
    expect(moveFocusedDate(focused, 'ArrowLeft', 'sun', 'en-US')?.day).toBe(14);
    expect(moveFocusedDate(focused, 'ArrowRight', 'sun', 'en-US')?.day).toBe(16);
    expect(moveFocusedDate(focused, 'ArrowUp', 'sun', 'en-US')?.day).toBe(8);
    expect(moveFocusedDate(focused, 'ArrowDown', 'sun', 'en-US')?.day).toBe(22);
  });

  it('should move by month with PageUp/PageDown', () => {
    expect(moveFocusedDate(focused, 'PageUp', 'sun', 'en-US')?.month).toBe(5);
    expect(moveFocusedDate(focused, 'PageDown', 'sun', 'en-US')?.month).toBe(7);
  });

  it('should move year focus in year picker', () => {
    expect(moveFocusedYear(2024, 'ArrowRight')).toBe(2025);
    expect(moveFocusedYear(2024, 'ArrowDown')).toBe(2027);
  });
});
