import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  class="w-full max-w-xs"
  av-slider
  [default-value]="60"
  [format-options]="{ style: 'currency', currency: 'USD' }"
>
  <label av-label>Price</label>
  <span av-slider-output></span>
  <div av-slider-track>
    <div av-slider-fill></div>
    <div av-slider-thumb></div>
  </div>
</div>`;

export const DEMO_NAME = 'slider-custom-formatting';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

@Component({
  selector: 'app-slider-custom-formatting-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SliderCustomFormattingDemo {}`;

@Component({
  selector: 'app-slider-custom-formatting-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class SliderCustomFormattingDemo {}
