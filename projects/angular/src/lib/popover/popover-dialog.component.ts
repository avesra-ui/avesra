import { Component, computed } from '@angular/core';

import { avPopoverDialogClasses } from './popover.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-popover-dialog]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'dialog',
    tabindex: '-1',
    'data-slot': 'popover-dialog',
  },
})
export class AvPopoverDialogComponent {
  protected readonly classes = computed(() => avPopoverDialogClasses());
}
