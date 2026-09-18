import { Component } from '@angular/core';

import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-checkbox-group disabled name="disabled-features">
      <label av-label>Features</label>
      <p av-description>Feature selection is temporarily disabled</p>
      <div av-checkbox value="feature1">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>
          Feature 1
          <p av-description>This feature is coming soon</p>
        </span>
      </div>
      <div av-checkbox value="feature2">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>
          Feature 2
          <p av-description>This feature is coming soon</p>
        </span>
      </div>
    </av-checkbox-group>`;

export const DEMO_NAME = 'checkbox-group-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-disabled-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupDisabledDemo {}`;

@Component({
  selector: 'app-checkbox-group-disabled-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupDisabledDemo {}
