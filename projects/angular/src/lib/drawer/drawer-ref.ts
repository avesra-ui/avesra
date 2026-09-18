import { Observable, Subject } from 'rxjs';

/**
 * Reference to a drawer opened via {@link AvDrawerService}.
 */
export class AvDrawerRef<R = unknown> {
  private readonly afterClosedSubject = new Subject<R | undefined>();
  private closed = false;

  private closeHandler: ((result?: R) => void) | null = null;

  /** Emits once when the drawer finishes its exit animation and is disposed. */
  afterClosed(): Observable<R | undefined> {
    return this.afterClosedSubject.asObservable();
  }

  /** Closes the drawer, optionally with a result. */
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
