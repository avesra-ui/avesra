export type AvLinkVariant = 'primary' | 'secondary' | 'muted';

export type AvLinkUnderline = 'always' | 'hover' | 'none';

export interface AvLinkClassOptions {
  variant?: AvLinkVariant;
  underline?: AvLinkUnderline;
}

const AV_LINK_BASE = 'av-link';

export function avLinkClasses(options: AvLinkClassOptions = {}): string {
  const { variant = 'primary', underline = 'hover' } = options;

  return [
    AV_LINK_BASE,
    `${AV_LINK_BASE}--${variant}`,
    `${AV_LINK_BASE}--underline-${underline}`,
  ].join(' ');
}

export function avLinkIconClasses(): string {
  return 'av-link__icon';
}

export function isExternalUrl(href: string | null | undefined): boolean {
  if (!href) {
    return false;
  }

  return /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}
