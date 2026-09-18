import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Injectable, signal } from '@angular/core';

import type { AvPopoverAnimationState } from './popover.utils';
import { AV_POPOVER_ENTER_MS, AV_POPOVER_EXIT_MS } from './popover.utils';

/** Fallback when exit CSS animation does not fire (e.g. reduced motion). */
const EXIT_ANIMATION_FALLBACK_MS = AV_POPOVER_EXIT_MS + 50;

@Injectable()
export class AvPopoverContext {
  readonly isOpen = signal(false);
  readonly isVisible = signal(false);
  readonly animationState = signal<AvPopoverAnimationState>('idle');
  readonly overlayOrigin = signal<CdkOverlayOrigin | null>(null);
  readonly dismissable = signal(true);
  readonly keyboardDismissDisabled = signal(false);

  private enterTimer: ReturnType<typeof setTimeout> | null = null;
  private exitTimer: ReturnType<typeof setTimeout> | null = null;
  private exitAnimationFinished = false;
  private openChangeHandler: ((open: boolean) => void) | null = null;
  private triggerElement: HTMLElement | null = null;

  registerOpenChange(handler: (open: boolean) => void): void {
    this.openChangeHandler = handler;
  }

  registerTrigger(element: HTMLElement, origin: CdkOverlayOrigin): void {
    this.triggerElement = element;
    this.overlayOrigin.set(origin);
  }

  getTriggerElement(): HTMLElement | null {
    return this.triggerElement;
  }

  /** True while the overlay is still mounted during an exit animation. */
  isClosing(): boolean {
    return !this.isOpen() && this.isVisible();
  }

  open(): void {
    if (this.isClosing()) {
      return;
    }

    this.setOpen(true);
  }

  close(): void {
    this.setOpen(false);
  }

  setOpen(value: boolean): void {
    if (value) {
      if (this.isOpen()) {
        return;
      }

      // Cancel an in-flight exit (e.g. controlled [(open)] set to true while closing).
      this.clearTimers();
      this.exitAnimationFinished = false;
      this.isOpen.set(true);
      this.isVisible.set(true);
      this.animationState.set('entering');

      this.enterTimer = setTimeout(() => {
        if (this.isOpen()) {
          this.animationState.set('idle');
        }
      }, AV_POPOVER_ENTER_MS);

      this.openChangeHandler?.(true);
      return;
    }

    if (!this.isOpen()) {
      return;
    }

    this.clearTimers();
    this.exitAnimationFinished = false;
    this.isOpen.set(false);
    this.animationState.set('exiting');
    this.openChangeHandler?.(false);

    this.exitTimer = setTimeout(() => this.finishExit(), EXIT_ANIMATION_FALLBACK_MS);
  }

  /** Called when the popover exit animation completes. */
  notifyExitAnimationEnd(): void {
    if (this.animationState() !== 'exiting') {
      return;
    }

    if (this.exitTimer !== null) {
      clearTimeout(this.exitTimer);
      this.exitTimer = null;
    }

    this.finishExit();
  }

  dispose(): void {
    this.clearTimers();
    this.exitAnimationFinished = false;
    this.isOpen.set(false);
    this.isVisible.set(false);
    this.animationState.set('idle');
    this.triggerElement = null;
    this.overlayOrigin.set(null);
    this.openChangeHandler = null;
  }

  private finishExit(): void {
    if (this.exitAnimationFinished || this.animationState() !== 'exiting') {
      return;
    }

    this.exitAnimationFinished = true;
    this.isVisible.set(false);

    requestAnimationFrame(() => {
      this.animationState.set('idle');
    });
  }

  private clearTimers(): void {
    if (this.enterTimer !== null) {
      clearTimeout(this.enterTimer);
      this.enterTimer = null;
    }

    if (this.exitTimer !== null) {
      clearTimeout(this.exitTimer);
      this.exitTimer = null;
    }
  }
}
