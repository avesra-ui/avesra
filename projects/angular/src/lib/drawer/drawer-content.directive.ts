import { DestroyRef, Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core';

import { AvDrawerContext } from './drawer.context';

/**
 * Registers an `ng-template` as the drawer overlay content.
 *
 * @example
 * ```html
 * <ng-template avDrawerContent>
 *   <div av-drawer-dialog>...</div>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avDrawerContent]',
  exportAs: 'avDrawerContent',
})
export class AvDrawerContentDirective {
  private readonly context = inject(AvDrawerContext);
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainerRef = inject(ViewContainerRef);

  constructor() {
    this.context.registerContent({
      templateRef: this.templateRef,
      viewContainerRef: this.viewContainerRef,
    });

    inject(DestroyRef).onDestroy(() => {
      this.context.unregisterContent();
    });
  }
}
