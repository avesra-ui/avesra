## Why Avesra?

Avesra is a production-ready Angular component library that combines design tokens with the utility-first styling of [Tailwind CSS v4](https://tailwindcss.com/). It ships a compound component API (`av-card-header`, `av-checkbox-control`, `av-select-item`, …), keeps visuals in CSS rather than component stylesheets, and works out of the box with Angular 19 — standalone components, signals, and SSR.

- **Accessible by default** — Keyboard, focus, and ARIA patterns built into every control, with Angular CDK for overlays
- **Tailwind CSS v4** — Modern engine, no CSS-in-JS runtime, smaller output, faster builds
- **Compound components** — Composable parts (`av-card-header`, `av-card-content`) instead of deeply nested props
- **Styles live in CSS** — Classes in `@avesra/angular`, tokens and visuals in `@avesra/styles` (`--av-*`)
- **AI-native** — Predictable naming, `AGENTS.md`, and Cursor skills so assistants can scaffold and document components
- **Theme without rebuilds** — Light, dark, and design presets through CSS variables and `provideAvesraTheme()`

## Packages

| Package | Description |
|---|---|
| [`@avesra/angular`](https://www.npmjs.com/package/@avesra/angular) | UI components for Angular 19 |
| [`@avesra/styles`](https://www.npmjs.com/package/@avesra/styles) | Design tokens, themes, and component CSS |

Import both. Components apply BEM classes; `@avesra/styles` owns the look.

## Getting Started

Follow **Installation** in the docs (`npm run start:docs`) to add Avesra to an Angular 19 app.

```bash
npm install @avesra/angular @avesra/styles
```

```css
@import "tailwindcss";
@import "@avesra/styles";
```

```ts
import { provideAvesraTheme } from '@avesra/styles';

export const appConfig: ApplicationConfig = {
  providers: [provideAvesraTheme({ mode: 'system', persist: true })],
};
```

```ts
import { AvButtonComponent } from '@avesra/angular';

@Component({
  imports: [AvButtonComponent],
  template: `<button av-button>Get started</button>`,
})
export class App {}
```

## Who Is This For?

Avesra is a good fit if you are building:

- **SaaS applications** — forms, tables, overlays, and notifications out of the box
- **Dashboards & admin panels** — data-dense layouts with consistent design tokens
- **E-commerce storefronts** — performant, accessible, SSR-friendly components
- **Marketing sites & landing pages** — polished UI without a heavyweight runtime
- **Any Angular 19 project** that values design quality and accessibility

## AI-Powered Development

Avesra is built so AI tools can read the library and generate the right code.

| Tool | What it does |
|---|---|
| **`AGENTS.md`** | Conventions for agents: prefixes, compound parts, where CSS lives, how docs are wired |
| **Cursor skills** | `avesra-add-component` and `avesra-docs-page` scaffold Angular + styles + docs together |
| **Predictable API** | `av-*` selectors, kebab-case inputs, and `Av<Name>Imports` bundles models can copy |

Works with **Cursor**, **Claude Code**, **GitHub Copilot**, and any assistant that can read the repo.

## Compared To

| Library | How Avesra differs |
|---|---|
| **Angular Material** | Avesra is Tailwind-native with CSS tokens, not a Material look or a Sass theme API |
| **PrimeNG** | Avesra is a smaller, composition-first set — compound parts, no mega-config modules |
| **ng-zorro** | Avesra is not Ant Design. Tokens and BEM classes are yours to restyle |
| **Copy-paste kits** | Avesra is batteries-included npm packages; updates come through the registry, not forked files |

## Documentation

Start the docs site and open the handbook:

```bash
npm run start:docs
```

- **Introduction** — `/docs/introduction`
- **Installation** — `/docs/installation`
- **Theming** — `/docs/theming`
- **Components** — `/docs/components`
- **Changelog** — `/docs/changelog`

## Playground

The playground is a local sandbox for experimenting with components:

```bash
npm start
```

## Community

We're excited to see the community adopt Avesra, raise issues, and provide feedback.
Whether it's a feature request, bug report, or a project to showcase, please get involved!

- [GitHub](https://github.com/avesra-ui)

## Contributing

Contributions are always welcome!

Open an issue or pull request on [GitHub](https://github.com/avesra-ui). Star the repo if Avesra helps you ship.

## License

[MIT](./LICENSE)
