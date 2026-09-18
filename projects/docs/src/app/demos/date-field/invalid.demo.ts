import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-field class="w-64" name="date" invalid required>
  <label av-label required invalid>Date</label>
  <div av-date-input-group invalid>
    <div av-date-input-group-input></div>
  </div>
  <p av-field-error>Please enter a valid date.</p>
</div>`;

export const DEMO_NAME = 'date-field-invalid';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-invalid-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvFieldErrorComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldInvalidDemo {}`;

@Component({
  selector: 'app-date-field-invalid-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvFieldErrorComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldInvalidDemo {}
