import { DestroyRef, Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core';

import { AvAlertDialogContext } from './alert-dialog.context';

/**
 * Registers an `ng-template` as the alert dialog overlay content.
 *
 * @example
 * ```html
 * <ng-template avAlertDialogContent>
 *   <div av-alert-dialog-dialog>...</div>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avAlertDialogContent]',
  exportAs: 'avAlertDialogContent',
})
export class AvAlertDialogContentDirective {
  private readonly context = inject(AvAlertDialogContext);
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
