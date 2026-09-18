import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { avDisclosureBodyClasses } from './disclosure.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-disclosure-body]',
  template: `<div [class]="innerClasses()"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'disclosure-body',
  },
})
export class AvDisclosureBodyComponent {
  /** Applied to the inner body wrapper. */
  readonly innerClass = input<string>('', { alias: 'class' });

  protected readonly classes = computed(() => avDisclosureBodyClasses());

  protected readonly innerClasses = computed(() => {
    const parts = ['av-disclosure__body-inner'];
    const extra = this.innerClass().trim();
    if (extra) {
      parts.push(extra);
    }
    return parts.join(' ');
  });
}
