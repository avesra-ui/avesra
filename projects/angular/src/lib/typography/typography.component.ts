import { booleanAttribute, Component, computed, input } from '@angular/core';

import {
  avTypographyClasses,
  type AvTypographyAlign,
  type AvTypographyColor,
  type AvTypographyType,
  type AvTypographyWeight,
} from './typography.utils';

/**
 * Semantic typography styles on a host element the consumer chooses
 * (`h1`–`h6`, `p`, `span`, `code`, `div`, …).
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector:
    'h1[av-typography], h2[av-typography], h3[av-typography], h4[av-typography], h5[av-typography], h6[av-typography], p[av-typography], span[av-typography], code[av-typography], div[av-typography]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.data-type]': 'type()',
    '[attr.data-truncate]': 'truncate() ? "true" : null',
    'data-slot': 'typography',
  },
})
export class AvTypographyComponent {
  /** Typography scale token (drives BEM modifier; prefer matching host tag). */
  readonly type = input<AvTypographyType>('body');

  /** Text alignment. */
  readonly align = input<AvTypographyAlign>('start');

  /** Foreground color token. */
  readonly color = input<AvTypographyColor>('default');

  /** Optional font-weight override. */
  readonly weight = input<AvTypographyWeight | undefined>(undefined);

  /** Truncate overflow with ellipsis (block). */
  readonly truncate = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avTypographyClasses({
      type: this.type(),
      align: this.align(),
      color: this.color(),
      weight: this.weight(),
      truncate: this.truncate(),
    }),
  );
}
