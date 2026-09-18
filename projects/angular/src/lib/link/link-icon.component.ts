import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avLinkIconClasses } from './link.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-link-icon]',
  template: `
    <ng-content>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        data-slot="link-default-icon"
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'link-icon',
    '[attr.data-default-icon]': 'hasDefaultIcon() ? "true" : null',
  },
})
export class AvLinkIconComponent {
  protected readonly classes = computed(() => avLinkIconClasses());

  protected readonly hasDefaultIcon = computed(() => true);
}
