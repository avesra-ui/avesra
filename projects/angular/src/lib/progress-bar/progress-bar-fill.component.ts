import { Component, computed, inject } from '@angular/core';

import { AvProgressBarContext } from './progress-bar.context';
import { avProgressBarFillClasses } from './progress-bar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-progress-bar-fill]',
  template: '',
  host: {
    '[class]': 'classes()',
    'data-slot': 'progress-bar-fill',
    '[style.width.%]': 'widthPercent()',
  },
})
export class AvProgressBarFillComponent {
  private readonly context = inject(AvProgressBarContext);

  protected readonly classes = computed(() => avProgressBarFillClasses());

  protected readonly widthPercent = computed(() =>
    this.context.indeterminate() ? null : this.context.percentage(),
  );
}
