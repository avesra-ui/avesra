import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox default-selected>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Default selected</label>
    </div>
    <div av-checkbox indeterminate>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Indeterminate</label>
    </div>
    <div av-checkbox disabled>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Disabled</label>
    </div>
    <div av-checkbox disabled default-selected>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Disabled selected</label>
    </div>
    <div av-checkbox aria-label="Subscribe to newsletter">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
    </div>`;

export const DEMO_NAME = 'checkbox-states';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-states-demo',
  imports: [AvCheckboxImports, AvLabelComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`<div av-checkbox default-selected>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Default selected</label>
    </div>
    <div av-checkbox indeterminate>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Indeterminate</label>
    </div>
    <div av-checkbox disabled>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Disabled</label>
    </div>
    <div av-checkbox disabled default-selected>
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <label av-label class="text-sm">Disabled selected</label>
    </div>
    <div av-checkbox aria-label="Subscribe to newsletter">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
    </div>\`,
})
export class CheckboxStatesDemo {}`;

@Component({
  selector: 'app-checkbox-states-demo',
  imports: [AvCheckboxImports, AvLabelComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class CheckboxStatesDemo {}
