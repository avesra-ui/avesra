import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { avAccordionHeadingClasses } from './accordion.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'h3[av-accordion-heading]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'accordion-heading',
  },
})
export class AvAccordionHeadingComponent {
  protected readonly classes = computed(() => avAccordionHeadingClasses());
}
