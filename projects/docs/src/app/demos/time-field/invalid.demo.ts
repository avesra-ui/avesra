import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-time-field class="w-[256px]" name="time" invalid required>
  <label av-label required invalid>Time</label>
  <div av-date-input-group invalid>
    <div av-date-input-group-input></div>
  </div>
  <p av-field-error>Please enter a valid time.</p>
</div>`;

export const DEMO_NAME = 'time-field-invalid';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-invalid-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvFieldErrorComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldInvalidDemo {}`;

@Component({
  selector: 'app-time-field-invalid-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvFieldErrorComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldInvalidDemo {}
