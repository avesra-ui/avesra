import { Component, signal } from '@angular/core';

import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-checkbox-group name="features" [(value)]="selected">
      <label av-label>Features</label>
      <p av-description>Select the features you want</p>
      <div av-checkbox value="notifications">
        <span av-checkbox-control>
          <span av-checkbox-indicator>
            @if (selected().includes('notifications')) {
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          </span>
        </span>
        <span av-checkbox-content>
          Email notifications
          <p av-description>Receive updates via email</p>
        </span>
      </div>
      <div av-checkbox value="newsletter">
        <span av-checkbox-control>
          <span av-checkbox-indicator>
            @if (selected().includes('newsletter')) {
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          </span>
        </span>
        <span av-checkbox-content>
          Newsletter
          <p av-description>Get weekly newsletters</p>
        </span>
      </div>
    </av-checkbox-group>`;

export const DEMO_NAME = 'checkbox-group-with-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvCheckboxGroupImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-with-custom-indicator-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupWithCustomIndicatorDemo {
  readonly selected = signal<string[]>([]);
}`;

@Component({
  selector: 'app-checkbox-group-with-custom-indicator-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupWithCustomIndicatorDemo {
  readonly selected = signal<string[]>([]);
}
