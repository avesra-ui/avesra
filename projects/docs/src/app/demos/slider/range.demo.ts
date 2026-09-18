import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  class="w-full max-w-xs"
  av-slider
  [default-value]="[100, 500]"
  [format-options]="{ style: 'currency', currency: 'USD' }"
  [max]="1000"
  [min]="0"
  [step]="50"
>
  <label av-label>Price Range</label>
  <span av-slider-output></span>
  <div av-slider-track>
    <div av-slider-fill></div>
    <div av-slider-thumb [index]="0"></div>
    <div av-slider-thumb [index]="1"></div>
  </div>
</div>`;

export const DEMO_NAME = 'slider-range';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

@Component({
  selector: 'app-slider-range-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SliderRangeDemo {}`;

@Component({
  selector: 'app-slider-range-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class SliderRangeDemo {}
