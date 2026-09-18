import { booleanAttribute, Component, computed, ElementRef, inject, input } from '@angular/core';

import {
  avTypographyClasses,
  avTypographyHeadingType,
  type AvTypographyAlign,
  type AvTypographyColor,
  type AvTypographyHeadingLevel,
  type AvTypographyWeight,
} from './typography.utils';

/**
 * Heading convenience primitive — styles follow host tag (`h1`–`h6`) or optional `level`.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector:
    'h1[av-typography-heading], h2[av-typography-heading], h3[av-typography-heading], h4[av-typography-heading], h5[av-typography-heading], h6[av-typography-heading]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.data-type]': 'resolvedType()',
    '[attr.data-truncate]': 'truncate() ? "true" : null',
    'data-slot': 'typography-heading',
  },
})
export class AvTypographyHeadingComponent {
  private readonly host = inject(ElementRef<HTMLElement>);

  /** Override heading level used for styles (defaults from host tag name). */
  readonly level = input<AvTypographyHeadingLevel | undefined>(undefined);

  readonly align = input<AvTypographyAlign>('start');
  readonly color = input<AvTypographyColor>('default');
  readonly weight = input<AvTypographyWeight | undefined>(undefined);
  readonly truncate = input(false, { transform: booleanAttribute });

  protected readonly resolvedLevel = computed<AvTypographyHeadingLevel>(() => {
    const explicit = this.level();
    if (explicit !== undefined) {
      return explicit;
    }
    const match = /^H([1-6])$/.exec(this.host.nativeElement.tagName);
    return match ? (Number(match[1]) as AvTypographyHeadingLevel) : 1;
  });

  protected readonly resolvedType = computed(() =>
    avTypographyHeadingType(this.resolvedLevel()),
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
