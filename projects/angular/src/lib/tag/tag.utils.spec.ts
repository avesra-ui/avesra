import { avTagClasses, avTagRemoveButtonClasses } from './tag.utils';

describe('avTagClasses', () => {
  it('should return base and default modifier classes', () => {
    expect(avTagClasses()).toBe('av-tag av-tag--md av-tag--default');
  });

  it('should apply size and variant classes', () => {
    expect(avTagClasses({ size: 'lg', variant: 'surface' })).toBe(
      'av-tag av-tag--lg av-tag--surface',
    );
  });
});

describe('avTagRemoveButtonClasses', () => {
  it('should return the remove button class', () => {
    expect(avTagRemoveButtonClasses()).toBe('av-tag__remove-button');
  });
});
