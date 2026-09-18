import { booleanAttribute, Component, input } from '@angular/core';

import { avTableRowClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tr[av-table-row]',
  template: `<ng-content />`,
  host: {
    class: avTableRowClasses(),
    '[attr.data-selected]': 'selected() ? "true" : null',
    '[attr.data-disabled]': 'disabled() ? "true" : null',
    '[attr.aria-disabled]': 'disabled() ? "true" : null',
    'data-slot': 'table-row',
  },
})
export class AvTableRowComponent {
  /** Selected row state. */
  readonly selected = input(false, { transform: booleanAttribute });

  /** Disabled row state. */
  readonly disabled = input(false, { transform: booleanAttribute });
}
