import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { AvMenuItemComponent } from './menu-item.component';
import { avMenuItemIndicatorClasses } from './menu-item.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-menu-item-indicator]',
  template: `
    <ng-content>
      @if (type() === 'dot') {
        <svg
          aria-hidden="true"
          data-slot="menu-item-indicator--dot"
          fill="currentColor"
          fill-rule="evenodd"
          role="presentation"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path clip-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" fill-rule="evenodd" />
        </svg>
      } @else {
        <svg
          aria-hidden="true"
          data-slot="menu-item-indicator--checkmark"
          fill="none"
          role="presentation"
          stroke="currentColor"
          [attr.stroke-dasharray]="22"
          [attr.stroke-dashoffset]="showIndicator() ? 44 : 66"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 17 18"
        >
          <polyline points="1 9 7 14 15 4" />
        </svg>
      }
    </ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    '[attr.data-type]': 'type()',
    '[attr.data-visible]': 'showIndicator() ? "true" : null',
    'data-slot': 'menu-item-indicator',
  },
})
export class AvMenuItemIndicatorComponent {
  private readonly menuItem = inject(AvMenuItemComponent, { optional: true });

  /** Indicator style used when no custom content is projected. */
  readonly type = input<'checkmark' | 'dot'>('checkmark');

  protected readonly classes = computed(() => avMenuItemIndicatorClasses());

  protected readonly showIndicator = computed(() => this.menuItem?.isSelected() ?? false);
}
