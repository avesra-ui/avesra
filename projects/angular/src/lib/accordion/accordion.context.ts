import { Injectable, signal } from '@angular/core';

import type { AvAccordionVariant } from './accordion.utils';

@Injectable()
export class AvAccordionContext {
  readonly variant = signal<AvAccordionVariant>('default');
  readonly hideSeparator = signal(false);
  readonly allowsMultiple = signal(false);
  readonly disabled = signal(false);
  readonly expandedKeys = signal<Set<string>>(new Set());

  private expandedKeysChangeHandler: ((keys: Set<string>) => void) | null = null;

  registerExpandedKeysChangeHandler(handler: (keys: Set<string>) => void): void {
    this.expandedKeysChangeHandler = handler;
  }

  isExpanded(key: string): boolean {
    return this.expandedKeys().has(key);
  }

  setExpanded(key: string, expanded: boolean): void {
    if (this.disabled()) {
      return;
    }

    const current = new Set(this.expandedKeys());

    if (expanded) {
      if (!this.allowsMultiple()) {
        current.clear();
      }
      current.add(key);
    } else {
      current.delete(key);
    }

    this.expandedKeys.set(current);
    this.expandedKeysChangeHandler?.(current);
  }

  toggle(key: string): void {
    this.setExpanded(key, !this.isExpanded(key));
  }
}
