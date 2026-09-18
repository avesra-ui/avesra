import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="email">Email</label>
      <input
        av-input
        id="email"
        type="email"
        placeholder="you&#64;example.com"
        [(ngModel)]="email"
        [invalid]="isInvalid"
      />
      <p av-field-error [visible]="isInvalid">Email must include &#64; symbol</p>`;

export const DEMO_NAME = 'field-error-basic-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-field-error-basic-validation-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class FieldErrorBasicValidationDemo {
  email = 'invalid-email';

  get isInvalid(): boolean {
    return this.email.length > 0 && !this.email.includes('@');
  }
}`;

@Component({
  selector: 'app-field-error-basic-validation-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class FieldErrorBasicValidationDemo {
  email = 'invalid-email';

  get isInvalid(): boolean {
    return this.email.length > 0 && !this.email.includes('@');
  }
}
