import { Component, computed, inject, input } from '@angular/core';

import { AvSurfaceContext } from '../surface/surface.context';
import { AvAlertDialogContext } from './alert-dialog.context';
import { avAlertDialogDialogClasses } from './alert-dialog.utils';
import type { AvAlertDialogScroll, AvAlertDialogSize } from './alert-dialog.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-alert-dialog-dialog]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'alertdialog',
    'aria-modal': 'true',
    tabindex: '-1',
    '[attr.data-placement]': 'placement()',
    'data-slot': 'alert-dialog-dialog',
  },
  providers: [AvSurfaceContext],
})
export class AvAlertDialogDialogComponent {
  private readonly context = inject(AvAlertDialogContext);
  private readonly surfaceContext = inject(AvSurfaceContext);

  /** Scroll behavior. Inherits from `av-alert-dialog` when omitted. */
  readonly scroll = input<AvAlertDialogScroll>();

  /** Size preset. Inherits from `av-alert-dialog` when omitted. */
  readonly size = input<AvAlertDialogSize>();

  protected readonly placement = computed(() => this.context.placement());

  protected readonly resolvedScroll = computed(() => this.scroll() ?? this.context.scroll());

  protected readonly resolvedSize = computed(() => this.size() ?? this.context.size());

  protected readonly classes = computed(() =>
    avAlertDialogDialogClasses({
      scroll: this.resolvedScroll(),
      size: this.resolvedSize(),
    }),
  );

  constructor() {
    this.surfaceContext.variant.set('default');
  }
}
