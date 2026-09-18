import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form
      av-form
      class="w-full max-w-md space-y-4 rounded-lg border border-border bg-surface p-6"
      aria-label="Newsletter signup"
      (submit)="onSubmit($event)"
    >
      <div class="flex flex-col gap-1">
        <label av-label class="text-sm font-medium" for="form-styled-email">Email</label>
        <input
          av-input
          full-width
          class="rounded-full"
          id="form-styled-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <p av-field-error class="text-xs" [visible]="false">Please enter a valid email address</p>
      </div>

      <button av-button full-width type="submit">Submit</button>
    </form>`;

export const DEMO_NAME = 'form-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvInputComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-form-custom-styling-demo',
  imports: [
    AvFormComponent,
    AvLabelComponent,
    AvInputComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-md' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class FormCustomStylingDemo {
  onSubmit(event: Event): void {
    event.preventDefault();
  }
}`;

@Component({
  selector: 'app-form-custom-styling-demo',
  imports: [
    AvFormComponent,
    AvLabelComponent,
    AvInputComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  host: { class: 'w-full max-w-md' },
  template: DEMO_TEMPLATE,
})
export class FormCustomStylingDemo {
  onSubmit(event: Event): void {
    event.preventDefault();
  }
}
