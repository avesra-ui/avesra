import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

import { AvModalContext } from './modal.context';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-modal-trigger]',
  host: {
    class: 'av-modal__trigger',
    role: 'button',
    tabindex: '0',
    'data-slot': 'modal-trigger',
    '[attr.aria-expanded]': 'context.isOpen()',
    '[attr.aria-haspopup]': '"dialog"',
    '[attr.aria-label]': 'ariaLabel()',
  },
})
export class AvModalTriggerDirective {
  protected readonly context = inject(AvModalContext);
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
