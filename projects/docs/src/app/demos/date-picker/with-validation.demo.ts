import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import {
  AvDatePickerImports,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

const DEMO_TEMPLATE = `<div
  av-date-picker
  class="w-72"
  name="date"
  required
  [invalid]="isInvalid()"
  [min-value]="todayDate"
  [(value)]="value"
>
  <label av-label required>Appointment date</label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger>
        <span av-date-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  @if (isInvalid()) {
    <p av-field-error>Date must be today or in the future.</p>
  }
  <av-date-picker-popover>
    ${DATE_PICKER_CALENDAR_TEMPLATE}
  </av-date-picker-popover>
</div>`;

export const DEMO_NAME = 'date-picker-with-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';
import {
  AvDatePickerImports,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-with-validation-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvFieldErrorComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerWithValidationDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<DateValue | null>(null);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.compare(this.todayDate) < 0;
  }
}`;

@Component({
  selector: 'app-date-picker-with-validation-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvFieldErrorComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerWithValidationDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<DateValue | null>(null);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.compare(this.todayDate) < 0;
  }
}
