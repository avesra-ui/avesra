# @avesra/styles

Avesra design tokens, themes, component styles, and CSS utilities.

## Installation

Install Avesra and required dependencies:

```bash
npm install @avesra/styles tailwindcss @tailwindcss/postcss postcss
```

## Import Styles

Add to your main CSS file (e.g. `styles.scss`):

```css
@import "tailwindcss";
@import "@avesra/styles";
```

### Monorepo development

Import directly from the source package:

```scss
@import "tailwindcss";
@import "../../styles/src/index.css";

@source "./**/*.{html,ts}";
@source "../../angular/src/**/*.{html,ts}";
```

## Tailwind + Angular Setup

Follow the [official Tailwind Angular guide](https://tailwindcss.com/docs/installation/framework-guides/angular):

1. Install: `npm install -D tailwindcss @tailwindcss/postcss postcss`
2. Create `.postcssrc.json` in project root:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

3. Import styles as shown above.

## Angular Setup

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAvesraTheme } from '@avesra/styles';

bootstrapApplication(AppComponent, {
  providers: [provideAvesraTheme({ mode: 'system', persist: true })],
});
```

## Theme API

```ts
import { AvThemeService } from '@avesra/styles';

readonly theme = inject(AvThemeService);

theme.setMode('dark');   // 'light' | 'dark' | 'system'
theme.toggle();
theme.mode();
theme.colorScheme();
```

## CSS Variables

All tokens use the `--av-` prefix. Dark mode: `[data-av-theme="dark"]` or `.av-dark` on `<html>`.

## Package Structure

```
src/
├── index.css                 # Avesra styles entry (no tailwindcss — import separately)
├── base/base.css
├── themes/default/variables.css
├── components/button.css
├── utilities/index.css
└── variants/index.css
```
