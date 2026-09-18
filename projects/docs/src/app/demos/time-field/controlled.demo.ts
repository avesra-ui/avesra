import { Component, signal } from '@angular/core';
import { getLocalTimeZone, now, Time, type Time as TimeType } from '@internationalized/date';

import {
  AvButtonComponent,
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div av-time-field class="w-[256px]" name="time" [(value)]="value">
    <label av-label>Time</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
    <p av-description>Current value: {{ value() ? value()!.toString() : '(empty)' }}</p>
  </div>
  <div class="flex gap-2">
    <button av-button variant="tertiary" type="button" (click)="setNow()">Set now</button>
    <button av-button variant="tertiary" type="button" (click)="value.set(null)">Clear</button>
  </div>
</div>`;

export const DEMO_NAME = 'time-field-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, now, Time, type Time as TimeType } from '@internationalized/date';
import {
  AvButtonComponent,
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-time-field-controlled-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldControlledDemo {
  readonly value = signal<TimeType | null>(null);

  setNow(): void {
    const t = now(getLocalTimeZone());
    this.value.set(new Time(t.hour, t.minute, t.second));
  }
}`;

@Component({
  selector: 'app-time-field-controlled-demo',
  imports: [
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldControlledDemo {
  readonly value = signal<TimeType | null>(null);

  setNow(): void {
    const t = now(getLocalTimeZone());
    this.value.set(new Time(t.hour, t.minute, t.second));
  }
}
