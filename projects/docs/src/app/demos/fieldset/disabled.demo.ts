import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldsetImports,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<fieldset av-fieldset disabled>
      <legend av-fieldset-legend>Profile Settings</legend>
      <p av-description>This fieldset is disabled.</p>
      <div av-fieldset-group>
        <div class="flex flex-col gap-1">
          <label av-label for="fieldset-disabled-name">Name</label>
          <input av-input full-width id="fieldset-disabled-name" name="name" value="John Doe" />
        </div>
      </div>
      <div av-fieldset-actions>
        <button av-button type="button">Save changes</button>
      </div>
    </fieldset>`;

export const DEMO_NAME = 'fieldset-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldsetImports,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-fieldset-disabled-demo',
  imports: [
    AvFieldsetImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvInputComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-96' },
  template: \`<fieldset av-fieldset disabled>
      <legend av-fieldset-legend>Profile Settings</legend>
      <p av-description>This fieldset is disabled.</p>
      <div av-fieldset-group>
        <div class="flex flex-col gap-1">
          <label av-label for="fieldset-disabled-name">Name</label>
          <input av-input full-width id="fieldset-disabled-name" name="name" value="John Doe" />
        </div>
      </div>
      <div av-fieldset-actions>
        <button av-button type="button">Save changes</button>
      </div>
    </fieldset>\`,
})
export class FieldsetDisabledDemo {}`;

@Component({
  selector: 'app-fieldset-disabled-demo',
  imports: [
    AvFieldsetImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvInputComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-96' },
  template: DEMO_TEMPLATE,
})
export class FieldsetDisabledDemo {}
