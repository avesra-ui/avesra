import { Injectable, signal, TemplateRef, ViewContainerRef } from '@angular/core';

import type {
  AvDrawerAnimationState,
  AvDrawerBackdropVariant,
  AvDrawerCloseResult,
  AvDrawerPlacement,
} from './drawer.utils';
import { AV_DRAWER_ENTER_MS, AV_DRAWER_EXIT_FALLBACK_MS } from './drawer.utils';

export interface AvDrawerContentConfig {
  templateRef: TemplateRef<unknown>;
  viewContainerRef: ViewContainerRef;
}

@Injectable()
export class AvDrawerContext {
  readonly isOpen = signal(false);
  readonly isMounted = signal(false);
  readonly animationState = signal<AvDrawerAnimationState>('idle');
  readonly contentReady = signal(false);
  readonly contentTemplate = signal<TemplateRef<unknown> | null>(null);

  readonly placement = signal<AvDrawerPlacement>('bottom');
  readonly backdropVariant = signal<AvDrawerBackdropVariant>('opaque');
  readonly dismissable = signal(true);
  readonly keyboardDismissDisabled = signal(false);

  private openChangeHandler: ((open: boolean) => void) | null = null;
  private closedHandler: ((result: AvDrawerCloseResult) => void) | null = null;
  private enterTimer: ReturnType<typeof setTimeout> | null = null;
  private exitTimer: ReturnType<typeof setTimeout> | null = null;
  private exitAnimationFinished = false;
  private triggerElement: HTMLElement | null = null;
  private contentConfig: AvDrawerContentConfig | null = null;
  private closeResult: AvDrawerCloseResult;
  private detachOverlayHandler: (() => void) | null = null;
  private restoreFocusHandler: (() => void) | null = null;

  registerOpenChange(handler: (open: boolean) => void): void {
    this.openChangeHandler = handler;
  }

  registerClosed(handler: (result: AvDrawerCloseResult) => void): void {
    this.closedHandler = handler;
  }

  setTriggerElement(element: HTMLElement | null): void {
    this.triggerElement = element;
  }

  getTriggerElement(): HTMLElement | null {
    return this.triggerElement;
  }

  registerContent(config: AvDrawerContentConfig): void {
    this.contentConfig = config;
    this.contentTemplate.set(config.templateRef);
    this.contentReady.set(true);
  }

  unregisterContent(): void {
    this.contentConfig = null;
    this.contentTemplate.set(null);
    this.contentReady.set(false);
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

  close(result?: AvDrawerCloseResult): void {
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
      }, AV_DRAWER_ENTER_MS);
      this.openChangeHandler?.(true);
      return;
    }

    this.isOpen.set(false);
    this.openChangeHandler?.(false);

    // Paint the open frame before starting the slide-out animation.
    requestAnimationFrame(() => {
      if (!this.isMounted()) {
        return;
      }

      this.animationState.set('exiting');
      this.exitTimer = setTimeout(() => this.finishExit(), AV_DRAWER_EXIT_FALLBACK_MS);
    });
  }

  /** Called when the panel exit animation/transition completes. */
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
