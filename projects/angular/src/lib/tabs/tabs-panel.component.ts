import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { AvTabsContext } from './tabs.context';
import { avTabsPanelClasses } from './tabs.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-tabs-panel]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'tabpanel',
    '[attr.id]': 'panelId()',
    '[attr.aria-labelledby]': 'tabId()',
    '[attr.hidden]': 'isHidden() ? "" : null',
    '[attr.data-orientation]': 'context.orientation()',
    'data-slot': 'tabs-panel',
  },
})
export class AvTabsPanelComponent {
  protected readonly context = inject(AvTabsContext);

  /** Panel id matching the tab id. */
  readonly id = input.required<string>();

  protected readonly classes = computed(() => avTabsPanelClasses());

  protected readonly panelId = computed(() => `av-tabpanel-${this.id()}`);

  protected readonly tabId = computed(() => `av-tab-${this.id()}`);

  protected readonly isHidden = computed(() => !this.context.isSelected(this.id()));
}
