export type AvSurfaceVariant = 'transparent' | 'default' | 'secondary' | 'tertiary';

export interface AvSurfaceClassOptions {
  variant?: AvSurfaceVariant;
}

const AV_SURFACE_BASE = 'av-surface';

export function avSurfaceClasses(options: AvSurfaceClassOptions = {}): string {
  const { variant = 'default' } = options;

  return [AV_SURFACE_BASE, `${AV_SURFACE_BASE}--${variant}`].join(' ');
}
