import { Component } from '@angular/core';

import { avTableColumnResizerClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-table-column-resizer]',
  template: ``,
  host: {
    class: avTableColumnResizerClasses(),
    role: 'separator',
    'aria-orientation': 'vertical',
    'data-slot': 'table-column-resizer',
  },
})
export class AvTableColumnResizerComponent {}
