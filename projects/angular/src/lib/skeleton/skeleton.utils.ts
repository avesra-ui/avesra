export type AvSkeletonAnimationType = 'shimmer' | 'pulse' | 'none';

export interface AvSkeletonClassOptions {
  animationType?: AvSkeletonAnimationType;
}

const AV_SKELETON_BASE = 'av-skeleton';

export function avSkeletonClasses(options: AvSkeletonClassOptions = {}): string {
  const { animationType = 'shimmer' } = options;

  return [AV_SKELETON_BASE, `${AV_SKELETON_BASE}--${animationType}`].join(' ');
}

export function isAvSkeletonAnimationType(value: string): value is AvSkeletonAnimationType {
  return value === 'shimmer' || value === 'pulse' || value === 'none';
}
