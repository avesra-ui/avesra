import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-field class="w-64" name="date">
  <label av-label>Date</label>
  <div av-date-input-group>
    <div av-date-input-group-input></div>
  </div>
  <p av-description>Enter your birth date</p>
</div>`;

export const DEMO_NAME = 'date-field-with-description';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-with-description-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldWithDescriptionDemo {}`;

@Component({
  selector: 'app-date-field-with-description-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldWithDescriptionDemo {}
