import {
  avDateInputGroupClasses,
  avDateInputGroupInputClasses,
  avDateInputGroupPrefixClasses,
  avDateInputGroupSegmentClasses,
  avDateInputGroupSuffixClasses,
} from './date-input-group.utils';

describe('date-input-group.utils', () => {
  it('builds group classes', () => {
    expect(avDateInputGroupClasses()).toBe('av-date-input-group av-date-input-group--primary');
    expect(avDateInputGroupClasses({ variant: 'secondary', fullWidth: true })).toBe(
      'av-date-input-group av-date-input-group--secondary av-date-input-group--full-width',
    );
  });

  it('exposes element class helpers', () => {
    expect(avDateInputGroupInputClasses()).toBe('av-date-input-group__input');
    expect(avDateInputGroupSegmentClasses()).toBe('av-date-input-group__segment');
    expect(avDateInputGroupPrefixClasses()).toBe('av-date-input-group__prefix');
    expect(avDateInputGroupSuffixClasses()).toBe('av-date-input-group__suffix');
  });
});
