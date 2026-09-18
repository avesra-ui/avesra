import { InjectionToken, TemplateRef, Type } from '@angular/core';

import type { AvDrawerRef } from './drawer-ref';
import type { AvDrawerBackdropVariant, AvDrawerPlacement } from './drawer.utils';

/** Options for programmatic drawers opened via {@link AvDrawerService}. */
export interface AvDrawerConfig<D = unknown> {
  data?: D;
  placement?: AvDrawerPlacement;
  backdrop?: AvDrawerBackdropVariant;
  /** Extra CSS classes merged onto the visual backdrop after the variant BEM classes. */
  backdropClass?: string;
  /** Extra CSS classes merged onto the content positioning wrapper. */
  contentClass?: string;
  dismissable?: boolean;
  keyboardDismissDisabled?: boolean;
}

export type AvDrawerContent<T = unknown> = Type<T> | TemplateRef<T>;

export const AV_DRAWER_CONFIG = new InjectionToken<AvDrawerConfig>('AV_DRAWER_CONFIG');

export const AV_DRAWER_REF = new InjectionToken<AvDrawerRef>('AV_DRAWER_REF');

export const AV_DRAWER_DATA = new InjectionToken<unknown>('AV_DRAWER_DATA');

/** @internal Content to project into the service shell. */
export const AV_DRAWER_CONTENT = new InjectionToken<AvDrawerContent>('AV_DRAWER_CONTENT');
