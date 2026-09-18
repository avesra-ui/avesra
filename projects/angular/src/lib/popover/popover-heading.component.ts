import { Component, computed } from '@angular/core';

import { avPopoverHeadingClasses } from './popover.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'h2[av-popover-heading], h3[av-popover-heading], div[av-popover-heading]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'popover-heading',
  },
})
export class AvPopoverHeadingComponent {
  protected readonly classes = computed(() => avPopoverHeadingClasses());
}
