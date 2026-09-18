import { Component, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex w-full max-w-xs flex-col gap-3">
  <div av-slider [(value)]="volume">
    <label av-label>Volume</label>
    <span av-slider-output></span>
    <div av-slider-track>
      <div av-slider-fill></div>
      <div av-slider-thumb></div>
    </div>
  </div>
  <p class="text-sm text-muted">Current value: {{ volume() }}</p>
</div>`;

export const DEMO_NAME = 'slider-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvSliderImports,
} from '@avesra/angular';

@Component({
  selector: 'app-slider-controlled-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SliderControlledDemo {
  readonly volume = signal(25);
}`;

@Component({
  selector: 'app-slider-controlled-demo',
  imports: [
    AvSliderImports,
    AvLabelComponent,
  ],
  host: { class: 'flex w-full items-center flex-col gap-3' },
  template: DEMO_TEMPLATE,
})
export class SliderControlledDemo {
  readonly volume = signal(25);
}
