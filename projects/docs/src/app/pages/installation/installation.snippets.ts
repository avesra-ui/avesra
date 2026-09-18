export const INSTALL_CREATE_PROJECT = `ng new my-app --style=css
`;

export const INSTALL_POSTCSS = `{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
`;

export const INSTALL_STYLES = `@import "tailwindcss";
@import "@avesra/styles";
`;

export const INSTALL_APP_CONFIG = `import { ApplicationConfig } from '@angular/core';
import { provideAvesraTheme } from '@avesra/styles';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAvesraTheme({ mode: 'system', persist: true }),
  ],
};
`;

export const INSTALL_USAGE = `import { Component } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-root',
  imports: [AvButtonComponent],
  template: \`<button av-button>Get started</button>\`,
})
export class App {}
`;

export type InstallPackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export const INSTALL_PACKAGE_COMMANDS: Record<InstallPackageManager, string> = {
  npm: `npm install @avesra/angular @avesra/styles
npm install -D tailwindcss @tailwindcss/postcss postcss
`,
  pnpm: `pnpm add @avesra/angular @avesra/styles
pnpm add -D tailwindcss @tailwindcss/postcss postcss
`,
  yarn: `yarn add @avesra/angular @avesra/styles
yarn add -D tailwindcss @tailwindcss/postcss postcss
`,
  bun: `bun add @avesra/angular @avesra/styles
bun add -D tailwindcss @tailwindcss/postcss postcss
`,
};
