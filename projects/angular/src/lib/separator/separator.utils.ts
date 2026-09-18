export type AvSeparatorOrientation = 'horizontal' | 'vertical';
export type AvSeparatorVariant = 'default' | 'secondary' | 'tertiary';

export interface AvSeparatorClassOptions {
  orientation?: AvSeparatorOrientation;
  variant?: AvSeparatorVariant;
}

const AV_SEPARATOR_BASE = 'av-separator';

export function avSeparatorClasses(options: AvSeparatorClassOptions = {}): string {
  const { orientation = 'horizontal', variant = 'default' } = options;

  return [
    AV_SEPARATOR_BASE,
    `${AV_SEPARATOR_BASE}--${orientation}`,
    `${AV_SEPARATOR_BASE}--${variant}`,
  ].join(' ');
}

export function avSeparatorContainerClasses(
  orientation: AvSeparatorOrientation = 'horizontal',
): string {
  return [
    'av-separator__container',
    `av-separator__container--${orientation}`,
  ].join(' ');
}

export interface AvSeparatorLineClassOptions {
  orientation?: AvSeparatorOrientation;
  variant?: AvSeparatorVariant;
}

export function avSeparatorLineClasses(
  options: AvSeparatorLineClassOptions = {},
): string {
  const { orientation = 'horizontal', variant = 'default' } = options;

  return [
    'av-separator__line',
    `av-separator__line--${orientation}`,
    `av-separator__line--${variant}`,
  ].join(' ');
}

export function avSeparatorContentClasses(
  orientation: AvSeparatorOrientation = 'horizontal',
): string {
  return [
    'av-separator__content',
    `av-separator__content--${orientation}`,
  ].join(' ');
}
