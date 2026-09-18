import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="password">Password</label>
      <input
        av-input
        id="password"
        type="password"
        placeholder="Enter password"
        [(ngModel)]="password"
        [invalid]="isInvalid"
      />
      <p av-field-error [visible]="isInvalid">{{ errorMessage }}</p>`;

export const DEMO_NAME = 'field-error-dynamic-messages';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-field-error-dynamic-messages-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class FieldErrorDynamicMessagesDemo {
  password = 'abc';

  get isInvalid(): boolean {
    return this.password.length > 0 && this.password.length < 8;
  }

  get errorMessage(): string {
    if (this.password.length === 0) {
      return '';
    }
    if (this.password.length < 4) {
      return 'Password is too short';
    }
    if (this.password.length < 8) {
      return \`Need \${8 - this.password.length} more characters\`;
    }
    return '';
  }
}`;

@Component({
  selector: 'app-field-error-dynamic-messages-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class FieldErrorDynamicMessagesDemo {
  password = 'abc';

  get isInvalid(): boolean {
    return this.password.length > 0 && this.password.length < 8;
  }

  get errorMessage(): string {
    if (this.password.length === 0) {
      return '';
    }
    if (this.password.length < 4) {
      return 'Password is too short';
    }
    if (this.password.length < 8) {
      return `Need ${8 - this.password.length} more characters`;
    }
    return '';
  }
}
