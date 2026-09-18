import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avMenuSectionClasses } from './menu-section.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-menu-section]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'group',
    'data-slot': 'menu-section',
  },
})
export class AvMenuSectionComponent {
  protected readonly classes = computed(() => avMenuSectionClasses());
}
