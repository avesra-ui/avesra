export type AvSpinnerColor = 'current' | 'accent' | 'success' | 'warning' | 'danger';
export type AvSpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvSpinnerClassOptions {
  color?: AvSpinnerColor;
  size?: AvSpinnerSize;
}

const AV_SPINNER_BASE = 'av-spinner';

export function avSpinnerClasses(options: AvSpinnerClassOptions = {}): string {
  const { color = 'accent', size = 'md' } = options;

  return [AV_SPINNER_BASE, `${AV_SPINNER_BASE}--${color}`, `${AV_SPINNER_BASE}--${size}`].join(' ');
}
