import {
  avInputGroupClasses,
  avInputGroupInputClasses,
  avInputGroupPrefixClasses,
  avInputGroupSuffixClasses,
} from './input-group.utils';

describe('avInputGroupClasses', () => {
  it('should return default classes', () => {
    expect(avInputGroupClasses()).toBe('av-input-group av-input-group--primary');
  });

  it('should apply variant and full width modifiers', () => {
    expect(avInputGroupClasses({ variant: 'secondary', fullWidth: true })).toBe(
      'av-input-group av-input-group--secondary av-input-group--full-width',
    );
  });
});

describe('avInputGroup slot classes', () => {
  it('should return input class', () => {
    expect(avInputGroupInputClasses()).toBe('av-input-group__input');
  });

  it('should return prefix class', () => {
    expect(avInputGroupPrefixClasses()).toBe('av-input-group__prefix');
  });

  it('should return suffix class', () => {
    expect(avInputGroupSuffixClasses()).toBe('av-input-group__suffix');
  });
});
