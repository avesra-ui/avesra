import { Component, computed, input } from '@angular/core';

import { AvChipLabelComponent } from './chip-label.component';
import { avChipClasses } from './chip.utils';
import type { AvChipColor, AvChipSize, AvChipVariant } from './chip.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-chip]',
  imports: [AvChipLabelComponent],
  template: `
    @if (label(); as text) {
      <span av-chip-label>{{ text }}</span>
    } @else {
      <ng-content />
    }
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'chip',
  },
})
export class AvChipComponent {
  /** Chip color. */
  readonly color = input<AvChipColor>('default');

  /** Chip size. */
  readonly size = input<AvChipSize>('md');

  /** Visual style variant. */
  readonly variant = input<AvChipVariant>('secondary');

  /** Optional label text shorthand. */
  readonly label = input<string | number>();

  protected readonly classes = computed(() =>
    avChipClasses({
      color: this.color(),
      size: this.size(),
      variant: this.variant(),
    }),
  );
}
