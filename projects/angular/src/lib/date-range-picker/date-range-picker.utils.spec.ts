import {
  avDateRangePickerClasses,
  avDateRangePickerPopoverClasses,
  avDateRangePickerRangeSeparatorClasses,
  avDateRangePickerTriggerClasses,
} from './date-range-picker.utils';

describe('avDateRangePickerClasses', () => {
  it('returns base class by default', () => {
    expect(avDateRangePickerClasses()).toBe('av-date-range-picker');
  });

  it('adds full-width modifier', () => {
    expect(avDateRangePickerClasses({ fullWidth: true })).toBe(
      'av-date-range-picker av-date-range-picker--full-width',
    );
  });
});

describe('avDateRangePickerTriggerClasses', () => {
  it('returns trigger class', () => {
    expect(avDateRangePickerTriggerClasses()).toBe('av-date-range-picker__trigger');
  });
});

describe('avDateRangePickerRangeSeparatorClasses', () => {
  it('returns range separator class', () => {
    expect(avDateRangePickerRangeSeparatorClasses()).toBe(
      'av-date-range-picker__range-separator',
    );
  });
});

describe('avDateRangePickerPopoverClasses', () => {
  it('returns popover class and optional extras', () => {
    expect(avDateRangePickerPopoverClasses()).toBe('av-date-range-picker__popover');
    expect(avDateRangePickerPopoverClasses({ className: 'custom' })).toBe(
      'av-date-range-picker__popover custom',
    );
  });
});
