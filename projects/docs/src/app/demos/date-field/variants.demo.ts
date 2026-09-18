import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div av-date-field class="w-64" name="primary-date">
    <label av-label>Primary variant</label>
    <div av-date-input-group variant="primary">
      <div av-date-input-group-input></div>
    </div>
  </div>
  <div av-date-field class="w-64" name="secondary-date">
    <label av-label>Secondary variant</label>
    <div av-date-input-group variant="secondary">
      <div av-date-input-group-input></div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-variants-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldVariantsDemo {}`;

@Component({
  selector: 'app-date-field-variants-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldVariantsDemo {}
