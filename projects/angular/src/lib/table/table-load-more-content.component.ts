import { Component } from '@angular/core';

import { avTableLoadMoreContentClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-table-load-more-content]',
  template: `<ng-content />`,
  host: {
    class: avTableLoadMoreContentClasses(),
    'data-slot': 'table-load-more-content',
  },
})
export class AvTableLoadMoreContentComponent {}
