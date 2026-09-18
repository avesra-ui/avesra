import { avDatePickerClasses, avDatePickerPopoverClasses, avDatePickerTriggerClasses } from './date-picker.utils';

describe('avDatePickerClasses', () => {
  it('returns base class by default', () => {
    expect(avDatePickerClasses()).toBe('av-date-picker');
  });

  it('adds full-width modifier', () => {
    expect(avDatePickerClasses({ fullWidth: true })).toBe(
      'av-date-picker av-date-picker--full-width',
    );
  });
});

describe('avDatePickerTriggerClasses', () => {
  it('returns trigger class', () => {
    expect(avDatePickerTriggerClasses()).toBe('av-date-picker__trigger');
  });
});

describe('avDatePickerPopoverClasses', () => {
  it('returns popover class and optional extras', () => {
    expect(avDatePickerPopoverClasses()).toBe('av-date-picker__popover');
    expect(avDatePickerPopoverClasses({ className: 'custom' })).toBe(
      'av-date-picker__popover custom',
    );
  });
});
