import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avListBoxSectionClasses } from './list-box-section.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-list-box-section]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'group',
    'data-slot': 'list-box-section',
  },
})
export class AvListBoxSectionComponent {
  protected readonly classes = computed(() => avListBoxSectionClasses());
}
