import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avFieldsetActionsClasses } from './fieldset.utils';

@Component({
  selector: 'div[av-fieldset-actions]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'fieldset-actions',
  },
})
export class AvFieldsetActionsComponent {
  protected readonly classes = computed(() => avFieldsetActionsClasses());
}
