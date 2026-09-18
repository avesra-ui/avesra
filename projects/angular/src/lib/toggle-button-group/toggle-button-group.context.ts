import { Injectable, signal } from '@angular/core';

import type { AvToggleButtonSize } from '../toggle-button/toggle-button.utils';

export type AvToggleButtonGroupSelectionMode = 'single' | 'multiple';

@Injectable()
export class AvToggleButtonGroupContext {
  readonly size = signal<AvToggleButtonSize | undefined>(undefined);
  readonly disabled = signal(false);
  readonly selectionMode = signal<AvToggleButtonGroupSelectionMode>('single');
  readonly disallowEmptySelection = signal(false);
  readonly selectedKeys = signal<string[]>([]);

  private updateSelectedKeys: ((keys: string[]) => void) | null = null;

  registerSelectedKeysUpdater(update: (keys: string[]) => void): void {
    this.updateSelectedKeys = update;
  }

  isSelected(key: string): boolean {
    return this.selectedKeys().includes(key);
  }

  toggleKey(key: string): void {
    if (this.disabled() || !key) {
      return;
    }

    const mode = this.selectionMode();
    let keys = [...this.selectedKeys()];

    if (mode === 'multiple') {
      keys = keys.includes(key) ? keys.filter((item) => item !== key) : [...keys, key];
    } else if (keys.includes(key)) {
      if (this.disallowEmptySelection() && keys.length === 1) {
        return;
      }
      keys = keys.filter((item) => item !== key);
    } else {
      keys = [key];
    }

    this.selectedKeys.set(keys);
    this.updateSelectedKeys?.(keys);
  }
}
