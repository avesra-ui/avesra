import type { AvToastPlacement, AvToastVariant } from './toast.types';

export const AV_TOAST_TIMEOUT_DEFAULT = 4000;
export const AV_TOAST_GAP_DEFAULT = 12;
export const AV_TOAST_WIDTH_DEFAULT = 460;
export const AV_TOAST_SCALE_FACTOR_DEFAULT = 0.05;
export const AV_TOAST_MAX_VISIBLE_DEFAULT = 3;
export const AV_TOAST_ENTER_MS = 350;
export const AV_TOAST_EXIT_MS = 350;
export const AV_TOAST_SWIPE_THRESHOLD_DEFAULT = 50;

const AV_TOAST_REGION = 'av-toast-region';
const AV_TOAST = 'av-toast';
const AV_TOAST_CONTENT = 'av-toast__content';
const AV_TOAST_INDICATOR = 'av-toast__indicator';
const AV_TOAST_TITLE = 'av-toast__title';
const AV_TOAST_DESCRIPTION = 'av-toast__description';
const AV_TOAST_CLOSE = 'av-toast__close-button';
const AV_TOAST_ACTION = 'av-toast__action';

let toastIdCounter = 0;

export function avToastNextId(): string {
  toastIdCounter += 1;
  return `av-toast-${toastIdCounter}`;
}

export function avToastRegionClasses(placement: AvToastPlacement): string {
  const placementClass = `${AV_TOAST_REGION}--${placement}`;
  return [AV_TOAST_REGION, placementClass].join(' ');
}

export function avToastClasses(variant: AvToastVariant, placement: AvToastPlacement): string {
  return [AV_TOAST, `${AV_TOAST}--${variant}`, `${AV_TOAST}--${placement}`].join(' ');
}

export function avToastContentClasses(): string {
  return AV_TOAST_CONTENT;
}

export function avToastIndicatorClasses(): string {
  return AV_TOAST_INDICATOR;
}

export function avToastTitleClasses(): string {
  return AV_TOAST_TITLE;
}

export function avToastDescriptionClasses(): string {
  return AV_TOAST_DESCRIPTION;
}

export function avToastCloseClasses(): string {
  return AV_TOAST_CLOSE;
}

export function avToastActionClasses(): string {
  return AV_TOAST_ACTION;
}

export function avToastIsBottomPlacement(placement: AvToastPlacement): boolean {
  return placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end';
}

/** Cumulative stack offset: sum of prior heights + index * gap. */
export function avToastOffset(options: {
  index: number;
  gap: number;
  heightsBefore: number;
}): number {
  const { index, gap, heightsBefore } = options;
  return Math.round(index * gap + heightsBefore);
}

/**
 * CSS custom properties that drive collapsed / expanded stack layout in themes.
 * Transforms themselves live in CSS so hover-expand can transition smoothly.
 */
export function avToastStackStyles(options: {
  index: number;
  total: number;
  gap: number;
  scaleFactor: number;
  placement: AvToastPlacement;
  offset: number;
  frontHeight?: number;
  initialHeight?: number;
}): Record<string, string> {
  const { index, total, offset, frontHeight, initialHeight } = options;

  const styles: Record<string, string> = {
    '--index': String(index),
    '--toasts-before': String(index),
    '--z-index': String(total - index),
    '--offset': `${offset}px`,
    zIndex: String(total - index),
  };

  if (frontHeight !== undefined) {
    styles['--front-toast-height'] = `${frontHeight}px`;
  }

  if (initialHeight !== undefined) {
    styles['--initial-height'] = `${initialHeight}px`;
  }

  return styles;
}

export type AvToastIconName = 'info' | 'success' | 'warning' | 'danger';

export function avToastIconNameForVariant(variant: AvToastVariant): AvToastIconName {
  switch (variant) {
    case 'success':
      return 'success';
    case 'warning':
      return 'warning';
    case 'danger':
      return 'danger';
  }

  return 'info';
}
