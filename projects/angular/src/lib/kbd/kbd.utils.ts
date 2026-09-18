export type AvKbdVariant = 'default' | 'light';

export interface AvKbdClassOptions {
  variant?: AvKbdVariant;
}

const AV_KBD_BASE = 'av-kbd';
const AV_KBD_ABBR_BASE = 'av-kbd__abbr';
const AV_KBD_CONTENT_BASE = 'av-kbd__content';

export function avKbdClasses(options: AvKbdClassOptions = {}): string {
  const { variant = 'default' } = options;

  return [AV_KBD_BASE, variant === 'light' && `${AV_KBD_BASE}--light`]
    .filter(Boolean)
    .join(' ');
}

export function avKbdAbbrClasses(): string {
  return AV_KBD_ABBR_BASE;
}

export function avKbdContentClasses(): string {
  return AV_KBD_CONTENT_BASE;
}
