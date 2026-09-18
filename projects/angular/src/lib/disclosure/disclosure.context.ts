import { Injectable, signal } from '@angular/core';

@Injectable()
export class AvDisclosureContext {
  readonly id = signal('');
  readonly expanded = signal(false);
  readonly disabled = signal(false);
  readonly contentId = signal('');

  private toggleHandler: (() => void) | null = null;

  registerToggleHandler(handler: () => void): void {
    this.toggleHandler = handler;
  }

  toggle(): void {
    this.toggleHandler?.();
  }
}
