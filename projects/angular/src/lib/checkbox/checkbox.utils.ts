export type AvCheckboxVariant = 'primary' | 'secondary';

export interface AvCheckboxClassOptions {
  variant?: AvCheckboxVariant;
}

const AV_CHECKBOX_BASE = 'av-checkbox';

export function avCheckboxClasses(options: AvCheckboxClassOptions = {}): string {
  const { variant = 'primary' } = options;

  return [AV_CHECKBOX_BASE, `${AV_CHECKBOX_BASE}--${variant}`].join(' ');
}
