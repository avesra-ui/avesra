import { Component } from '@angular/core';

import { avTableResizableContainerClasses } from './table.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-table-resizable-container]',
  template: `<ng-content />`,
  host: {
    class: avTableResizableContainerClasses(),
    'data-slot': 'table-resizable-container',
  },
})
export class AvTableResizableContainerComponent {}
