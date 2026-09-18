import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  untracked,
} from '@angular/core';

import { AvAccordionContext } from './accordion.context';
import { avAccordionClasses } from './accordion.utils';
import type { AvAccordionVariant } from './accordion.utils';

@Component({
  selector: 'av-accordion',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'accordion',
  },
  providers: [AvAccordionContext],
})
export class AvAccordionComponent {
  private readonly context = inject(AvAccordionContext);

  /** Visual style variant. */
  readonly variant = input<AvAccordionVariant>('default');

  /** Hides separators between accordion items. */
  readonly hideSeparator = input(false, {
    alias: 'hide-separator',
    transform: booleanAttribute,
  });

  /** Allows multiple items to be expanded at once. */
  readonly allowsMultiple = input(false, {
    alias: 'allows-multiple',
    transform: booleanAttribute,
  });

  /** Disables all accordion items. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Expanded item ids. Supports two-way binding with `[(expandedKeys)]`. */
  readonly expandedKeys = model<string[]>([]);

  protected readonly classes = computed(() =>
    avAccordionClasses({ variant: this.variant() }),
  );

  constructor() {
    this.context.registerExpandedKeysChangeHandler((keys) => {
      const next = [...keys];
      if (!this.arraysEqual(next, this.expandedKeys())) {
        this.expandedKeys.set(next);
      }
    });

    effect(() => {
      const hideSeparator = this.hideSeparator();
      const allowsMultiple = this.allowsMultiple();
      const disabled = this.disabled();
      const expandedKeys = this.expandedKeys();

      untracked(() => {
        this.context.hideSeparator.set(hideSeparator);
        this.context.allowsMultiple.set(allowsMultiple);
        this.context.disabled.set(disabled);
        this.context.expandedKeys.set(new Set(expandedKeys));
      });
    });
  }

  private arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((value, index) => value === b[index]);
  }
}
