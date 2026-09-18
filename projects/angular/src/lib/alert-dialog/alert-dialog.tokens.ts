import { InjectionToken } from '@angular/core';
import type { OverlayRef } from '@angular/cdk/overlay';

import type { AvAlertDialogRef } from './alert-dialog-ref';
import type {
  AvAlertDialogBackdropVariant,
  AvAlertDialogIconStatus,
  AvAlertDialogPlacement,
  AvAlertDialogScroll,
  AvAlertDialogSize,
} from './alert-dialog.utils';

/** Options for programmatic alert dialogs opened via {@link AvAlertDialogService}. */
export interface AvAlertDialogOptions {
  title?: string;
  description?: string;
  confirmText?: string | null;
  cancelText?: string | null;
  status?: AvAlertDialogIconStatus;
  showCloseTrigger?: boolean;
  placement?: AvAlertDialogPlacement;
  size?: AvAlertDialogSize;
  scroll?: AvAlertDialogScroll;
  backdrop?: AvAlertDialogBackdropVariant;
  /** Extra CSS classes merged onto the visual backdrop after the variant BEM classes. */
  backdropClass?: string;
  /** Extra CSS classes merged onto the overlay container (e.g. custom enter/exit motion). */
  containerClass?: string;
  dismissable?: boolean;
  keyboardDismissDisabled?: boolean;
}

export const AV_ALERT_DIALOG_OPTIONS = new InjectionToken<AvAlertDialogOptions>(
  'AV_ALERT_DIALOG_OPTIONS',
);

export const AV_ALERT_DIALOG_REF = new InjectionToken<AvAlertDialogRef>('AV_ALERT_DIALOG_REF');

export const AV_ALERT_DIALOG_OVERLAY_REF = new InjectionToken<OverlayRef>(
  'AV_ALERT_DIALOG_OVERLAY_REF',
);
