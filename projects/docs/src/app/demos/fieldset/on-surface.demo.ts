import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFieldsetImports,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
  AvSurfaceComponent,
  AvTextareaComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex w-full items-center justify-center rounded-3xl bg-surface p-6">
      <div av-surface class="w-full min-w-[380px] max-w-96 p-6">
        <form av-form aria-label="Profile settings" (submit)="onSubmit($event)">
          <fieldset av-fieldset class="w-full">
            <legend av-fieldset-legend>Profile Settings</legend>
            <p av-description>Update your profile information.</p>
            <div av-fieldset-group>
              <div class="flex flex-col gap-1">
                <label av-label for="fieldset-surface-name" required>Name</label>
                <input
                  av-input
                  full-width
                  id="fieldset-surface-name"
                  name="name"
                  placeholder="John Doe"
                  variant="secondary"
                  required
                  minlength="3"
                  [invalid]="nameError()"
                  (input)="onNameInput($event)"
                />
                <p av-field-error [visible]="nameError()">Name must be at least 3 characters</p>
              </div>
              <div class="flex flex-col gap-1">
                <label av-label for="fieldset-surface-email" required>Email</label>
                <input
                  av-input
                  full-width
                  id="fieldset-surface-email"
                  name="email"
                  type="email"
                  placeholder="john&#64;example.com"
                  variant="secondary"
                  required
                  [invalid]="emailError()"
                  (input)="onEmailInput($event)"
                />
                <p av-field-error [visible]="emailError()">Please enter a valid email address</p>
              </div>
              <div class="flex flex-col gap-1">
                <label av-label for="fieldset-surface-bio" required>Bio</label>
                <textarea
                  av-textarea
                  full-width
                  id="fieldset-surface-bio"
                  name="bio"
                  rows="4"
                  placeholder="Tell us about yourself..."
                  variant="secondary"
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
              <button av-button type="reset" variant="tertiary">Cancel</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>`;

export const DEMO_NAME = 'fieldset-on-surface';
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
  AvSurfaceComponent,
  AvTextareaComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-fieldset-on-surface-demo',
  imports: [
    AvFormComponent,
    AvFieldsetImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvInputComponent,
    AvTextareaComponent,
    AvButtonComponent,
    AvSurfaceComponent,
  ],
  host: { class: 'flex w-full items-center justify-center' },
  template: \`<div class="flex w-full items-center justify-center rounded-3xl bg-surface p-6">
      <div av-surface class="w-full min-w-[380px] max-w-96 p-6">
        <form av-form aria-label="Profile settings" (submit)="onSubmit(\$event)">
          <fieldset av-fieldset class="w-full">
            <legend av-fieldset-legend>Profile Settings</legend>
            <p av-description>Update your profile information.</p>
            <div av-fieldset-group>
              <div class="flex flex-col gap-1">
                <label av-label for="fieldset-surface-name" required>Name</label>
                <input
                  av-input
                  full-width
                  id="fieldset-surface-name"
                  name="name"
                  placeholder="John Doe"
                  variant="secondary"
                  required
                  minlength="3"
                  [invalid]="nameError()"
                  (input)="onNameInput(\$event)"
                />
                <p av-field-error [visible]="nameError()">Name must be at least 3 characters</p>
              </div>
              <div class="flex flex-col gap-1">
                <label av-label for="fieldset-surface-email" required>Email</label>
                <input
                  av-input
                  full-width
                  id="fieldset-surface-email"
                  name="email"
                  type="email"
                  placeholder="john&#64;example.com"
                  variant="secondary"
                  required
                  [invalid]="emailError()"
                  (input)="onEmailInput(\$event)"
                />
                <p av-field-error [visible]="emailError()">Please enter a valid email address</p>
              </div>
              <div class="flex flex-col gap-1">
                <label av-label for="fieldset-surface-bio" required>Bio</label>
                <textarea
                  av-textarea
                  full-width
                  id="fieldset-surface-bio"
                  name="bio"
                  rows="4"
                  placeholder="Tell us about yourself..."
                  variant="secondary"
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
              <button av-button type="reset" variant="tertiary">Cancel</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>\`,
})
export class FieldsetOnSurfaceDemo {
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
  selector: 'app-fieldset-on-surface-demo',
  imports: [
    AvFormComponent,
    AvFieldsetImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvInputComponent,
    AvTextareaComponent,
    AvButtonComponent,
    AvSurfaceComponent,
  ],
  host: { class: 'flex w-full items-center justify-center' },
  template: DEMO_TEMPLATE,
})
export class FieldsetOnSurfaceDemo {
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
