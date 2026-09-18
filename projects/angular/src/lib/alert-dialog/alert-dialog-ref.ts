import { Observable, Subject } from 'rxjs';

import type { AvAlertDialogCloseResult } from './alert-dialog.utils';

/**
 * Reference to an alert dialog opened via {@link AvAlertDialogService}.
 */
export class AvAlertDialogRef<R = AvAlertDialogCloseResult> {
  private readonly afterClosedSubject = new Subject<R | undefined>();
  private closed = false;

  private closeHandler: ((result?: R) => void) | null = null;

  /** Emits once when the dialog finishes its exit animation and is disposed. */
  afterClosed(): Observable<R | undefined> {
    return this.afterClosedSubject.asObservable();
  }

  /** Closes the dialog, optionally with a result. */
  close(result?: R): void {
    if (this.closed) {
      return;
    }

    this.closeHandler?.(result);
  }

  /** @internal */
  _registerCloseHandler(handler: (result?: R) => void): void {
    this.closeHandler = handler;
  }

  /** @internal */
  _notifyClosed(result?: R): void {
    if (this.closed) {
      return;
    }

    this.closed = true;
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }
}
