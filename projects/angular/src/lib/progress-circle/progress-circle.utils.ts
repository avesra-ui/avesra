export type AvProgressCircleColor = 'default' | 'accent' | 'success' | 'warning' | 'danger';
export type AvProgressCircleSize = 'sm' | 'md' | 'lg';

export interface AvProgressCircleClassOptions {
  color?: AvProgressCircleColor;
  size?: AvProgressCircleSize;
}

export const AV_PROGRESS_CIRCLE_STROKE_WIDTH = 4;
export const AV_PROGRESS_CIRCLE_CENTER = 18;
export const AV_PROGRESS_CIRCLE_RADIUS =
  AV_PROGRESS_CIRCLE_CENTER - AV_PROGRESS_CIRCLE_STROKE_WIDTH / 2;
export const AV_PROGRESS_CIRCLE_CIRCUMFERENCE = 2 * Math.PI * AV_PROGRESS_CIRCLE_RADIUS;

const AV_PROGRESS_CIRCLE_BASE = 'av-progress-circle';
const AV_PROGRESS_CIRCLE_TRACK_BASE = 'av-progress-circle__track';
const AV_PROGRESS_CIRCLE_TRACK_CIRCLE_BASE = 'av-progress-circle__track-circle';
const AV_PROGRESS_CIRCLE_FILL_CIRCLE_BASE = 'av-progress-circle__fill-circle';

export function avProgressCircleClasses(options: AvProgressCircleClassOptions = {}): string {
  const { color = 'accent', size = 'md' } = options;

  return [
    AV_PROGRESS_CIRCLE_BASE,
    `${AV_PROGRESS_CIRCLE_BASE}--${color}`,
    `${AV_PROGRESS_CIRCLE_BASE}--${size}`,
  ].join(' ');
}

export function avProgressCircleTrackClasses(): string {
  return AV_PROGRESS_CIRCLE_TRACK_BASE;
}

export function avProgressCircleTrackCircleClasses(): string {
  return AV_PROGRESS_CIRCLE_TRACK_CIRCLE_BASE;
}

export function avProgressCircleFillCircleClasses(): string {
  return AV_PROGRESS_CIRCLE_FILL_CIRCLE_BASE;
}

export function clampProgressCircleValue(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function getProgressCirclePercentage(
  value: number,
  min: number,
  max: number,
): number {
  if (max === min) {
    return 0;
  }

  return ((clampProgressCircleValue(value, min, max) - min) / (max - min)) * 100;
}

export function getProgressCircleCircumference(radius: number): number {
  return 2 * Math.PI * radius;
}

export function getProgressCircleStrokeDashoffset(
  percentage: number,
  isIndeterminate: boolean,
  circumference: number = AV_PROGRESS_CIRCLE_CIRCUMFERENCE,
): number {
  if (isIndeterminate) {
    return circumference * 0.75;
  }

  return circumference - (percentage / 100) * circumference;
}
