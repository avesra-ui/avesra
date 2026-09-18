import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvDateFieldContext } from '../date-field/date-field.context';
import { AvDateRangePickerContext } from '../date-range-picker/date-range-picker.context';

import { AvDateInputGroupContext } from './date-input-group.context';
import {
  avDateInputGroupClasses,
  type AvDateInputGroupVariant,
} from './date-input-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-input-group]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'presentation',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.aria-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    '[attr.data-focus-within]': 'focusWithin() ? "true" : null',
    'data-slot': 'date-input-group',
  },
  providers: [AvDateInputGroupContext],
})
export class AvDateInputGroupComponent {
  private readonly groupContext = inject(AvDateInputGroupContext);
  private readonly fieldContext = inject(AvDateFieldContext, { optional: true });
  private readonly rangePicker = inject(AvDateRangePickerContext, { optional: true });

  readonly variant = input<AvDateInputGroupVariant>('primary');
  readonly fullWidth = input(false, {
    alias: 'full-width',
    transform: booleanAttribute,
  });
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly invalid = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avDateInputGroupClasses({
      variant: this.variant(),
      fullWidth: this.fullWidth(),
    }),
  );

  protected readonly isDisabled = computed(
    () =>
      this.disabled() ||
      !!this.fieldContext?.disabled() ||
      !!this.rangePicker?.disabled(),
  );

  protected readonly isInvalid = computed(
    () =>
      this.invalid() ||
      !!this.fieldContext?.invalid() ||
      !!this.rangePicker?.invalid(),
  );

  protected readonly focusWithin = computed(
    () =>
      !!this.fieldContext?.focusWithin() ||
      !!this.rangePicker?.startField.focusWithin() ||
      !!this.rangePicker?.endField.focusWithin(),
  );

  constructor() {
    effect(() => {
      const variant = this.variant();
      const fullWidth = this.fullWidth();
      const disabled = this.isDisabled();
      const invalid = this.isInvalid();

      untracked(() => {
        this.groupContext.variant.set(variant);
        this.groupContext.fullWidth.set(fullWidth);
        this.groupContext.disabled.set(disabled);
        this.groupContext.invalid.set(invalid);
      });
    });
  }
}
