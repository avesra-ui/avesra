import { Component } from '@angular/core';

import {
  AvCheckboxImports,
  AvDescriptionComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox disabled id="feature">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        Premium Feature
        <p av-description>This feature is coming soon</p>
      </span>
    </div>`;

export const DEMO_NAME = 'checkbox-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvDescriptionComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-disabled-demo',
  imports: [
    AvCheckboxImports,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxDisabledDemo {}`;

@Component({
  selector: 'app-checkbox-disabled-demo',
  imports: [
    AvCheckboxImports,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxDisabledDemo {}
