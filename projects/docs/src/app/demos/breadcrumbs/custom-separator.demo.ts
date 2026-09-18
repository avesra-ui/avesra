import { Component } from '@angular/core';

import { AvBreadcrumbsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<ng-template #customSeparator>
      <svg
        av-breadcrumbs-separator
        viewBox="0 0 256 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M249.3 235.8c10.2 12.6 9.5 31.1-2.2 42.8l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S64.5 396.9 64.5 384l0-256c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128 2.2 2.4z"
        />
      </svg>
    </ng-template>
    <av-breadcrumbs [separator]="customSeparator">
      <li av-breadcrumbs-item href="#">Home</li>
      <li av-breadcrumbs-item href="#">Products</li>
      <li av-breadcrumbs-item href="#">Electronics</li>
      <li av-breadcrumbs-item>Laptop</li>
    </av-breadcrumbs>`;

export const DEMO_NAME = 'breadcrumbs-custom-separator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvBreadcrumbsImports } from '@avesra/angular';

@Component({
  selector: 'app-breadcrumbs-custom-separator-demo',
  imports: [AvBreadcrumbsImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BreadcrumbsCustomSeparatorDemo {}`;

@Component({
  selector: 'app-breadcrumbs-custom-separator-demo',
  imports: [AvBreadcrumbsImports],
  template: DEMO_TEMPLATE,
})
export class BreadcrumbsCustomSeparatorDemo {}
