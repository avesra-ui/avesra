import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avFieldsetLegendClasses } from './fieldset.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'legend[av-fieldset-legend]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'fieldset-legend',
  },
})
export class AvFieldsetLegendComponent {
  protected readonly classes = computed(() => avFieldsetLegendClasses());
}
