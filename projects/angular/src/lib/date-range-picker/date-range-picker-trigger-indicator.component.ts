import { Component, computed } from '@angular/core';

import { avDateRangePickerTriggerIndicatorClasses } from './date-range-picker.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-date-range-picker-trigger-indicator]',
  template: `
    <ng-content>
      <svg
        aria-hidden="true"
        data-slot="date-range-picker-default-indicator"
        fill="none"
        height="16"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="16"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    </ng-content>
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'date-range-picker-trigger-indicator',
    'aria-hidden': 'true',
  },
})
export class AvDateRangePickerTriggerIndicatorComponent {
  protected readonly classes = computed(() => avDateRangePickerTriggerIndicatorClasses());
}
