import { Component } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-radio-group disabled default-value="pro" name="plan-disabled">
      <label av-label>Subscription plan</label>
      <p av-description>
        Plan changes are temporarily paused while we roll out updates.
      </p>
      <div av-radio value="starter">
        <span av-radio-control>
          <span av-radio-indicator></span>
        </span>
        <span av-radio-content>
          Starter
          <p av-description>For side projects and small teams</p>
        </span>
      </div>
      <div av-radio value="pro">
        <span av-radio-control>
          <span av-radio-indicator></span>
        </span>
        <span av-radio-content>
          Pro
          <p av-description>Advanced reporting and analytics</p>
        </span>
      </div>
      <div av-radio value="teams">
        <span av-radio-control>
          <span av-radio-indicator></span>
        </span>
        <span av-radio-content>
          Teams
          <p av-description>Share access with up to 10 teammates</p>
        </span>
      </div>
    </av-radio-group>`;

export const DEMO_NAME = 'radio-group-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-disabled-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupDisabledDemo {}`;

@Component({
  selector: 'app-radio-group-disabled-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupDisabledDemo {}
