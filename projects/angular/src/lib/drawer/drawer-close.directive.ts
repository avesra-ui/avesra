import { Directive, HostListener, inject, input } from '@angular/core';

import { AvDrawerContext } from './drawer.context';
import type { AvDrawerCloseResult } from './drawer.utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-drawer-close]',
})
export class AvDrawerCloseDirective {
  private readonly context = inject(AvDrawerContext);

  /**
   * Optional result forwarded when the drawer was opened via `AvDrawerService`.
   * Use `[av-drawer-close]="result"` to pass a value to `afterClosed()`.
   */
  readonly closeResult = input<AvDrawerCloseResult>(undefined, {
    alias: 'av-drawer-close',
  });

  @HostListener('click')
  onClick(): void {
    this.context.close(this.closeResult());
  }
}
