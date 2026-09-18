import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

import { AvDrawerContext } from './drawer.context';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-drawer-trigger]',
  host: {
    role: 'button',
    tabindex: '0',
    'data-slot': 'drawer-trigger',
  },
})
export class AvDrawerTriggerDirective {
  private readonly context = inject(AvDrawerContext);
  private readonly element = inject(ElementRef<HTMLElement>);

  /** Accessible label when the trigger has no visible text. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  constructor() {
    this.context.setTriggerElement(this.element.nativeElement);
  }

  @HostListener('click')
  onClick(): void {
    this.context.open();
  }

  @HostListener('keydown.enter')
  @HostListener('keydown.space', ['$event'])
  onKeydown(event?: KeyboardEvent): void {
    event?.preventDefault();
    this.context.open();
  }
}
