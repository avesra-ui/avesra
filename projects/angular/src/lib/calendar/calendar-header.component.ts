import { Component, computed, inject } from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import { avCalendarHeaderClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar-header]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'calendar-header',
  },
})
export class AvCalendarHeaderComponent {
  private readonly context = inject(AvCalendarContext);

  protected readonly classes = computed(() => avCalendarHeaderClasses());

  /** Expose context for tests / custom headers. */
  readonly calendar = this.context;
}
