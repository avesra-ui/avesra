import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

import { AvAlertDialogContext } from './alert-dialog.context';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-alert-dialog-trigger]',
  host: {
    class: 'av-alert-dialog__trigger',
    role: 'button',
    tabindex: '0',
    'data-slot': 'alert-dialog-trigger',
    '[attr.aria-expanded]': 'context.isOpen()',
    '[attr.aria-haspopup]': '"dialog"',
  },
})
export class AvAlertDialogTriggerDirective {
  protected readonly context = inject(AvAlertDialogContext);
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
