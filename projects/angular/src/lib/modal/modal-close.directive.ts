import { Directive, HostListener, inject, input } from '@angular/core';

import { AvModalContext } from './modal.context';
import type { AvModalCloseResult } from './modal.utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-modal-close]',
})
export class AvModalCloseDirective {
  private readonly context = inject(AvModalContext);

  /**
   * Optional result forwarded when the modal was opened via `AvModalService`.
   * Use `[av-modal-close]="result"` to pass a value to `afterClosed()`.
   */
  readonly closeResult = input<AvModalCloseResult>(undefined, {
    alias: 'av-modal-close',
  });

  @HostListener('click')
  onClick(): void {
    this.context.close(this.closeResult());
  }
}
