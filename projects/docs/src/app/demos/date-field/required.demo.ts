import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-field class="w-64" name="date" required>
  <label av-label required>Date</label>
  <div av-date-input-group>
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-required';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-required-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldRequiredDemo {}`;

@Component({
  selector: 'app-date-field-required-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldRequiredDemo {}
