import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<form class="flex w-full max-w-xs flex-col gap-3" [formGroup]="settingsForm">
  <div av-slider formControlName="brightness">
    <label av-label>Brightness</label>
    <span av-slider-output></span>
    <div av-slider-track>
      <div av-slider-fill></div>
      <div av-slider-thumb></div>
    </div>
  </div>
  <p class="text-sm text-muted">Form value: {{ settingsForm.value | json }}</p>
</form>`;

export const DEMO_NAME = 'slider-reactive-form';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

@Component({
  selector: 'app-slider-reactive-form-demo',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SliderReactiveFormDemo {
  readonly settingsForm = new FormGroup({
    brightness: new FormControl(65),
  });
}`;

@Component({
  selector: 'app-slider-reactive-form-demo',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class SliderReactiveFormDemo {
  readonly settingsForm = new FormGroup({
    brightness: new FormControl(65),
  });
}
