import { DestroyRef, Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core';

import { AvDropdownContext } from './dropdown.context';

/**
 * Registers an `ng-template` as the dropdown overlay content.
 *
 * @example
 * ```html
 * <ng-template avDropdownContent>
 *   <div av-dropdown-popover>...</div>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avDropdownContent]',
  exportAs: 'avDropdownContent',
})
export class AvDropdownContentDirective {
  private readonly context = inject(AvDropdownContext);
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
