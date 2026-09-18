import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvFormComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form av-form class="flex w-full max-w-[280px] flex-col gap-2" (submit)="onSubmit($event)">
  <label av-label>Verify account</label>
  <div
    av-input-otp
    [maxLength]="6"
    [(value)]="value"
    (valueChange)="onChange($event)"
    (complete)="onComplete($event)"
  >
    <div av-input-otp-group>
      <div av-input-otp-slot [index]="0"></div>
      <div av-input-otp-slot [index]="1"></div>
      <div av-input-otp-slot [index]="2"></div>
    </div>
    <div av-input-otp-separator></div>
    <div av-input-otp-group>
      <div av-input-otp-slot [index]="3"></div>
      <div av-input-otp-slot [index]="4"></div>
      <div av-input-otp-slot [index]="5"></div>
    </div>
  </div>
  <button
    av-button
    class="mt-2 w-full"
    type="submit"
    variant="primary"
    [disabled]="!isComplete()"
    [pending]="isSubmitting()"
  >
    @if (isSubmitting()) {
      Verifying...
    } @else {
      Verify Code
    }
  </button>
</form>`;

export const DEMO_NAME = 'input-otp-on-complete';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvFormComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-on-complete-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvFormComponent,
    AvButtonComponent,
  ],
  host: { class: 'flex w-full justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpOnCompleteDemo {
  value = signal('');
  isComplete = signal(false);
  isSubmitting = signal(false);

  onComplete(_code: string): void {
    this.isComplete.set(true);
  }

  onChange(value: string): void {
    this.value.set(value);
    this.isComplete.set(false);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.value.set('');
      this.isComplete.set(false);
    }, 2000);
  }
}`;

@Component({
  selector: 'app-input-otp-on-complete-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvFormComponent,
    AvButtonComponent,
  ],
  host: { class: 'flex w-full justify-center' },
  template: DEMO_TEMPLATE,
})
export class InputOtpOnCompleteDemo {
  value = signal('');
  isComplete = signal(false);
  isSubmitting = signal(false);

  onComplete(_code: string): void {
    this.isComplete.set(true);
  }

  onChange(value: string): void {
    this.value.set(value);
    this.isComplete.set(false);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.value.set('');
      this.isComplete.set(false);
    }, 2000);
  }
}
