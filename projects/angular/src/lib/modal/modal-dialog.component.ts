import { Component, computed, inject, input } from '@angular/core';

import { AvSurfaceContext } from '../surface/surface.context';
import { AvModalContext } from './modal.context';
import { avModalDialogClasses } from './modal.utils';
import type { AvModalScroll, AvModalSize } from './modal.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-modal-dialog]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'dialog',
    'aria-modal': 'true',
    tabindex: '-1',
    '[attr.data-placement]': 'placement()',
    'data-slot': 'modal-dialog',
  },
  providers: [AvSurfaceContext],
})
export class AvModalDialogComponent {
  private readonly context = inject(AvModalContext);
  private readonly surfaceContext = inject(AvSurfaceContext);

  /** Scroll behavior. Inherits from `av-modal` when omitted. */
  readonly scroll = input<AvModalScroll>();

  /** Size preset. Inherits from `av-modal` when omitted. */
  readonly size = input<AvModalSize>();

  protected readonly placement = computed(() => this.context.placement());

  protected readonly resolvedScroll = computed(() => this.scroll() ?? this.context.scroll());

  protected readonly resolvedSize = computed(() => this.size() ?? this.context.size());

  protected readonly classes = computed(() =>
    avModalDialogClasses({
      scroll: this.resolvedScroll(),
      size: this.resolvedSize(),
    }),
  );

  constructor() {
    this.surfaceContext.variant.set('default');
  }
}
