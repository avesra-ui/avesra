import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avPaginationItemClasses } from './pagination.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[av-pagination-item]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'pagination-item',
  },
})
export class AvPaginationItemComponent {
  protected readonly classes = computed(() => avPaginationItemClasses());
}
