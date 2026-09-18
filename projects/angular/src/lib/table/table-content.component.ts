import { Component } from '@angular/core';

import { avTableContentClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'table[av-table-content]',
  template: `<ng-content />`,
  host: {
    class: avTableContentClasses(),
    'data-slot': 'table-content',
  },
})
export class AvTableContentComponent {}
