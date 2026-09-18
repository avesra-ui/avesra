import { Component } from '@angular/core';

import { avTableHeaderClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'thead[av-table-header]',
  template: `<ng-content />`,
  host: {
    class: avTableHeaderClasses(),
    'data-slot': 'table-header',
  },
})
export class AvTableHeaderComponent {}
