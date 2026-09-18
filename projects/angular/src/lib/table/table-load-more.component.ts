import { Component } from '@angular/core';

import { avTableLoadMoreClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tr[av-table-load-more]',
  template: `<ng-content />`,
  host: {
    class: avTableLoadMoreClasses(),
    'data-slot': 'table-load-more',
  },
})
export class AvTableLoadMoreComponent {}
