import { Component, computed, input } from '@angular/core';

import { avSwitchGroupClasses } from './switch-group.utils';
import type { AvSwitchGroupOrientation } from './switch-group.utils';

@Component({
  selector: 'av-switch-group',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'switch-group',
  },
})
export class AvSwitchGroupComponent {
  /** Layout direction of grouped switches. */
  readonly orientation = input<AvSwitchGroupOrientation>('vertical');

  protected readonly classes = computed(() =>
    avSwitchGroupClasses({ orientation: this.orientation() }),
  );
}
