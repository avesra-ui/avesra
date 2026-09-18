import { Injectable, signal } from '@angular/core';

import type { AvTagSize, AvTagVariant } from '../tag/tag.utils';

export type AvTagGroupSelectionMode = 'none' | 'single' | 'multiple';

@Injectable()
export class AvTagGroupContext {
  readonly size = signal<AvTagSize | undefined>(undefined);
  readonly variant = signal<AvTagVariant | undefined>(undefined);
  readonly disabled = signal(false);
  readonly allowsRemoving = signal(false);
  readonly selectionMode = signal<AvTagGroupSelectionMode>('none');
  readonly disabledKeys = signal<string[]>([]);
  readonly selectedKeys = signal<string[]>([]);

  private updateSelectedKeys: ((keys: string[]) => void) | null = null;
  private removeKeys: ((keys: string[]) => void) | null = null;
  private markTouchedCallback: (() => void) | null = null;

  registerSelectedKeysUpdater(update: (keys: string[]) => void): void {
    this.updateSelectedKeys = update;
  }

  registerRemoveHandler(handler: (keys: string[]) => void): void {
    this.removeKeys = handler;
  }

  registerTouchedCallback(callback: () => void): void {
    this.markTouchedCallback = callback;
  }

  markTouched(): void {
    this.markTouchedCallback?.();
  }

  isSelected(key: string): boolean {
    return this.selectedKeys().includes(key);
  }

  isKeyDisabled(key: string): boolean {
    return !!key && this.disabledKeys().includes(key);
  }

  toggleKey(key: string): void {
    if (this.disabled() || !key || this.isKeyDisabled(key)) {
      return;
    }

    const mode = this.selectionMode();

    if (mode === 'none') {
      return;
    }

    let keys = [...this.selectedKeys()];

    if (mode === 'multiple') {
      keys = keys.includes(key) ? keys.filter((item) => item !== key) : [...keys, key];
    } else if (keys.includes(key)) {
      keys = keys.filter((item) => item !== key);
    } else {
      keys = [key];
    }

    this.selectedKeys.set(keys);
    this.updateSelectedKeys?.(keys);
  }

  removeKey(key: string): void {
    if (this.disabled() || !key || this.isKeyDisabled(key) || !this.allowsRemoving()) {
      return;
    }

    const nextSelected = this.selectedKeys().filter((item) => item !== key);

    if (nextSelected.length !== this.selectedKeys().length) {
      this.selectedKeys.set(nextSelected);
      this.updateSelectedKeys?.(nextSelected);
    }

    this.removeKeys?.([key]);
  }
}
