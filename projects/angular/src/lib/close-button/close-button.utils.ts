export type AvCloseButtonVariant = 'default';

export interface AvCloseButtonClassOptions {
  variant?: AvCloseButtonVariant;
}

const AV_CLOSE_BUTTON_BASE = 'av-close-button';

export function avCloseButtonClasses(options: AvCloseButtonClassOptions = {}): string {
  const { variant = 'default' } = options;

  return [AV_CLOSE_BUTTON_BASE, `${AV_CLOSE_BUTTON_BASE}--${variant}`].join(' ');
}
