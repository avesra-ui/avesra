import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';

import { AvFieldsetContext } from './fieldset.context';
import { avFieldsetClasses } from './fieldset.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'fieldset[av-fieldset]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[disabled]': 'isDisabled()',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    'data-slot': 'fieldset',
  },
  providers: [AvFieldsetContext],
})
export class AvFieldsetComponent {
  private readonly context = inject(AvFieldsetContext);

  /** Disables all descendant form controls. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() => avFieldsetClasses());

  protected readonly isDisabled = computed(() => this.disabled());

  constructor() {
    effect(() => {
      const disabled = this.disabled();

      untracked(() => {
        this.context.disabled.set(disabled);
      });
    });
  }
}
