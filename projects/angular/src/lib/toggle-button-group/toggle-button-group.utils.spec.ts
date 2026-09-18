import { avToggleButtonGroupClasses } from './toggle-button-group.utils';

describe('avToggleButtonGroupClasses', () => {
  it('should return base and horizontal classes by default', () => {
    expect(avToggleButtonGroupClasses()).toBe(
      'av-toggle-button-group av-toggle-button-group--horizontal',
    );
  });

  it('should append modifier classes', () => {
    expect(
      avToggleButtonGroupClasses({
        orientation: 'vertical',
        fullWidth: true,
        detached: true,
      }),
    ).toBe(
      'av-toggle-button-group av-toggle-button-group--vertical av-toggle-button-group--full-width av-toggle-button-group--detached',
    );
  });
});
