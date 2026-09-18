import { Component, computed, inject } from '@angular/core';

import { AvProgressBarContext } from './progress-bar.context';
import { avProgressBarOutputClasses } from './progress-bar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-progress-bar-output]',
  template: `<ng-content>{{ displayText() }}</ng-content>`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'progress-bar-output',
  },
})
export class AvProgressBarOutputComponent {
  private readonly context = inject(AvProgressBarContext);

  protected readonly classes = computed(() => avProgressBarOutputClasses());

  protected readonly displayText = computed(() => this.context.valueText());
}
