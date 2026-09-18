import { Component, computed, inject } from '@angular/core';

import { AvRangeCalendarContext } from './range-calendar.context';
import { avRangeCalendarHeaderClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar-header]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'range-calendar-header',
  },
})
export class AvRangeCalendarHeaderComponent {
  private readonly context = inject(AvRangeCalendarContext);

  protected readonly classes = computed(() => avRangeCalendarHeaderClasses());

  readonly calendar = this.context;
}
