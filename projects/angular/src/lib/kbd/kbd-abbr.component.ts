import { Component, computed, input } from '@angular/core';

import { avKbdKeysLabelMap, avKbdKeysMap, type AvKbdKey } from './kbd.constants';
import { avKbdAbbrClasses } from './kbd.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'abbr[av-kbd-abbr]',
  template: `{{ symbol() }}`,
  host: {
    class: avKbdAbbrClasses(),
    '[attr.title]': 'title()',
    'data-slot': 'kbd-abbr',
  },
})
export class AvKbdAbbrComponent {
  /** Keyboard key to display. */
  readonly keyValue = input.required<AvKbdKey>({ alias: 'key-value' });

  protected readonly symbol = computed(() => avKbdKeysMap[this.keyValue()]);

  protected readonly title = computed(() => avKbdKeysLabelMap[this.keyValue()]);
}
