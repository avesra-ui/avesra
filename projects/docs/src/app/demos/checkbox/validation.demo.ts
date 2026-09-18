import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AvButtonComponent,
  AvCheckboxImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form class="flex flex-col gap-4" [formGroup]="validationForm" (ngSubmit)="onValidationSubmit()">
      <div av-checkbox formControlName="terms" [invalid]="isTermsInvalid()">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>
          <label av-label class="text-sm" [invalid]="isTermsInvalid()">Accept terms and conditions</label>
          <p av-description>Required to continue</p>
        </span>
      </div>
      @if (isTermsInvalid()) {
        <p class="text-sm text-danger">You must accept the terms to continue.</p>
      }
      <button av-button type="submit">Submit</button>
      <p class="text-sm text-muted">
        Valid: {{ validationForm.valid }} · Touched: {{ termsControl.touched }}
      </p>
    </form>`;

export const DEMO_NAME = 'checkbox-validation';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AvButtonComponent,
  AvCheckboxImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-checkbox-validation-demo',
  imports: [ReactiveFormsModule, AvCheckboxImports, AvLabelComponent, AvDescriptionComponent, AvButtonComponent],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`<form class="flex flex-col gap-4" [formGroup]="validationForm" (ngSubmit)="onValidationSubmit()">
      <div av-checkbox formControlName="terms" [invalid]="isTermsInvalid()">
        <span av-checkbox-control>
          <span av-checkbox-indicator></span>
        </span>
        <span av-checkbox-content>
          <label av-label class="text-sm" [invalid]="isTermsInvalid()">Accept terms and conditions</label>
          <p av-description>Required to continue</p>
        </span>
      </div>
      @if (isTermsInvalid()) {
        <p class="text-sm text-danger">You must accept the terms to continue.</p>
      }
      <button av-button type="submit">Submit</button>
      <p class="text-sm text-muted">
        Valid: {{ validationForm.valid }} · Touched: {{ termsControl.touched }}
      </p>
    </form>\`,
})
export class CheckboxValidationDemo {
  readonly validationForm = new FormGroup({
    terms: new FormControl(false, Validators.requiredTrue),
  });

  readonly termsControl = this.validationForm.controls.terms;

  isTermsInvalid(): boolean {
    const control = this.termsControl;
    return control.invalid && (control.touched || control.dirty);
  }

  onValidationSubmit(): void {
    this.validationForm.markAllAsTouched();

    if (this.validationForm.invalid) {
      return;
    }

    alert('Form submitted successfully!');
  }
}`;

@Component({
  selector: 'app-checkbox-validation-demo',
  imports: [
    ReactiveFormsModule,
    AvCheckboxImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class CheckboxValidationDemo {
  readonly validationForm = new FormGroup({
    terms: new FormControl(false, Validators.requiredTrue),
  });

  readonly termsControl = this.validationForm.controls.terms;

  isTermsInvalid(): boolean {
    const control = this.termsControl;
    return control.invalid && (control.touched || control.dirty);
  }

  onValidationSubmit(): void {
    this.validationForm.markAllAsTouched();

    if (this.validationForm.invalid) {
      return;
    }

    alert('Form submitted successfully!');
  }
}
