import { Component } from '@angular/core';

import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-time-field class="w-[256px]" name="time">
  <label av-label>Time</label>
  <div av-date-input-group>
    <div av-date-input-group-input></div>
  </div>
  <p av-description>Enter the start time</p>
</div>`;

export const DEMO_NAME = 'time-field-with-description';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-with-description-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldWithDescriptionDemo {}`;

@Component({
  selector: 'app-time-field-with-description-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldWithDescriptionDemo {}
