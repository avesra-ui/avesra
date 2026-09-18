import { Directive, ElementRef, inject } from '@angular/core';

import { AvDisclosureContext } from './disclosure.context';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-disclosure-trigger]',
  host: {
    // `av-disclosure__trigger` is applied by the trigger only, not when composed with `av-button`.
    '[class.av-disclosure__trigger]': 'useTriggerStyles',
    '[attr.aria-expanded]': 'context.expanded()',
    '[attr.aria-controls]': 'context.contentId() || null',
    '[attr.disabled]': 'context.disabled() || null',
    '[attr.aria-disabled]': 'context.disabled() || null',
    'data-slot': 'disclosure-trigger',
    '(click)': 'toggle($event)',
  },
})
export class AvDisclosureTriggerDirective {
  private readonly element = inject(ElementRef<HTMLElement>);
  protected readonly context = inject(AvDisclosureContext);

  /**
   * Skip trigger BEM styles when composed with `av-button`.
   */
  protected readonly useTriggerStyles = !this.element.nativeElement.hasAttribute('av-button');

  protected toggle(event: Event): void {
    if (this.context.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.context.toggle();
  }
}
