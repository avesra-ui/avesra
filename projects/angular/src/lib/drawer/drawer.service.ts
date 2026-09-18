import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { filter, take } from 'rxjs/operators';

import { AvDrawerRef } from './drawer-ref';
import { AvDrawerShellComponent } from './drawer-shell.component';
import {
  AV_DRAWER_CONFIG,
  AV_DRAWER_CONTENT,
  AV_DRAWER_DATA,
  AV_DRAWER_REF,
  type AvDrawerConfig,
  type AvDrawerContent,
} from './drawer.tokens';

@Injectable({ providedIn: 'root' })
export class AvDrawerService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);
  private readonly focusTrapFactory = inject(FocusTrapFactory);
  private readonly platformId = inject(PLATFORM_ID);

  /**
   * Opens a programmatic drawer with custom component or template content.
   */
  open<T = unknown, D = unknown, R = unknown>(
    content: AvDrawerContent<T>,
    config: AvDrawerConfig<D> = {},
  ): AvDrawerRef<R> {
    const ref = new AvDrawerRef<R>();

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
      panelClass: 'av-drawer-overlay-pane',
      width: '100%',
      height: '100%',
      disposeOnNavigation: true,
    });
  }

  private attachShell<T, D, R>(
    overlayRef: OverlayRef,
    content: AvDrawerContent<T>,
    config: AvDrawerConfig<D>,
    ref: AvDrawerRef<R>,
  ): FocusTrap {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: AV_DRAWER_CONFIG, useValue: config },
        { provide: AV_DRAWER_REF, useValue: ref },
        { provide: AV_DRAWER_DATA, useValue: config.data },
        { provide: AV_DRAWER_CONTENT, useValue: content },
      ],
    });

    const portal = new ComponentPortal(AvDrawerShellComponent, null, injector);
    overlayRef.attach(portal);

    const focusTrap = this.focusTrapFactory.create(overlayRef.overlayElement);
    queueMicrotask(() => {
      void focusTrap.focusInitialElementWhenReady();
    });

    return focusTrap;
  }

  private bindOverlayDismiss<D, R>(
    overlayRef: OverlayRef,
    config: AvDrawerConfig<D>,
    ref: AvDrawerRef<R>,
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
    ref: AvDrawerRef<R>,
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
