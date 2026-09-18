export type AvMeterColor = 'default' | 'accent' | 'success' | 'warning' | 'danger';
export type AvMeterSize = 'sm' | 'md' | 'lg';

export interface AvMeterClassOptions {
  color?: AvMeterColor;
  size?: AvMeterSize;
}

const AV_METER_BASE = 'av-meter';
const AV_METER_OUTPUT_BASE = 'av-meter__output';
const AV_METER_TRACK_BASE = 'av-meter__track';
const AV_METER_FILL_BASE = 'av-meter__fill';

export function avMeterClasses(options: AvMeterClassOptions = {}): string {
  const { color = 'accent', size = 'md' } = options;

  return [
    AV_METER_BASE,
    `${AV_METER_BASE}--${color}`,
    `${AV_METER_BASE}--${size}`,
  ].join(' ');
}

export function avMeterOutputClasses(): string {
  return AV_METER_OUTPUT_BASE;
}

export function avMeterTrackClasses(): string {
  return AV_METER_TRACK_BASE;
}

export function avMeterFillClasses(): string {
  return AV_METER_FILL_BASE;
}

export function clampMeterValue(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function getMeterPercentage(value: number, min: number, max: number): number {
  if (max === min) {
    return 0;
  }

  return ((clampMeterValue(value, min, max) - min) / (max - min)) * 100;
}

export function formatMeterValue(
  value: number,
  formatOptions?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(undefined, formatOptions).format(value);
}
