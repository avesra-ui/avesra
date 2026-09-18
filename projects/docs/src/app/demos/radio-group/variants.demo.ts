import { Component } from '@angular/core';

import {
  AvDescriptionComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-8">
      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Primary variant</p>
        <av-radio-group default-value="option1" name="primary-plan" variant="primary">
          <div av-radio value="option1">
            <span av-radio-control>
              <span av-radio-indicator></span>
            </span>
            <span av-radio-content>
              Option 1
              <p av-description>Standard styling with default background</p>
            </span>
          </div>
          <div av-radio value="option2">
            <span av-radio-control>
              <span av-radio-indicator></span>
            </span>
            <span av-radio-content>
              Option 2
              <p av-description>Another option with primary styling</p>
            </span>
          </div>
        </av-radio-group>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-sm font-medium text-muted">Secondary variant</p>
        <av-radio-group
          default-value="option1"
          name="secondary-plan"
          variant="secondary"
        >
          <div av-radio value="option1">
            <span av-radio-control>
              <span av-radio-indicator></span>
            </span>
            <span av-radio-content>
              Option 1
              <p av-description>Lower emphasis variant for use in surfaces</p>
            </span>
          </div>
          <div av-radio value="option2">
            <span av-radio-control>
              <span av-radio-indicator></span>
            </span>
            <span av-radio-content>
              Option 2
              <p av-description>Another option with secondary styling</p>
            </span>
          </div>
        </av-radio-group>
      </div>
    </div>`;

export const DEMO_NAME = 'radio-group-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-variants-demo',
  imports: [
    AvRadioGroupImports,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupVariantsDemo {}`;

@Component({
  selector: 'app-radio-group-variants-demo',
  imports: [
    AvRadioGroupImports,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupVariantsDemo {}
