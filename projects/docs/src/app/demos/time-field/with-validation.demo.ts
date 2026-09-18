import { Component, signal } from '@angular/core';
import { parseTime, type Time as TimeType } from '@internationalized/date';

import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div
    av-time-field
    class="w-[256px]"
    name="time"
    required
    [invalid]="isInvalid()"
    [min-value]="minTime"
    [max-value]="maxTime"
    [(value)]="value"
  >
    <label av-label required>Time</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
    @if (isInvalid()) {
      <p av-field-error>Time must be between 9:00 AM and 5:00 PM</p>
    } @else {
      <p av-description>Enter a time between 9:00 AM and 5:00 PM</p>
    }
  </div>
</div>`;

export const DEMO_NAME = 'time-field-with-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { parseTime, type Time as TimeType } from '@internationalized/date';
import {
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-with-validation-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldWithValidationDemo {
  readonly minTime = parseTime('09:00');
  readonly maxTime = parseTime('17:00');
  readonly value = signal<TimeType | null>(null);

  isInvalid(): boolean {
    const v = this.value();
    return v !== null && (v.compare(this.minTime) < 0 || v.compare(this.maxTime) > 0);
  }
}`;

@Component({
  selector: 'app-time-field-with-validation-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldWithValidationDemo {
  readonly minTime = parseTime('09:00');
  readonly maxTime = parseTime('17:00');
  readonly value = signal<TimeType | null>(null);

  isInvalid(): boolean {
    const v = this.value();
    return v !== null && (v.compare(this.minTime) < 0 || v.compare(this.maxTime) > 0);
  }
}
