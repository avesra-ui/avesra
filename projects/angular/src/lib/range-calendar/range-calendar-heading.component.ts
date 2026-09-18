import { Component, computed, inject, input } from '@angular/core';

import type { AvCalendarDateOffset } from '../calendar/calendar.types';
import { AvRangeCalendarContext } from './range-calendar.context';
import { avRangeCalendarHeadingClasses } from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar-heading]',
  template: `{{ label() }}`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'range-calendar-heading',
    'aria-live': 'polite',
  },
})
export class AvRangeCalendarHeadingComponent {
  private readonly context = inject(AvRangeCalendarContext);

  readonly offset = input<AvCalendarDateOffset | null>(null);

  protected readonly classes = computed(() => avRangeCalendarHeadingClasses());

  protected readonly label = computed(() => {
    this.context.visibleAnchor();
    this.context.locale();
    this.context.timeZone();
    this.context.visibleDuration();
    return this.context.getHeadingLabel(this.offset());
  });
}
