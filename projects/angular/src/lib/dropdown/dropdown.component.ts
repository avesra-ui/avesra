import { booleanAttribute, Component, computed, DestroyRef, effect, inject, input, model, untracked } from '@angular/core';

import { AvDropdownContext } from './dropdown.context';
import { avDropdownClasses } from './dropdown.utils';

@Component({
  selector: 'av-dropdown',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'dropdown-root',
  },
  providers: [AvDropdownContext],
})
export class AvDropdownComponent {
  private readonly context = inject(AvDropdownContext);
  private readonly destroyRef = inject(DestroyRef);

  /** Controls whether the dropdown is open. Supports two-way binding with `[(open)]`. */
  readonly open = model(false);

  /** Closes the dropdown when clicking outside. */
  readonly dismissable = input(true, { transform: booleanAttribute });

  /** Disables closing via the Escape key. */
  readonly keyboardDismissDisabled = input(false, {
    alias: 'keyboard-dismiss-disabled',
    transform: booleanAttribute,
  });

  protected readonly classes = computed(() => avDropdownClasses());

  constructor() {
    this.context.registerOpenChange((value) => {
      if (this.open() !== value) {
        this.open.set(value);
      }
    });

    effect(() => {
      const open = this.open();

      untracked(() => {
        if (open && !this.context.isOpen()) {
          this.context.open('program');
        } else if (!open && this.context.isOpen()) {
          this.context.close();
        }
      });
    });

    effect(() => {
      const dismissable = this.dismissable();
      const keyboardDismissDisabled = this.keyboardDismissDisabled();

      untracked(() => {
        this.context.dismissable.set(dismissable);
        this.context.keyboardDismissDisabled.set(keyboardDismissDisabled);
      });
    });

    this.destroyRef.onDestroy(() => {
      this.context.dispose();
    });
  }
}
