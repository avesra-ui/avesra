import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avDisclosureHeadingClasses } from './disclosure.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'h3[av-disclosure-heading]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'disclosure-heading',
  },
})
export class AvDisclosureHeadingComponent {
  protected readonly classes = computed(() => avDisclosureHeadingClasses());
}
