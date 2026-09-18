import { Component } from '@angular/core';

import { avKbdContentClasses } from './kbd.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-kbd-content]',
  template: `<ng-content />`,
  host: {
    class: avKbdContentClasses(),
    'data-slot': 'kbd-content',
  },
})
export class AvKbdContentComponent {}
