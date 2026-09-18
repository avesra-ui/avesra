import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avDateInputGroupInputContainerClasses } from './date-input-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-input-group-input-container]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'date-input-group-input-container',
  },
})
export class AvDateInputGroupInputContainerComponent {
  protected readonly classes = computed(() => avDateInputGroupInputContainerClasses());
}
