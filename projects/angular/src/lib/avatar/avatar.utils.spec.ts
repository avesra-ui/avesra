import { avAvatarClasses, avAvatarFallbackClasses, avAvatarImageClasses } from './avatar.utils';

describe('avAvatarClasses', () => {
  it('should return base and default size classes', () => {
    expect(avAvatarClasses()).toBe('av-avatar av-avatar--md');
  });

  it('should apply size and soft variant classes', () => {
    expect(avAvatarClasses({ size: 'lg', variant: 'soft' })).toBe(
      'av-avatar av-avatar--lg av-avatar--soft',
    );
  });
});

describe('avAvatarImageClasses', () => {
  it('should return the image class', () => {
    expect(avAvatarImageClasses()).toBe('av-avatar__image');
  });
});

describe('avAvatarFallbackClasses', () => {
  it('should return base and default color classes', () => {
    expect(avAvatarFallbackClasses()).toBe(
      'av-avatar__fallback av-avatar__fallback--default',
    );
  });

  it('should apply the requested color class', () => {
    expect(avAvatarFallbackClasses({ color: 'accent' })).toBe(
      'av-avatar__fallback av-avatar__fallback--accent',
    );
  });
});
