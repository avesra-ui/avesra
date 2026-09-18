import { Component, signal } from '@angular/core';
import { parseTime, type Time as TimeType } from '@internationalized/date';

import {
  AvButtonComponent,
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<form av-form class="flex w-[280px] flex-col gap-4" (submit)="onSubmit($event)">
  <div
    av-time-field
    class="w-full"
    name="time"
    full-width
    required
    [invalid]="isInvalid()"
    [min-value]="minTime"
    [max-value]="maxTime"
    [(value)]="value"
  >
    <label av-label required>Appointment time</label>
    <div av-date-input-group full-width>
      <div av-date-input-group-prefix>
        <app-icon icon="solar:clock-circle-linear" size="16" class="text-muted" />
      </div>
      <div av-date-input-group-input></div>
    </div>
    @if (isInvalid()) {
      <p av-field-error>Time must be between 9:00 AM and 5:00 PM</p>
    } @else {
      <p av-description>Enter a time between 9:00 AM and 5:00 PM</p>
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

export const DEMO_NAME = 'time-field-form-example';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { parseTime, type Time as TimeType } from '@internationalized/date';
import {
  AvButtonComponent,
  AvTimeFieldImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-time-field-form-example-demo',
  imports: [
    AvFormComponent,
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TimeFieldFormExampleDemo {
  readonly minTime = parseTime('09:00');
  readonly maxTime = parseTime('17:00');
  readonly value = signal<TimeType | null>(null);
  readonly isSubmitting = signal(false);

  isInvalid(): boolean {
    const v = this.value();
    return v !== null && (v.compare(this.minTime) < 0 || v.compare(this.maxTime) > 0);
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
}`;

@Component({
  selector: 'app-time-field-form-example-demo',
  imports: [
    AvFormComponent,
    AvTimeFieldImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TimeFieldFormExampleDemo {
  readonly minTime = parseTime('09:00');
  readonly maxTime = parseTime('17:00');
  readonly value = signal<TimeType | null>(null);
  readonly isSubmitting = signal(false);

  isInvalid(): boolean {
    const v = this.value();
    return v !== null && (v.compare(this.minTime) < 0 || v.compare(this.maxTime) > 0);
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
