export type AvAvatarColor = 'accent' | 'default' | 'success' | 'warning' | 'danger';
export type AvAvatarSize = 'sm' | 'md' | 'lg';
export type AvAvatarVariant = 'default' | 'soft';

export interface AvAvatarClassOptions {
  color?: AvAvatarColor;
  size?: AvAvatarSize;
  variant?: AvAvatarVariant;
}

export interface AvAvatarFallbackClassOptions {
  color?: AvAvatarColor;
}

const AV_AVATAR_BASE = 'av-avatar';
const AV_AVATAR_FALLBACK_BASE = 'av-avatar__fallback';

export function avAvatarClasses(options: AvAvatarClassOptions = {}): string {
  const { size = 'md', variant = 'default' } = options;

  return [
    AV_AVATAR_BASE,
    `${AV_AVATAR_BASE}--${size}`,
    variant === 'soft' && `${AV_AVATAR_BASE}--soft`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avAvatarImageClasses(): string {
  return 'av-avatar__image';
}

export function avAvatarFallbackClasses(options: AvAvatarFallbackClassOptions = {}): string {
  const { color = 'default' } = options;

  return [AV_AVATAR_FALLBACK_BASE, `${AV_AVATAR_FALLBACK_BASE}--${color}`].join(' ');
}
