import { Component } from '@angular/core';

import { avBadgeAnchorClasses } from './badge.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-badge-anchor]',
  template: `<ng-content />`,
  host: {
    class: avBadgeAnchorClasses(),
    'data-slot': 'badge-anchor',
  },
})
export class AvBadgeAnchorComponent {}
