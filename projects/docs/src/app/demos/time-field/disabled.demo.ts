import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-time-field class="w-[256px]" name="time" disabled>
  <label av-label disabled>Time</label>
  <div av-date-input-group disabled>
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-disabled-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldDisabledDemo {}`;

@Component({
  selector: 'app-time-field-disabled-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldDisabledDemo {}
