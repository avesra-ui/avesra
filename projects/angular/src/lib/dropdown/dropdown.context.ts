import type { ConnectedPosition } from '@angular/cdk/overlay';
import { Injectable, signal, TemplateRef, ViewContainerRef } from '@angular/core';

import type {
  AvDropdownAnimationState,
  AvDropdownCloseReason,
  AvDropdownOpenOrigin,
  AvDropdownPlacementAxis,
} from './dropdown.utils';
import { AV_DROPDOWN_ENTER_MS, AV_DROPDOWN_EXIT_MS } from './dropdown.utils';

/** Fallback when exit CSS animation does not fire (e.g. reduced motion). */
const EXIT_ANIMATION_FALLBACK_MS = AV_DROPDOWN_EXIT_MS + 50;

export interface AvDropdownPanelConfig {
  templateRef: TemplateRef<unknown>;
  viewContainerRef: ViewContainerRef;
  getPositions: () => ConnectedPosition[];
  shouldFlip: () => boolean;
  setPlacementAxis: (axis: AvDropdownPlacementAxis) => void;
}

export interface AvDropdownMenuPanel {
  readonly panelId: string;
  focusFirstItem: (origin: AvDropdownOpenOrigin) => void;
  resetActiveItem: () => void;
  handleKeydown: (event: KeyboardEvent) => void;
}

@Injectable()
export class AvDropdownContext {
  readonly isOpen = signal(false);
  readonly isVisible = signal(false);
  readonly animationState = signal<AvDropdownAnimationState>('idle');
  readonly panelReady = signal(false);
  readonly panelId = signal<string | null>(null);
  readonly dismissable = signal(true);
  readonly keyboardDismissDisabled = signal(false);

  private enterTimer: ReturnType<typeof setTimeout> | null = null;
  private exitTimer: ReturnType<typeof setTimeout> | null = null;
  private restoreFocusTimer: ReturnType<typeof setTimeout> | null = null;
  private exitAnimationFinished = false;
  private openChangeHandler: ((open: boolean) => void) | null = null;
  private triggerElement: HTMLElement | null = null;
  private panelConfig: AvDropdownPanelConfig | null = null;
  private menuPanel: AvDropdownMenuPanel | null = null;
  private openedBy: AvDropdownOpenOrigin = 'program';
  private closeReason: AvDropdownCloseReason;
  private detachOverlayHandler: (() => void) | null = null;
  private restoreFocusHandler: ((origin: AvDropdownOpenOrigin) => void) | null = null;

  registerOpenChange(handler: (open: boolean) => void): void {
    this.openChangeHandler = handler;
  }

  registerTrigger(element: HTMLElement): void {
    this.triggerElement = element;
  }

  registerPanel(config: AvDropdownPanelConfig): void {
    this.panelConfig = config;
    this.panelReady.set(true);
  }

  unregisterPanel(): void {
    this.panelConfig = null;
    this.panelReady.set(false);
  }

  registerMenu(menu: AvDropdownMenuPanel): void {
    this.menuPanel = menu;
    this.panelId.set(menu.panelId);
  }

  unregisterMenu(): void {
    if (this.menuPanel) {
      this.panelId.set(null);
    }
    this.menuPanel = null;
  }

  registerOverlayHandlers(handlers: {
    detach: () => void;
    restoreFocus: (origin: AvDropdownOpenOrigin) => void;
  }): void {
    this.detachOverlayHandler = handlers.detach;
    this.restoreFocusHandler = handlers.restoreFocus;
  }

  getPanelConfig(): AvDropdownPanelConfig | null {
    return this.panelConfig;
  }

  getMenuPanel(): AvDropdownMenuPanel | null {
    return this.menuPanel;
  }

  getTriggerElement(): HTMLElement | null {
    return this.triggerElement;
  }

  getOpenedBy(): AvDropdownOpenOrigin {
    return this.openedBy;
  }

  getCloseReason(): AvDropdownCloseReason {
    return this.closeReason;
  }

  setOpenedBy(origin: AvDropdownOpenOrigin): void {
    this.openedBy = origin;
  }

  isClosing(): boolean {
    return !this.isOpen() && this.isVisible();
  }

  open(origin: AvDropdownOpenOrigin = 'program'): void {
    if (this.isClosing()) {
      return;
    }

    this.openedBy = origin;
    this.setOpen(true);
  }

  close(reason?: AvDropdownCloseReason): void {
    this.closeReason = reason;
    this.setOpen(false);
  }

  setOpen(value: boolean): void {
    if (value) {
      if (this.isOpen()) {
        return;
      }

      this.clearTimers();
      this.exitAnimationFinished = false;
      this.closeReason = undefined;
      this.isOpen.set(true);
      this.isVisible.set(true);
      this.animationState.set('entering');

      this.enterTimer = setTimeout(() => {
        if (this.isOpen()) {
          this.animationState.set('idle');
          this.menuPanel?.focusFirstItem(this.openedBy);
        }
      }, AV_DROPDOWN_ENTER_MS);

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
    this.menuPanel?.resetActiveItem();
    this.openChangeHandler?.(false);

    this.exitTimer = setTimeout(() => this.finishExit(), EXIT_ANIMATION_FALLBACK_MS);
  }

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
    this.panelConfig = null;
    this.menuPanel = null;
    this.panelReady.set(false);
    this.panelId.set(null);
    this.openChangeHandler = null;
    this.detachOverlayHandler = null;
    this.restoreFocusHandler = null;
  }

  private finishExit(): void {
    if (this.exitAnimationFinished || this.animationState() !== 'exiting') {
      return;
    }

    this.exitAnimationFinished = true;
    this.isVisible.set(false);
    this.detachOverlayHandler?.();

    const reason = this.closeReason;
    const openedBy = this.openedBy;
    const shouldRestore =
      reason === 'keydown' || reason === 'tab' || openedBy !== 'mouse';

    this.animationState.set('idle');
    this.openedBy = 'program';
    this.closeReason = undefined;

    // Restore after detach so the browser does not move focus to <body> when the overlay unmounts.
    if (shouldRestore) {
      this.restoreFocusTimer = setTimeout(() => {
        this.restoreFocusTimer = null;
        this.restoreFocusHandler?.(openedBy);
      });
    }
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

    if (this.restoreFocusTimer !== null) {
      clearTimeout(this.restoreFocusTimer);
      this.restoreFocusTimer = null;
    }
  }
}
