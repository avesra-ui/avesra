import { Component } from '@angular/core';

import { avTableBodyClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tbody[av-table-body]',
  template: `<ng-content />`,
  host: {
    class: avTableBodyClasses(),
    'data-slot': 'table-body',
  },
})
export class AvTableBodyComponent {}
