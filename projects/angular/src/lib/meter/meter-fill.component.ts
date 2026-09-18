import { Component, computed, inject } from '@angular/core';

import { AvMeterContext } from './meter.context';
import { avMeterFillClasses } from './meter.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-meter-fill]',
  template: '',
  host: {
    '[class]': 'classes()',
    'data-slot': 'meter-fill',
    '[style.width.%]': 'percentage()',
  },
})
export class AvMeterFillComponent {
  private readonly context = inject(AvMeterContext);

  protected readonly classes = computed(() => avMeterFillClasses());

  protected readonly percentage = computed(() => this.context.percentage());
}
