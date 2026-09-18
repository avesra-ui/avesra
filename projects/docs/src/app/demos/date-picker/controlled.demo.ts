import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import {
  AvButtonComponent,
  AvDatePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

const DEMO_TEMPLATE = `<div class="flex w-72 flex-col gap-4">
  <div av-date-picker name="date" [(value)]="value">
    <label av-label>Date</label>
    <div av-date-input-group full-width>
      <div av-date-input-group-input></div>
      <div av-date-input-group-suffix>
        <button type="button" av-date-picker-trigger>
          <span av-date-picker-trigger-indicator></span>
        </button>
      </div>
    </div>
    <av-date-picker-popover>
      ${DATE_PICKER_CALENDAR_TEMPLATE}
    </av-date-picker-popover>
  </div>
  <p av-description>Current value: {{ value() ? value()!.toString() : '(empty)' }}</p>
  <div class="flex gap-2">
    <button av-button variant="tertiary" type="button" (click)="setToday()">Set today</button>
    <button av-button variant="tertiary" type="button" (click)="value.set(null)">Clear</button>
  </div>
</div>`;

export const DEMO_NAME = 'date-picker-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';
import {
  AvButtonComponent,
  AvDatePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-controlled-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerControlledDemo {
  readonly value = signal<DateValue | null>(today(getLocalTimeZone()));

  setToday(): void {
    this.value.set(today(getLocalTimeZone()));
  }
}`;

@Component({
  selector: 'app-date-picker-controlled-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerControlledDemo {
  readonly value = signal<DateValue | null>(today(getLocalTimeZone()));

  setToday(): void {
    this.value.set(today(getLocalTimeZone()));
  }
}
