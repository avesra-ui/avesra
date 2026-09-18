import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avDateInputGroupPrefixClasses } from './date-input-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-input-group-prefix]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'date-input-group-prefix',
  },
})
export class AvDateInputGroupPrefixComponent {
  protected readonly classes = computed(() => avDateInputGroupPrefixClasses());
}
