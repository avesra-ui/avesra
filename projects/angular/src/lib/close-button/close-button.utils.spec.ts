import { avCloseButtonClasses } from './close-button.utils';

describe('avCloseButtonClasses', () => {
  it('should return base and default variant classes', () => {
    expect(avCloseButtonClasses()).toBe('av-close-button av-close-button--default');
  });

  it('should apply the requested variant class', () => {
    expect(avCloseButtonClasses({ variant: 'default' })).toBe(
      'av-close-button av-close-button--default',
    );
  });
});
