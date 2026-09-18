import { Injectable, signal } from '@angular/core';

import type { AvTabsIndicatorStyle } from './tabs.ink-bar';
import { AV_TABS_HIDDEN_INDICATOR_STYLE } from './tabs.ink-bar';
import type { AvTabsOrientation, AvTabsVariant } from './tabs.utils';
import type { AvTabsTabComponent } from './tabs-tab.component';

@Injectable()
export class AvTabsContext {
  readonly variant = signal<AvTabsVariant>('default');
  readonly orientation = signal<AvTabsOrientation>('horizontal');
  readonly selectedKey = signal<string | null>(null);
  readonly tabs = signal<readonly AvTabsTabComponent[]>([]);
  readonly indicatorStyle = signal<AvTabsIndicatorStyle>(AV_TABS_HIDDEN_INDICATOR_STYLE);

  private selectKeyHandler: ((key: string) => void) | null = null;

  registerSelectKeyHandler(handler: (key: string) => void): void {
    this.selectKeyHandler = handler;
  }

  setTabs(tabs: readonly AvTabsTabComponent[]): void {
    this.tabs.set(tabs);
  }

  tabKeys(): string[] {
    return this.tabs().map((tab) => tab.id());
  }

  getTab(key: string | null): AvTabsTabComponent | undefined {
    if (key == null) {
      return undefined;
    }

    return this.tabs().find((tab) => tab.id() === key);
  }

  isSelected(key: string): boolean {
    return this.selectedKey() === key;
  }

  selectKey(key: string): void {
    this.selectKeyHandler?.(key);
  }

  /**
   * Keeps a selected key that exists in the current tab list.
   * Invalid keys fall back to the first tab; `null` stays `null`.
   */
  clampKey(candidate: string | null): string | null {
    const keys = this.tabKeys();
    if (keys.length === 0) {
      return null;
    }

    if (candidate == null) {
      return null;
    }

    if (keys.includes(candidate)) {
      return candidate;
    }

    return keys[0] ?? null;
  }
}
