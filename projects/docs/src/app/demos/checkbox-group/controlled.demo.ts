import { Component, signal } from '@angular/core';

import {
  AvCheckboxGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-checkbox-group
      class="min-w-[320px]"
      name="skills"
      [(value)]="selected"
    >
      <label av-label>Your skills</label>
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
        Selected: {{ selected().join(', ') || 'None' }}
      </label>
    </av-checkbox-group>`;

export const DEMO_NAME = 'checkbox-group-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvCheckboxGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-controlled-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupControlledDemo {
  readonly selected = signal<string[]>(['coding', 'design']);
}`;

@Component({
  selector: 'app-checkbox-group-controlled-demo',
  imports: [
    AvCheckboxGroupImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupControlledDemo {
  readonly selected = signal<string[]>(['coding', 'design']);
}
