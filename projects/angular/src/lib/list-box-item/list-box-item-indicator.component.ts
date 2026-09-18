import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { AvListBoxItemComponent } from './list-box-item.component';
import { avListBoxItemIndicatorClasses } from './list-box-item.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-list-box-item-indicator]',
  template: `
    @if (showIndicator()) {
      <ng-content>
        <svg
          aria-hidden="true"
          data-slot="list-box-item-indicator--checkmark"
          fill="none"
          role="presentation"
          stroke="currentColor"
          [attr.stroke-dasharray]="22"
          [attr.stroke-dashoffset]="44"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 17 18"
        >
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </ng-content>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    '[attr.data-visible]': 'showIndicator() ? "true" : null',
    'data-slot': 'list-box-item-indicator',
  },
})
export class AvListBoxItemIndicatorComponent {
  private readonly listBoxItem = inject(AvListBoxItemComponent, { optional: true, host: true });

  protected readonly classes = computed(() => avListBoxItemIndicatorClasses());

  protected readonly showIndicator = computed(() => this.listBoxItem?.isSelected() ?? false);
}
