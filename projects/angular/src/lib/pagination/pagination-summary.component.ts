import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avPaginationSummaryClasses } from './pagination.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-pagination-summary]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'pagination-summary',
  },
})
export class AvPaginationSummaryComponent {
  protected readonly classes = computed(() => avPaginationSummaryClasses());
}
