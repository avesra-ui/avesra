import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form class="flex flex-col gap-4" [formGroup]="settingsForm">
      <div av-checkbox formControlName="terms">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <label av-label class="text-sm">Accept terms</label>
      </div>
      <div av-checkbox formControlName="newsletter">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <label av-label class="text-sm">Subscribe to newsletter</label>
      </div>
      <p class="text-sm text-muted">
        Form value:
        {{ settingsForm.value | json }}
      </p>
    </form>`;

export const DEMO_NAME = 'checkbox-reactive-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AvCheckboxImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-reactive-form-demo',
  imports: [JsonPipe, ReactiveFormsModule, AvCheckboxImports, AvLabelComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`<form class="flex flex-col gap-4" [formGroup]="settingsForm">
      <div av-checkbox formControlName="terms">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <label av-label class="text-sm">Accept terms</label>
      </div>
      <div av-checkbox formControlName="newsletter">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <label av-label class="text-sm">Subscribe to newsletter</label>
      </div>
      <p class="text-sm text-muted">
        Form value:
        {{ settingsForm.value | json }}
      </p>
    </form>\`,
})
export class CheckboxReactiveFormDemo {
  readonly settingsForm = new FormGroup({
    terms: new FormControl(false),
    newsletter: new FormControl(true),
  });
}`;

@Component({
  selector: 'app-checkbox-reactive-form-demo',
  imports: [JsonPipe, ReactiveFormsModule, AvCheckboxImports, AvLabelComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class CheckboxReactiveFormDemo {
  readonly settingsForm = new FormGroup({
    terms: new FormControl(false),
    newsletter: new FormControl(true),
  });
}
