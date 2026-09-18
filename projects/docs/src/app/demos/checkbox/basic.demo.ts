import { Component } from '@angular/core';

import { AvCheckboxImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox name="basic-terms">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>Accept terms and conditions</span>
    </div>`;

export const DEMO_NAME = 'checkbox-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCheckboxImports } from '@avesra/angular';

@Component({
  selector: 'app-checkbox-basic-demo',
  imports: [AvCheckboxImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxBasicDemo {}`;

@Component({
  selector: 'app-checkbox-basic-demo',
  imports: [AvCheckboxImports],
  template: DEMO_TEMPLATE,
})
export class CheckboxBasicDemo {}
