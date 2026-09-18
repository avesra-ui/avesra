export type AvTypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'body-sm'
  | 'body-xs'
  | 'code';

export type AvTypographyAlign = 'start' | 'center' | 'end' | 'justify';

export type AvTypographyColor = 'default' | 'muted';

export type AvTypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type AvTypographyParagraphSize = 'base' | 'sm' | 'xs';

export type AvTypographyHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface AvTypographyClassOptions {
  type?: AvTypographyType;
  align?: AvTypographyAlign;
  color?: AvTypographyColor;
  weight?: AvTypographyWeight;
  truncate?: boolean;
}

const BASE = 'av-typography';

export function avTypographyClasses(options: AvTypographyClassOptions = {}): string {
  const {
    type = 'body',
    align = 'start',
    color = 'default',
    weight,
    truncate = false,
  } = options;

  return [
    BASE,
    `${BASE}--${type}`,
    `${BASE}--align-${align}`,
    `${BASE}--color-${color}`,
    weight ? `${BASE}--weight-${weight}` : '',
    truncate ? `${BASE}--truncate` : '',
  ]
    .filter(Boolean)
    .join(' ');
}

export function avTypographyProseClasses(): string {
  return 'av-typography-prose';
}

export function avTypographyHeadingType(level: AvTypographyHeadingLevel): AvTypographyType {
  return `h${level}` as AvTypographyType;
}

export function avTypographyParagraphType(
  size: AvTypographyParagraphSize,
): AvTypographyType {
  if (size === 'sm') {
    return 'body-sm';
  }
  if (size === 'xs') {
    return 'body-xs';
  }
  return 'body';
}
