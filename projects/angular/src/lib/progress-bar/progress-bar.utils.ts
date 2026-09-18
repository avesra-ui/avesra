export type AvProgressBarColor = 'default' | 'accent' | 'success' | 'warning' | 'danger';
export type AvProgressBarSize = 'sm' | 'md' | 'lg';

export interface AvProgressBarClassOptions {
  color?: AvProgressBarColor;
  size?: AvProgressBarSize;
}

const AV_PROGRESS_BAR_BASE = 'av-progress-bar';
const AV_PROGRESS_BAR_OUTPUT_BASE = 'av-progress-bar__output';
const AV_PROGRESS_BAR_TRACK_BASE = 'av-progress-bar__track';
const AV_PROGRESS_BAR_FILL_BASE = 'av-progress-bar__fill';

export function avProgressBarClasses(options: AvProgressBarClassOptions = {}): string {
  const { color = 'accent', size = 'md' } = options;

  return [
    AV_PROGRESS_BAR_BASE,
    `${AV_PROGRESS_BAR_BASE}--${color}`,
    `${AV_PROGRESS_BAR_BASE}--${size}`,
  ].join(' ');
}

export function avProgressBarOutputClasses(): string {
  return AV_PROGRESS_BAR_OUTPUT_BASE;
}

export function avProgressBarTrackClasses(): string {
  return AV_PROGRESS_BAR_TRACK_BASE;
}

export function avProgressBarFillClasses(): string {
  return AV_PROGRESS_BAR_FILL_BASE;
}

export function clampProgressBarValue(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function getProgressBarPercentage(value: number, min: number, max: number): number {
  if (max === min) {
    return 0;
  }

  return ((clampProgressBarValue(value, min, max) - min) / (max - min)) * 100;
}

export function formatProgressBarValue(
  value: number,
  formatOptions?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(undefined, formatOptions).format(value);
}
