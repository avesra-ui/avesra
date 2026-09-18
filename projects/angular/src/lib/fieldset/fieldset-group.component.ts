import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avFieldsetGroupClasses } from './fieldset.utils';

@Component({
  selector: 'div[av-fieldset-group]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'fieldset-field-group',
  },
})
export class AvFieldsetGroupComponent {
  protected readonly classes = computed(() => avFieldsetGroupClasses());
}
