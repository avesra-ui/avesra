import { Component, computed, input } from '@angular/core';

import { AvBadgeLabelComponent } from './badge-label.component';
import { avBadgeClasses } from './badge.utils';
import type {
  AvBadgeColor,
  AvBadgePlacement,
  AvBadgeSize,
  AvBadgeVariant,
} from './badge.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-badge]',
  imports: [AvBadgeLabelComponent],
  template: `
    @if (label(); as text) {
      <span av-badge-label>{{ text }}</span>
    } @else {
      <ng-content />
    }
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'badge',
  },
})
export class AvBadgeComponent {
  /** Badge color. */
  readonly color = input<AvBadgeColor>('default');

  /** Badge placement relative to an anchor. */
  readonly placement = input<AvBadgePlacement>('top-right');

  /** Badge size. */
  readonly size = input<AvBadgeSize>('md');

  /** Visual style variant. */
  readonly variant = input<AvBadgeVariant>('primary');

  /** Optional label text shorthand. */
  readonly label = input<string | number>();

  protected readonly classes = computed(() =>
    avBadgeClasses({
      color: this.color(),
      placement: this.placement(),
      size: this.size(),
      variant: this.variant(),
    }),
  );
}
