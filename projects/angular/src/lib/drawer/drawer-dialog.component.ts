import { Component, computed, effect, ElementRef, inject, input, untracked } from '@angular/core';

import { AvSurfaceContext } from '../surface/surface.context';
import { AvDrawerContext } from './drawer.context';
import { avDrawerDialogClasses } from './drawer.utils';
import type { AvDrawerPlacement } from './drawer.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-drawer-dialog]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'dialog',
    'aria-modal': 'true',
    tabindex: '-1',
    '[attr.data-placement]': 'resolvedPlacement()',
    'data-slot': 'drawer-dialog',
  },
  providers: [AvSurfaceContext],
})
export class AvDrawerDialogComponent {
  private readonly context = inject(AvDrawerContext);
  private readonly surfaceContext = inject(AvSurfaceContext);
  private readonly element = inject(ElementRef<HTMLElement>);

  /** Slide direction. Inherits from `av-drawer` when omitted. */
  readonly placement = input<AvDrawerPlacement>();

  protected readonly resolvedPlacement = computed(
    () => this.placement() ?? this.context.placement(),
  );

  protected readonly classes = computed(() =>
    avDrawerDialogClasses(this.resolvedPlacement()),
  );

  constructor() {
    this.surfaceContext.variant.set('default');

    effect(() => {
      const mounted = this.context.isMounted();

      untracked(() => {
        if (mounted) {
          queueMicrotask(() => this.element.nativeElement.focus());
        }
      });
    });
  }
}
