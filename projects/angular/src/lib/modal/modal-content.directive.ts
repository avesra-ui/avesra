import { DestroyRef, Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core';

import { AvModalContext } from './modal.context';

/**
 * Registers an `ng-template` as the modal overlay content.
 *
 * @example
 * ```html
 * <ng-template avModalContent>
 *   <div av-modal-dialog>...</div>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avModalContent]',
  exportAs: 'avModalContent',
})
export class AvModalContentDirective {
  private readonly context = inject(AvModalContext);
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
