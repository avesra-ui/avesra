import type { ConnectedPosition } from '@angular/cdk/overlay';
import { Injectable, TemplateRef, ViewContainerRef, signal } from '@angular/core';
import type { DateValue } from '@internationalized/date';

import { AvDateFieldContext } from '../date-field/date-field.context';
import type { AvDateFieldGranularity } from '../date-field/date-field.types';
import type { AvDateRangePickerValue } from './date-range-picker.types';
import type {
  AvDateRangePickerAnimationState,
  AvDateRangePickerCloseReason,
  AvDateRangePickerOpenOrigin,
  AvDateRangePickerPlacementAxis,
} from './date-range-picker.utils';
import {
  AV_DATE_RANGE_PICKER_ENTER_MS,
  AV_DATE_RANGE_PICKER_EXIT_MS,
} from './date-range-picker.utils';

/** Fallback when exit CSS animation does not fire (e.g. reduced motion). */
const EXIT_ANIMATION_FALLBACK_MS = AV_DATE_RANGE_PICKER_EXIT_MS + 50;

export interface AvDateRangePickerPanelConfig {
  templateRef: TemplateRef<unknown>;
  viewContainerRef: ViewContainerRef;
  getPositions: () => ConnectedPosition[];
  shouldFlip: () => boolean;
  setPlacementAxis: (axis: AvDateRangePickerPlacementAxis) => void;
}

@Injectable()
export class AvDateRangePickerContext {
  readonly isOpen = signal(false);
  readonly isVisible = signal(false);
  readonly animationState = signal<AvDateRangePickerAnimationState>('idle');
  readonly panelReady = signal(false);
  readonly panelId = signal<string | null>(null);
  readonly dismissable = signal(true);
  readonly keyboardDismissDisabled = signal(false);
  readonly disabled = signal(false);
  readonly readonly = signal(false);
  readonly invalid = signal(false);
  readonly closeOnSelect = signal(true);
  readonly granularity = signal<AvDateFieldGranularity>('day');

  readonly value = signal<AvDateRangePickerValue>(null);
  readonly minValue = signal<DateValue | null>(null);
  readonly maxValue = signal<DateValue | null>(null);
  readonly isDateUnavailable = signal<((date: DateValue) => boolean) | null>(null);
  readonly locale = signal('en-US');

  /** Independent date field contexts for start / end inputs. */
  readonly startField = new AvDateFieldContext();
  readonly endField = new AvDateFieldContext();

  private enterTimer: ReturnType<typeof setTimeout> | null = null;
  private exitTimer: ReturnType<typeof setTimeout> | null = null;
  private restoreFocusTimer: ReturnType<typeof setTimeout> | null = null;
  private exitAnimationFinished = false;
  private openChangeHandler: ((open: boolean) => void) | null = null;
  private valueChangeHandler: ((value: AvDateRangePickerValue) => void) | null = null;
  private touchedHandler: (() => void) | null = null;
  private triggerElement: HTMLElement | null = null;
  private panelConfig: AvDateRangePickerPanelConfig | null = null;
  private openedBy: AvDateRangePickerOpenOrigin = 'program';
  private closeReason: AvDateRangePickerCloseReason;
  private detachOverlayHandler: (() => void) | null = null;
  private restoreFocusHandler: ((origin: AvDateRangePickerOpenOrigin) => void) | null = null;

  registerOpenChange(handler: (open: boolean) => void): void {
    this.openChangeHandler = handler;
  }

  registerValueChange(handler: (value: AvDateRangePickerValue) => void): void {
    this.valueChangeHandler = handler;
  }

  registerTouched(handler: () => void): void {
    this.touchedHandler = handler;
  }

  registerTrigger(element: HTMLElement): void {
    this.triggerElement = element;
  }

  registerPanel(config: AvDateRangePickerPanelConfig): void {
    this.panelConfig = config;
    this.panelReady.set(true);
  }

  unregisterPanel(): void {
    this.panelConfig = null;
    this.panelReady.set(false);
  }

  registerPanelId(id: string): void {
    this.panelId.set(id);
  }

  unregisterPanelId(): void {
    this.panelId.set(null);
  }

  registerOverlayHandlers(handlers: {
    detach: () => void;
    restoreFocus: (origin: AvDateRangePickerOpenOrigin) => void;
  }): void {
    this.detachOverlayHandler = handlers.detach;
    this.restoreFocusHandler = handlers.restoreFocus;
  }

  getPanelConfig(): AvDateRangePickerPanelConfig | null {
    return this.panelConfig;
  }

  getTriggerElement(): HTMLElement | null {
    return this.triggerElement;
  }

  getOpenedBy(): AvDateRangePickerOpenOrigin {
    return this.openedBy;
  }

  getCloseReason(): AvDateRangePickerCloseReason {
    return this.closeReason;
  }

  setOpenedBy(origin: AvDateRangePickerOpenOrigin): void {
    this.openedBy = origin;
  }

  /** True while the overlay is still mounted during an exit animation. */
  isClosing(): boolean {
    return !this.isOpen() && this.isVisible();
  }

  open(origin: AvDateRangePickerOpenOrigin = 'program'): void {
    if (this.disabled() || this.readonly() || this.isClosing()) {
      return;
    }

    this.openedBy = origin;
    this.setOpen(true);
  }

  close(reason?: AvDateRangePickerCloseReason): void {
    this.closeReason = reason;
    this.setOpen(false);
  }

  setOpen(value: boolean): void {
    if (value) {
      if (this.isOpen() || this.disabled() || this.readonly()) {
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
        }
      }, AV_DATE_RANGE_PICKER_ENTER_MS);

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

  /**
   * Apply a complete range calendar selection to the picker value and optionally close.
   * Incomplete ranges are ignored; only complete ranges are committed.
   */
  notifyRangeCalendarSelection(range: AvDateRangePickerValue): void {
    if (!range?.start || !range?.end) {
      return;
    }

    this.value.set(range);
    this.valueChangeHandler?.(range);

    if (this.closeOnSelect() && this.granularity() === 'day') {
      this.close('selection');
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
    this.panelReady.set(false);
    this.panelId.set(null);
    this.openChangeHandler = null;
    this.valueChangeHandler = null;
    this.touchedHandler = null;
    this.detachOverlayHandler = null;
    this.restoreFocusHandler = null;
    this.value.set(null);
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
