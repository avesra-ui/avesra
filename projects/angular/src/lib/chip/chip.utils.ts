export type AvChipColor = 'accent' | 'default' | 'success' | 'warning' | 'danger';
export type AvChipSize = 'sm' | 'md' | 'lg';
export type AvChipVariant = 'primary' | 'secondary' | 'tertiary' | 'soft';

export interface AvChipClassOptions {
  color?: AvChipColor;
  size?: AvChipSize;
  variant?: AvChipVariant;
}

const AV_CHIP_BASE = 'av-chip';
const AV_CHIP_LABEL_BASE = 'av-chip__label';

export function avChipClasses(options: AvChipClassOptions = {}): string {
  const { color = 'default', size = 'md', variant = 'secondary' } = options;

  return [
    AV_CHIP_BASE,
    `${AV_CHIP_BASE}--${color}`,
    `${AV_CHIP_BASE}--${size}`,
    `${AV_CHIP_BASE}--${variant}`,
  ].join(' ');
}

export function avChipLabelClasses(): string {
  return AV_CHIP_LABEL_BASE;
}
