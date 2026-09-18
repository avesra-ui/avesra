import { Directive, HostListener, inject, input } from '@angular/core';

import { AvAlertDialogContext } from './alert-dialog.context';
import type { AvAlertDialogCloseResult } from './alert-dialog.utils';

function coerceCloseResult(
  value: AvAlertDialogCloseResult | '' | boolean | null,
): AvAlertDialogCloseResult {
  if (value === '' || value === true || value === false || value === null) {
    return undefined;
  }

  return value;
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-alert-dialog-close]',
})
export class AvAlertDialogCloseDirective {
  private readonly context = inject(AvAlertDialogContext);

  /**
   * Optional result forwarded when the dialog was opened via `AvAlertDialogService`.
   * Use `[av-alert-dialog-close]="'confirm'"` or `"cancel"`.
   */
  readonly closeResult = input(undefined, {
    alias: 'av-alert-dialog-close',
    transform: coerceCloseResult,
  });

  @HostListener('click')
  onClick(): void {
    this.context.close(this.closeResult());
  }
}
