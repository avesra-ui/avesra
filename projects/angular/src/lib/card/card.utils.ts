import type { AvSurfaceVariant } from '../surface/surface.utils';

export type AvCardVariant = AvSurfaceVariant;

export interface AvCardClassOptions {
  variant?: AvCardVariant;
}

const AV_CARD_BASE = 'av-card';
const AV_CARD_HEADER_BASE = 'av-card__header';
const AV_CARD_TITLE_BASE = 'av-card__title';
const AV_CARD_DESCRIPTION_BASE = 'av-card__description';
const AV_CARD_CONTENT_BASE = 'av-card__content';
const AV_CARD_FOOTER_BASE = 'av-card__footer';

export function avCardClasses(options: AvCardClassOptions = {}): string {
  const { variant = 'default' } = options;

  return [AV_CARD_BASE, `${AV_CARD_BASE}--${variant}`].join(' ');
}

export function avCardHeaderClasses(): string {
  return AV_CARD_HEADER_BASE;
}

export function avCardTitleClasses(): string {
  return AV_CARD_TITLE_BASE;
}

export function avCardDescriptionClasses(): string {
  return AV_CARD_DESCRIPTION_BASE;
}

export function avCardContentClasses(): string {
  return AV_CARD_CONTENT_BASE;
}

export function avCardFooterClasses(): string {
  return AV_CARD_FOOTER_BASE;
}
