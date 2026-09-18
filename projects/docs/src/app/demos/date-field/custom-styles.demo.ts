import { Component } from '@angular/core';

import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-field class="w-64" name="due-date">
  <label av-label>Due date</label>
  <div
    av-date-input-group
    variant="secondary"
    class="rounded-xl border border-border/80 bg-default shadow-sm"
  >
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-custom-styles-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldCustomStylesDemo {}`;

@Component({
  selector: 'app-date-field-custom-styles-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldCustomStylesDemo {}
