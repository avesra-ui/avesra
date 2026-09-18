import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';

import {
  AvButtonComponent,
  AvDateFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<form av-form class="flex w-[280px] flex-col gap-4" (submit)="onSubmit($event)">
  <div
    av-date-field
    class="w-full"
    name="date"
    full-width
    required
    [invalid]="isInvalid()"
    [min-value]="todayDate"
    [(value)]="value"
  >
    <label av-label required>Appointment date</label>
    <div av-date-input-group full-width>
      <div av-date-input-group-prefix>
        <app-icon icon="solar:calendar-linear" size="16" class="text-muted" />
      </div>
      <div av-date-input-group-input></div>
    </div>
    @if (isInvalid()) {
      <p av-field-error>Date must be today or in the future</p>
    } @else {
      <p av-description>Enter a date from today onwards</p>
    }
  </div>
  <button
    av-button
    class="w-full"
    type="submit"
    variant="primary"
    [disabled]="!value() || isInvalid()"
    [pending]="isSubmitting()"
  >
    {{ isSubmitting() ? 'Submitting...' : 'Submit' }}
  </button>
</form>`;

export const DEMO_NAME = 'date-field-form-example';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';
import {
  AvButtonComponent,
  AvDateFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-date-field-form-example-demo',
  imports: [
    AvFormComponent,
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateFieldFormExampleDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<DateValue | null>(null);
  readonly isSubmitting = signal(false);
  readonly isInvalid = () => {
    const value = this.value();
    return value !== null && value.compare(this.todayDate) < 0;
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.value() || this.isInvalid()) {
      return;
    }
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.value.set(null);
      this.isSubmitting.set(false);
    }, 1500);
  }
}`;

@Component({
  selector: 'app-date-field-form-example-demo',
  imports: [
    AvFormComponent,
    AvDateFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateFieldFormExampleDemo {
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
    }, 1500);
  }
}
