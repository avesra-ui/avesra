import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<label av-label for="username">Username</label>
      <input
        av-input
        id="username"
        placeholder="Enter username"
        [(ngModel)]="username"
        [invalid]="isInvalid"
      />
      <p av-field-error [visible]="isInvalid">Username must be at least 3 characters</p>`;

export const DEMO_NAME = 'field-error-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvFieldErrorComponent, AvInputComponent, AvLabelComponent } from '@avesra/angular';

@Component({
  selector: 'app-field-error-basic-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class FieldErrorBasicDemo {
  username = 'jr';

  get isInvalid(): boolean {
    return this.username.length > 0 && this.username.length < 3;
  }
}`;

@Component({
  selector: 'app-field-error-basic-demo',
  imports: [FormsModule, AvFieldErrorComponent, AvInputComponent, AvLabelComponent],
  host: { class: 'flex w-64 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class FieldErrorBasicDemo {
  username = 'jr';

  get isInvalid(): boolean {
    return this.username.length > 0 && this.username.length < 3;
  }
}
