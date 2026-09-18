import { Component, computed, inject } from '@angular/core';

import { AvSliderContext } from './slider.context';

@Component({
  selector: '[av-slider-fill]',
  template: '',
  host: {
    class: 'av-slider__fill',
    'data-slot': 'slider-fill',
    '[attr.data-disabled]': 'context.isDisabled() ? "true" : null',
    '[style.left.%]': 'isHorizontal() ? fillStartPercent() : null',
    '[style.width.%]': 'isHorizontal() ? fillWidthPercent() : null',
    '[style.bottom.%]': 'isVertical() ? fillStartPercent() : null',
    '[style.height.%]': 'isVertical() ? fillWidthPercent() : null',
  },
})
export class AvSliderFillComponent {
  protected readonly context = inject(AvSliderContext);

  protected readonly isHorizontal = computed(() => this.context.orientation() === 'horizontal');
  protected readonly isVertical = computed(() => this.context.orientation() === 'vertical');

  protected readonly fillStartPercent = computed(() => this.context.getFillOffsets().start * 100);
  protected readonly fillWidthPercent = computed(() => this.context.getFillOffsets().width * 100);
}
