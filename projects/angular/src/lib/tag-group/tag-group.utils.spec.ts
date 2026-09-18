import { avTagGroupClasses, avTagGroupListClasses } from './tag-group.utils';

describe('avTagGroupClasses', () => {
  it('should return the base class', () => {
    expect(avTagGroupClasses()).toBe('av-tag-group');
  });
});

describe('avTagGroupListClasses', () => {
  it('should return the list class', () => {
    expect(avTagGroupListClasses()).toBe('av-tag-group__list');
  });
});
