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

import { AvDisclosureGroupContext } from '../disclosure-group/disclosure-group.context';
import { AvDisclosureContext } from './disclosure.context';
import { avDisclosureClasses } from './disclosure.utils';

@Component({
  selector: 'av-disclosure',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'disclosure',
  },
  providers: [AvDisclosureContext],
})
export class AvDisclosureComponent {
  private readonly context = inject(AvDisclosureContext);
  private readonly group = inject(AvDisclosureGroupContext, { optional: true });

  /** Unique disclosure id. Required when used inside a disclosure group. */
  readonly id = input<string>();

  /** Disables the disclosure. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Initially expanded state for standalone usage. */
  readonly defaultExpanded = input(false, {
    alias: 'default-expanded',
    transform: booleanAttribute,
  });

  /** Expanded state. Supports two-way binding with `[(expanded)]`. */
  readonly expanded = model(false);

  protected readonly classes = computed(() => avDisclosureClasses());

  private defaultExpandedApplied = false;

  constructor() {
    this.context.registerToggleHandler(() => this.toggle());

    effect(() => {
      const id = this.id();
      const disabled = this.disabled() || (this.group?.disabled() ?? false);
      const defaultExpanded = this.defaultExpanded();
      const expanded = this.expanded();
      const group = this.group;
      const groupExpandedKeys = group?.expandedKeys();

      untracked(() => {
        this.context.id.set(id ?? '');
        this.context.disabled.set(disabled);
        this.context.contentId.set(id ? `av-disclosure-content-${id}` : '');

        if (group && id && groupExpandedKeys) {
          const groupExpanded = groupExpandedKeys.has(id);
          if (groupExpanded !== expanded) {
            this.expanded.set(groupExpanded);
          }
          this.context.expanded.set(groupExpanded);
        } else {
          if (defaultExpanded && !this.defaultExpandedApplied) {
            this.expanded.set(true);
            this.defaultExpandedApplied = true;
          }
          this.context.expanded.set(this.expanded());
        }
      });
    });
  }

  private toggle(): void {
    if (this.context.disabled()) {
      return;
    }

    const id = this.id();
    const group = this.group;

    if (group && id) {
      group.toggle(id);
      const nextExpanded = group.isExpanded(id);
      this.expanded.set(nextExpanded);
      this.context.expanded.set(nextExpanded);
      return;
    }

    this.expanded.set(!this.expanded());
    this.context.expanded.set(this.expanded());
  }
}
