import { Component, computed, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form
      av-form
      class="flex flex-col gap-4"
      (submit)="onSubmit($event)"
    >
      <av-radio-group
        name="plan-validation"
        [(value)]="selected"
        [invalid]="isInvalid()"
      >
        <label av-label required [invalid]="isInvalid()">Subscription plan</label>
        <div av-radio value="starter">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Starter
            <p av-description>For side projects and small teams</p>
          </span>
        </div>
        <div av-radio value="pro">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Pro
            <p av-description>Advanced reporting and analytics</p>
          </span>
        </div>
        <div av-radio value="teams">
          <span av-radio-control>
            <span av-radio-indicator></span>
          </span>
          <span av-radio-content>
            Teams
            <p av-description>Share access with up to 10 teammates</p>
          </span>
        </div>
        <p av-field-error [visible]="isInvalid()">
          Choose a subscription before continuing.
        </p>
      </av-radio-group>
      <button av-button class="mt-2 w-fit" type="submit">Submit</button>
      @if (message(); as msg) {
        <p class="text-sm text-muted">{{ msg }}</p>
      }
    </form>`;

export const DEMO_NAME = 'radio-group-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDescriptionComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
  AvRadioGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-radio-group-validation-demo',
  imports: [
    AvFormComponent,
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RadioGroupValidationDemo {
  readonly selected = signal<string | null>(null);
  readonly submitted = signal(false);
  readonly message = signal<string | null>(null);

  readonly isInvalid = computed(
    () => this.submitted() && this.selected() === null,
  );

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
    this.message.set(null);

    if (this.selected() === null) {
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const value = formData.get('plan-validation');

    this.message.set(\`Your chosen plan is: \${value}\`);
  }
}`;

@Component({
  selector: 'app-radio-group-validation-demo',
  imports: [
    AvFormComponent,
    AvRadioGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RadioGroupValidationDemo {
  readonly selected = signal<string | null>(null);
  readonly submitted = signal(false);
  readonly message = signal<string | null>(null);

  readonly isInvalid = computed(
    () => this.submitted() && this.selected() === null,
  );

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
    this.message.set(null);

    if (this.selected() === null) {
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const value = formData.get('plan-validation');

    this.message.set(`Your chosen plan is: ${value}`);
  }
}
