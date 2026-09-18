import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avTabsSeparatorClasses } from './tabs.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-tabs-separator]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'tabs-separator',
  },
})
export class AvTabsSeparatorComponent {
  protected readonly classes = computed(() => avTabsSeparatorClasses());
}
