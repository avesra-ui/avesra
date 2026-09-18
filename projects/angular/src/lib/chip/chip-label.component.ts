import { Component } from '@angular/core';

import { avChipLabelClasses } from './chip.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-chip-label]',
  template: `<ng-content />`,
  host: {
    class: avChipLabelClasses(),
    'data-slot': 'chip-label',
  },
})
export class AvChipLabelComponent {}
