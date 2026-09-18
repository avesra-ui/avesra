import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div av-time-field class="w-[256px]" name="primary-time">
    <label av-label>Primary variant</label>
    <div av-date-input-group variant="primary">
      <div av-date-input-group-input></div>
    </div>
  </div>
  <div av-time-field class="w-[256px]" name="secondary-time">
    <label av-label>Secondary variant</label>
    <div av-date-input-group variant="secondary">
      <div av-date-input-group-input></div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-variants-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldVariantsDemo {}`;

@Component({
  selector: 'app-time-field-variants-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldVariantsDemo {}
