import { booleanAttribute, Component, computed, input } from '@angular/core';

import { avFieldErrorClasses } from './field-error.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'p[av-field-error]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    role: 'alert',
    'aria-live': 'polite',
    '[attr.data-visible]': 'visible() ? "true" : null',
    'data-slot': 'field-error',
  },
})
export class AvFieldErrorComponent {
  /** Controls visibility and expand/collapse animation. */
  readonly visible = input(true, { transform: booleanAttribute });

  protected readonly classes = computed(() => avFieldErrorClasses());
}
