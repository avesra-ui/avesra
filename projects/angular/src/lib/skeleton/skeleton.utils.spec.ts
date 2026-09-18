import { isAvSkeletonAnimationType, avSkeletonClasses } from './skeleton.utils';

describe('skeleton.utils', () => {
  it('should return default shimmer classes', () => {
    expect(avSkeletonClasses()).toBe('av-skeleton av-skeleton--shimmer');
  });

  it('should return animation type modifiers', () => {
    expect(avSkeletonClasses({ animationType: 'pulse' })).toBe('av-skeleton av-skeleton--pulse');
    expect(avSkeletonClasses({ animationType: 'none' })).toBe('av-skeleton av-skeleton--none');
    expect(avSkeletonClasses({ animationType: 'shimmer' })).toBe(
      'av-skeleton av-skeleton--shimmer',
    );
  });

  it('should validate animation type strings', () => {
    expect(isAvSkeletonAnimationType('shimmer')).toBeTrue();
    expect(isAvSkeletonAnimationType('pulse')).toBeTrue();
    expect(isAvSkeletonAnimationType('none')).toBeTrue();
    expect(isAvSkeletonAnimationType('wave')).toBeFalse();
  });
});
