export const THEMING_STYLES_SNIPPET = `@import "tailwindcss";
@import "@avesra/styles";
`;

export const THEMING_APP_CONFIG_SNIPPET = `import { provideAvesraTheme } from '@avesra/styles';

export const appConfig = {
  providers: [provideAvesraTheme({ mode: 'system', persist: true })],
};
`;

export const THEMING_SERVICE_SNIPPET = `readonly theme = inject(AvThemeService);

theme.setMode('dark');        // 'light' | 'dark' | 'system'
theme.setDesignTheme('discord');
theme.setVibrantPalette(true);
theme.toggle();
theme.mode();
theme.colorScheme();
theme.designTheme();
`;

export const THEMING_DEFAULT_TOKENS_SNIPPET = `:root,
.av-light,
[data-av-theme="light"] {
  --av-radius: 0.5rem;
  --av-background: oklch(97.02% 0.005 0);
  --av-foreground: oklch(21.03% 0.005 0);
  --av-surface: oklch(100% 0.0025 0);
  --av-muted: oklch(55.17% 0.01 0);
  --av-accent: oklch(0% 0 0);
  --av-accent-foreground: oklch(99.11% 0 0);
  --av-default: oklch(94% 0.005 0);
  --av-border: oklch(90% 0.005 0);
  --av-danger: oklch(0.573 0.2249 21.97);
}

.av-dark,
.dark,
[data-av-theme="dark"] {
  --av-background: oklch(12% 0.005 0);
  --av-foreground: oklch(99.11% 0.005 0);
  --av-surface: oklch(21.03% 0.01 0);
  --av-muted: oklch(70.5% 0.01 0);
  --av-accent: oklch(98.48% 0 0);
  --av-accent-foreground: oklch(15% 0 0);
  --av-default: oklch(27.4% 0.005 0);
  --av-border: oklch(28% 0.005 0);
  --av-danger: oklch(0.7044 0.1872 23.19);
}
`;

export const THEMING_THEME_INLINE_SNIPPET = `@theme inline {
  --color-background: var(--av-background);
  --color-foreground: var(--av-foreground);
  --color-accent: var(--av-accent);
  --color-accent-foreground: var(--av-accent-foreground);
  --color-surface: var(--av-surface);
  --color-muted: var(--av-muted);
  --color-border: var(--av-border);
  --radius-md: calc(var(--av-radius) * 0.75);
  --radius-lg: var(--av-radius);
}
`;

export const THEMING_CONVENTION_SNIPPET = `--av-accent: oklch(0% 0 0);
--av-accent-foreground: oklch(99.11% 0 0);
`;

export const THEMING_TOKEN_USAGE_SNIPPET = `<div class="bg-background text-foreground">
  <button av-button>Themed by tokens</button>
</div>
`;

export const THEMING_RAW_UTILITIES_SNIPPET = `<div class="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
  dark: follows AvThemeService when @avesra/styles is imported after Tailwind.
</div>
`;

export const THEMING_ADD_COLOR_SNIPPET = `:root {
  --av-info: oklch(0.62 0.14 240);
  --av-info-foreground: oklch(0.98 0.01 240);
}

.av-dark,
.dark,
[data-av-theme="dark"] {
  --av-info: oklch(0.72 0.12 240);
  --av-info-foreground: oklch(0.16 0.04 240);
}

@theme inline {
  --color-info: var(--av-info);
  --color-info-foreground: var(--av-info-foreground);
}
`;

export const THEMING_SCOPE_SNIPPET = `.theme-brand {
  --av-accent: oklch(0.55 0.22 264);
  --av-accent-foreground: oklch(0.98 0.01 264);
  --av-radius: 1rem;
}
`;

export const THEMING_SCOPE_USAGE_SNIPPET = `<section class="theme-brand">
  <button av-button>Brand button</button>
</section>
`;

export const THEMING_ROUTE_THEME_SNIPPET = `@Component({
  selector: 'app-marketing-layout',
  imports: [RouterOutlet],
  host: { class: 'theme-brand' },
  template: \`<router-outlet />\`,
})
export class MarketingLayout {}
`;

export const THEMING_COLOR_FORMATS_SNIPPET = `:root {
  --av-accent: oklch(0% 0 0);
  --av-default: rgb(244 244 245);
  --av-muted: hsl(240 5% 45%);
  --av-border: #e5e5e5;
}
`;
