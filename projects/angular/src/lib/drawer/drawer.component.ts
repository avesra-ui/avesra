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

import { AvDrawerContext } from './drawer.context';
import {
  avDrawerContentClasses,
  avDrawerResolveBackdropClasses,
} from './drawer.utils';
import type {
  AvDrawerBackdropVariant,
  AvDrawerPlacement,
} from './drawer.utils';

@Component({
  selector: 'av-drawer',
  imports: [NgTemplateOutlet],
  template: `
    <ng-content />

    <ng-template #overlayShell>
      <div
        [class]="backdropClasses()"
        [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
        data-slot="drawer-backdrop"
        aria-hidden="true"
      ></div>
      <div
        [class]="contentClasses()"
        [attr.data-placement]="placement()"
        [attr.data-entering]="animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="animationState() === 'exiting' ? 'true' : null"
        data-slot="drawer-content"
        (animationend)="onPanelAnimationEnd($event)"
        (transitionend)="onPanelTransitionEnd($event)"
      >
        @if (contentTemplate(); as content) {
          <ng-container *ngTemplateOutlet="content" />
        }
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'drawer-root',
  },
  providers: [AvDrawerContext],
})
export class AvDrawerComponent {
  private readonly context = inject(AvDrawerContext);
  private readonly overlay = inject(Overlay);
  private readonly focusTrapFactory = inject(FocusTrapFactory);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private readonly overlayShell = viewChild.required<TemplateRef<unknown>>('overlayShell');

  /** Controls whether the drawer is open. Supports two-way binding with `[(open)]`. */
  readonly open = model(false);

  /** Whether clicking the backdrop closes the drawer. Defaults to true. */
  readonly dismissable = input(true, { transform: booleanAttribute });

  /** Whether pressing Escape is ignored. Defaults to false (Escape closes). */
  readonly keyboardDismissDisabled = input(false, {
    alias: 'keyboard-dismiss-disabled',
    transform: booleanAttribute,
  });

  /** Edge the drawer slides from. */
  readonly placement = input<AvDrawerPlacement>('bottom');

  /** Backdrop visual variant. */
  readonly backdrop = input<AvDrawerBackdropVariant>('opaque');

  /**
   * Extra CSS classes applied to the visual backdrop element
   * (merged after the variant BEM classes; custom bg utilities replace the default tint).
   */
  readonly backdropClass = input('', { alias: 'backdrop-class' });

  /**
   * Extra CSS classes applied to the content positioning wrapper
   * (merged after the BEM classes).
   */
  readonly contentClass = input('', { alias: 'content-class' });

  protected readonly animationState = computed(() => this.context.animationState());

  protected readonly contentTemplate = computed(() => this.context.contentTemplate());

  protected readonly backdropClasses = computed(() =>
    avDrawerResolveBackdropClasses(this.backdrop(), this.backdropClass()).join(' '),
  );

  protected readonly contentClasses = computed(() =>
    avDrawerContentClasses({
      placement: this.placement(),
      className: this.contentClass(),
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
      const backdrop = this.backdrop();

      untracked(() => {
        if (open !== this.context.isOpen()) {
          this.context.setOpen(open);
        }
        this.context.dismissable.set(dismissable);
        this.context.keyboardDismissDisabled.set(keyboardDismissDisabled);
        this.context.placement.set(placement);
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

  protected onPanelAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (target?.classList.contains('av-drawer__dialog')) {
      this.context.notifyExitAnimationEnd();
    }
  }

  protected onPanelTransitionEnd(event: TransitionEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (
      target?.classList.contains('av-drawer__dialog') &&
      (event.propertyName === 'translate' || event.propertyName === 'transform')
    ) {
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
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'av-drawer-overlay-pane',
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
