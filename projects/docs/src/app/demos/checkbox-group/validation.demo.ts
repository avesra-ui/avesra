import { Component, computed, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvCheckboxGroupImports,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form
      av-form
      class="flex flex-col gap-4 px-4"
      (submit)="onSubmit($event)"
    >
      <av-checkbox-group
        name="preferences"
        [(value)]="selected"
        [invalid]="isInvalid()"
      >
        <label av-label required [invalid]="isInvalid()">Preferences</label>
        <div av-checkbox name="preferences" value="email">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <span av-checkbox-content>Email notifications</span>
        </div>
        <div av-checkbox name="preferences" value="sms">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <span av-checkbox-content>SMS notifications</span>
        </div>
        <div av-checkbox name="preferences" value="push">
          <span av-checkbox-control>
            <span av-checkbox-indicator></span>
          </span>
          <span av-checkbox-content>Push notifications</span>
        </div>
        <p av-field-error [visible]="isInvalid()">
          Please select at least one notification method.
        </p>
      </av-checkbox-group>
      <button av-button type="submit">Submit</button>
    </form>`;

export const DEMO_NAME = 'checkbox-group-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvCheckboxGroupImports,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-group-validation-demo',
  imports: [
    AvFormComponent,
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CheckboxGroupValidationDemo {
  readonly selected = signal<string[]>([]);
  readonly submitted = signal(false);

  readonly isInvalid = computed(
    () => this.submitted() && this.selected().length === 0,
  );

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    if (this.selected().length === 0) {
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const values = formData.getAll('preferences');

    alert(\`Selected preferences: \${values.join(', ')}\`);
  }
}`;

@Component({
  selector: 'app-checkbox-group-validation-demo',
  imports: [
    AvFormComponent,
    AvCheckboxGroupImports,
    AvLabelComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CheckboxGroupValidationDemo {
  readonly selected = signal<string[]>([]);
  readonly submitted = signal(false);

  readonly isInvalid = computed(
    () => this.submitted() && this.selected().length === 0,
  );

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);

    if (this.selected().length === 0) {
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const values = formData.getAll('preferences');

    alert(`Selected preferences: ${values.join(', ')}`);
  }
}
