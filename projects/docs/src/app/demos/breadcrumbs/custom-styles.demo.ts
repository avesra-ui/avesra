import { Component } from '@angular/core';

import { AvBreadcrumbsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-breadcrumbs class="rounded-lg bg-default-soft px-3 py-2">
      <li av-breadcrumbs-item href="#">Home</li>
      <li av-breadcrumbs-item href="#">Products</li>
      <li av-breadcrumbs-item>Laptop</li>
    </av-breadcrumbs>`;

export const DEMO_NAME = 'breadcrumbs-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvBreadcrumbsImports } from '@avesra/angular';

@Component({
  selector: 'app-breadcrumbs-custom-styles-demo',
  imports: [AvBreadcrumbsImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BreadcrumbsCustomStylesDemo {}`;

@Component({
  selector: 'app-breadcrumbs-custom-styles-demo',
  imports: [AvBreadcrumbsImports],
  template: DEMO_TEMPLATE,
})
export class BreadcrumbsCustomStylesDemo {}
