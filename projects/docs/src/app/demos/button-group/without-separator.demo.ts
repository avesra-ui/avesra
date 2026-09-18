import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-button-group>
  <button av-button>First</button>
  <button av-button>Second</button>
  <button av-button>Third</button>
</av-button-group>`;

export const DEMO_NAME = 'button-group-without-separator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-button-group-without-separator-demo',
  imports: [AvButtonGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupWithoutSeparatorDemo {}`;

@Component({
  selector: 'app-button-group-without-separator-demo',
  imports: [AvButtonGroupImports],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupWithoutSeparatorDemo {}
