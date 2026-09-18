export type AvToggleButtonVariant = 'default' | 'ghost';

export type AvToggleButtonSize = 'sm' | 'md' | 'lg';

export interface AvToggleButtonClassOptions {
  variant?: AvToggleButtonVariant;
  size?: AvToggleButtonSize;
  iconOnly?: boolean;
}

const AV_TOGGLE_BUTTON_BASE = 'av-toggle-button';

export function avToggleButtonClasses(options: AvToggleButtonClassOptions = {}): string {
  const { variant = 'default', size = 'md', iconOnly = false } = options;

  return [
    AV_TOGGLE_BUTTON_BASE,
    `${AV_TOGGLE_BUTTON_BASE}--${variant}`,
    `${AV_TOGGLE_BUTTON_BASE}--${size}`,
    iconOnly && `${AV_TOGGLE_BUTTON_BASE}--icon-only`,
  ]
    .filter(Boolean)
    .join(' ');
}
