import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avDateInputGroupSuffixClasses } from './date-input-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-input-group-suffix]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'date-input-group-suffix',
  },
})
export class AvDateInputGroupSuffixComponent {
  protected readonly classes = computed(() => avDateInputGroupSuffixClasses());
}
