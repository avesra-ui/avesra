import { avBadgeAnchorClasses, avBadgeClasses, avBadgeLabelClasses } from './badge.utils';

describe('avBadgeClasses', () => {
  it('should return base and default modifier classes', () => {
    expect(avBadgeClasses()).toBe(
      'av-badge av-badge--default av-badge--md av-badge--primary av-badge--top-right',
    );
  });

  it('should apply color, size, variant, and placement classes', () => {
    expect(
      avBadgeClasses({
        color: 'danger',
        size: 'sm',
        variant: 'soft',
        placement: 'bottom-left',
      }),
    ).toBe('av-badge av-badge--danger av-badge--sm av-badge--soft av-badge--bottom-left');
  });
});

describe('avBadgeLabelClasses', () => {
  it('should return the label class', () => {
    expect(avBadgeLabelClasses()).toBe('av-badge__label');
  });
});

describe('avBadgeAnchorClasses', () => {
  it('should return the anchor class', () => {
    expect(avBadgeAnchorClasses()).toBe('av-badge-anchor');
  });
});
