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

import { AvDisclosureGroupContext } from './disclosure-group.context';
import { avDisclosureGroupClasses } from './disclosure-group.utils';

@Component({
  selector: 'av-disclosure-group',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'disclosure-group',
  },
  providers: [AvDisclosureGroupContext],
})
export class AvDisclosureGroupComponent {
  private readonly context = inject(AvDisclosureGroupContext);

  /** Allows multiple disclosures to be expanded at once. */
  readonly allowsMultiple = input(false, {
    alias: 'allows-multiple',
    transform: booleanAttribute,
  });

  /** Disables all disclosures in the group. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Expanded disclosure ids. Supports two-way binding with `[(expandedKeys)]`. */
  readonly expandedKeys = model<string[]>([]);

  protected readonly classes = computed(() => avDisclosureGroupClasses());

  constructor() {
    this.context.registerExpandedKeysChangeHandler((keys) => {
      const next = [...keys];
      if (!this.arraysEqual(next, this.expandedKeys())) {
        this.expandedKeys.set(next);
      }
    });

    effect(() => {
      const allowsMultiple = this.allowsMultiple();
      const disabled = this.disabled();
      const expandedKeys = this.expandedKeys();

      untracked(() => {
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
