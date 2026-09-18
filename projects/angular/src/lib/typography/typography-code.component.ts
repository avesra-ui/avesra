import { booleanAttribute, Component, computed, input } from '@angular/core';

import {
  avTypographyClasses,
  type AvTypographyAlign,
  type AvTypographyColor,
  type AvTypographyWeight,
} from './typography.utils';

/** Inline / block code convenience primitive (`type="code"`). */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'code[av-typography-code]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.data-type]': '"code"',
    '[attr.data-truncate]': 'truncate() ? "true" : null',
    'data-slot': 'typography-code',
  },
})
export class AvTypographyCodeComponent {
  readonly align = input<AvTypographyAlign>('start');
  readonly color = input<AvTypographyColor>('default');
  readonly weight = input<AvTypographyWeight | undefined>(undefined);
  readonly truncate = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avTypographyClasses({
      type: 'code',
      align: this.align(),
      color: this.color(),
      weight: this.weight(),
      truncate: this.truncate(),
    }),
  );
}
