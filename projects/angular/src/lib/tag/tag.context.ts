import { Injectable, signal } from '@angular/core';

@Injectable()
export class AvTagContext {
  readonly allowsRemoving = signal(false);
  readonly isDisabled = signal(false);

  private removeCallback: (() => void) | null = null;

  registerRemoveCallback(callback: () => void): void {
    this.removeCallback = callback;
  }

  requestRemove(): void {
    this.removeCallback?.();
  }
}
