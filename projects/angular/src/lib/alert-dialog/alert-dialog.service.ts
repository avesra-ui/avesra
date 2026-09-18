import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { filter, take } from 'rxjs/operators';

import { AvAlertDialogRef } from './alert-dialog-ref';
import { AvAlertDialogShellComponent } from './alert-dialog-shell.component';
import {
  AV_ALERT_DIALOG_OPTIONS,
  AV_ALERT_DIALOG_REF,
  type AvAlertDialogOptions,
} from './alert-dialog.tokens';

@Injectable({ providedIn: 'root' })
export class AvAlertDialogService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);
  private readonly focusTrapFactory = inject(FocusTrapFactory);
  private readonly platformId = inject(PLATFORM_ID);

  /**
   * Opens a programmatic alert dialog with full options.
   */
  create(options: AvAlertDialogOptions = {}): AvAlertDialogRef {
    const ref = new AvAlertDialogRef();

    if (!isPlatformBrowser(this.platformId)) {
      queueMicrotask(() => ref._notifyClosed(undefined));
      return ref;
    }

    const overlayRef = this.overlay.create(this.createOverlayConfig());
    const focusTrap = this.attachShell(overlayRef, options, ref);

    this.bindOverlayDismiss(overlayRef, options, ref);
    this.disposeWhenClosed(overlayRef, focusTrap, ref);

    return ref;
  }

  /**
   * Convenience helper for confirmation dialogs.
   */
  confirm(
    options: Omit<AvAlertDialogOptions, 'confirmText' | 'cancelText'> & {
      confirmText?: string;
      cancelText?: string;
    } = {},
  ): AvAlertDialogRef {
    return this.create({
      status: 'danger',
      ...options,
      confirmText: options.confirmText ?? 'Confirm',
      cancelText: options.cancelText ?? 'Cancel',
    });
  }

  private createOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.overlay.position().global().top('0').left('0'),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      // Invisible click-catcher — visual painting lives on the shell backdrop node.
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'av-alert-dialog-overlay-pane',
      width: '100%',
      height: '100%',
      disposeOnNavigation: true,
    });
  }

  private attachShell(
    overlayRef: OverlayRef,
    options: AvAlertDialogOptions,
    ref: AvAlertDialogRef,
  ): FocusTrap {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: AV_ALERT_DIALOG_OPTIONS, useValue: options },
        { provide: AV_ALERT_DIALOG_REF, useValue: ref },
      ],
    });

    const portal = new ComponentPortal(AvAlertDialogShellComponent, null, injector);
    overlayRef.attach(portal);

    const focusTrap = this.focusTrapFactory.create(overlayRef.overlayElement);
    queueMicrotask(() => {
      void focusTrap.focusInitialElementWhenReady();
    });

    return focusTrap;
  }

  private bindOverlayDismiss(
    overlayRef: OverlayRef,
    options: AvAlertDialogOptions,
    ref: AvAlertDialogRef,
  ): void {
    const dismissable = options.dismissable ?? false;
    const keyboardDismissDisabled = options.keyboardDismissDisabled ?? true;

    if (dismissable) {
      overlayRef.backdropClick().subscribe(() => ref.close('cancel'));
    }

    overlayRef
      .keydownEvents()
      .pipe(filter((event) => event.key === 'Escape'))
      .subscribe((event) => {
        if (keyboardDismissDisabled) {
          return;
        }

        event.preventDefault();
        ref.close('cancel');
      });
  }

  private disposeWhenClosed(
    overlayRef: OverlayRef,
    focusTrap: FocusTrap,
    ref: AvAlertDialogRef,
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
