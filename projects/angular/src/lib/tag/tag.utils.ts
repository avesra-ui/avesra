export type AvTagSize = 'sm' | 'md' | 'lg';
export type AvTagVariant = 'default' | 'surface';

export interface AvTagClassOptions {
  size?: AvTagSize;
  variant?: AvTagVariant;
}

const AV_TAG_BASE = 'av-tag';
const AV_TAG_REMOVE_BUTTON_BASE = 'av-tag__remove-button';

export function avTagClasses(options: AvTagClassOptions = {}): string {
  const { size = 'md', variant = 'default' } = options;

  return [AV_TAG_BASE, `${AV_TAG_BASE}--${size}`, `${AV_TAG_BASE}--${variant}`].join(' ');
}

export function avTagRemoveButtonClasses(): string {
  return AV_TAG_REMOVE_BUTTON_BASE;
}
