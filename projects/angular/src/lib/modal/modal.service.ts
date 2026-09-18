import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { filter, take } from 'rxjs/operators';

import { AvModalRef } from './modal-ref';
import { AvModalShellComponent } from './modal-shell.component';
import {
  AV_MODAL_CONFIG,
  AV_MODAL_CONTENT,
  AV_MODAL_DATA,
  AV_MODAL_REF,
  type AvModalConfig,
  type AvModalContent,
} from './modal.tokens';

@Injectable({ providedIn: 'root' })
export class AvModalService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);
  private readonly focusTrapFactory = inject(FocusTrapFactory);
  private readonly platformId = inject(PLATFORM_ID);

  /**
   * Opens a programmatic modal with custom component or template content.
   */
  open<T = unknown, D = unknown, R = unknown>(
    content: AvModalContent<T>,
    config: AvModalConfig<D> = {},
  ): AvModalRef<R> {
    const ref = new AvModalRef<R>();

    if (!isPlatformBrowser(this.platformId)) {
      queueMicrotask(() => ref._notifyClosed(undefined));
      return ref;
    }

    const overlayRef = this.overlay.create(this.createOverlayConfig());
    const focusTrap = this.attachShell(overlayRef, content, config, ref);

    this.bindOverlayDismiss(overlayRef, config, ref);
    this.disposeWhenClosed(overlayRef, focusTrap, ref);

    return ref;
  }

  private createOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.overlay.position().global().top('0').left('0'),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'av-modal-overlay-pane',
      width: '100%',
      height: '100%',
      disposeOnNavigation: true,
    });
  }

  private attachShell<T, D, R>(
    overlayRef: OverlayRef,
    content: AvModalContent<T>,
    config: AvModalConfig<D>,
    ref: AvModalRef<R>,
  ): FocusTrap {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: AV_MODAL_CONFIG, useValue: config },
        { provide: AV_MODAL_REF, useValue: ref },
        { provide: AV_MODAL_DATA, useValue: config.data },
        { provide: AV_MODAL_CONTENT, useValue: content },
      ],
    });

    const portal = new ComponentPortal(AvModalShellComponent, null, injector);
    overlayRef.attach(portal);

    const focusTrap = this.focusTrapFactory.create(overlayRef.overlayElement);
    queueMicrotask(() => {
      void focusTrap.focusInitialElementWhenReady();
    });

    return focusTrap;
  }

  private bindOverlayDismiss<D, R>(
    overlayRef: OverlayRef,
    config: AvModalConfig<D>,
    ref: AvModalRef<R>,
  ): void {
    const dismissable = config.dismissable ?? true;
    const keyboardDismissDisabled = config.keyboardDismissDisabled ?? false;

    if (dismissable) {
      overlayRef.backdropClick().subscribe(() => ref.close());
    }

    overlayRef
      .keydownEvents()
      .pipe(filter((event) => event.key === 'Escape'))
      .subscribe((event) => {
        if (keyboardDismissDisabled) {
          return;
        }

        event.preventDefault();
        ref.close();
      });
  }

  private disposeWhenClosed<R>(
    overlayRef: OverlayRef,
    focusTrap: FocusTrap,
    ref: AvModalRef<R>,
  ): void {
    ref
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        focusTrap.destroy();
        if (overlayRef.hasAttached()) {
          overlayRef.dispose();
        }
      });
  }
}
