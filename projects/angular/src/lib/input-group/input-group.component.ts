import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvInputGroupContext } from './input-group.context';
import { avInputGroupClasses } from './input-group.utils';
import type { AvInputGroupVariant } from './input-group.utils';

@Component({
  selector: 'div[av-input-group]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'group',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.aria-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    'data-slot': 'input-group',
    '(click)': 'onHostClick($event)',
  },
  providers: [AvInputGroupContext],
})
export class AvInputGroupComponent {
  private readonly context = inject(AvInputGroupContext);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  /** Visual style variant. */
  readonly variant = input<AvInputGroupVariant>('primary');

  /** Expands the group to the full width of its container. */
  readonly fullWidth = input(false, {
    alias: 'full-width',
    transform: booleanAttribute,
  });

  /** Disables interaction for the group and its controls. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Marks the group as invalid. */
  readonly invalid = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avInputGroupClasses({
      variant: this.variant(),
      fullWidth: this.fullWidth(),
    }),
  );

  protected readonly isDisabled = computed(() => this.disabled());

  protected readonly isInvalid = computed(() => this.invalid());

  constructor() {
    effect(() => {
      const disabled = this.disabled();
      const invalid = this.invalid();

      untracked(() => {
        this.context.disabled.set(disabled);
        this.context.invalid.set(invalid);
      });
    });
  }

  protected onHostClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const control = this.elementRef.nativeElement.querySelector('input, textarea');

    if (
      control &&
      target !== control &&
      !control.contains(target) &&
      !this.isDisabled()
    ) {
      (control as HTMLElement).focus();
    }
  }
}
