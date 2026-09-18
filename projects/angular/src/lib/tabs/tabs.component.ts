import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  untracked,
} from '@angular/core';

import { AvTabsContext } from './tabs.context';
import { avTabsClasses } from './tabs.utils';
import type { AvTabsOrientation, AvTabsVariant } from './tabs.utils';

@Component({
  selector: 'av-tabs',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.data-orientation]': 'orientation()',
    'data-slot': 'tabs',
  },
  providers: [AvTabsContext],
})
export class AvTabsComponent {
  private readonly context = inject(AvTabsContext);

  /** Internal selection when `selectedKey` is not bound from the parent. */
  private readonly uncontrolledKey = signal<string | null>(null);

  /** Visual style variant. */
  readonly variant = input<AvTabsVariant>('default');

  /** Tab layout direction. */
  readonly orientation = input<AvTabsOrientation>('horizontal');

  /** Initially selected tab id. */
  readonly defaultSelectedKey = input<string | null>(null, { alias: 'default-selected-key' });

  /**
   * Selected tab id from the parent.
   * When bound, tabs run in controlled mode and only update after the parent changes this input.
   * Supports two-way binding with `[(selectedKey)]`.
   */
  readonly selectedKey = input<string | null | undefined>(undefined);

  /** Emits when the user selects a tab. Update `selectedKey` in the parent to apply the change. */
  readonly selectedKeyChange = output<string | null>();

  protected readonly classes = computed(() => avTabsClasses({ variant: this.variant() }));

  constructor() {
    this.context.registerSelectKeyHandler((key) => {
      this.selectedKeyChange.emit(key);

      if (!this.isControlled()) {
        this.uncontrolledKey.set(key);
      }
    });

    effect(() => {
      const variant = this.variant();
      const orientation = this.orientation();
      // Re-run when the tab list changes so invalid keys can be clamped.
      this.context.tabs();
      const effectiveKey = this.resolveSelectedKey();

      untracked(() => {
        this.context.variant.set(variant);
        this.context.orientation.set(orientation);
        this.context.selectedKey.set(effectiveKey);

        if (!this.isControlled()) {
          const previous = this.uncontrolledKey();
          if (previous != null && previous !== effectiveKey) {
            this.uncontrolledKey.set(effectiveKey);
          }
        }
      });
    });
  }

  private isControlled(): boolean {
    return this.selectedKey() !== undefined;
  }

  private resolveSelectedKey(): string | null {
    const bound = this.selectedKey();

    if (bound !== undefined) {
      return this.context.clampKey(bound);
    }

    const candidate = this.uncontrolledKey() ?? this.defaultSelectedKey();
    if (candidate == null) {
      // Uncontrolled with no explicit selection → first tab (Material default).
      return this.context.tabKeys()[0] ?? null;
    }

    return this.context.clampKey(candidate);
  }
}
