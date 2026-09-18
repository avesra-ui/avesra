import {
  booleanAttribute,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  model,
  untracked,
} from '@angular/core';

import { AvPopoverContext } from './popover.context';

@Component({
  selector: 'av-popover',
  template: `<ng-content />`,
  host: {
    'data-slot': 'popover-root',
  },
  providers: [AvPopoverContext],
})
export class AvPopoverComponent {
  private readonly context = inject(AvPopoverContext);
  private readonly destroyRef = inject(DestroyRef);

  /** Controls whether the popover is open. Supports two-way binding with `[(open)]`. */
  readonly open = model(false);

  /** Closes the popover when clicking outside. */
  readonly dismissable = input(true, { transform: booleanAttribute });

  /** Disables closing via the Escape key. */
  readonly keyboardDismissDisabled = input(false, {
    alias: 'keyboard-dismiss-disabled',
    transform: booleanAttribute,
  });

  constructor() {
    this.context.registerOpenChange((value) => {
      if (this.open() !== value) {
        this.open.set(value);
      }
    });

    effect(() => {
      const open = this.open();

      untracked(() => {
        if (open !== this.context.isOpen()) {
          this.context.setOpen(open);
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
