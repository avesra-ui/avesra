export type AvBadgeColor = 'accent' | 'default' | 'success' | 'warning' | 'danger';
export type AvBadgeSize = 'sm' | 'md' | 'lg';
export type AvBadgeVariant = 'primary' | 'secondary' | 'soft';
export type AvBadgePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface AvBadgeClassOptions {
  color?: AvBadgeColor;
  size?: AvBadgeSize;
  variant?: AvBadgeVariant;
  placement?: AvBadgePlacement;
}

const AV_BADGE_BASE = 'av-badge';
const AV_BADGE_LABEL_BASE = 'av-badge__label';
const AV_BADGE_ANCHOR_BASE = 'av-badge-anchor';

export function avBadgeClasses(options: AvBadgeClassOptions = {}): string {
  const {
    color = 'default',
    size = 'md',
    variant = 'primary',
    placement = 'top-right',
  } = options;

  return [
    AV_BADGE_BASE,
    `${AV_BADGE_BASE}--${color}`,
    `${AV_BADGE_BASE}--${size}`,
    `${AV_BADGE_BASE}--${variant}`,
    `${AV_BADGE_BASE}--${placement}`,
  ].join(' ');
}

export function avBadgeLabelClasses(): string {
  return AV_BADGE_LABEL_BASE;
}

export function avBadgeAnchorClasses(): string {
  return AV_BADGE_ANCHOR_BASE;
}
