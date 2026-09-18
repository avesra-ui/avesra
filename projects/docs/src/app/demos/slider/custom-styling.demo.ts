import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full max-w-xs" av-slider [default-value]="40">
  <label av-label>Volume</label>
  <span av-slider-output class="text-muted text-sm"></span>
  <div av-slider-track class="!bg-surface-secondary">
    <div av-slider-fill class="!bg-accent"></div>
    <div av-slider-thumb></div>
  </div>
</div>`;

export const DEMO_NAME = 'slider-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

@Component({
  selector: 'app-slider-custom-styling-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SliderCustomStylingDemo {}`;

@Component({
  selector: 'app-slider-custom-styling-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class SliderCustomStylingDemo {}
