import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {
  AvButtonComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form
  av-form
  novalidate
  class="flex w-[256px] flex-col gap-4"
  [formGroup]="form"
  (ngSubmit)="onSubmit()"
>
  <div
    av-select
    full-width
    placeholder="Select one"
    formControlName="state"
    [invalid]="isStateInvalid()"
  >
    <label av-label required [invalid]="isStateInvalid()">State</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box>
        <div av-list-box-item id="florida" textValue="Florida">
          Florida
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="delaware" textValue="Delaware">
          Delaware
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="california" textValue="California">
          California
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="texas" textValue="Texas">
          Texas
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="new-york" textValue="New York">
          New York
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="washington" textValue="Washington">
          Washington
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </av-select-popover>
    <p av-field-error [visible]="isStateInvalid()">Please select an option.</p>
  </div>

  <div
    av-select
    full-width
    placeholder="Select a country"
    formControlName="country"
    [invalid]="isCountryInvalid()"
  >
    <label av-label required [invalid]="isCountryInvalid()">Country</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box>
        <div av-list-box-item id="usa" textValue="United States">
          United States
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="canada" textValue="Canada">
          Canada
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="mexico" textValue="Mexico">
          Mexico
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="uk" textValue="United Kingdom">
          United Kingdom
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="france" textValue="France">
          France
          <span av-list-box-item-indicator></span>
        </div>
        <div av-list-box-item id="germany" textValue="Germany">
          Germany
          <span av-list-box-item-indicator></span>
        </div>
      </div>
    </av-select-popover>
    <p av-field-error [visible]="isCountryInvalid()">Please select an option.</p>
  </div>

  <button av-button type="submit">Submit</button>
</form>`;

export const DEMO_NAME = 'select-required';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AvButtonComponent,
  AvFieldErrorComponent,
  AvFormComponent,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-required-demo',
  imports: [
    ReactiveFormsModule,
    AvFormComponent,
    AvSelectImports,
    AvLabelComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectRequiredDemo {
  readonly form = new FormGroup({
    state: new FormControl<string | null>(null, Validators.required),
    country: new FormControl<string | null>(null, Validators.required),
  });

  isStateInvalid(): boolean {
    const control = this.form.controls.state;
    return control.invalid && (control.touched || control.dirty);
  }

  isCountryInvalid(): boolean {
    const control = this.form.controls.country;
    return control.invalid && (control.touched || control.dirty);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    alert('Form submitted successfully!');
  }
}`;

@Component({
  selector: 'app-select-required-demo',
  imports: [
    ReactiveFormsModule,
    AvFormComponent,
    AvSelectImports,
    AvLabelComponent,
    AvFieldErrorComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectRequiredDemo {
  readonly form = new FormGroup({
    state: new FormControl<string | null>(null, Validators.required),
    country: new FormControl<string | null>(null, Validators.required),
  });

  isStateInvalid(): boolean {
    const control = this.form.controls.state;
    return control.invalid && (control.touched || control.dirty);
  }

  isCountryInvalid(): boolean {
    const control = this.form.controls.country;
    return control.invalid && (control.touched || control.dirty);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    alert('Form submitted successfully!');
  }
}
