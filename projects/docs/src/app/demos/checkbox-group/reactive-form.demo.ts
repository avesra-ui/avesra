import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {
  AvCheckboxGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-checkbox-group class="min-w-[320px]" [formControl]="interestsControl">
      <label av-label>Interests</label>
      <div av-checkbox value="coding">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>Coding</span>
      </div>
      <div av-checkbox value="design">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>Design</span>
      </div>
      <div av-checkbox value="writing">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>Writing</span>
      </div>
      <label av-label class="my-4 text-sm text-muted">
        Form value: {{ interestsControl.value?.join(', ') || 'None' }}
      </label>
    </av-checkbox-group>`;

export const DEMO_NAME = 'checkbox-group-reactive-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  AvCheckboxGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-reactive-form-demo',
  imports: [
    ReactiveFormsModule,
    AvCheckboxGroupImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupReactiveFormDemo {
  readonly interestsControl = new FormControl<string[]>(['design']);
}`;

@Component({
  selector: 'app-checkbox-group-reactive-form-demo',
  imports: [
    ReactiveFormsModule,
    AvCheckboxGroupImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupReactiveFormDemo {
  readonly interestsControl = new FormControl<string[]>(['design']);
}
