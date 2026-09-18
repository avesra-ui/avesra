import { Component, inject } from '@angular/core';

import { AvCheckboxContext } from './checkbox.context';

@Component({
  selector: '[av-checkbox-indicator]',
  template: `
  <ng-content>
    @if (context.isIndeterminate()) {
      <svg
        aria-hidden="true"
        data-slot="checkbox-default-indicator--indeterminate"
        fill="none"
        role="presentation"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="3"
        viewBox="0 0 24 24"
      >
        <line x1="21" x2="3" y1="12" y2="12" />
      </svg>
    } @else {
      <svg
        aria-hidden="true"
        data-slot="checkbox-default-indicator--checkmark"
        fill="none"
        role="presentation"
        stroke="currentColor"
        [attr.stroke-dasharray]="22"
        [attr.stroke-dashoffset]="context.isSelected() ? 44 : 66"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 17 18"
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    }
  </ng-content>
  `,
  host: {
    class: 'av-checkbox__indicator',
    'data-slot': 'checkbox-indicator',
    'aria-hidden': 'true',
  },
})
export class AvCheckboxIndicatorComponent {
  protected readonly context = inject(AvCheckboxContext);
}
