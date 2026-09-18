import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import {
  AvDateFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div
    av-date-field
    class="w-64"
    name="date"
    required
    [invalid]="isInvalid()"
    [min-value]="todayDate"
    [(value)]="value"
  >
    <label av-label required>Date</label>
    <div av-date-input-group>
      <div av-date-input-group-input></div>
    </div>
    @if (isInvalid()) {
      <p av-field-error>Date must be today or in the future</p>
    } @else {
      <p av-description>Enter a date from today onwards</p>
    }
  </div>
</div>`;

export const DEMO_NAME = 'date-field-with-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';
import {
  AvDateFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-field-with-validation-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldWithValidationDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<DateValue | null>(null);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.compare(this.todayDate) < 0;
  }
}`;

@Component({
  selector: 'app-date-field-with-validation-demo',
  imports: [
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldWithValidationDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<DateValue | null>(null);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.compare(this.todayDate) < 0;
  }
}
