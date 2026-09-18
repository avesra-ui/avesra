import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avPaginationContentClasses } from './pagination.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ul[av-pagination-content]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'pagination-content',
  },
})
export class AvPaginationContentComponent {
  protected readonly classes = computed(() => avPaginationContentClasses());
}
