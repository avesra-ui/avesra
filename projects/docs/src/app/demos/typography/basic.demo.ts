import { Component } from '@angular/core';

import { AvTypographyImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-xl flex-col gap-4">
  <h1 av-typography type="h1">Build better interfaces</h1>
  <h2 av-typography type="h2">Typography that stays semantic</h2>
  <h3 av-typography type="h3">Composable by default</h3>
  <h4 av-typography type="h4">Small heading</h4>
  <p av-typography>
    Avesra Typography applies semantic type tokens on host elements you choose.
  </p>
  <p av-typography color="muted" type="body-sm">
    Smaller muted body copy for secondary descriptions.
  </p>
  <code av-typography type="code">npm install &#64;avesra/angular</code>
</div>`;

export const DEMO_NAME = 'typography-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTypographyImports } from '@avesra/angular';

@Component({
  selector: 'app-typography-basic-demo',
  imports: [AvTypographyImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TypographyBasicDemo {}`;

@Component({
  selector: 'app-typography-basic-demo',
  imports: [AvTypographyImports],
  template: DEMO_TEMPLATE,
})
export class TypographyBasicDemo {}
