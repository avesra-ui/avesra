import { Component } from '@angular/core';

import { AvBreadcrumbsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-breadcrumbs data-custom="foo">
      <li av-breadcrumbs-item data-custom="bar">Home</li>
      <li av-breadcrumbs-item data-custom="bar">Products</li>
      <li av-breadcrumbs-item data-custom="bar">Electronics</li>
      <li av-breadcrumbs-item data-custom="bar">Laptop</li>
    </av-breadcrumbs>`;

export const DEMO_NAME = 'breadcrumbs-render-function';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvBreadcrumbsImports } from '@avesra/angular';

@Component({
  selector: 'app-breadcrumbs-custom-render-function-demo',
  imports: [AvBreadcrumbsImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BreadcrumbsCustomRenderFunctionDemo {}`;

@Component({
  selector: 'app-breadcrumbs-custom-render-function-demo',
  imports: [AvBreadcrumbsImports],
  template: DEMO_TEMPLATE,
})
export class BreadcrumbsCustomRenderFunctionDemo {}
