import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex h-64 items-center justify-center">
  <div class="h-full" av-slider orientation="vertical" [default-value]="30" aria-label="Volume">
    <label av-label>Volume</label>
    <span av-slider-output></span>
    <div av-slider-track>
      <div av-slider-fill></div>
      <div av-slider-thumb></div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'slider-vertical';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

@Component({
  selector: 'app-slider-vertical-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SliderVerticalDemo {}`;

@Component({
  selector: 'app-slider-vertical-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class SliderVerticalDemo {}
