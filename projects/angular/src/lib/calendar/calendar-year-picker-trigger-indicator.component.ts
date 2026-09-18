import { Component, computed } from '@angular/core';

import { avCalendarYearPickerTriggerIndicatorClasses } from './calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-calendar-year-picker-trigger-indicator]',
  template: `
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" focusable="false">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'calendar-year-picker-trigger-indicator',
  },
})
export class AvCalendarYearPickerTriggerIndicatorComponent {
  protected readonly classes = computed(() => avCalendarYearPickerTriggerIndicatorClasses());
}
