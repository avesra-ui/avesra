import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { avAccordionBodyClasses, avAccordionBodyInnerClasses } from './accordion.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-accordion-body]',
  template: `<div [class]="innerClasses()"><ng-content /></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'accordion-body',
  },
})
export class AvAccordionBodyComponent {
  /** Applied to the inner body wrapper. */
  readonly innerClass = input<string>('', { alias: 'class' });

  protected readonly classes = computed(() => avAccordionBodyClasses());

  protected readonly innerClasses = computed(() =>
    avAccordionBodyInnerClasses(this.innerClass()),
  );
}
