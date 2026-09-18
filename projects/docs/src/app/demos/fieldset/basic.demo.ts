import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFieldsetImports,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
  AvTextareaComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form
      av-form
      class="w-full max-w-96"
      aria-label="Profile settings"
      (submit)="onSubmit($event)"
    >
      <fieldset av-fieldset>
        <legend av-fieldset-legend>Profile Settings</legend>
        <p av-description>Update your profile information.</p>
        <div av-fieldset-group>
          <div class="flex flex-col gap-1">
            <label av-label for="fieldset-name" required>Name</label>
            <input
              av-input
              full-width
              id="fieldset-name"
              name="name"
              placeholder="John Doe"
              required
              minlength="3"
              [invalid]="nameError()"
              (input)="onNameInput($event)"
            />
            <p av-field-error [visible]="nameError()">Name must be at least 3 characters</p>
          </div>
          <div class="flex flex-col gap-1">
            <label av-label for="fieldset-email" required>Email</label>
            <input
              av-input
              full-width
              id="fieldset-email"
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
            <label av-label for="fieldset-bio" required>Bio</label>
            <textarea
              av-textarea
              full-width
              id="fieldset-bio"
              name="bio"
              rows="4"
              placeholder="Tell us about yourself..."
              required
              minlength="10"
              [invalid]="bioError()"
              (input)="onBioInput($event)"
            ></textarea>
            <p av-description>Minimum 10 characters</p>
            <p av-field-error [visible]="bioError()">Bio must be at least 10 characters</p>
          </div>
        </div>
        <div av-fieldset-actions>
          <button av-button type="submit">Save changes</button>
          <button av-button type="reset" variant="secondary">Cancel</button>
        </div>
      </fieldset>
    </form>`;

export const DEMO_NAME = 'fieldset-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFieldsetImports,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
  AvTextareaComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-fieldset-basic-demo',
  imports: [
    AvFormComponent,
    AvFieldsetImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvInputComponent,
    AvTextareaComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-96' },
  template: \`<form
      av-form
      class="w-full max-w-96"
      aria-label="Profile settings"
      (submit)="onSubmit(\$event)"
    >
      <fieldset av-fieldset>
        <legend av-fieldset-legend>Profile Settings</legend>
        <p av-description>Update your profile information.</p>
        <div av-fieldset-group>
          <div class="flex flex-col gap-1">
            <label av-label for="fieldset-name" required>Name</label>
            <input
              av-input
              full-width
              id="fieldset-name"
              name="name"
              placeholder="John Doe"
              required
              minlength="3"
              [invalid]="nameError()"
              (input)="onNameInput(\$event)"
            />
            <p av-field-error [visible]="nameError()">Name must be at least 3 characters</p>
          </div>
          <div class="flex flex-col gap-1">
            <label av-label for="fieldset-email" required>Email</label>
            <input
              av-input
              full-width
              id="fieldset-email"
              name="email"
              type="email"
              placeholder="john&#64;example.com"
              required
              [invalid]="emailError()"
              (input)="onEmailInput(\$event)"
            />
            <p av-field-error [visible]="emailError()">Please enter a valid email address</p>
          </div>
          <div class="flex flex-col gap-1">
            <label av-label for="fieldset-bio" required>Bio</label>
            <textarea
              av-textarea
              full-width
              id="fieldset-bio"
              name="bio"
              rows="4"
              placeholder="Tell us about yourself..."
              required
              minlength="10"
              [invalid]="bioError()"
              (input)="onBioInput(\$event)"
            ></textarea>
            <p av-description>Minimum 10 characters</p>
            <p av-field-error [visible]="bioError()">Bio must be at least 10 characters</p>
          </div>
        </div>
        <div av-fieldset-actions>
          <button av-button type="submit">Save changes</button>
          <button av-button type="reset" variant="secondary">Cancel</button>
        </div>
      </fieldset>
    </form>\`,
})
export class FieldsetBasicDemo {
  readonly nameError = signal(false);
  readonly emailError = signal(false);
  readonly bioError = signal(false);

  onNameInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.nameError.set(value.length > 0 && value.length < 3);
  }

  onEmailInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\$/i.test(value);
    this.emailError.set(value.length > 0 && !isValid);
  }

  onBioInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.bioError.set(value.length > 0 && value.length < 10);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Form submitted successfully!');
  }
}`;

@Component({
  selector: 'app-fieldset-basic-demo',
  imports: [
    AvFormComponent,
    AvFieldsetImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvInputComponent,
    AvTextareaComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-96' },
  template: DEMO_TEMPLATE,
})
export class FieldsetBasicDemo {
  readonly nameError = signal(false);
  readonly emailError = signal(false);
  readonly bioError = signal(false);

  onNameInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.nameError.set(value.length > 0 && value.length < 3);
  }

  onEmailInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    this.emailError.set(value.length > 0 && !isValid);
  }

  onBioInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.bioError.set(value.length > 0 && value.length < 10);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Form submitted successfully!');
  }
}
