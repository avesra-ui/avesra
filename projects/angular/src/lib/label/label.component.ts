import { booleanAttribute, Component, computed, input } from '@angular/core';

import { avLabelClasses } from './label.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'label[av-label]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.for]': 'htmlFor() || null',
    'data-slot': 'label',
  },
})
export class AvLabelComponent {
  /** The id of the associated form control. */
  readonly htmlFor = input<string>(undefined, { alias: 'for' });

  /** Shows a required indicator. */
  readonly required = input(false, { transform: booleanAttribute });

  /** Applies disabled styling. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Applies invalid styling. */
  readonly invalid = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avLabelClasses({
      required: this.required(),
      disabled: this.disabled(),
      invalid: this.invalid(),
    }),
  );
}
