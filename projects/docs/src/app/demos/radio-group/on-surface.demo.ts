import { Component } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
  AvSurfaceComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-surface class="w-full rounded-3xl p-6">
      <av-radio-group
        default-value="premium"
        name="plan-on-surface"
        variant="secondary"
      >
        <label av-label>Plan selection</label>
        <p av-description>Choose the plan that suits you best</p>
        <div av-radio value="basic">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Basic Plan
            <p av-description>Includes 100 messages per month</p>
          </span>
        </div>
        <div av-radio value="premium">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Premium Plan
            <p av-description>Includes 200 messages per month</p>
          </span>
        </div>
        <div av-radio value="business">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Business Plan
            <p av-description>Unlimited messages</p>
          </span>
        </div>
      </av-radio-group>
    </div>`;

export const DEMO_NAME = 'radio-group-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
  AvSurfaceComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupOnSurfaceDemo {}`;

@Component({
  selector: 'app-radio-group-on-surface-demo',
  imports: [
    AvSurfaceComponent,
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupOnSurfaceDemo {}
