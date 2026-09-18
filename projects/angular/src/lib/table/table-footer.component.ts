import { Component } from '@angular/core';

import { avTableFooterClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-table-footer]',
  template: `<ng-content />`,
  host: {
    class: avTableFooterClasses(),
    'data-slot': 'table-footer',
  },
})
export class AvTableFooterComponent {}
