import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  computed,
  DestroyRef,
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
  untracked,
} from '@angular/core';

import {
  DEFAULT_AV_DESIGN_THEME,
  isDefaultDesignTheme,
  AV_DESIGN_THEME_ATTRIBUTE,
  AV_THEME_ATTRIBUTE,
  AV_THEME_CLASS_PREFIX,
  AV_THEME_OPTIONS,
  AV_VIBRANT_PALETTE_ATTRIBUTE,
  AvColorScheme,
  AvDesignTheme,
  AvThemeMode,
  AvThemeOptions,
} from './theme.model';

const DEFAULT_STORAGE_KEY = 'av-theme-mode';
const DEFAULT_DESIGN_STORAGE_KEY = 'av-design-theme';
const DEFAULT_VIBRANT_STORAGE_KEY = 'av-vibrant-palette';

@Injectable({ providedIn: 'root' })
export class AvThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly options = inject(AV_THEME_OPTIONS, { optional: true }) ?? {};

  private readonly storageKey = this.options.storageKey ?? DEFAULT_STORAGE_KEY;
  private readonly designStorageKey = this.options.designStorageKey ?? DEFAULT_DESIGN_STORAGE_KEY;
  private readonly vibrantStorageKey = this.options.vibrantStorageKey ?? DEFAULT_VIBRANT_STORAGE_KEY;
  private readonly persistPreference = this.options.persist ?? true;

  private readonly _mode = signal<AvThemeMode>(this.resolveInitialMode());
  private readonly _designTheme = signal<AvDesignTheme>(this.resolveInitialDesignTheme());
  private readonly _vibrantPalette = signal<boolean>(this.resolveInitialVibrantPalette());
  private systemScheme = signal<AvColorScheme>(this.readSystemScheme());
  private browserInitialized = false;

  /** Current user preference (`light`, `dark`, or `system`). */
  readonly mode = this._mode.asReadonly();

  /** Current design preset (`default` clears the attribute). */
  readonly designTheme = this._designTheme.asReadonly();

  /** Whether the vibrant (more saturated) soft foreground palette is active. */
  readonly vibrantPalette = this._vibrantPalette.asReadonly();

  /** Resolved color scheme applied to the document. */
  readonly colorScheme = computed<AvColorScheme>(() => {
    const mode = this._mode();
    return mode === 'system' ? this.systemScheme() : mode;
  });

  constructor() {
    const registerBrowserEffects = () => {
      if (this.browserInitialized || !isPlatformBrowser(this.platformId)) {
        return;
      }

      this.browserInitialized = true;
      this.listenToSystemPreference();
      this.applyScheme(this.colorScheme());
      this.applyDesignTheme(this._designTheme());
      this.applyVibrantPalette(this._vibrantPalette());

      effect(() => {
        const scheme = this.colorScheme();
        untracked(() => this.applyScheme(scheme));
      });

      effect(() => {
        const designTheme = this._designTheme();
        untracked(() => this.applyDesignTheme(designTheme));
      });

      effect(() => {
        const vibrantPalette = this._vibrantPalette();
        untracked(() => this.applyVibrantPalette(vibrantPalette));
      });
    };

    if (isPlatformBrowser(this.platformId)) {
      registerBrowserEffects();
    }

    afterNextRender(() => registerBrowserEffects());
  }

  /** Set the theme mode and optionally persist it. */
  setMode(mode: AvThemeMode): void {
    this._mode.set(mode);

    if (this.persistPreference && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, mode);
    }
  }

  /** Set the design preset and optionally persist it. */
  setDesignTheme(designTheme: AvDesignTheme): void {
    this._designTheme.set(designTheme);

    if (this.persistPreference && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.designStorageKey, designTheme);
    }
  }

  /** Enable or disable the vibrant soft foreground palette and optionally persist it. */
  setVibrantPalette(enabled: boolean): void {
    this._vibrantPalette.set(enabled);

    if (this.persistPreference && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.vibrantStorageKey, String(enabled));
    }
  }

  /** Toggle between light and dark (skips system mode). */
  toggle(): void {
    const next: AvColorScheme = this.colorScheme() === 'light' ? 'dark' : 'light';
    this.setMode(next);
  }

  private resolveInitialMode(): AvThemeMode {
    if (this.options.mode) {
      return this.options.mode;
    }

    if (this.persistPreference && isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    }

    return 'system';
  }

  private resolveInitialDesignTheme(): AvDesignTheme {
    if (this.options.designTheme) {
      return this.options.designTheme;
    }

    if (this.persistPreference && isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.designStorageKey);
      if (stored) {
        return stored;
      }
    }

    return DEFAULT_AV_DESIGN_THEME;
  }

  private resolveInitialVibrantPalette(): boolean {
    if (this.options.vibrantPalette !== undefined) {
      return this.options.vibrantPalette;
    }

    if (this.persistPreference && isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.vibrantStorageKey);
      if (stored === 'true') {
        return true;
      }
      if (stored === 'false') {
        return false;
      }
    }

    return false;
  }

  private readSystemScheme(): AvColorScheme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private listenToSystemPreference(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (event: MediaQueryListEvent) => {
      this.systemScheme.set(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handler);
    this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', handler));
  }

  private applyScheme(scheme: AvColorScheme): void {
    const root = this.document.documentElement;

    root.setAttribute(AV_THEME_ATTRIBUTE, scheme);
    root.classList.remove('light', 'dark', `${AV_THEME_CLASS_PREFIX}light`, `${AV_THEME_CLASS_PREFIX}dark`);
    root.classList.add(scheme, `${AV_THEME_CLASS_PREFIX}${scheme}`);
  }

  private applyDesignTheme(designTheme: AvDesignTheme): void {
    const root = this.document.documentElement;

    if (isDefaultDesignTheme(designTheme)) {
      root.removeAttribute(AV_DESIGN_THEME_ATTRIBUTE);
      return;
    }

    root.setAttribute(AV_DESIGN_THEME_ATTRIBUTE, designTheme);
  }

  private applyVibrantPalette(enabled: boolean): void {
    const root = this.document.documentElement;

    if (enabled) {
      root.setAttribute(AV_VIBRANT_PALETTE_ATTRIBUTE, 'true');
      return;
    }

    root.removeAttribute(AV_VIBRANT_PALETTE_ATTRIBUTE);
  }
}

/** Re-export for consumers configuring DI. */
export type { AvThemeOptions };
