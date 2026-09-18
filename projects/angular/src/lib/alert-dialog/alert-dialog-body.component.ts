import { Component, computed, inject, input } from '@angular/core';

import { AvAlertDialogContext } from './alert-dialog.context';
import { avAlertDialogBodyClasses } from './alert-dialog.utils';
import type { AvAlertDialogScroll } from './alert-dialog.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-alert-dialog-body]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-dialog-body',
  },
})
export class AvAlertDialogBodyComponent {
  private readonly context = inject(AvAlertDialogContext);

  /** Scroll behavior. Inherits from alert dialog context when omitted. */
  readonly scroll = input<AvAlertDialogScroll>();

  protected readonly classes = computed(() =>
    avAlertDialogBodyClasses({
      scroll: this.scroll() ?? this.context.scroll(),
    }),
  );
}
