import { Component, computed, inject } from '@angular/core';

import { AvMeterContext } from './meter.context';
import { avMeterOutputClasses } from './meter.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-meter-output]',
  template: `<ng-content>{{ displayText() }}</ng-content>`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'meter-output',
  },
})
export class AvMeterOutputComponent {
  private readonly context = inject(AvMeterContext);

  protected readonly classes = computed(() => avMeterOutputClasses());

  protected readonly displayText = computed(() => this.context.valueText());
}
