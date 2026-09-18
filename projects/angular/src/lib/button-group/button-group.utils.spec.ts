import { avButtonGroupClasses } from './button-group.utils';

describe('avButtonGroupClasses', () => {
  it('should return horizontal classes by default', () => {
    expect(avButtonGroupClasses()).toBe('av-button-group av-button-group--horizontal');
  });

  it('should apply vertical and full-width modifiers', () => {
    expect(avButtonGroupClasses({ orientation: 'vertical', fullWidth: true })).toBe(
      'av-button-group av-button-group--vertical av-button-group--full-width',
    );
  });
});
