export type AvInputVariant = 'primary' | 'secondary';

export interface AvInputClassOptions {
  variant?: AvInputVariant;
  fullWidth?: boolean;
}

const AV_INPUT_BASE = 'av-input';

export function avInputClasses(options: AvInputClassOptions = {}): string {
  const { variant = 'primary', fullWidth = false } = options;

  return [
    AV_INPUT_BASE,
    `${AV_INPUT_BASE}--${variant}`,
    fullWidth && `${AV_INPUT_BASE}--full-width`,
  ]
    .filter(Boolean)
    .join(' ');
}
