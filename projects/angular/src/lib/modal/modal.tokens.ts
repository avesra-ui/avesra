import { InjectionToken, TemplateRef, Type } from '@angular/core';

import type { AvModalRef } from './modal-ref';
import type {
  AvModalBackdropVariant,
  AvModalPlacement,
  AvModalScroll,
  AvModalSize,
} from './modal.utils';

/** Options for programmatic modals opened via {@link AvModalService}. */
export interface AvModalConfig<D = unknown> {
  data?: D;
  placement?: AvModalPlacement;
  size?: AvModalSize;
  scroll?: AvModalScroll;
  backdrop?: AvModalBackdropVariant;
  /** Extra CSS classes merged onto the visual backdrop after the variant BEM classes. */
  backdropClass?: string;
  /** Extra CSS classes merged onto the overlay container (e.g. custom enter/exit motion). */
  containerClass?: string;
  dismissable?: boolean;
  keyboardDismissDisabled?: boolean;
}

export type AvModalContent<T = unknown> = Type<T> | TemplateRef<T>;

export const AV_MODAL_CONFIG = new InjectionToken<AvModalConfig>('AV_MODAL_CONFIG');

export const AV_MODAL_REF = new InjectionToken<AvModalRef>('AV_MODAL_REF');

export const AV_MODAL_DATA = new InjectionToken<unknown>('AV_MODAL_DATA');

/** @internal Content to project into the service shell. */
export const AV_MODAL_CONTENT = new InjectionToken<AvModalContent>('AV_MODAL_CONTENT');
