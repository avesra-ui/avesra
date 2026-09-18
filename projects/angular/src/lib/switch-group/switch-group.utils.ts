export type AvSwitchGroupOrientation = 'horizontal' | 'vertical';

export interface AvSwitchGroupClassOptions {
  orientation?: AvSwitchGroupOrientation;
}

const AV_SWITCH_GROUP_BASE = 'av-switch-group';

export function avSwitchGroupClasses(options: AvSwitchGroupClassOptions = {}): string {
  const { orientation = 'vertical' } = options;

  return [AV_SWITCH_GROUP_BASE, `${AV_SWITCH_GROUP_BASE}--${orientation}`].join(' ');
}
