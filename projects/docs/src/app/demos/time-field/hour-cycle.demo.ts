import { Component } from '@angular/core';
import { parseTime } from '@internationalized/date';

import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4 sm:flex-row">
  <div av-time-field class="w-[256px]" name="time-12" [hour-cycle]="12" [default-value]="value">
    <label av-label>12-hour</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
    <p av-description>Uses AM/PM</p>
  </div>

  <div av-time-field class="w-[256px]" name="time-24" [hour-cycle]="24" [default-value]="value">
    <label av-label>24-hour</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
    <p av-description>No AM/PM segment</p>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-hour-cycle';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { parseTime } from '@internationalized/date';
import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-hour-cycle-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldHourCycleDemo {
  readonly value = parseTime('15:30');
}`;

@Component({
  selector: 'app-time-field-hour-cycle-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldHourCycleDemo {
  readonly value = parseTime('15:30');
}
