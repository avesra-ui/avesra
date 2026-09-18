import { Component, signal } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <av-radio-group
        default-value="pro"
        name="plan-uncontrolled"
        (valueChange)="selection.set($event)"
      >
        <label av-label>Subscription plan</label>
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
      </av-radio-group>
      <p class="text-sm text-muted">
        Last chosen plan: <span class="font-medium">{{ selection() }}</span>
      </p>
    </div>`;

export const DEMO_NAME = 'radio-group-uncontrolled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-uncontrolled-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupUncontrolledDemo {
  readonly selection = signal<string | null>('pro');
}`;

@Component({
  selector: 'app-radio-group-uncontrolled-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupUncontrolledDemo {
  readonly selection = signal<string | null>('pro');
}
