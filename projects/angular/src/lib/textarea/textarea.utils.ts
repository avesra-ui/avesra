export type AvTextareaVariant = 'primary' | 'secondary';

export interface AvTextareaClassOptions {
  variant?: AvTextareaVariant;
  fullWidth?: boolean;
}

const AV_TEXTAREA_BASE = 'av-textarea';

export function avTextareaClasses(options: AvTextareaClassOptions = {}): string {
  const { variant = 'primary', fullWidth = false } = options;

  return [
    AV_TEXTAREA_BASE,
    `${AV_TEXTAREA_BASE}--${variant}`,
    fullWidth && `${AV_TEXTAREA_BASE}--full-width`,
  ]
    .filter(Boolean)
    .join(' ');
}
