import { avSpinnerClasses } from './spinner.utils';

describe('spinner.utils', () => {
  it('should return default accent md classes', () => {
    expect(avSpinnerClasses()).toBe('av-spinner av-spinner--accent av-spinner--md');
  });

  it('should return size modifiers', () => {
    expect(avSpinnerClasses({ size: 'sm' })).toBe('av-spinner av-spinner--accent av-spinner--sm');
    expect(avSpinnerClasses({ size: 'lg' })).toBe('av-spinner av-spinner--accent av-spinner--lg');
    expect(avSpinnerClasses({ size: 'xl' })).toBe('av-spinner av-spinner--accent av-spinner--xl');
  });

  it('should return color modifiers', () => {
    expect(avSpinnerClasses({ color: 'current' })).toBe(
      'av-spinner av-spinner--current av-spinner--md',
    );
    expect(avSpinnerClasses({ color: 'success' })).toBe(
      'av-spinner av-spinner--success av-spinner--md',
    );
    expect(avSpinnerClasses({ color: 'warning' })).toBe(
      'av-spinner av-spinner--warning av-spinner--md',
    );
    expect(avSpinnerClasses({ color: 'danger' })).toBe(
      'av-spinner av-spinner--danger av-spinner--md',
    );
  });
});
