export type AvButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'danger-soft';

export type AvButtonSize = 'sm' | 'md' | 'lg';

export interface AvButtonClassOptions {
  variant?: AvButtonVariant;
  size?: AvButtonSize;
  fullWidth?: boolean;
  iconOnly?: boolean;
}

const AV_BUTTON_BASE = 'av-button';

export function avButtonClasses(options: AvButtonClassOptions = {}): string {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    iconOnly = false,
  } = options;

  return [
    AV_BUTTON_BASE,
    `${AV_BUTTON_BASE}--${variant}`,
    `${AV_BUTTON_BASE}--${size}`,
    fullWidth && `${AV_BUTTON_BASE}--full-width`,
    iconOnly && `${AV_BUTTON_BASE}--icon-only`,
  ]
    .filter(Boolean)
    .join(' ');
}
