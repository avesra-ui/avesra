import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-field class="w-64" name="date" disabled>
  <label av-label disabled>Date</label>
  <div av-date-input-group disabled>
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-disabled-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldDisabledDemo {}`;

@Component({
  selector: 'app-date-field-disabled-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldDisabledDemo {}
