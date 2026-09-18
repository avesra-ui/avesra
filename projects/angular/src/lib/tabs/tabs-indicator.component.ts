import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { AvTabsContext } from './tabs.context';
import { avTabsIndicatorClasses } from './tabs.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-tabs-indicator]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'tabs-indicator',
    '[style.translate]': 'indicatorStyle().translate',
    '[style.width]': 'indicatorStyle().width',
    '[style.height]': 'indicatorStyle().height',
  },
})
export class AvTabsIndicatorComponent {
  private readonly context = inject(AvTabsContext);

  protected readonly classes = computed(() => avTabsIndicatorClasses());

  protected readonly indicatorStyle = computed(() => this.context.indicatorStyle());
}
