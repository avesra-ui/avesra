import { Component, signal } from '@angular/core';

import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-radio-group
      default-value="premium"
      name="plan-custom-indicator"
      [(value)]="selected"
    >
      <label av-label>Plan selection</label>
      <p av-description>Choose the plan that suits you best</p>
      <div av-radio value="basic">
        <span av-radio-control>
          <span av-radio-indicator>
            @if (selected() === 'basic') {
              <span class="text-xs leading-none text-accent-foreground">✓</span>
            }
          </span>
        </span>
        <span av-radio-content>
          Basic Plan
          <p av-description>Includes 100 messages per month</p>
        </span>
      </div>
      <div av-radio value="premium">
        <span av-radio-control>
          <span av-radio-indicator>
            @if (selected() === 'premium') {
              <span class="text-xs leading-none text-accent-foreground">✓</span>
            }
          </span>
        </span>
        <span av-radio-content>
          Premium Plan
          <p av-description>Includes 200 messages per month</p>
        </span>
      </div>
      <div av-radio value="business">
        <span av-radio-control>
          <span av-radio-indicator>
            @if (selected() === 'business') {
              <span class="text-xs leading-none text-accent-foreground">✓</span>
            }
          </span>
        </span>
        <span av-radio-content>
          Business Plan
          <p av-description>Unlimited messages</p>
        </span>
      </div>
    </av-radio-group>`;

export const DEMO_NAME = 'radio-group-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-custom-indicator-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupCustomIndicatorDemo {
  readonly selected = signal<string | null>('premium');
}`;

@Component({
  selector: 'app-radio-group-custom-indicator-demo',
  imports: [
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupCustomIndicatorDemo {
  readonly selected = signal<string | null>('premium');
}
