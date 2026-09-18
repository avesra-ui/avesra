import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avInputGroupPrefixClasses } from './input-group.utils';

@Component({
  selector: 'div[av-input-group-prefix]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'input-group-prefix',
  },
})
export class AvInputGroupPrefixComponent {
  protected readonly classes = computed(() => avInputGroupPrefixClasses());
}
