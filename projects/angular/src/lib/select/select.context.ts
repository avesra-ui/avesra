import type { ConnectedPosition } from '@angular/cdk/overlay';
import { Injectable, TemplateRef, ViewContainerRef, computed, signal } from '@angular/core';

import type {
  AvSelectAnimationState,
  AvSelectCloseReason,
  AvSelectOpenOrigin,
  AvSelectPlacementAxis,
  AvSelectSelectionMode,
} from './select.utils';
import { AV_SELECT_ENTER_MS, AV_SELECT_EXIT_MS } from './select.utils';

/** Fallback when exit CSS animation does not fire (e.g. reduced motion). */
const EXIT_ANIMATION_FALLBACK_MS = AV_SELECT_EXIT_MS + 50;

export interface AvSelectPanelConfig {
  templateRef: TemplateRef<unknown>;
  viewContainerRef: ViewContainerRef;
  getPositions: () => ConnectedPosition[];
  shouldFlip: () => boolean;
  setPlacementAxis: (axis: AvSelectPlacementAxis) => void;
}

export interface AvSelectListPanel {
  readonly panelId: string;
  focusList: (origin: AvSelectOpenOrigin) => void;
  handleKeydown: (event: KeyboardEvent) => void;
}

@Injectable()
export class AvSelectContext {
  readonly isOpen = signal(false);
  readonly isVisible = signal(false);
  readonly animationState = signal<AvSelectAnimationState>('idle');
  readonly panelReady = signal(false);
  readonly panelId = signal<string | null>(null);
  readonly dismissable = signal(true);
  readonly keyboardDismissDisabled = signal(false);
  readonly disabled = signal(false);
  readonly invalid = signal(false);
  readonly fullWidth = signal(false);
  readonly placeholder = signal('Select…');
  readonly selectionMode = signal<AvSelectSelectionMode>('single');
  readonly selectedKeys = signal<string[]>([]);
  readonly triggerWidth = signal(0);

  private readonly itemLabels = signal<ReadonlyMap<string, string>>(new Map());

  readonly displayValue = computed(() => {
    const keys = this.selectedKeys();
    if (keys.length === 0) {
      return '';
    }

    const labels = this.itemLabels();
    return keys.map((key) => labels.get(key) ?? key).join(', ');
  });

  readonly isPlaceholder = computed(() => this.selectedKeys().length === 0);

  private enterTimer: ReturnType<typeof setTimeout> | null = null;
  private exitTimer: ReturnType<typeof setTimeout> | null = null;
  private restoreFocusTimer: ReturnType<typeof setTimeout> | null = null;
  private exitAnimationFinished = false;
  private openChangeHandler: ((open: boolean) => void) | null = null;
  private selectedKeysChangeHandler: ((keys: string[]) => void) | null = null;
  private touchedHandler: (() => void) | null = null;
  private triggerElement: HTMLElement | null = null;
  private panelConfig: AvSelectPanelConfig | null = null;
  private listPanel: AvSelectListPanel | null = null;
  private openedBy: AvSelectOpenOrigin = 'program';
  private closeReason: AvSelectCloseReason;
  private detachOverlayHandler: (() => void) | null = null;
  private restoreFocusHandler: ((origin: AvSelectOpenOrigin) => void) | null = null;

  registerOpenChange(handler: (open: boolean) => void): void {
    this.openChangeHandler = handler;
  }

  registerSelectedKeysChange(handler: (keys: string[]) => void): void {
    this.selectedKeysChangeHandler = handler;
  }

  registerTouched(handler: () => void): void {
    this.touchedHandler = handler;
  }

  registerTrigger(element: HTMLElement): void {
    this.triggerElement = element;
  }

  registerPanel(config: AvSelectPanelConfig): void {
    this.panelConfig = config;
    this.panelReady.set(true);
  }

  unregisterPanel(): void {
    this.panelConfig = null;
    this.panelReady.set(false);
  }

  registerListPanel(panel: AvSelectListPanel): void {
    this.listPanel = panel;
    this.panelId.set(panel.panelId);
  }

