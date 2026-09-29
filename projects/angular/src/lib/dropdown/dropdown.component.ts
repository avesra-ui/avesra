import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  model,
  NgZone,
  TemplateRef,
  untracked,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AvDropdownContext } from './dropdown.context';
import {
  AV_DROPDOWN_OFFSET_DEFAULT,
  avDropdownClasses,
  avDropdownPlacementAxisFromConnection,
  avDropdownPositions,
} from './dropdown.utils';
import type { AvDropdownPlacement } from './dropdown.utils';

@Component({
  selector: 'av-dropdown',
  imports: [NgTemplateOutlet],
  template: `
    <ng-content />

    <ng-template #overlayShell>
      @if (contentTemplate(); as content) {
        <ng-container *ngTemplateOutlet="content" />
      }
    </ng-template>
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'dropdown-root',
  },
  providers: [AvDropdownContext],
})
export class AvDropdownComponent {
  private readonly context = inject(AvDropdownContext);
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private readonly overlayShell = viewChild.required<TemplateRef<unknown>>('overlayShell');

  /** Controls whether the dropdown is open. Supports two-way binding with `[(open)]`. */
  readonly open = model(false);

  /** Closes the dropdown when clicking outside. */
  readonly dismissable = input(true, { transform: booleanAttribute });

  /** Disables closing via the Escape key. */
  readonly keyboardDismissDisabled = input(false, {
    alias: 'keyboard-dismiss-disabled',
    transform: booleanAttribute,
  });

  /** Preferred placement relative to the trigger. */
  readonly placement = input<AvDropdownPlacement>('bottom');

  /** Distance between trigger and menu in pixels. */
  readonly offset = input(AV_DROPDOWN_OFFSET_DEFAULT);

  /** Whether the menu can flip to fit the viewport. */
  readonly shouldFlip = input(true, { alias: 'should-flip', transform: booleanAttribute });

  protected readonly classes = computed(() => avDropdownClasses());

  protected readonly contentTemplate = computed(() => this.context.contentTemplate());

  private overlayRef: OverlayRef | null = null;
  private portal: TemplatePortal | null = null;
  private closingActionsSub = Subscription.EMPTY;
  private positionSub = Subscription.EMPTY;
  private keydownSub = Subscription.EMPTY;

  constructor() {
    this.context.registerOpenChange((value) => {
      if (this.open() !== value) {
        this.open.set(value);
      }
    });

    this.context.registerOverlayHandlers({
      detach: () => this.detachOverlay(),
      restoreFocus: () => this.focusTrigger(),
    });

    effect(() => {
      const open = this.open();
      const dismissable = this.dismissable();
      const keyboardDismissDisabled = this.keyboardDismissDisabled();
      const placement = this.placement();
      const offset = this.offset();
      const shouldFlip = this.shouldFlip();

      untracked(() => {
        if (open && !this.context.isOpen()) {
          this.context.open('program');
        } else if (!open && this.context.isOpen()) {
          this.context.close();
        }

        this.context.dismissable.set(dismissable);
        this.context.keyboardDismissDisabled.set(keyboardDismissDisabled);
        this.context.placement.set(placement);
        this.context.offset.set(offset);
        this.context.shouldFlip.set(shouldFlip);
      });
    });

    effect(() => {
      const visible = this.context.isVisible();
      const contentReady = this.context.contentReady();
      const placement = this.placement();
      const offset = this.offset();
      const shouldFlip = this.shouldFlip();

      untracked(() => {
        this.context.placement.set(placement);
        this.context.offset.set(offset);
        this.context.shouldFlip.set(shouldFlip);

        if (visible && contentReady) {
          this.attachOverlay();
          return;
        }

        if (!visible) {
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
      this.context.dispose();
    });
  }

  private attachOverlay(): void {
    const trigger = this.context.getTriggerElement();
    if (!trigger) {
      return;
    }

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create(this.createOverlayConfig(trigger));
      this.subscribePositionChanges();
      this.keydownSub = this.overlayRef.keydownEvents().subscribe((event) => {
        this.context.getMenuPanel()?.handleKeydown(event);
      });
    }

    if (this.overlayRef.hasAttached()) {
      this.updatePositionStrategy(trigger);
      return;
    }

    this.updatePositionStrategy(trigger);
    this.portal = new TemplatePortal(this.overlayShell(), this.viewContainerRef);
    this.overlayRef.attach(this.portal);
    this.closingActionsSub.unsubscribe();
    this.closingActionsSub = this.menuClosingActions().subscribe(() => {
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

  private createOverlayConfig(trigger: HTMLElement): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.buildPositionStrategy(trigger),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'av-dropdown-overlay-pane',
    });
  }

  private buildPositionStrategy(trigger: HTMLElement): FlexibleConnectedPositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(trigger)
      .withLockedPosition()
      .withGrowAfterOpen()
      .withPush(this.context.shouldFlip())
      .withViewportMargin(8)
      .withPositions(avDropdownPositions(this.context.placement(), this.context.offset()))
      .withTransformOriginOn('[data-slot="dropdown-popover"]');
  }

  private updatePositionStrategy(trigger: HTMLElement): void {
    if (!this.overlayRef) {
      return;
    }

    const strategy = this.buildPositionStrategy(trigger);
    this.overlayRef.updatePositionStrategy(strategy);
    this.subscribePositionChanges();
  }

  private subscribePositionChanges(): void {
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

        this.context.placementAxis.set(
          avDropdownPlacementAxisFromConnection(change.connectionPair),
        );
      });
    });
  }

  private menuClosingActions() {
    const overlayRef = this.overlayRef!;
    return merge(
      overlayRef.backdropClick(),
      overlayRef.detachments().pipe(filter(() => this.context.isOpen())),
    );
  }

  private focusTrigger(): void {
    this.context.getTriggerElement()?.focus();
  }
}
