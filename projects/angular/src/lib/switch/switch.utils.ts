export type AvSwitchSize = 'sm' | 'md' | 'lg';

export interface AvSwitchClassOptions {
  size?: AvSwitchSize;
}

const AV_SWITCH_BASE = 'av-switch';

export function avSwitchClasses(options: AvSwitchClassOptions = {}): string {
  const { size = 'md' } = options;

  return [AV_SWITCH_BASE, `${AV_SWITCH_BASE}--${size}`].join(' ');
}
