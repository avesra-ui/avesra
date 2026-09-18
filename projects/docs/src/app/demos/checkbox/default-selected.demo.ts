import { Component } from '@angular/core';

import { AvCheckboxImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox default-selected id="default-notifications">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>Enable email notifications</span>
    </div>`;

export const DEMO_NAME = 'checkbox-default-selected';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCheckboxImports } from '@avesra/angular';

@Component({
  selector: 'app-checkbox-default-selected-demo',
  imports: [AvCheckboxImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxDefaultSelectedDemo {}`;

@Component({
  selector: 'app-checkbox-default-selected-demo',
  imports: [AvCheckboxImports],
  template: DEMO_TEMPLATE,
})
export class CheckboxDefaultSelectedDemo {}
