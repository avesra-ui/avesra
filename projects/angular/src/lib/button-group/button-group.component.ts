import {
  booleanAttribute,
  Component,
  computed,
  effect,
  HostAttributeToken,
  inject,
  input,
  untracked,
} from '@angular/core';

import type { AvButtonSize, AvButtonVariant } from '../button/button.utils';
import { AvButtonGroupContext } from './button-group.context';
import { avButtonGroupClasses } from './button-group.utils';
import type { AvButtonGroupOrientation } from './button-group.utils';

@Component({
  selector: 'av-button-group',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'group',
    'data-slot': 'button-group',
  },
  providers: [AvButtonGroupContext],
})
export class AvButtonGroupComponent {
  private readonly context = inject(AvButtonGroupContext);
  private readonly hostClass = inject(new HostAttributeToken('class'), { optional: true }) ?? '';

  /** Shared variant for child buttons. */
  readonly variant = input<AvButtonVariant>();

  /** Shared size for child buttons. */
  readonly size = input<AvButtonSize>();

  /** Disables all child buttons. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Expands the group to full width. */
  readonly fullWidth = input(false, { alias: 'full-width', transform: booleanAttribute });

  /** Layout direction of the group. */
  readonly orientation = input<AvButtonGroupOrientation>('horizontal');

  protected readonly classes = computed(() =>
    [
      avButtonGroupClasses({
        orientation: this.orientation(),
        fullWidth: this.fullWidth(),
      }),
      this.hostClass,
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      const variant = this.variant();
      const size = this.size();
      const disabled = this.disabled();
      const fullWidth = this.fullWidth();

      untracked(() => {
        this.context.variant.set(variant);
        this.context.size.set(size);
        this.context.disabled.set(disabled);
        this.context.fullWidth.set(fullWidth);
      });
    });
  }
}
