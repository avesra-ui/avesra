import { avChipClasses, avChipLabelClasses } from './chip.utils';

describe('avChipClasses', () => {
  it('should return base and default modifier classes', () => {
    expect(avChipClasses()).toBe(
      'av-chip av-chip--default av-chip--md av-chip--secondary',
    );
  });

  it('should apply color, size, and variant classes', () => {
    expect(
      avChipClasses({
        color: 'success',
        size: 'lg',
        variant: 'soft',
      }),
    ).toBe('av-chip av-chip--success av-chip--lg av-chip--soft');
  });
});

describe('avChipLabelClasses', () => {
  it('should return the label class', () => {
    expect(avChipLabelClasses()).toBe('av-chip__label');
  });
});
