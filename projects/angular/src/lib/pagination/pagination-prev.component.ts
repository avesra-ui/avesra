import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { avPaginationLinkClasses } from './pagination.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-pagination-prev]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[attr.disabled]': 'disabled() || null',
    '[attr.aria-disabled]': 'disabled() ? "true" : null',
    'data-slot': 'pagination-previous',
  },
})
export class AvPaginationPrevComponent {
  /** Disables interaction. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() => avPaginationLinkClasses(true));
}
