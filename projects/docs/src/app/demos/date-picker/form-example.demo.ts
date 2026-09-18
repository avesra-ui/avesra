import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import {
  AvButtonComponent,
  AvDatePickerImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

const DEMO_TEMPLATE = `<form av-form class="flex w-72 flex-col gap-3" (submit)="onSubmit($event)">
  <div
    av-date-picker
    name="appointmentDate"
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
    } @else {
      <p av-description>Choose a valid appointment date.</p>
    }
    <av-date-picker-popover>
      ${DATE_PICKER_CALENDAR_TEMPLATE}
    </av-date-picker-popover>
  </div>
  <button
    av-button
    class="w-full"
    type="submit"
    [disabled]="!value() || isInvalid()"
    [pending]="isSubmitting()"
  >
    {{ isSubmitting() ? 'Submitting...' : 'Submit' }}
  </button>
</form>`;

export const DEMO_NAME = 'date-picker-form-example';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';
import {
  AvButtonComponent,
  AvDatePickerImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-form-example-demo',
  imports: [
    AvFormComponent,
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerFormExampleDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<DateValue | null>(null);
  readonly isSubmitting = signal(false);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.compare(this.todayDate) < 0;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.value() || this.isInvalid()) {
      return;
    }
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.value.set(null);
      this.isSubmitting.set(false);
    }, 1200);
  }
}`;

@Component({
  selector: 'app-date-picker-form-example-demo',
  imports: [
    AvFormComponent,
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerFormExampleDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<DateValue | null>(null);
  readonly isSubmitting = signal(false);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.compare(this.todayDate) < 0;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.value() || this.isInvalid()) {
      return;
    }
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.value.set(null);
      this.isSubmitting.set(false);
    }, 1200);
  }
}
