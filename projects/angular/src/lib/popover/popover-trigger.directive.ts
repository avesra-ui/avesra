import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { booleanAttribute, computed, Directive, ElementRef, HostListener, inject, input } from '@angular/core';

import { AvPopoverContext } from './popover.context';
import { avPopoverTriggerClasses } from './popover.utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-popover-trigger]',
  hostDirectives: [CdkOverlayOrigin],
  host: {
    '[class]': 'classes()',
    role: 'button',
    tabindex: '0',
    'data-slot': 'popover-trigger',
    '[attr.aria-expanded]': 'context.isOpen()',
    'aria-haspopup': 'dialog',
  },
})
export class AvPopoverTriggerDirective {
  protected readonly context = inject(AvPopoverContext);
  private readonly element = inject(ElementRef<HTMLElement>);
  readonly overlayOrigin = inject(CdkOverlayOrigin);

  /** Accessible label when the trigger has no visible text. */
  readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  /** Disables the trigger. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() => avPopoverTriggerClasses());

  constructor() {
    this.context.registerTrigger(this.element.nativeElement, this.overlayOrigin);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.disabled()) {
      return;
    }

    event.stopPropagation();

    if (this.context.isOpen()) {
      this.context.close();
      return;
    }

    if (!this.context.isClosing()) {
      this.context.open();
    }
  }

  @HostListener('keydown.enter', ['$event'])
  @HostListener('keydown.space', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.disabled()) {
      return;
    }

    event.preventDefault();

    if (this.context.isOpen()) {
      this.context.close();
      return;
    }

    if (!this.context.isClosing()) {
      this.context.open();
    }
  }
}
