import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  NgZone,
  untracked,
} from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AvSelectContext } from './select.context';
import type { AvSelectOpenOrigin } from './select.utils';
import { avSelectPlacementAxisFromConnection, avSelectTriggerClasses } from './select.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[av-select-trigger]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    type: 'button',
    role: 'combobox',
    'aria-haspopup': 'listbox',
    '[attr.aria-expanded]': 'context.isOpen()',
    '[attr.aria-controls]': 'context.isOpen() ? context.panelId() : null',
    '[attr.aria-disabled]': 'isDisabled() || null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'context.invalid() ? "true" : null',
    '[disabled]': 'isDisabled()',
    'data-slot': 'select-trigger',
    '(click)': 'onClick($event)',
    '(mousedown)': 'onMousedown($event)',
    '(keydown)': 'onKeydown($event)',
  },
})
export class AvSelectTriggerComponent {
  protected readonly context = inject(AvSelectContext);
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly overlay = inject(Overlay);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  /** Disables the trigger. */
  readonly disabled = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    avSelectTriggerClasses({ fullWidth: this.context.fullWidth() }),
  );

  protected readonly isDisabled = computed(
    () => this.disabled() || this.context.disabled(),
  );

  private overlayRef: OverlayRef | null = null;
  private portal: TemplatePortal | null = null;
  private closingActionsSub = Subscription.EMPTY;
  private positionSub = Subscription.EMPTY;
  private keydownSub = Subscription.EMPTY;
  private pendingOpenOrigin: AvSelectOpenOrigin = 'program';

  constructor() {
    this.context.registerTrigger(this.element.nativeElement);
    this.context.registerOverlayHandlers({
      detach: () => this.detachOverlay(),
      restoreFocus: () => this.focusTrigger(),
    });

    effect(() => {
      const visible = this.context.isVisible();
      const panelReady = this.context.panelReady();

      untracked(() => {
        if (visible && panelReady) {
          this.attachOverlay();
        } else if (!visible) {
          this.detachOverlay();
        }
      });
    });

    this.destroyRef.onDestroy(() => {
      this.closingActionsSub.unsubscribe();
      this.positionSub.unsubscribe();
      this.keydownSub.unsubscribe();
      this.overlayRef?.dispose();
      this.overlayRef = null;
    });
  }

  protected onMousedown(event: MouseEvent): void {
    if (event.button === 0) {
      this.pendingOpenOrigin = 'mouse';
    }
  }

  protected onClick(event: MouseEvent): void {
    if (this.isDisabled()) {
      return;
    }

    event.stopPropagation();
    this.toggle('mouse');
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.isDisabled()) {
      return;
    }

    const key = event.key;
    if (key !== 'Enter' && key !== ' ' && key !== 'ArrowDown' && key !== 'ArrowUp') {
      return;
    }

    event.preventDefault();
    this.pendingOpenOrigin = 'keyboard';
    this.openPanel('keyboard');
  }

  private toggle(origin: AvSelectOpenOrigin): void {
    if (this.context.isOpen()) {
      this.context.close('click');
      return;
    }

    if (!this.context.isClosing()) {
      this.openPanel(origin === 'mouse' ? this.pendingOpenOrigin : origin);
    }
  }

  private openPanel(origin: AvSelectOpenOrigin): void {
    if (!this.context.isClosing()) {
      this.context.open(origin);
    }
  }

  private attachOverlay(): void {
    const config = this.context.getPanelConfig();
    if (!config) {
      return;
    }

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create(this.createOverlayConfig(config));
      this.subscribePositionChanges(config);
      this.keydownSub = this.overlayRef.keydownEvents().subscribe((event) => {
        this.context.getListPanel()?.handleKeydown(event);
      });
    }

    if (this.overlayRef.hasAttached()) {
      this.updatePositionStrategy(config);
      return;
    }

    this.updatePositionStrategy(config);

    if (!this.portal || this.portal.templateRef !== config.templateRef) {
      this.portal = new TemplatePortal(config.templateRef, config.viewContainerRef);
    }

    this.overlayRef.attach(this.portal);
    this.closingActionsSub.unsubscribe();
    this.closingActionsSub = this.panelClosingActions().subscribe(() => {
      if (this.context.dismissable()) {
        this.context.close('click');
      }
    });
  }

  private detachOverlay(): void {
    this.closingActionsSub.unsubscribe();
    this.closingActionsSub = Subscription.EMPTY;

    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  private createOverlayConfig(
    config: NonNullable<ReturnType<AvSelectContext['getPanelConfig']>>,
  ): OverlayConfig {
    const width = this.context.triggerWidth() || undefined;

    return new OverlayConfig({
      positionStrategy: this.buildPositionStrategy(config),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'av-select-overlay-pane',
      width,
    });
  }

  private buildPositionStrategy(
    config: NonNullable<ReturnType<AvSelectContext['getPanelConfig']>>,
  ): FlexibleConnectedPositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.element)
      .withLockedPosition()
      .withGrowAfterOpen()
      .withPush(config.shouldFlip())
      .withViewportMargin(8)
      .withPositions(config.getPositions())
      .withTransformOriginOn('[data-slot="select-popover"]');
  }

  private updatePositionStrategy(
    config: NonNullable<ReturnType<AvSelectContext['getPanelConfig']>>,
  ): void {
    if (!this.overlayRef) {
      return;
    }

    const strategy = this.buildPositionStrategy(config);
    this.overlayRef.updatePositionStrategy(strategy);

    const width = this.context.triggerWidth() || undefined;
    if (width) {
      this.overlayRef.updateSize({ width });
    }

    this.subscribePositionChanges(config);
  }

  private subscribePositionChanges(
    config: NonNullable<ReturnType<AvSelectContext['getPanelConfig']>>,
  ): void {
    this.positionSub.unsubscribe();

    const strategy = this.overlayRef?.getConfig().positionStrategy;
    if (!(strategy instanceof FlexibleConnectedPositionStrategy)) {
      return;
    }

    this.positionSub = strategy.positionChanges.subscribe((change) => {
      this.ngZone.run(() => {
        if (this.context.isClosing()) {
          return;
        }

        config.setPlacementAxis(avSelectPlacementAxisFromConnection(change.connectionPair));
      });
    });
  }

  private panelClosingActions() {
    const overlayRef = this.overlayRef!;
    return merge(
      overlayRef.backdropClick(),
      overlayRef.detachments().pipe(filter(() => this.context.isOpen())),
    );
  }

  private focusTrigger(): void {
    this.element.nativeElement.focus();
  }
}
