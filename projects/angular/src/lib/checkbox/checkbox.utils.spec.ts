import { avCheckboxClasses } from './checkbox.utils';

describe('avCheckboxClasses', () => {
  it('should return base class by default', () => {
    expect(avCheckboxClasses()).toBe('av-checkbox av-checkbox--primary');
  });

  it('should apply variant modifier', () => {
    expect(avCheckboxClasses({ variant: 'secondary' })).toBe(
      'av-checkbox av-checkbox--secondary',
    );
  });
});
