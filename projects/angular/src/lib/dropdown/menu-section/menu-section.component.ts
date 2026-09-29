import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avDropdownMenuSectionClasses } from './menu-section.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-dropdown-menu-section]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'group',
    'data-slot': 'dropdown-menu-section',
  },
})
export class AvDropdownMenuSectionComponent {
  protected readonly classes = computed(() => avDropdownMenuSectionClasses());
}
