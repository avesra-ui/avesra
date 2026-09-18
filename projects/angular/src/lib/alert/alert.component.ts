import { Component, computed, effect, inject, input } from '@angular/core';

import { AvSurfaceContext } from '../surface/surface.context';
import { AvAlertContext } from './alert.context';
import { avAlertClasses } from './alert.utils';
import type { AvAlertStatus } from './alert.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-alert]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'alert-root',
    role: 'alert',
  },
  providers: [AvAlertContext, AvSurfaceContext],
})
export class AvAlertComponent {
  private readonly alertContext = inject(AvAlertContext);
  private readonly surfaceContext = inject(AvSurfaceContext);

  /** Alert status. Colors the indicator and title. */
  readonly status = input<AvAlertStatus>('default');

  protected readonly classes = computed(() =>
    avAlertClasses({
      status: this.status(),
    }),
  );

  constructor() {
    effect(() => {
      this.alertContext.status.set(this.status());
    });

    this.surfaceContext.variant.set('default');
  }
}
