import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form av-form class="flex flex-col gap-2" (submit)="onSubmit($event)">
  <label av-label>Verify account</label>
  <p av-description>Hint: The code is 123456</p>
  <div
    av-input-otp
    name="code"
    [maxLength]="6"
    [invalid]="isInvalid()"
    [aria-describedby]="isInvalid() ? 'code-error' : undefined"
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
  <p av-field-error id="code-error" [visible]="isInvalid()">
    Invalid code. Please try again.
  </p>
  <button av-button type="submit" [disabled]="value().length !== 6">Submit</button>
</form>`;

export const DEMO_NAME = 'input-otp-with-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputOtpImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-input-otp-with-validation-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvFormComponent,
    AvButtonComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputOtpWithValidationDemo {
  value = signal('');
  isInvalid = signal(false);

  onChange(value: string): void {
    this.value.set(value);
    this.isInvalid.set(false);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const code = new FormData(form).get('code');

    if (code !== '123456') {
      this.isInvalid.set(true);
      return;
    }

    this.isInvalid.set(false);
    this.value.set('');
    alert('Code verified successfully!');
  }
}`;

@Component({
  selector: 'app-input-otp-with-validation-demo',
  imports: [
    AvInputOtpImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvFormComponent,
    AvButtonComponent,
  ],
  host: { class: 'flex w-full max-w-[280px] flex-col gap-2' },
  template: DEMO_TEMPLATE,
})
export class InputOtpWithValidationDemo {
  value = signal('');
  isInvalid = signal(false);

  onChange(value: string): void {
    this.value.set(value);
    this.isInvalid.set(false);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const code = new FormData(form).get('code');

    if (code !== '123456') {
      this.isInvalid.set(true);
      return;
    }

    this.isInvalid.set(false);
    this.value.set('');
    alert('Code verified successfully!');
  }
}
