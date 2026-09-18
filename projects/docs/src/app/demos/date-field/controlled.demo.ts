import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import {
  AvButtonComponent,
  AvDateFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div av-date-field class="w-64" name="date" [(value)]="value">
    <label av-label>Date</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
    <p av-description>Current value: {{ value() ? value()!.toString() : '(empty)' }}</p>
  </div>
  <div class="flex gap-2">
    <button av-button variant="tertiary" type="button" (click)="setToday()">Set today</button>
    <button av-button variant="tertiary" type="button" (click)="value.set(null)">Clear</button>
  </div>
</div>`;

export const DEMO_NAME = 'date-field-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';
import {
  AvButtonComponent,
  AvDateFieldImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-controlled-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldControlledDemo {
  readonly value = signal<DateValue | null>(null);

  setToday(): void {
    this.value.set(today(getLocalTimeZone()));
  }
}`;

@Component({
  selector: 'app-date-field-controlled-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldControlledDemo {
  readonly value = signal<DateValue | null>(null);

  setToday(): void {
    this.value.set(today(getLocalTimeZone()));
  }
}
