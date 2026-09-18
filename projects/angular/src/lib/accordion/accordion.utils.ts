export type AvAccordionVariant = 'default' | 'surface';

export interface AvAccordionClassOptions {
  variant?: AvAccordionVariant;
}

const AV_ACCORDION_BASE = 'av-accordion';
const AV_ACCORDION_ITEM_BASE = 'av-accordion__item';
const AV_ACCORDION_HEADING_BASE = 'av-accordion__heading';
const AV_ACCORDION_TRIGGER_BASE = 'av-accordion__trigger';
const AV_ACCORDION_PANEL_BASE = 'av-accordion__panel';
const AV_ACCORDION_BODY_BASE = 'av-accordion__body';
const AV_ACCORDION_BODY_INNER_BASE = 'av-accordion__body-inner';
const AV_ACCORDION_INDICATOR_BASE = 'av-accordion__indicator';

export function avAccordionClasses(options: AvAccordionClassOptions = {}): string {
  const { variant = 'default' } = options;

  return [
    AV_ACCORDION_BASE,
    variant !== 'default' && `${AV_ACCORDION_BASE}--${variant}`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avAccordionItemClasses(): string {
  return AV_ACCORDION_ITEM_BASE;
}

export function avAccordionHeadingClasses(): string {
  return AV_ACCORDION_HEADING_BASE;
}

export function avAccordionTriggerClasses(): string {
  return AV_ACCORDION_TRIGGER_BASE;
}

export function avAccordionPanelClasses(): string {
  return AV_ACCORDION_PANEL_BASE;
}

export function avAccordionBodyClasses(): string {
  return AV_ACCORDION_BODY_BASE;
}

export function avAccordionBodyInnerClasses(extraClass = ''): string {
  const parts = [AV_ACCORDION_BODY_INNER_BASE];
  const trimmed = extraClass.trim();
  if (trimmed) {
    parts.push(trimmed);
  }
  return parts.join(' ');
}

export function avAccordionIndicatorClasses(): string {
  return AV_ACCORDION_INDICATOR_BASE;
}
