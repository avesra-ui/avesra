import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { AvDisclosureContext } from '../disclosure/disclosure.context';
import { avAccordionTriggerClasses } from './accordion.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-accordion-trigger]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    type: 'button',
    '[attr.aria-expanded]': 'context.expanded()',
    '[attr.aria-controls]': 'context.contentId()',
    '[attr.disabled]': 'context.disabled() || null',
    '[attr.aria-disabled]': 'context.disabled() || null',
    'data-slot': 'accordion-trigger',
    '(click)': 'toggle()',
  },
})
export class AvAccordionTriggerComponent {
  protected readonly context = inject(AvDisclosureContext);

  protected readonly classes = computed(() => avAccordionTriggerClasses());

  protected toggle(): void {
    this.context.toggle();
  }
}
