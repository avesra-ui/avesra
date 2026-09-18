import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form
      av-form
      class="flex w-full flex-col gap-4"
      aria-label="Sign in"
      (submit)="onSubmit($event)"
    >
      <div class="flex flex-col gap-1">
        <label av-label for="form-email" required>Email</label>
        <input
          av-input
          full-width
          id="form-email"
          name="email"
          type="email"
          placeholder="john&#64;example.com"
          required
          [invalid]="emailError()"
          (input)="onEmailInput($event)"
        />
        <p av-field-error [visible]="emailError()">Please enter a valid email address</p>
      </div>

      <div class="flex flex-col gap-1">
        <label av-label for="form-password" required>Password</label>
        <input
          av-input
          full-width
          id="form-password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          minlength="8"
          [invalid]="passwordError()"
          (input)="onPasswordInput($event)"
        />
        <p av-description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </p>
        <p av-field-error [visible]="passwordError()">
          {{ passwordMessage() }}
        </p>
      </div>

      <div class="flex gap-2">
        <button av-button type="submit">Submit</button>
        <button av-button type="reset" variant="secondary">Reset</button>
      </div>
    </form>`;

export const DEMO_NAME = 'form-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-form-basic-demo',
  imports: [
    AvFormComponent,
    AvLabelComponent,
    AvInputComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-96' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class FormBasicDemo {
  readonly emailError = signal(false);
  readonly passwordError = signal(false);
  readonly passwordMessage = signal('Password must be at least 8 characters');

  onEmailInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\$/i.test(value);

    this.emailError.set(value.length > 0 && !isValid);
  }

  onPasswordInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    if (value.length === 0) {
      this.passwordError.set(false);
      return;
    }

    if (value.length < 8) {
      this.passwordMessage.set('Password must be at least 8 characters');
      this.passwordError.set(true);
      return;
    }

    if (!/[A-Z]/.test(value)) {
      this.passwordMessage.set('Password must contain at least one uppercase letter');
      this.passwordError.set(true);
      return;
    }

    if (!/[0-9]/.test(value)) {
      this.passwordMessage.set('Password must contain at least one number');
      this.passwordError.set(true);
      return;
    }

    this.passwordError.set(false);
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert(\`Form submitted with: \${JSON.stringify(data, null, 2)}\`);
  }
}`;

@Component({
  selector: 'app-form-basic-demo',
  imports: [
    AvFormComponent,
    AvLabelComponent,
    AvInputComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-96' },
  template: DEMO_TEMPLATE,
})
export class FormBasicDemo {
  readonly emailError = signal(false);
  readonly passwordError = signal(false);
  readonly passwordMessage = signal('Password must be at least 8 characters');

  onEmailInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

    this.emailError.set(value.length > 0 && !isValid);
  }

  onPasswordInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    if (value.length === 0) {
      this.passwordError.set(false);
      return;
    }

    if (value.length < 8) {
      this.passwordMessage.set('Password must be at least 8 characters');
      this.passwordError.set(true);
      return;
    }

    if (!/[A-Z]/.test(value)) {
      this.passwordMessage.set('Password must contain at least one uppercase letter');
      this.passwordError.set(true);
      return;
    }

    if (!/[0-9]/.test(value)) {
      this.passwordMessage.set('Password must contain at least one number');
      this.passwordError.set(true);
      return;
    }

    this.passwordError.set(false);
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  }
}
