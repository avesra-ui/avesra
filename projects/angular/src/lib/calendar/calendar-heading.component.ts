import { Component, computed, inject, input } from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import type { AvCalendarDateOffset } from './calendar.types';
import { avCalendarHeadingClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar-heading]',
  template: `{{ label() }}`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'calendar-heading',
    'aria-live': 'polite',
  },
})
export class AvCalendarHeadingComponent {
  private readonly context = inject(AvCalendarContext);

  /** Offset for multi-month layouts. */
  readonly offset = input<AvCalendarDateOffset | null>(null);

  protected readonly classes = computed(() => avCalendarHeadingClasses());

  protected readonly label = computed(() => {
    this.context.visibleAnchor();
    this.context.locale();
    this.context.timeZone();
    this.context.visibleDuration();
    return this.context.getHeadingLabel(this.offset());
  });
}
