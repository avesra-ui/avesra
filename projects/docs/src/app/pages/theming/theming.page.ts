import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvButtonComponent, AvChipComponent } from '@avesra/angular';
import { AvThemeService } from '@avesra/styles';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { ComponentPreviewComponent } from '../../components/component-preview/component-preview.component';
import { DocCodeBlockComponent } from '../../components/doc-code-block/doc-code-block.component';
import { DocPageComponent } from '../../components/doc-page/doc-page.component';
import { themingDemos } from '../../demos/theming';
import {
  DOCS_DESIGN_THEMES,
  type DocsDesignTheme,
} from '../../layout/docs-theme-picker/docs-theme-picker.config';
import type { DocTocItem } from '../../models/doc-toc.model';
import {
  THEMING_ADD_COLOR_SNIPPET,
  THEMING_APP_CONFIG_SNIPPET,
  THEMING_COLOR_FORMATS_SNIPPET,
  THEMING_CONVENTION_SNIPPET,
  THEMING_DEFAULT_TOKENS_SNIPPET,
  THEMING_RAW_UTILITIES_SNIPPET,
  THEMING_ROUTE_THEME_SNIPPET,
  THEMING_SCOPE_SNIPPET,
  THEMING_SCOPE_USAGE_SNIPPET,
  THEMING_SERVICE_SNIPPET,
  THEMING_STYLES_SNIPPET,
  THEMING_THEME_INLINE_SNIPPET,
  THEMING_TOKEN_USAGE_SNIPPET,
} from './theming.snippets';

interface ThemingStep {
  code: string;
  title: string;
  body: string;
  without: string;
}

interface TokenPair {
  surface: string;
  surfaceClass: string;
  foreground: string;
  foregroundClass: string;
}

interface TokenRow {
  token: string;
  utility: string;
  meaning: string;
  value: string;
}

interface RadiusOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-theming-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocCodeBlockComponent,
    AvButtonComponent,
    AvChipComponent,
    RouterLink,
    AppIconComponent,
  ],
  templateUrl: './theming.page.html',
  styleUrl: '../shared/doc-prose.scss',
})
export class ThemingPage {
  readonly theme = inject(AvThemeService);
  readonly demos = themingDemos;
  readonly presets = DOCS_DESIGN_THEMES;
  readonly previewRadius = signal('0.5rem');
  readonly radiusCopied = signal(false);

  readonly snippets = {
    styles: THEMING_STYLES_SNIPPET,
    appConfig: THEMING_APP_CONFIG_SNIPPET,
    service: THEMING_SERVICE_SNIPPET,
    defaultTokens: THEMING_DEFAULT_TOKENS_SNIPPET,
    themeInline: THEMING_THEME_INLINE_SNIPPET,
    convention: THEMING_CONVENTION_SNIPPET,
    tokenUsage: THEMING_TOKEN_USAGE_SNIPPET,
    rawUtilities: THEMING_RAW_UTILITIES_SNIPPET,
    addColor: THEMING_ADD_COLOR_SNIPPET,
    scope: THEMING_SCOPE_SNIPPET,
    scopeUsage: THEMING_SCOPE_USAGE_SNIPPET,
    routeTheme: THEMING_ROUTE_THEME_SNIPPET,
    colorFormats: THEMING_COLOR_FORMATS_SNIPPET,
  };

