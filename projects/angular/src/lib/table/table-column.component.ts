import { booleanAttribute, Component, input } from '@angular/core';

import { avTableColumnClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'th[av-table-column]',
  template: `<ng-content />`,
  host: {
    class: avTableColumnClasses(),
    '[attr.data-allows-sorting]': 'allowsSorting() ? "true" : null',
    'data-slot': 'table-column',
  },
})
export class AvTableColumnComponent {
  /** Whether the column supports sorting. */
  readonly allowsSorting = input(false, {
    alias: 'allows-sorting',
    transform: booleanAttribute,
  });
}
