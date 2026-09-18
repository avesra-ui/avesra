export type AvAlertStatus = 'default' | 'accent' | 'success' | 'warning' | 'danger';

export interface AvAlertClassOptions {
  status?: AvAlertStatus;
}

const AV_ALERT_BASE = 'av-alert';
const AV_ALERT_INDICATOR_BASE = 'av-alert__indicator';
const AV_ALERT_CONTENT_BASE = 'av-alert__content';
const AV_ALERT_TITLE_BASE = 'av-alert__title';
const AV_ALERT_DESCRIPTION_BASE = 'av-alert__description';

export function avAlertClasses(options: AvAlertClassOptions = {}): string {
  const { status = 'default' } = options;

  return [AV_ALERT_BASE, `${AV_ALERT_BASE}--${status}`].join(' ');
}

export function avAlertIndicatorClasses(): string {
  return AV_ALERT_INDICATOR_BASE;
}

export function avAlertContentClasses(): string {
  return AV_ALERT_CONTENT_BASE;
}

export function avAlertTitleClasses(): string {
  return AV_ALERT_TITLE_BASE;
}

export function avAlertDescriptionClasses(): string {
  return AV_ALERT_DESCRIPTION_BASE;
}
