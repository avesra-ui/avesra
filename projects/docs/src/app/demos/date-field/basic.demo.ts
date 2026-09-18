import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-field class="w-64" name="date">
  <label av-label>Date</label>
  <div av-date-input-group>
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-basic-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldBasicDemo {}`;

@Component({
  selector: 'app-date-field-basic-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldBasicDemo {}
