import { booleanAttribute, Component, computed, input } from '@angular/core';

import {
  avTypographyClasses,
  avTypographyParagraphType,
  type AvTypographyAlign,
  type AvTypographyColor,
  type AvTypographyParagraphSize,
  type AvTypographyWeight,
} from './typography.utils';

/** Paragraph convenience primitive with base / sm / xs sizes. */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'p[av-typography-paragraph]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.data-type]': 'resolvedType()',
    '[attr.data-truncate]': 'truncate() ? "true" : null',
    'data-slot': 'typography-paragraph',
  },
})
export class AvTypographyParagraphComponent {
  readonly size = input<AvTypographyParagraphSize>('base');
  readonly align = input<AvTypographyAlign>('start');
  readonly color = input<AvTypographyColor>('default');
  readonly weight = input<AvTypographyWeight | undefined>(undefined);
  readonly truncate = input(false, { transform: booleanAttribute });

  protected readonly resolvedType = computed(() =>
    avTypographyParagraphType(this.size()),
  );

  protected readonly classes = computed(() =>
    avTypographyClasses({
      type: this.resolvedType(),
      align: this.align(),
      color: this.color(),
      weight: this.weight(),
      truncate: this.truncate(),
    }),
  );
}
