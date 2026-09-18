import { Injectable, signal } from '@angular/core';

export type AvMenuSelectionMode = 'none' | 'single' | 'multiple';

@Injectable()
export class AvMenuContext {
  readonly selectionMode = signal<AvMenuSelectionMode>('none');
  readonly selectedKeys = signal<ReadonlySet<string>>(new Set());
  readonly disabled = signal(false);

  private actionHandler: ((key: string) => void) | null = null;
  private closeHandler: (() => void) | null = null;
  private selectedKeysChangeHandler: ((keys: string[]) => void) | null = null;

  registerActionHandler(handler: (key: string) => void): void {
    this.actionHandler = handler;
  }

  registerCloseHandler(handler: () => void): void {
    this.closeHandler = handler;
  }

  registerSelectedKeysChangeHandler(handler: (keys: string[]) => void): void {
    this.selectedKeysChangeHandler = handler;
  }

  selectItem(id: string): void {
    const mode = this.selectionMode();

    if (mode === 'single') {
      this.updateSelectedKeys(new Set([id]));
    } else if (mode === 'multiple') {
      const next = new Set(this.selectedKeys());
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      this.updateSelectedKeys(next);
    }

    this.actionHandler?.(id);

    if (mode === 'none') {
      this.closeHandler?.();
    }
  }

  isSelected(id: string): boolean {
    return this.selectedKeys().has(id);
  }

  setSelectedKeys(keys: Iterable<string>): void {
    this.updateSelectedKeys(new Set(keys));
  }

  dispose(): void {
    this.actionHandler = null;
    this.closeHandler = null;
    this.selectedKeysChangeHandler = null;
    this.selectionMode.set('none');
    this.selectedKeys.set(new Set());
    this.disabled.set(false);
  }

  private updateSelectedKeys(keys: Set<string>): void {
    this.selectedKeys.set(keys);
    this.selectedKeysChangeHandler?.([...keys]);
  }
}
