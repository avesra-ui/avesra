import { isExternalUrl, avLinkClasses, avLinkIconClasses } from './link.utils';

describe('avLinkClasses', () => {
  it('should return default classes', () => {
    expect(avLinkClasses()).toBe('av-link av-link--primary av-link--underline-hover');
  });

  it('should apply variant and underline modifiers', () => {
    expect(
      avLinkClasses({ variant: 'secondary', underline: 'always' }),
    ).toBe('av-link av-link--secondary av-link--underline-always');
  });
});

describe('avLinkIconClasses', () => {
  it('should return icon class', () => {
    expect(avLinkIconClasses()).toBe('av-link__icon');
  });
});

describe('isExternalUrl', () => {
  it('should detect external URLs', () => {
    expect(isExternalUrl('https://example.com')).toBeTrue();
    expect(isExternalUrl('//cdn.example.com')).toBeTrue();
    expect(isExternalUrl('/local')).toBeFalse();
    expect(isExternalUrl('#anchor')).toBeFalse();
  });
});
