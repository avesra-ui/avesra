import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputOtpImports,
  AvLabelComponent,
  AvLinkImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form av-form class="flex flex-col gap-4" (submit)="onSubmit($event)">
  <div class="flex flex-col gap-2">
    <label av-label>Two-factor authentication</label>
    <p av-description>Enter the 6-digit code from your authenticator app</p>
    <div
      av-input-otp
      [maxLength]="6"
      [invalid]="!!error()"
      [(value)]="value"
      (valueChange)="onChange($event)"
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
    <p av-field-error id="code-error" [visible]="!!error()">{{ error() }}</p>
  </div>
  <button
    av-button
    type="submit"
    full-width
    variant="primary"
    [disabled]="value().length !== 6"
    [pending]="isSubmitting()"
  >
    @if (isSubmitting()) {
      Verifying...
    } @else {
      Verify
    }
  </button>
  <div class="flex items-center justify-center gap-1">
    <p class="text-sm text-muted">Having trouble?</p>
    <a av-link class="text-sm text-foreground" underline="always" href="#" (click)="$event.preventDefault()">
      Use backup code
    </a>
  </div>
</form>`;

export const DEMO_NAME = 'input-otp-form-example';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputOtpImports,
  AvLabelComponent,
  AvLinkImports,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-form-example-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvFormComponent,
    AvButtonComponent,
    AvLinkImports,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpFormExampleDemo {
  value = signal('');
  error = signal('');
  isSubmitting = signal(false);

  onChange(value: string): void {
    this.value.set(value);
    this.error.set('');
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.error.set('');

    if (this.value().length !== 6) {
      this.error.set('Please enter all 6 digits');
      return;
    }

    this.isSubmitting.set(true);

    setTimeout(() => {
      if (this.value() === '123456') {
        this.value.set('');
      } else {
        this.error.set('Invalid code. Please try again.');
      }
      this.isSubmitting.set(false);
    }, 1500);
  }
}`;

@Component({
  selector: 'app-input-otp-form-example-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvFormComponent,
    AvButtonComponent,
    AvLinkImports,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputOtpFormExampleDemo {
  value = signal('');
  error = signal('');
  isSubmitting = signal(false);

  onChange(value: string): void {
    this.value.set(value);
    this.error.set('');
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.error.set('');

    if (this.value().length !== 6) {
      this.error.set('Please enter all 6 digits');
      return;
    }

    this.isSubmitting.set(true);

    setTimeout(() => {
      if (this.value() === '123456') {
        this.value.set('');
      } else {
        this.error.set('Invalid code. Please try again.');
      }
      this.isSubmitting.set(false);
    }, 1500);
  }
}
