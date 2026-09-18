export const DOCS_DESIGN_THEME_IDS = [
  'default',
  'sky',
  'lavender',
  'mint',
  'netflix',
  'spotify',
  'coinbase',
  'airbnb',
  'discord',
  'rabbit',
] as const;

export type DocsDesignTheme = (typeof DOCS_DESIGN_THEME_IDS)[number];

export interface DocsDesignThemeOption {
  id: DocsDesignTheme;
  label: string;
  swatchClass: string;
}

export function isDocsDesignTheme(value: string | null | undefined): value is DocsDesignTheme {
  return DOCS_DESIGN_THEME_IDS.includes(value as DocsDesignTheme);
}

export const DOCS_DESIGN_THEMES: DocsDesignThemeOption[] = [
  { id: 'default', label: 'Default', swatchClass: 'av-docs-theme-swatch--default' },
  { id: 'sky', label: 'Sky', swatchClass: 'av-docs-theme-swatch--sky' },
  { id: 'lavender', label: 'Lavender', swatchClass: 'av-docs-theme-swatch--lavender' },
  { id: 'mint', label: 'Mint', swatchClass: 'av-docs-theme-swatch--mint' },
  { id: 'netflix', label: 'Netflix', swatchClass: 'av-docs-theme-swatch--netflix' },
  { id: 'spotify', label: 'Spotify', swatchClass: 'av-docs-theme-swatch--spotify' },
  { id: 'coinbase', label: 'Coinbase', swatchClass: 'av-docs-theme-swatch--coinbase' },
  { id: 'airbnb', label: 'Airbnb', swatchClass: 'av-docs-theme-swatch--airbnb' },
  { id: 'discord', label: 'Discord', swatchClass: 'av-docs-theme-swatch--discord' },
  { id: 'rabbit', label: 'Rabbit', swatchClass: 'av-docs-theme-swatch--rabbit' },
];
