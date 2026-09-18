import {
  booleanAttribute,
  Component,
  computed,
  HostAttributeToken,
  inject,
  input,
} from '@angular/core';

import { AvButtonGroupContext } from '../button-group/button-group.context';
import { avButtonClasses } from './button.utils';
import type { AvButtonSize, AvButtonVariant } from './button.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-button]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[type]': 'buttonType()',
    '[disabled]': 'isDisabled()',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.data-pending]': 'pending() ? "true" : null',
    'data-slot': 'button',
  },
})
export class AvButtonComponent {
  private readonly group = inject(AvButtonGroupContext, { optional: true });
  private readonly hostClass = inject(new HostAttributeToken('class'), { optional: true }) ?? '';

  /** Visual style variant. Inherits from `av-button-group` when omitted. */
  readonly variant = input<AvButtonVariant>();

  /** Button size. Inherits from `av-button-group` when omitted. */
  readonly size = input<AvButtonSize>();

  /** Native button type. */
  readonly buttonType = input<'button' | 'submit' | 'reset'>('button', { alias: 'type' });

  /**
   * Disables interaction when set.
   * When omitted, falls back to `pending`, then the parent `av-button-group` disabled state.
   */
  readonly disabled = input<boolean | undefined, boolean | string | undefined>(undefined, {
    transform: booleanAttribute,
  });

  /** Shows pending state and blocks interaction. */
  readonly pending = input(false, { transform: booleanAttribute });

  /** Expands to full container width. */
  readonly fullWidth = input(false, { alias: 'full-width', transform: booleanAttribute });

  /** Square layout for icon-only buttons. */
  readonly iconOnly = input(false, { alias: 'icon-only', transform: booleanAttribute });

  protected readonly classes = computed(() =>
    [
      avButtonClasses({
        variant: this.variant() ?? this.group?.variant() ?? 'primary',
        size: this.size() ?? this.group?.size() ?? 'md',
        fullWidth: this.fullWidth() || (this.group?.fullWidth() ?? false),
        iconOnly: this.iconOnly(),
      }),
      this.hostClass,
    ]
      .filter(Boolean)
      .join(' '),
  );

  protected readonly isDisabled = computed(() => {
    const disabled = this.disabled();
    if (disabled !== undefined) {
      return disabled;
    }

    if (this.pending()) {
      return true;
    }

    return this.group?.disabled() ?? false;
  });
}
