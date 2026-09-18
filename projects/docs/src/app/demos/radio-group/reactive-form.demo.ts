import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <av-radio-group class="min-w-[320px]" [formControl]="planControl">
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
        Form value: <span class="font-medium">{{ planControl.value }}</span>
      </p>
    </div>`;

export const DEMO_NAME = 'radio-group-reactive-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-reactive-form-demo',
  imports: [
    ReactiveFormsModule,
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupReactiveFormDemo {
  readonly planControl = new FormControl<string | null>('pro');
}`;

@Component({
  selector: 'app-radio-group-reactive-form-demo',
  imports: [
    ReactiveFormsModule,
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupReactiveFormDemo {
  readonly planControl = new FormControl<string | null>('pro');
}