  readonly steps: ThemingStep[] = [
    {
      code: '@import "tailwindcss";',
      title: 'Tailwind first',
      body: 'Pulls in the utility engine. Avesra tokens must load after this so bg-accent and friends exist.',
      without: 'No Tailwind utilities resolve.',
    },
    {
      code: '@import "@avesra/styles";',
      title: 'Avesra tokens and CSS',
      body: 'Loads default Avesra tokens, component CSS, variants, and the @theme inline bridge.',
      without: 'Components apply classes, but the visuals never arrive.',
    },
    {
      code: '@theme inline { --color-accent: var(--av-accent); }',
      title: 'Tokens → utilities',
      body: 'inline emits var(--av-accent) instead of baking the light value, so dark mode and presets still win at runtime.',
      without: 'bg-accent does not exist, or dark mode keeps the light color.',
    },
    {
      code: '[data-av-theme="dark"] { --av-background: … }',
      title: 'Dark overrides',
      body: 'The same token names get new values. No component checks which mode is active.',
      without: 'Dark mode keeps the light palette.',
    },
    {
      code: 'provideAvesraTheme({ mode: "system", persist: true })',
      title: 'Write attributes on <html>',
      body: 'AvThemeService sets data-av-theme, light/dark classes, av-light / av-dark, and data-av-design-theme.',
      without: 'The toggle in the header does nothing. Tokens stay on the default light root.',
    },
    {
      code: 'dark:bg-zinc-950',
      title: 'Tailwind dark utilities',
      body: '@avesra/styles overrides the default dark: variant so utilities follow AvThemeService instead of prefers-color-scheme alone.',
      without: 'dark: styles only follow the OS theme and ignore the in-app toggle.',
    },
  ];

  readonly pairs: TokenPair[] = [
    {
      surface: '--av-background',
      surfaceClass: 'bg-background text-foreground border border-border',
      foreground: '--av-foreground',
      foregroundClass: 'bg-foreground text-background',
    },
    {
      surface: '--av-accent',
      surfaceClass: 'bg-accent text-accent-foreground',
      foreground: '--av-accent-foreground',
      foregroundClass: 'bg-accent-foreground text-accent',
    },
    {
      surface: '--av-surface',
      surfaceClass: 'bg-surface text-surface-foreground border border-border',
      foreground: '--av-surface-foreground',
      foregroundClass: 'bg-surface-foreground text-surface',
    },
    {
      surface: '--av-default',
      surfaceClass: 'bg-default text-default-foreground',
      foreground: '--av-default-foreground',
      foregroundClass: 'bg-default-foreground text-default',
    },
    {
      surface: '--av-danger',
      surfaceClass: 'bg-danger text-danger-foreground',
      foreground: '--av-danger-foreground',
      foregroundClass: 'bg-danger-foreground text-danger',
    },
    {
      surface: '--av-success',
      surfaceClass: 'bg-success text-success-foreground',
      foreground: '--av-success-foreground',
      foregroundClass: 'bg-success-foreground text-success',
    },
  ];

  readonly tokenGroups: { title: string; rows: TokenRow[] }[] = [
    {
      title: 'Base',
      rows: [
        {
          token: '--av-background',
          utility: 'bg-background',
          meaning: 'App canvas',
          value: 'oklch(97.02% 0.005 0)',
        },
        {
          token: '--av-foreground',
          utility: 'text-foreground',
          meaning: 'Default text',
          value: 'oklch(21.03% 0.005 0)',
        },
        {
          token: '--av-muted',
          utility: 'text-muted',
          meaning: 'Secondary text',
          value: 'oklch(55.17% 0.01 0)',
        },
        {
          token: '--av-accent',
          utility: 'bg-accent',
          meaning: 'Primary action',
          value: 'oklch(0% 0 0)',
        },
        {
          token: '--av-accent-foreground',
          utility: 'text-accent-foreground',
          meaning: 'Text on accent',
          value: 'oklch(99.11% 0 0)',
        },
        {
          token: '--av-default',
          utility: 'bg-default',
          meaning: 'Quiet fill',
          value: 'oklch(94% 0.005 0)',
        },
        {
          token: '--av-danger',
          utility: 'bg-danger',
          meaning: 'Error and delete',
          value: 'oklch(0.573 0.2249 21.97)',
        },
        {
          token: '--av-success',
          utility: 'bg-success',
          meaning: 'Success states',
          value: 'oklch(0.6277 0.1604 153.06)',
        },
        {
          token: '--av-warning',
          utility: 'bg-warning',
          meaning: 'Warning states',
          value: 'oklch(0.8446 0.1525 80.6)',
        },
      ],
    },
    {
      title: 'Surfaces',
      rows: [
        {
          token: '--av-surface',
          utility: 'bg-surface',
          meaning: 'Cards and raised panels',
          value: 'oklch(100% 0.0025 0)',
        },
        {
          token: '--av-overlay',
          utility: 'bg-overlay',
          meaning: 'Dialogs, menus, popovers',
          value: 'oklch(100% 0.0015 0)',
        },
      ],
    },
    {
      title: 'Form',
      rows: [
        {
          token: '--av-border',
          utility: 'border-border',
          meaning: 'Default border',
          value: 'oklch(90% 0.005 0)',
        },
        {
          token: '--av-field-background',
          utility: 'bg-field',
          meaning: 'Input fill',
          value: 'oklch(100% 0.0025 0)',
        },
        {
          token: '--av-focus',
          utility: 'outline / ring',
          meaning: 'Focus ring',
          value: 'oklch(0% 0 0)',
        },
      ],
    },
  ];

