export type AvSliderOrientation = 'horizontal' | 'vertical';

export interface AvSliderClassOptions {
  orientation?: AvSliderOrientation;
}

const AV_SLIDER_BASE = 'av-slider';

export function avSliderClasses(options: AvSliderClassOptions = {}): string {
  const { orientation = 'horizontal' } = options;

  return [AV_SLIDER_BASE, `${AV_SLIDER_BASE}--${orientation}`].filter(Boolean).join(' ');
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function snapToStep(value: number, min: number, max: number, step: number): number {
  const rounded = Math.round((value - min) / step) * step + min;
  return clamp(rounded, min, max);
}

export function valueToPercent(value: number, min: number, max: number): number {
  if (max === min) {
    return 0;
  }

  return (value - min) / (max - min);
}

export function percentToValue(percent: number, min: number, max: number, step: number): number {
  return snapToStep(min + percent * (max - min), min, max, step);
}

export function normalizeSliderValue(value: number | number[]): number[] {
  return Array.isArray(value) ? [...value] : [value];
}

export function denormalizeSliderValue(values: number[]): number | number[] {
  return values.length === 1 ? values[0] : values;
}

export function formatSliderValues(
  values: number[],
  formatOptions?: Intl.NumberFormatOptions,
): string {
  const formatter = new Intl.NumberFormat(undefined, formatOptions);
  return values.map((value) => formatter.format(value)).join(' – ');
}
