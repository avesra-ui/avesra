import { Component } from '@angular/core';

import {
  AvCheckboxImports,
  AvFieldErrorComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-checkbox invalid name="agreement">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>I agree to the terms</span>
      <p av-field-error [visible]="true">You must accept the terms to continue</p>
    </div>`;

export const DEMO_NAME = 'checkbox-invalid';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvCheckboxImports,
  AvFieldErrorComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-invalid-demo',
  imports: [
    AvCheckboxImports,
    AvFieldErrorComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxInvalidDemo {}`;

@Component({
  selector: 'app-checkbox-invalid-demo',
  imports: [
    AvCheckboxImports,
    AvFieldErrorComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxInvalidDemo {}
