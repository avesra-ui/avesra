import { Component } from '@angular/core';

import { AvBreadcrumbsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-breadcrumbs>
      <li av-breadcrumbs-item href="#">Home</li>
      <li av-breadcrumbs-item>Current Page</li>
    </av-breadcrumbs>`;

export const DEMO_NAME = 'breadcrumbs-level-2';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvBreadcrumbsImports } from '@avesra/angular';

@Component({
  selector: 'app-breadcrumbs-level-2-demo',
  imports: [AvBreadcrumbsImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class BreadcrumbsLevel2Demo {}`;

@Component({
  selector: 'app-breadcrumbs-level-2-demo',
  imports: [AvBreadcrumbsImports],
  template: DEMO_TEMPLATE,
})
export class BreadcrumbsLevel2Demo {}
