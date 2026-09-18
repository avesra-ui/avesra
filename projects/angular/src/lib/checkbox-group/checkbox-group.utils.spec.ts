import { avCheckboxGroupClasses } from './checkbox-group.utils';

describe('avCheckboxGroupClasses', () => {
  it('should return base class by default', () => {
    expect(avCheckboxGroupClasses()).toBe('av-checkbox-group av-checkbox-group--primary');
  });

  it('should apply variant modifier', () => {
    expect(avCheckboxGroupClasses({ variant: 'secondary' })).toBe(
      'av-checkbox-group av-checkbox-group--secondary',
    );
  });
});
