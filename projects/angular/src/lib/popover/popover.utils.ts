import type { ConnectedPosition } from '@angular/cdk/overlay';

export type AvPopoverPlacement =
  | 'top'
  | 'top start'
  | 'top end'
  | 'bottom'
  | 'bottom start'
  | 'bottom end'
  | 'left'
  | 'left top'
  | 'left bottom'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'start'
  | 'start top'
  | 'start bottom'
  | 'end'
  | 'end top'
  | 'end bottom';

export type AvPopoverPlacementAxis = 'top' | 'bottom' | 'left' | 'right';

export type AvPopoverAnimationState = 'idle' | 'entering' | 'exiting';

const AV_POPOVER = 'av-popover';
const AV_POPOVER_TRIGGER = 'av-popover__trigger';
const AV_POPOVER_DIALOG = 'av-popover__dialog';
const AV_POPOVER_HEADING = 'av-popover__heading';

export const AV_POPOVER_ENTER_MS = 150;
export const AV_POPOVER_EXIT_MS = 100;
export const AV_POPOVER_OFFSET_DEFAULT = 8;

export function avPopoverClasses(): string {
  return AV_POPOVER;
}

export function avPopoverTriggerClasses(): string {
  return AV_POPOVER_TRIGGER;
}

export function avPopoverDialogClasses(): string {
  return AV_POPOVER_DIALOG;
}

export function avPopoverHeadingClasses(): string {
  return AV_POPOVER_HEADING;
}

export function avPopoverPlacementAxisFromConnection(
  position: ConnectedPosition,
): AvPopoverPlacementAxis {
  const { overlayX, overlayY } = position;

  if (overlayY === 'bottom') {
    return 'top';
  }

  if (overlayY === 'top') {
    return 'bottom';
  }

  if (overlayX === 'end') {
    return 'left';
  }

  if (overlayX === 'start') {
    return 'right';
  }

  return 'bottom';
}

export function avPopoverAnchorPoint(axis: AvPopoverPlacementAxis): string {
  const anchorPoints: Record<AvPopoverPlacementAxis, string> = {
    top: 'bottom center',
    bottom: 'top center',
    left: 'center right',
    right: 'center left',
  };

  return anchorPoints[axis];
}

interface PlacementConfig {
  originX: ConnectedPosition['originX'];
  originY: ConnectedPosition['originY'];
  overlayX: ConnectedPosition['overlayX'];
  overlayY: ConnectedPosition['overlayY'];
  offsetX?: number;
  offsetY?: number;
}

function placementConfig(placement: AvPopoverPlacement, offset: number): PlacementConfig {
  switch (placement) {
    case 'top':
      return {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -offset,
      };
    case 'top start':
      return {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
        offsetY: -offset,
      };
    case 'top end':
      return {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
        offsetY: -offset,
      };
    case 'bottom':
      return {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: offset,
      };
    case 'bottom start':
      return {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: offset,
      };
    case 'bottom end':
      return {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
        offsetY: offset,
      };
    case 'left':
    case 'start':
      return {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -offset,
      };
    case 'left top':
    case 'start top':
      return {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
        offsetX: -offset,
      };
    case 'left bottom':
    case 'start bottom':
      return {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
        offsetX: -offset,
      };
    case 'right':
    case 'end':
      return {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: offset,
      };
    case 'right top':
    case 'end top':
      return {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
        offsetX: offset,
      };
    case 'right bottom':
    case 'end bottom':
      return {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
        offsetX: offset,
      };
    default:
      return placementConfig('bottom', offset);
  }
}

const PLACEMENT_FALLBACK_ORDER: AvPopoverPlacement[] = [
  'bottom',
  'top',
  'end',
  'start',
  'bottom start',
  'bottom end',
  'top start',
  'top end',
];

export function avPopoverPositions(
  placement: AvPopoverPlacement,
  offset: number,
): ConnectedPosition[] {
  const primary = placementConfig(placement, offset);
  const fallbacks = PLACEMENT_FALLBACK_ORDER.filter((item) => item !== placement).map((item) =>
    placementConfig(item, offset),
  );

  return [primary, ...fallbacks];
}
