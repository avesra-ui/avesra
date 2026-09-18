import { Component } from '@angular/core';

import { avBadgeLabelClasses } from './badge.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-badge-label]',
  template: `<ng-content />`,
  host: {
    class: avBadgeLabelClasses(),
    'data-slot': 'badge-label',
  },
})
export class AvBadgeLabelComponent {}
