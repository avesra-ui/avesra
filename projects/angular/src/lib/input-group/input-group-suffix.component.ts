import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avInputGroupSuffixClasses } from './input-group.utils';

@Component({
  selector: 'div[av-input-group-suffix]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'input-group-suffix',
  },
})
export class AvInputGroupSuffixComponent {
  protected readonly classes = computed(() => avInputGroupSuffixClasses());
}