  unregisterListPanel(): void {
    if (this.listPanel) {
      this.panelId.set(null);
    }
    this.listPanel = null;
  }

  registerOverlayHandlers(handlers: {
    detach: () => void;
    restoreFocus: (origin: AvSelectOpenOrigin) => void;
  }): void {
    this.detachOverlayHandler = handlers.detach;
    this.restoreFocusHandler = handlers.restoreFocus;
  }

  getPanelConfig(): AvSelectPanelConfig | null {
    return this.panelConfig;
  }

  getListPanel(): AvSelectListPanel | null {
    return this.listPanel;
  }

  getTriggerElement(): HTMLElement | null {
    return this.triggerElement;
  }

  getOpenedBy(): AvSelectOpenOrigin {
    return this.openedBy;
  }

  getCloseReason(): AvSelectCloseReason {
    return this.closeReason;
  }

  setOpenedBy(origin: AvSelectOpenOrigin): void {
    this.openedBy = origin;
  }

  registerItemLabel(id: string, label: string): void {
    const next = new Map(this.itemLabels());
    next.set(id, label);
    this.itemLabels.set(next);
  }

  clearItemLabels(): void {
    this.itemLabels.set(new Map());
  }

  /** Replace all labels; no-op when content is unchanged (avoids afterRender CD loops). */
  replaceItemLabels(labels: ReadonlyMap<string, string>): void {
    const current = this.itemLabels();
    if (current.size === labels.size) {
      let same = true;
      for (const [key, value] of labels) {
        if (current.get(key) !== value) {
          same = false;
          break;
        }
      }
      if (same) {
        return;
      }
    }

    this.itemLabels.set(new Map(labels));
  }

  /** True while the overlay is still mounted during an exit animation. */
  isClosing(): boolean {
    return !this.isOpen() && this.isVisible();
  }

  open(origin: AvSelectOpenOrigin = 'program'): void {
    if (this.disabled() || this.isClosing()) {
      return;
    }

    this.openedBy = origin;
    this.updateTriggerWidth();
    this.setOpen(true);
  }

  close(reason?: AvSelectCloseReason): void {
    this.closeReason = reason;
    this.setOpen(false);
  }

  setOpen(value: boolean): void {
    if (value) {
      if (this.isOpen() || this.disabled()) {
        return;
      }

      this.clearTimers();
      this.exitAnimationFinished = false;
      this.closeReason = undefined;
      this.updateTriggerWidth();
      this.isOpen.set(true);
      this.isVisible.set(true);
      this.animationState.set('entering');

      this.enterTimer = setTimeout(() => {
        if (this.isOpen()) {
          this.animationState.set('idle');
          this.listPanel?.focusList(this.openedBy);
        }
      }, AV_SELECT_ENTER_MS);

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
    this.touchedHandler?.();

    this.exitTimer = setTimeout(() => this.finishExit(), EXIT_ANIMATION_FALLBACK_MS);
  }

  setSelectedKeys(keys: string[], options: { emit?: boolean } = {}): void {
    const next = [...keys];
    const current = this.selectedKeys();

    if (this.arraysEqual(current, next)) {
      return;
    }

    this.selectedKeys.set(next);

    if (options.emit !== false) {
      this.selectedKeysChangeHandler?.(next);
    }
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
    this.listPanel = null;
    this.panelReady.set(false);
    this.panelId.set(null);
    this.openChangeHandler = null;
    this.selectedKeysChangeHandler = null;
    this.touchedHandler = null;
    this.detachOverlayHandler = null;
    this.restoreFocusHandler = null;
    this.itemLabels.set(new Map());
    this.selectedKeys.set([]);
    this.triggerWidth.set(0);
  }

  private updateTriggerWidth(): void {
    const width = this.triggerElement?.offsetWidth ?? 0;
    this.triggerWidth.set(width);
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
      reason === 'keydown' || reason === 'tab' || reason === 'selection' || openedBy !== 'mouse';

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

  private arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }

    return a.every((value, index) => value === b[index]);
  }
}
