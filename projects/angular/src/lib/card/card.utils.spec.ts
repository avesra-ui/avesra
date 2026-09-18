import {
  avCardClasses,
  avCardContentClasses,
  avCardDescriptionClasses,
  avCardFooterClasses,
  avCardHeaderClasses,
  avCardTitleClasses,
} from './card.utils';

describe('card.utils', () => {
  it('should return default card classes', () => {
    expect(avCardClasses()).toBe('av-card av-card--default');
  });

  it('should return variant modifier classes', () => {
    expect(avCardClasses({ variant: 'secondary' })).toBe('av-card av-card--secondary');
    expect(avCardClasses({ variant: 'transparent' })).toBe('av-card av-card--transparent');
  });

  it('should return element classes', () => {
    expect(avCardHeaderClasses()).toBe('av-card__header');
    expect(avCardTitleClasses()).toBe('av-card__title');
    expect(avCardDescriptionClasses()).toBe('av-card__description');
    expect(avCardContentClasses()).toBe('av-card__content');
    expect(avCardFooterClasses()).toBe('av-card__footer');
  });
});
