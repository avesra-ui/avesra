import { Component } from '@angular/core';

import { AvBreadcrumbsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-breadcrumbs>
      <li av-breadcrumbs-item href="#">Home</li>
      <li av-breadcrumbs-item href="#">Products</li>
      <li av-breadcrumbs-item href="#">Electronics</li>
      <li av-breadcrumbs-item>Laptop</li>
    </av-breadcrumbs>`;

export const DEMO_NAME = 'breadcrumbs-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvBreadcrumbsImports } from '@avesra/angular';

@Component({
  selector: 'app-breadcrumbs-basic-demo',
  imports: [AvBreadcrumbsImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BreadcrumbsBasicDemo {}`;

@Component({
  selector: 'app-breadcrumbs-basic-demo',
  imports: [AvBreadcrumbsImports],
  template: DEMO_TEMPLATE,
})
export class BreadcrumbsBasicDemo {}
