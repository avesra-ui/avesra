import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avPaginationEllipsisClasses } from './pagination.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-pagination-ellipsis]',
  template: '&hellip;',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'pagination-ellipsis',
  },
})
export class AvPaginationEllipsisComponent {
  protected readonly classes = computed(() => avPaginationEllipsisClasses());
}
