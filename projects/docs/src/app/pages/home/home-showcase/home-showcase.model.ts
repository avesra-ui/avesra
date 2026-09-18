export type HomeShowcaseTab = 'components' | 'dashboard' | 'mail' | 'chat' | 'finances';

export interface HomeShowcaseTabOption {
  id: HomeShowcaseTab;
  label: string;
  disabled?: boolean;
}

export interface HomeAccentOption {
  id: string;
  label: string;
  /** Homepage accent swatch color. */
  value: string;
}

export const HOME_SHOWCASE_TABS: HomeShowcaseTabOption[] = [
  { id: 'components', label: 'Components' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'mail', label: 'Mail', disabled: true },
  { id: 'chat', label: 'Chat', disabled: true },
  { id: 'finances', label: 'Finances', disabled: true },
];

/** Homepage accent swatch ids. */
export const HOME_ACCENTS: HomeAccentOption[] = [
  { id: 'pink', label: 'Pink', value: '#FF81B9' },
  { id: 'coral', label: 'Coral', value: '#FF8289' },
  { id: 'orange', label: 'Orange', value: '#FF9A00' },
  { id: 'yellow', label: 'Yellow', value: '#DCBE00' },
  { id: 'green', label: 'Green', value: '#72DB5A' },
  { id: 'cyan', label: 'Cyan', value: '#00D7FF' },
  { id: 'blue', label: 'Blue', value: '#5DBFFF' },
  { id: 'purple', label: 'Purple', value: '#A8ABFF' },
];

export function accentCssVars(accent: string): Record<string, string> {
  return {
    '--av-accent': accent,
    '--av-accent-foreground': 'var(--av-snow, oklch(0.99 0 0))',
    '--av-accent-hover': `color-mix(in oklab, ${accent} 90%, white 10%)`,
    '--av-accent-soft': `color-mix(in oklab, ${accent} 15%, transparent)`,
    '--av-accent-soft-foreground': `color-mix(in oklab, ${accent} 70%, var(--av-foreground) 30%)`,
    '--av-accent-soft-hover': `color-mix(in oklab, ${accent} 20%, transparent)`,
    '--av-focus': accent,
  };
}
