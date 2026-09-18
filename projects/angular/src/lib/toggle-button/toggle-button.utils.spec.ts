import { avToggleButtonClasses } from './toggle-button.utils';

describe('avToggleButtonClasses', () => {
  it('should return base and default classes', () => {
    expect(avToggleButtonClasses()).toBe(
      'av-toggle-button av-toggle-button--default av-toggle-button--md',
    );
  });

  it('should append modifier classes', () => {
    expect(
      avToggleButtonClasses({
        variant: 'ghost',
        size: 'lg',
        iconOnly: true,
      }),
    ).toBe(
      'av-toggle-button av-toggle-button--ghost av-toggle-button--lg av-toggle-button--icon-only',
    );
  });
});
