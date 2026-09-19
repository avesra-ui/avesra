# @avesra/styles

The core Avesra styles package: design tokens, themes, component CSS, and Tailwind CSS v4 utilities. This is the visual foundation of the design system. Angular components live in [`@avesra/angular`](https://www.npmjs.com/package/@avesra/angular) and apply these classes.

## Documentation

Run the handbook from the monorepo:

```bash
npm run start:docs
```

- **Installation** — `/docs/installation`
- **Theming** — `/docs/theming`
- **Components** — `/docs/components`

Source and issues: [github.com/avesra-ui](https://github.com/avesra-ui)

## Installation

```bash
npm install @avesra/styles
# or
pnpm add @avesra/styles
# or
yarn add @avesra/styles
```

**Peer dependencies:** Tailwind CSS v4+ is required. For Angular theme helpers (`provideAvesraTheme`, `AvThemeService`), you also need `@angular/core` and `@angular/common` 19.2+.

In an Angular app, follow the [Tailwind Angular guide](https://tailwindcss.com/docs/installation/framework-guides/angular):

```bash
npm install -D tailwindcss @tailwindcss/postcss postcss
```

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Save that as `.postcssrc.json` at the project root.

## Usage

### Basic setup

Import Tailwind first, then Avesra, in your main CSS file (for example `styles.css`):

```css
@import "tailwindcss";
@import "@avesra/styles";
```

`@avesra/styles` does not bundle Tailwind. The package entry imports:

- Animation utilities from `tw-animate-css`
- Base border defaults
- Default theme variables and Tailwind `@theme` mappings
- Vibrant palette overrides
- Component styles
- Shared utilities (`av-status-focused`, `av-status-disabled`, …)
- Custom variants (`dark:`, `av-dark:`, `av-motion-reduce:`, …)

### Angular theme

```ts
import { provideAvesraTheme } from '@avesra/styles';

export const appConfig: ApplicationConfig = {
  providers: [provideAvesraTheme({ mode: 'system', persist: true })],
};
```

```ts
import { AvThemeService } from '@avesra/styles';

readonly theme = inject(AvThemeService);

theme.setMode('dark'); // 'light' | 'dark' | 'system'
theme.toggle();
theme.mode();
theme.colorScheme();
theme.setDesignTheme('default');
theme.setVibrantPalette(true);
```

### Monorepo development

Import from source while working in this repo:

```css
@import "tailwindcss";
@import "../../styles/src/index.css";

@source "./**/*.{html,ts}";
@source "../../angular/src/**/*.{html,ts}";
```

## Package structure

```
@avesra/styles/
├── index.css                 # Main entry (import after tailwindcss)
├── base/
│   └── base.css              # Default border color, view-transition reset
├── components/               # One file per component
│   ├── button.css
│   ├── chip.css
│   └── …
├── themes/
│   ├── default/
│   │   ├── index.css         # Theme entry
│   │   └── variables.css     # Light/dark --av-* tokens
│   └── shared/
│       ├── theme.css         # Tailwind @theme mappings, radius, easing
│       └── vibrant-palette.css
├── utilities/
│   └── index.css             # av-focus-ring, av-status-*, av-scrollbar, …
└── variants/
    └── index.css             # dark, av-dark, av-motion-reduce, av-motion-safe
```

## Importing specific components

Component CSS is not self-contained: files `@apply` shared utilities (`av-status-focused`, `av-status-disabled`, `av-no-highlight`, …) and custom variants (`av-motion-reduce:`). Import the prelude, then only the components you use:

```css
@import "tailwindcss";

/* Required prelude — component CSS depends on these */
@import "@avesra/styles/utilities";
@import "@avesra/styles/variants";
@import "@avesra/styles/themes/default" layer(theme);

/* Only the components you use */
@import "@avesra/styles/components/button.css" layer(components);
@import "@avesra/styles/components/chip.css" layer(components);
```

## Component classes

Components use a BEM-like convention with an `av-` prefix:

- Base: `.av-button`
- Variants: `.av-button--primary`, `.av-button--danger`
- Sizes: `.av-button--sm`, `.av-button--lg`
- Modifiers: `.av-button--icon-only`, `.av-button--full-width`

### Button example

```html
<button class="av-button">Click me</button>

<button class="av-button av-button--primary">Save</button>

<button class="av-button av-button--sm">Small</button>

<button class="av-button av-button--icon-only">
  <svg><!-- … --></svg>
</button>

<button class="av-button av-button--primary av-button--sm">Small Primary</button>
```

In Angular, prefer the component API from `@avesra/angular` (`av-button`, `AvButtonComponent`) instead of assembling these classes by hand.

## Themes

The default theme supports light and dark mode:

- **Light:** `:root`, `.av-light`, or `[data-av-theme="light"]`
- **Dark:** `.av-dark`, `.dark`, or `[data-av-theme="dark"]`

`AvThemeService` writes `data-av-theme` and `.av-light` / `.av-dark` on `<html>`. Tailwind `dark:` follows those selectors (not `prefers-color-scheme` alone).

```html
<html data-av-theme="dark" class="av-dark">
```

Optional attributes:

- `data-av-design-theme` — design preset (omit or `default` for the built-in theme)
- `data-av-vibrant-palette="true"` — more saturated soft foregrounds
- `data-av-reduce-motion="true"` — force reduced motion utilities

## CSS variables

All design tokens use the `--av-` prefix. Changing them updates mapped Tailwind colors (`bg-accent`, `text-foreground`, `rounded-field`, …) through `themes/shared/theme.css`.

### Layout tokens

```css
:root {
  --av-spacing: 0.25rem;
  --av-border-width: 1px;
  --av-field-border-width: 0px;
  --av-disabled-opacity: 0.5;
  --av-ring-offset-width: 2px;
  --av-cursor-interactive: pointer;
  --av-cursor-disabled: not-allowed;
  --av-radius: 0.5rem;
  --av-field-radius: calc(var(--av-radius) * 1.5);
}
```

### Theme colors

```css
:root {
  /* Primitive (stable across themes) */
  --av-white: oklch(1 0 0);
  --av-black: oklch(0.205 0 0);
  --av-snow: oklch(1 0 0);
  --av-eclipse: oklch(0.205 0 0);

  /* Canvas */
  --av-background: oklch(0.985 0 0);
  --av-foreground: oklch(0.205 0 0);

  /* Surface: non-overlay (cards, accordion, disclosure) */
  --av-surface: oklch(1 0 0);
  --av-surface-foreground: var(--av-foreground);
  --av-surface-secondary: oklch(0.968 0 0);
  --av-surface-tertiary: oklch(0.945 0 0);

  /* Overlay: floating UI (tooltip, popover, modal, menu) */
  --av-overlay: oklch(1 0 0);
  --av-overlay-foreground: var(--av-foreground);

  --av-muted: oklch(0.545 0 0);

  --av-default: oklch(0.955 0 0);
  --av-default-foreground: oklch(0.245 0 0);

  --av-accent: oklch(0.585 0.205 255);
  --av-accent-foreground: var(--av-white);

  --av-success: oklch(0.69 0.17 151);
  --av-success-foreground: oklch(0.19 0.025 151);

  --av-warning: oklch(0.79 0.155 75);
  --av-warning-foreground: oklch(0.235 0.04 65);

  --av-danger: oklch(0.625 0.225 25);
  --av-danger-foreground: var(--av-white);

  --av-segment: oklch(1 0 0);
  --av-segment-foreground: var(--av-foreground);

  --av-border: oklch(0.905 0 0);
  --av-separator: oklch(0.925 0 0);
  --av-focus: var(--av-accent);
  --av-link: var(--av-accent);
  --av-backdrop: rgba(0, 0, 0, 0.5);

  --av-surface-shadow:
    0 1px 2px rgb(0 0 0 / 0.04),
    0 2px 8px rgb(0 0 0 / 0.035);
  --av-overlay-shadow:
    0 8px 24px rgb(0 0 0 / 0.08),
    0 2px 8px rgb(0 0 0 / 0.04);
  --av-field-shadow: 0 1px 2px rgb(0 0 0 / 0.025);
}
```

Dark mode overrides canvas, surface, overlay, muted, default, semantic, field, border, and shadow tokens when `.av-dark` or `[data-av-theme="dark"]` is applied.

### Field tokens

```css
:root {
  --av-field-background: oklch(1 0 0);
  --av-field-foreground: var(--av-foreground);
  --av-field-placeholder: var(--av-muted);
  --av-field-border: oklch(0.895 0 0);
  --av-field-border-width: var(--av-field-border-width);
  --av-field-radius: calc(var(--av-radius) * 1.5);
}
```

These map to utilities such as `bg-field`, `placeholder:text-field-placeholder`, and `rounded-field`, including hover and focus variants.

### Calculated tokens

Defined next to the primitives (and mapped in `themes/shared/theme.css`):

- **Hover:** `--av-accent-hover`, `--av-success-hover`, `--av-warning-hover`, `--av-danger-hover`, `--av-default-hover`
- **Soft:** `--av-accent-soft`, `--av-danger-soft`, `--av-warning-soft`, `--av-success-soft` (plus foreground and hover)
- **Surfaces:** `--av-surface-secondary`, `--av-surface-tertiary`, `--av-background-secondary`, `--av-background-tertiary`
- **Radius scale:** `--radius-xs` through `--radius-4xl` (from `--av-radius`)
- **Easing:** `--ease-smooth`, `--ease-out-fluid`, and related curves

## Dependencies

- **Tailwind CSS v4+** — required peer; import it yourself
- **tw-animate-css** — bundled; animation utilities
- **@angular/core / @angular/common** — peers for the theme service only

## Framework integration

Use this package for tokens and CSS. For Angular components (`av-button`, overlays, form controls), install [`@avesra/angular`](https://www.npmjs.com/package/@avesra/angular) as well.

## License

MIT
