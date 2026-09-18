import { Component, computed, inject, input } from '@angular/core';

import { AvModalContext } from './modal.context';
import { avModalBodyClasses } from './modal.utils';
import type { AvModalScroll } from './modal.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-modal-body]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'modal-body',
  },
})
export class AvModalBodyComponent {
  private readonly context = inject(AvModalContext);

  /** Scroll behavior. Inherits from modal context when omitted. */
  readonly scroll = input<AvModalScroll>();

  protected readonly classes = computed(() =>
    avModalBodyClasses({
      scroll: this.scroll() ?? this.context.scroll(),
    }),
  );
}
