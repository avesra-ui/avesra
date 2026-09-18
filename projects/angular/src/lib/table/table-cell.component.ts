import { Component } from '@angular/core';

import { avTableCellClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'td[av-table-cell]',
  template: `<ng-content />`,
  host: {
    class: avTableCellClasses(),
    'data-slot': 'table-cell',
  },
})
export class AvTableCellComponent {}
