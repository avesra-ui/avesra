import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
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
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AvAlertDialogContext } from './alert-dialog.context';
import {
  avAlertDialogContainerClasses,
  avAlertDialogResolveBackdropClasses,
} from './alert-dialog.utils';
import type {
  AvAlertDialogBackdropVariant,
  AvAlertDialogPlacement,
  AvAlertDialogScroll,
  AvAlertDialogSize,
} from './alert-dialog.utils';

@Component({
  selector: 'av-alert-dialog',
  imports: [NgTemplateOutlet],
  template: `
    <ng-content />

    <ng-template #overlayShell>
      <div
        [class]="backdropClasses()"
        [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
        data-slot="alert-dialog-backdrop"
        aria-hidden="true"
      ></div>
      <div
        [class]="containerClasses()"
        [attr.data-placement]="placement()"
        [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
        data-slot="alert-dialog-container"
        (animationend)="onContainerAnimationEnd($event)"
      >
        @if (contentTemplate(); as content) {
          <ng-container *ngTemplateOutlet="content" />
        }
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'alert-dialog-root',
  },
  providers: [AvAlertDialogContext],
})
export class AvAlertDialogComponent {
  private readonly context = inject(AvAlertDialogContext);
  private readonly overlay = inject(Overlay);
  private readonly focusTrapFactory = inject(FocusTrapFactory);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private readonly overlayShell = viewChild.required<TemplateRef<unknown>>('overlayShell');

  /** Controls whether the alert dialog is open. Supports two-way binding with `[(open)]`. */
  readonly open = model(false);

  /**
   * Whether clicking the backdrop closes the alert dialog.
   * Defaults to false — alert dialogs typically require explicit action.
   */
  readonly dismissable = input(false, { transform: booleanAttribute });

  /**
   * Whether pressing Escape closes the alert dialog.
   * Defaults to true (disabled) — alert dialogs typically require explicit action.
   */
  readonly keyboardDismissDisabled = input(true, {
    alias: 'keyboard-dismiss-disabled',
    transform: booleanAttribute,
  });

  /** Alert dialog position on screen. */
  readonly placement = input<AvAlertDialogPlacement>('auto');

  /** Scroll behavior for long content. */
  readonly scroll = input<AvAlertDialogScroll>('inside');

  /** Maximum width / layout preset. */
  readonly size = input<AvAlertDialogSize>('md');

  /** Backdrop visual variant. */
  readonly backdrop = input<AvAlertDialogBackdropVariant>('opaque');

  /**
   * Extra CSS classes applied to the visual backdrop element
   * (merged after the variant BEM classes; custom bg utilities replace the default tint).
   */
  readonly backdropClass = input('', { alias: 'backdrop-class' });

  /**
   * Extra CSS classes applied to the overlay container
   * (merged after the BEM classes — use for custom enter/exit motion).
   */
  readonly containerClass = input('', { alias: 'container-class' });

  protected readonly animationState = computed(() => this.context.animationState());

  protected readonly contentTemplate = computed(() => this.context.contentTemplate());

  protected readonly backdropClasses = computed(() =>
    avAlertDialogResolveBackdropClasses(this.backdrop(), this.backdropClass()).join(' '),
  );

  protected readonly containerClasses = computed(() =>
    avAlertDialogContainerClasses({
      scroll: this.scroll(),
      className: this.containerClass(),
    }),
  );

  private overlayRef: OverlayRef | null = null;
  private portal: TemplatePortal | null = null;
  private focusTrap: FocusTrap | null = null;
  private closingActionsSub = Subscription.EMPTY;
  private keydownSub = Subscription.EMPTY;

  constructor() {
    this.context.registerOpenChange((value) => {
      if (this.open() !== value) {
        this.open.set(value);
      }
    });

    this.context.registerOverlayHandlers({
      detach: () => this.disposeOverlay(),
      restoreFocus: () => this.restoreTriggerFocus(),
    });

    effect(() => {
      const open = this.open();
      const dismissable = this.dismissable();
      const keyboardDismissDisabled = this.keyboardDismissDisabled();
      const placement = this.placement();
      const scroll = this.scroll();
      const size = this.size();
      const backdrop = this.backdrop();

      untracked(() => {
        if (open !== this.context.isOpen()) {
          this.context.setOpen(open);
        }
        this.context.dismissable.set(dismissable);
        this.context.keyboardDismissDisabled.set(keyboardDismissDisabled);
        this.context.placement.set(placement);
        this.context.scroll.set(scroll);
        this.context.size.set(size);
        this.context.backdropVariant.set(backdrop);
      });
    });

    effect(() => {
      const mounted = this.context.isMounted();
      const contentReady = this.context.contentReady();

      untracked(() => {
        if (mounted && contentReady) {
          this.attachOverlay();
          return;
        }

        if (!mounted) {
          this.disposeOverlay();
        }
      });
    });

    this.destroyRef.onDestroy(() => {
      this.disposeOverlay();
      this.context.dispose();
    });
  }

  protected onContainerAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    if (event.target === event.currentTarget) {
      this.context.notifyExitAnimationEnd();
    }
  }

  private attachOverlay(): void {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create(this.createOverlayConfig());
      this.subscribeClosingActions();
      this.subscribeKeydown();
    }

    if (this.overlayRef.hasAttached()) {
      return;
    }

    this.portal = new TemplatePortal(this.overlayShell(), this.viewContainerRef);
    this.overlayRef.attach(this.portal);
    this.createFocusTrap();
  }

  /**
   * Fully dispose the overlay after exit animation.
   * Reusing a detached OverlayRef leaves CDK BackdropRef mid-transition (up to 500ms),
   * which causes a visible jump on the next close cycle.
   */
  private disposeOverlay(): void {
    this.destroyFocusTrap();
    this.closingActionsSub.unsubscribe();
    this.closingActionsSub = Subscription.EMPTY;
    this.keydownSub.unsubscribe();
    this.keydownSub = Subscription.EMPTY;

    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }

    this.portal = null;
  }

  private createOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.overlay.position().global().top('0').left('0'),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      // Invisible click-catcher — visual painting lives on the portal backdrop node.
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'av-alert-dialog-overlay-pane',
      width: '100%',
      height: '100%',
      disposeOnNavigation: true,
    });
  }

  private subscribeClosingActions(): void {
    if (!this.overlayRef) {
      return;
    }

    this.closingActionsSub.unsubscribe();
    this.closingActionsSub = this.overlayRef.backdropClick().subscribe(() => {
      this.ngZone.run(() => {
        if (this.context.dismissable()) {
          this.context.close();
        }
      });
    });
  }

  private subscribeKeydown(): void {
    if (!this.overlayRef) {
      return;
    }

    this.keydownSub.unsubscribe();
    this.keydownSub = this.overlayRef
      .keydownEvents()
      .pipe(filter((event) => event.key === 'Escape'))
      .subscribe((event) => {
        this.ngZone.run(() => {
          if (!this.context.isOpen() || this.context.keyboardDismissDisabled()) {
            return;
          }

          event.preventDefault();
          this.context.close();
        });
      });
  }

  private createFocusTrap(): void {
    this.destroyFocusTrap();

    const pane = this.overlayRef?.overlayElement;
    if (!pane) {
      return;
    }

    this.focusTrap = this.focusTrapFactory.create(pane);
    queueMicrotask(() => {
      this.focusTrap?.focusInitialElementWhenReady();
    });
  }

  private destroyFocusTrap(): void {
    this.focusTrap?.destroy();
    this.focusTrap = null;
  }

  private restoreTriggerFocus(): void {
    const trigger = this.context.getTriggerElement();
    trigger?.focus({ preventScroll: true });
  }
}
