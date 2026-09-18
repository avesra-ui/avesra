import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvButtonComponent,
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
  type AvRangeCalendarValue,
} from '@avesra/angular';

import { DATE_RANGE_PICKER_CALENDAR_TEMPLATE } from './range-calendar-compound';

const DEMO_TEMPLATE = `<form av-form class="flex w-80 flex-col gap-3" (submit)="onSubmit($event)">
  <div
    av-date-range-picker
    start-name="startDate"
    end-name="endDate"
    required
    [invalid]="isInvalid()"
    [min-value]="todayDate"
    [(value)]="value"
  >
    <label av-label required>Trip dates</label>
    <div av-date-input-group full-width>
      <div av-date-input-group-input slot="start"></div>
      <span av-date-range-picker-range-separator></span>
      <div av-date-input-group-input slot="end"></div>
      <div av-date-input-group-suffix>
        <button type="button" av-date-range-picker-trigger>
          <span av-date-range-picker-trigger-indicator></span>
        </button>
      </div>
    </div>
    @if (isInvalid()) {
      <p av-field-error>Start date must be today or in the future.</p>
    } @else {
      <p av-description>Choose a valid trip date range.</p>
    }
    <av-date-range-picker-popover>
      ${DATE_RANGE_PICKER_CALENDAR_TEMPLATE}
    </av-date-range-picker-popover>
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

export const DEMO_NAME = 'date-range-picker-form-example';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvButtonComponent,
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
  type AvRangeCalendarValue,
} from '@avesra/angular';

@Component({
  selector: 'app-date-range-picker-form-example-demo',
  imports: [
    AvFormComponent,
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateRangePickerFormExampleDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<AvRangeCalendarValue>(null);
  readonly isSubmitting = signal(false);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.start.compare(this.todayDate) < 0;
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
  selector: 'app-date-range-picker-form-example-demo',
  imports: [
    AvFormComponent,
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateRangePickerFormExampleDemo {
  readonly todayDate = today(getLocalTimeZone());
  readonly value = signal<AvRangeCalendarValue>(null);
  readonly isSubmitting = signal(false);

  isInvalid(): boolean {
    const value = this.value();
    return value !== null && value.start.compare(this.todayDate) < 0;
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
