export type AvRadioVariant = 'primary' | 'secondary';

export interface AvRadioClassOptions {
  variant?: AvRadioVariant;
}

const AV_RADIO_BASE = 'av-radio';

export function avRadioClasses(options: AvRadioClassOptions = {}): string {
  const { variant = 'primary' } = options;

  return [AV_RADIO_BASE, `${AV_RADIO_BASE}--${variant}`].join(' ');
}
