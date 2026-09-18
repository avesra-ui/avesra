import { Component, computed, inject, input } from '@angular/core';

import { AvCalendarIntl } from '../calendar/calendar.intl';
import { AvRangeCalendarContext } from './range-calendar.context';
import {
  avRangeCalendarNavButtonClasses,
  avRangeCalendarNavButtonIconClasses,
} from './range-calendar.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-range-calendar-nav-button]',
  template: `
    <ng-content>
      @if (slot() === 'previous') {
        <svg
          [class]="iconClasses()"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M10 3L5 8l5 5"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      } @else {
        <svg
          [class]="iconClasses()"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6 3l5 5-5 5"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    </ng-content>
  `,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.data-slot]': 'slot()',
    '[disabled]': 'isDisabled()',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '(click)': 'onClick()',
  },
})
export class AvRangeCalendarNavButtonComponent {
  private readonly context = inject(AvRangeCalendarContext);
  private readonly intl = inject(AvCalendarIntl);

  readonly slot = input.required<'previous' | 'next'>();

  protected readonly classes = computed(() => avRangeCalendarNavButtonClasses());
  protected readonly iconClasses = computed(() => avRangeCalendarNavButtonIconClasses());

  protected readonly isDisabled = computed(
    () => this.context.disabled() || this.context.yearPickerOpen(),
  );

  protected readonly ariaLabel = computed(() =>
    this.slot() === 'previous' ? this.intl.previousMonthLabel : this.intl.nextMonthLabel,
  );

  protected onClick(): void {
    if (this.isDisabled()) {
      return;
    }

    if (this.slot() === 'previous') {
      this.context.navigatePrevious();
    } else {
      this.context.navigateNext();
    }
  }
}
