import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-time-field class="w-[256px]" name="time" required>
  <label av-label required>Time</label>
  <div av-date-input-group>
    <div av-date-input-group-input></div>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-required';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-required-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldRequiredDemo {}`;

@Component({
  selector: 'app-time-field-required-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldRequiredDemo {}
