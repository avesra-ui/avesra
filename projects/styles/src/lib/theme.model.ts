import { InjectionToken } from '@angular/core';

/** Resolved light or dark color scheme applied to the document. */
export type AvColorScheme = 'light' | 'dark';

/** User-selected theme preference including system auto-detection. */
export type AvThemeMode = AvColorScheme | 'system';

/** DOM attribute used to set the active color scheme. */
export const AV_THEME_ATTRIBUTE = 'data-av-theme';

/** DOM attribute used to set the active design preset. */
export const AV_DESIGN_THEME_ATTRIBUTE = 'data-av-design-theme';

/** DOM attribute used to opt into more saturated soft foreground colors. */
export const AV_VIBRANT_PALETTE_ATTRIBUTE = 'data-av-vibrant-palette';

/** CSS class applied alongside the theme attribute. */
export const AV_THEME_CLASS_PREFIX = 'av-';

/** Built-in Avesra preset id. Use `default` to clear `data-av-design-theme`. */
export const DEFAULT_AV_DESIGN_THEME = 'default';

/**
 * Design preset written to `data-av-design-theme`.
 * `@avesra/styles` ships `default` only; apps/docs may use any string id for custom presets.
 */
export type AvDesignTheme = string;

export function isDefaultDesignTheme(value: string | null | undefined): boolean {
  return !value || value === DEFAULT_AV_DESIGN_THEME;
}

export interface AvThemeOptions {
  /** Initial theme mode. Defaults to `'system'`. */
  mode?: AvThemeMode;
  /** Initial design preset. Defaults to `'default'`. */
  designTheme?: AvDesignTheme;
  /** localStorage key for persisting user preference. Defaults to `'av-theme-mode'`. */
  storageKey?: string;
  /** localStorage key for design preset. Defaults to `'av-design-theme'`. */
  designStorageKey?: string;
  /** Initial vibrant palette preference. Defaults to `false`. */
  vibrantPalette?: boolean;
  /** localStorage key for vibrant palette. Defaults to `'av-vibrant-palette'`. */
  vibrantStorageKey?: string;
  /** Persist theme preference to localStorage. Defaults to `true`. */
  persist?: boolean;
}

export const AV_THEME_OPTIONS = new InjectionToken<AvThemeOptions>('AV_THEME_OPTIONS');
