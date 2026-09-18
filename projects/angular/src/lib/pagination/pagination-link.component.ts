import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { avPaginationLinkClasses } from './pagination.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-pagination-link]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[attr.aria-current]': 'active() ? "page" : null',
    '[attr.data-active]': 'active() ? "true" : null',
    '[attr.disabled]': 'disabled() || null',
    '[attr.aria-disabled]': 'disabled() ? "true" : null',
    'data-slot': 'pagination-link',
  },
})
export class AvPaginationLinkComponent {
  /** Marks the active page. */
  readonly active = input(false, { transform: booleanAttribute });

  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() => avPaginationLinkClasses());
}
