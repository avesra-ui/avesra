import { booleanAttribute, Component, computed, inject, input, model } from '@angular/core';

import { AvToggleButtonGroupContext } from '../toggle-button-group/toggle-button-group.context';
import { avToggleButtonClasses } from './toggle-button.utils';
import type { AvToggleButtonSize, AvToggleButtonVariant } from './toggle-button.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-toggle-button]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[disabled]': 'isDisabled()',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.aria-pressed]': 'isSelected()',
    '[attr.data-selected]': 'isSelected() ? "true" : null',
    'data-slot': 'toggle-button',
    '(click)': 'toggleSelection($event)',
  },
})
export class AvToggleButtonComponent {
  private readonly group = inject(AvToggleButtonGroupContext, { optional: true });

  /** Visual style variant. */
  readonly variant = input<AvToggleButtonVariant>('default');

  /** Toggle button size. Inherits from `av-toggle-button-group` when omitted. */
  readonly size = input<AvToggleButtonSize>();

  /** Square layout for icon-only buttons. */
  readonly iconOnly = input(false, { alias: 'icon-only', transform: booleanAttribute });

  /** Unique key when used inside `av-toggle-button-group`. */
  readonly value = input('');

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Selected state outside a group. Supports two-way binding with `[(selected)]`. */
  readonly selected = model(false);

  protected readonly classes = computed(() =>
    avToggleButtonClasses({
      variant: this.variant(),
      size: this.size() ?? this.group?.size() ?? 'md',
      iconOnly: this.iconOnly(),
    }),
  );

  protected readonly isDisabled = computed(
    () => this.disabled() || (this.group?.disabled() ?? false),
  );

  protected readonly isSelected = computed(() => {
    const key = this.value();
    if (this.group && key) {
      return this.group.isSelected(key);
    }

    return this.selected();
  });

  protected toggleSelection(event: Event): void {
    if (this.isDisabled()) {
      event.preventDefault();
      return;
    }

    const key = this.value();
    if (this.group && key) {
      this.group.toggleKey(key);
      return;
    }

    this.selected.update((value) => !value);
  }
}
