import { Injectable, signal, TemplateRef, ViewContainerRef } from '@angular/core';

import type {
  AvModalAnimationState,
  AvModalBackdropVariant,
  AvModalCloseResult,
  AvModalPlacement,
  AvModalScroll,
  AvModalSize,
} from './modal.utils';
import { AV_MODAL_ENTER_MS, AV_MODAL_EXIT_FALLBACK_MS } from './modal.utils';

export interface AvModalContentConfig {
  templateRef: TemplateRef<unknown>;
  viewContainerRef: ViewContainerRef;
}

@Injectable()
export class AvModalContext {
  readonly isOpen = signal(false);
  readonly isMounted = signal(false);
  readonly animationState = signal<AvModalAnimationState>('idle');
  readonly contentReady = signal(false);
  readonly contentTemplate = signal<TemplateRef<unknown> | null>(null);

  readonly placement = signal<AvModalPlacement>('auto');
  readonly scroll = signal<AvModalScroll>('inside');
  readonly size = signal<AvModalSize>('md');
  readonly backdropVariant = signal<AvModalBackdropVariant>('opaque');
  /** Modals are dismissable by default. */
  readonly dismissable = signal(true);
  readonly keyboardDismissDisabled = signal(false);

  private openChangeHandler: ((open: boolean) => void) | null = null;
  private closedHandler: ((result: AvModalCloseResult) => void) | null = null;
  private enterTimer: ReturnType<typeof setTimeout> | null = null;
  private exitTimer: ReturnType<typeof setTimeout> | null = null;
  private exitAnimationFinished = false;
  private triggerElement: HTMLElement | null = null;
  private contentConfig: AvModalContentConfig | null = null;
  private closeResult: AvModalCloseResult;
  private detachOverlayHandler: (() => void) | null = null;
  private restoreFocusHandler: (() => void) | null = null;

  registerOpenChange(handler: (open: boolean) => void): void {
    this.openChangeHandler = handler;
  }

  registerClosed(handler: (result: AvModalCloseResult) => void): void {
    this.closedHandler = handler;
  }

  setTriggerElement(element: HTMLElement | null): void {
    this.triggerElement = element;
  }

  getTriggerElement(): HTMLElement | null {
    return this.triggerElement;
  }

  registerContent(config: AvModalContentConfig): void {
    this.contentConfig = config;
    this.contentTemplate.set(config.templateRef);
    this.contentReady.set(true);
  }

  unregisterContent(): void {
    this.contentConfig = null;
    this.contentTemplate.set(null);
    this.contentReady.set(false);
  }

  getContentConfig(): AvModalContentConfig | null {
    return this.contentConfig;
  }

  registerOverlayHandlers(handlers: {
    detach: () => void;
    restoreFocus: () => void;
  }): void {
    this.detachOverlayHandler = handlers.detach;
    this.restoreFocusHandler = handlers.restoreFocus;
  }

  open(): void {
    this.setOpen(true);
  }

  close(result?: AvModalCloseResult): void {
    this.closeResult = result;
    this.setOpen(false);
  }

  toggle(): void {
    this.setOpen(!this.isOpen());
  }

  setOpen(value: boolean): void {
    if (value === this.isOpen()) {
      return;
    }

    this.clearTimers();

    if (value) {
      this.exitAnimationFinished = false;
      this.closeResult = undefined;
      this.isOpen.set(true);
      this.isMounted.set(true);
      this.animationState.set('entering');
      this.enterTimer = setTimeout(() => {
        if (this.isOpen()) {
          this.animationState.set('idle');
        }
      }, AV_MODAL_ENTER_MS);
      this.openChangeHandler?.(true);
      return;
    }

    this.isOpen.set(false);
    this.animationState.set('exiting');
    this.openChangeHandler?.(false);
    this.exitTimer = setTimeout(() => this.finishExit(), AV_MODAL_EXIT_FALLBACK_MS);
  }

  /** Called when the container exit animation completes. */
  notifyExitAnimationEnd(): void {
    if (this.animationState() !== 'exiting') {
      return;
    }

    if (this.exitTimer) {
      clearTimeout(this.exitTimer);
      this.exitTimer = null;
    }

    this.finishExit();
  }

  dispose(): void {
    this.clearTimers();
    this.exitAnimationFinished = false;
    this.isOpen.set(false);
    this.isMounted.set(false);
    this.animationState.set('idle');
    this.triggerElement = null;
    this.contentConfig = null;
    this.contentTemplate.set(null);
    this.contentReady.set(false);
    this.openChangeHandler = null;
    this.closedHandler = null;
    this.detachOverlayHandler = null;
    this.restoreFocusHandler = null;
  }

  private finishExit(): void {
    if (this.exitAnimationFinished || this.animationState() !== 'exiting') {
      return;
    }

    this.exitAnimationFinished = true;
    this.isMounted.set(false);
    this.detachOverlayHandler?.();

    const result = this.closeResult;
    this.closeResult = undefined;
    this.animationState.set('idle');
    this.closedHandler?.(result);

    queueMicrotask(() => {
      this.restoreFocusHandler?.();
    });
  }

  private clearTimers(): void {
    if (this.enterTimer) {
      clearTimeout(this.enterTimer);
      this.enterTimer = null;
    }

    if (this.exitTimer) {
      clearTimeout(this.exitTimer);
      this.exitTimer = null;
    }
  }
}
