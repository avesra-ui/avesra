/*
 * Public API Surface of @avesra/styles
 */

export {
  DEFAULT_AV_DESIGN_THEME,
  isDefaultDesignTheme,
  AV_DESIGN_THEME_ATTRIBUTE,
  AV_THEME_ATTRIBUTE,
  AV_THEME_CLASS_PREFIX,
  AV_THEME_OPTIONS,
  AV_VIBRANT_PALETTE_ATTRIBUTE,
} from './lib/theme.model';
export type {
  AvColorScheme,
  AvDesignTheme,
  AvThemeMode,
  AvThemeOptions,
} from './lib/theme.model';

export { AvThemeService } from './lib/theme.service';
export { provideAvesraTheme } from './lib/provide-avesra-theme';
