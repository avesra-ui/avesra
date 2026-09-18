import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="username-multi">Username</label>
      <input
        av-input
        id="username-multi"
        placeholder="Choose a username"
        [(ngModel)]="username"
        [invalid]="hasErrors"
      />
      <p av-field-error [visible]="hasErrors">
        @for (error of errors; track error) {
          <span class="block">{{ error }}</span>
        }
      </p>`;

export const DEMO_NAME = 'field-error-multiple-errors';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-field-error-multiple-errors-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class FieldErrorMultipleErrorsDemo {
  username = 'ab!';

  get errors(): string[] {
    const next: string[] = [];
    if (this.username.length > 0 && this.username.length < 3) {
      next.push('Must be at least 3 characters');
    }
    if (this.username.length > 0 && !/^[a-zA-Z0-9_]*$/.test(this.username)) {
      next.push('Only letters, numbers, and underscores allowed');
    }
    return next;
  }

  get hasErrors(): boolean {
    return this.errors.length > 0;
  }
}`;

@Component({
  selector: 'app-field-error-multiple-errors-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class FieldErrorMultipleErrorsDemo {
  username = 'ab!';

  get errors(): string[] {
    const next: string[] = [];
    if (this.username.length > 0 && this.username.length < 3) {
      next.push('Must be at least 3 characters');
    }
    if (this.username.length > 0 && !/^[a-zA-Z0-9_]*$/.test(this.username)) {
      next.push('Only letters, numbers, and underscores allowed');
    }
    return next;
  }

  get hasErrors(): boolean {
    return this.errors.length > 0;
  }
}
