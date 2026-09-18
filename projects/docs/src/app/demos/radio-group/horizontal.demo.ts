import { Component } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <label av-label>Subscription plan</label>
      <av-radio-group
        default-value="pro"
        name="plan-orientation"
        orientation="horizontal"
      >
        <div av-radio value="starter">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Starter
            <p av-description>For side projects</p>
          </span>
        </div>
        <div av-radio value="pro">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Pro
            <p av-description>Advanced reporting</p>
          </span>
        </div>
        <div av-radio value="teams">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Teams
            <p av-description>Up to 10 teammates</p>
          </span>
        </div>
      </av-radio-group>
    </div>`;

export const DEMO_NAME = 'radio-group-horizontal';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-horizontal-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupHorizontalDemo {}`;

@Component({
  selector: 'app-radio-group-horizontal-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupHorizontalDemo {}
