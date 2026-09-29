import {
  booleanAttribute,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';

import { AvDropdownContext } from './dropdown.context';
import type { AvDropdownOpenOrigin } from './dropdown.utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[av-dropdown-trigger]',
  host: {
    '[class.av-dropdown__trigger]': 'classes()',
    '[attr.aria-expanded]': 'context.isOpen()',
    '[attr.aria-controls]': 'context.isOpen() ? context.panelId() : null',
    'aria-haspopup': 'menu',
    'data-slot': 'dropdown-trigger',
    '(click)': 'onClick($event)',
    '(mousedown)': 'onMousedown($event)',
    '(keydown)': 'onKeydown($event)',
  },
})
export class AvDropdownTriggerDirective {
  protected readonly context = inject(AvDropdownContext);
  private readonly element = inject(ElementRef<HTMLElement>);

  /** Disables the trigger. */
  readonly disabled = input(false, { transform: booleanAttribute });

  /** Applies custom trigger styles. Use without `av-button`. */
  readonly customTrigger = input(false, { alias: 'custom-trigger', transform: booleanAttribute });

  protected readonly classes = computed(() => this.customTrigger());

  private pendingOpenOrigin: AvDropdownOpenOrigin = 'program';

  constructor() {
    this.context.registerTrigger(this.element.nativeElement);
  }

  protected onMousedown(event: MouseEvent): void {
    if (event.button === 0) {
      this.pendingOpenOrigin = 'mouse';
    }
  }

  protected onClick(event: MouseEvent): void {
    if (this.disabled()) {
      return;
    }

    event.stopPropagation();
    this.toggle('mouse');
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.disabled()) {
      return;
    }

    const key = event.key;
    if (key !== 'Enter' && key !== ' ' && key !== 'ArrowDown') {
      return;
    }

    event.preventDefault();
    this.pendingOpenOrigin = 'keyboard';
    this.openMenu('keyboard');
  }

  private toggle(origin: AvDropdownOpenOrigin): void {
    if (this.context.isOpen()) {
      this.context.close('click');
      return;
    }

    if (!this.context.isClosing()) {
      this.openMenu(origin === 'mouse' ? this.pendingOpenOrigin : origin);
    }
  }

  private openMenu(origin: AvDropdownOpenOrigin): void {
    if (!this.context.isClosing()) {
      this.context.open(origin);
    }
  }
}