  readonly radiusOptions: RadiusOption[] = [
    { label: '0rem', value: '0rem' },
    { label: '0.25rem', value: '0.25rem' },
    { label: '0.5rem', value: '0.5rem' },
    { label: '0.75rem', value: '0.75rem' },
    { label: '1rem', value: '1rem' },
  ];

  readonly radiusRows = [
    { utility: 'rounded-sm', definition: 'calc(var(--av-radius) * 0.5)' },
    { utility: 'rounded-md', definition: 'calc(var(--av-radius) * 0.75)' },
    { utility: 'rounded-lg', definition: 'var(--av-radius)' },
    { utility: 'rounded-xl', definition: 'calc(var(--av-radius) * 1.5)' },
  ];

  readonly issues = [
    {
      title: 'Toggling dark mode changes nothing.',
      cause: 'provideAvesraTheme() is missing, so nothing writes data-av-theme on <html>.',
      fix: 'Register the provider and call theme.setMode() or use the docs header toggle.',
    },
    {
      title: 'bg-accent and text-foreground do not exist.',
      cause: '@avesra/styles was imported before Tailwind, or not imported at all.',
      fix: 'Keep @import "tailwindcss"; first, then @import "@avesra/styles";',
    },
    {
      title: 'Dark tokens exist, but the light colors stay on screen.',
      cause: 'A local @theme block copied values instead of using @theme inline.',
      fix: 'Map tokens with @theme inline so the output keeps var(--av-*).',
    },
    {
      title: 'A custom token works in one component and nowhere else.',
      cause: 'The variable was declared in a component stylesheet instead of :root.',
      fix: 'Declare --av-* on :root / [data-av-theme="dark"], then scope with a container class if needed.',
    },
  ];

  readonly toc: DocTocItem[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'how-it-works', title: 'How it works' },
    { id: 'convention', title: 'Convention' },
    { id: 'token-reference', title: 'Token reference' },
    { id: 'radius', title: 'Radius & scale' },
    { id: 'design-presets', title: 'Design presets' },
    { id: 'dark-mode', title: 'Dark mode' },
    { id: 'customizing', title: 'Customizing' },
    { id: 'troubleshooting', title: 'Troubleshooting' },
  ];

  setPreviewRadius(value: string): void {
    this.previewRadius.set(value);
  }

  async copyRadiusDeclaration(): Promise<void> {
    const declaration = `--av-radius: ${this.previewRadius()};`;

    try {
      await navigator.clipboard.writeText(declaration);
      this.radiusCopied.set(true);
      window.setTimeout(() => this.radiusCopied.set(false), 1600);
    } catch {
      this.radiusCopied.set(false);
    }
  }

  setPreset(id: DocsDesignTheme): void {
    this.theme.setDesignTheme(id);
  }
}
