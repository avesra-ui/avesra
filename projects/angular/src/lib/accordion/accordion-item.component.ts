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

import { AvDisclosureContext } from '../disclosure/disclosure.context';
import { AvAccordionContext } from './accordion.context';
import { avAccordionItemClasses } from './accordion.utils';

@Component({
  selector: 'av-accordion-item',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.data-hide-separator]': 'accordion.hideSeparator() ? "true" : null',
    'data-slot': 'accordion-item',
  },
  providers: [AvDisclosureContext],
})
export class AvAccordionItemComponent {
  protected readonly accordion = inject(AvAccordionContext);
  private readonly context = inject(AvDisclosureContext);

  /** Unique accordion item id. */
  readonly id = input.required<string>();

  /** Disables this accordion item. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Expanded state for standalone usage outside accordion root. */
  readonly expanded = model(false);

  protected readonly classes = computed(() => avAccordionItemClasses());

  constructor() {
    this.context.registerToggleHandler(() => this.toggle());

    effect(() => {
      const id = this.id();
      const disabled = this.disabled() || this.accordion.disabled();
      const expanded = this.accordion.isExpanded(id);

      untracked(() => {
        this.context.id.set(id);
        this.context.disabled.set(disabled);
        this.context.contentId.set(`av-accordion-panel-${id}`);
        this.context.expanded.set(expanded);
        this.expanded.set(expanded);
      });
    });
  }

  private toggle(): void {
    if (this.context.disabled()) {
      return;
    }
    this.accordion.toggle(this.id());
    const nextExpanded = this.accordion.isExpanded(this.id());
    this.expanded.set(nextExpanded);
    this.context.expanded.set(nextExpanded);
  }
}
