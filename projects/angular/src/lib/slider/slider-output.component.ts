import { Component, computed, inject } from '@angular/core';

import { AvSliderContext } from './slider.context';
import { formatSliderValues } from './slider.utils';

@Component({
  selector: '[av-slider-output]',
  template: `<ng-content>{{ displayText() }}</ng-content>`,
  host: {
    class: 'av-slider__output',
    'data-slot': 'slider-output',
  },
})
export class AvSliderOutputComponent {
  private readonly context = inject(AvSliderContext);

  protected readonly displayText = computed(() =>
    formatSliderValues(this.context.values(), this.context.formatOptions()),
  );
}
