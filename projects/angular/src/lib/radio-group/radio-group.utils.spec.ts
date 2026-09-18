import { avRadioGroupClasses } from './radio-group.utils';

describe('avRadioGroupClasses', () => {
  it('should return base class by default', () => {
    expect(avRadioGroupClasses()).toBe(
      'av-radio-group av-radio-group--primary av-radio-group--vertical',
    );
  });

  it('should apply variant and orientation modifiers', () => {
    expect(avRadioGroupClasses({ variant: 'secondary', orientation: 'horizontal' })).toBe(
      'av-radio-group av-radio-group--secondary av-radio-group--horizontal',
    );
  });
});
