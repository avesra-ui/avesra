import {
  avSelectClasses,
  avSelectIndicatorClasses,
  avSelectPopoverClasses,
  avSelectTriggerClasses,
  avSelectValueClasses,
} from './select.utils';

describe('select utils', () => {
  it('builds base select classes with defaults', () => {
    expect(avSelectClasses()).toBe('av-select av-select--primary');
  });

  it('applies variant and full-width modifiers', () => {
    expect(avSelectClasses({ variant: 'secondary', fullWidth: true })).toBe(
      'av-select av-select--secondary av-select--full-width',
    );
  });

  it('builds trigger classes', () => {
    expect(avSelectTriggerClasses()).toBe('av-select__trigger');
    expect(avSelectTriggerClasses({ fullWidth: true })).toBe(
      'av-select__trigger av-select__trigger--full-width',
    );
  });

  it('builds value, indicator, and popover classes', () => {
    expect(avSelectValueClasses()).toBe('av-select__value');
    expect(avSelectIndicatorClasses()).toBe('av-select__indicator');
    expect(avSelectPopoverClasses()).toBe('av-select__popover');
    expect(avSelectPopoverClasses('max-h-60')).toBe('av-select__popover max-h-60');
  });
});
