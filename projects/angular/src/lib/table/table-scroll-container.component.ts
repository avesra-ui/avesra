import { Component } from '@angular/core';

import { avTableScrollContainerClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-table-scroll-container]',
  template: `<ng-content />`,
  host: {
    class: avTableScrollContainerClasses(),
    'data-slot': 'table-scroll-container',
  },
})
export class AvTableScrollContainerComponent {}
