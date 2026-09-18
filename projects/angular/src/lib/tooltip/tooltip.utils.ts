export type AvTooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type AvTooltipPlacementAxis = AvTooltipPosition;
export type AvTooltipEvent = 'hover' | 'focus' | 'both';

const AV_TOOLTIP = 'av-tooltip';
const AV_TOOLTIP_TEXT = 'av-tooltip__text';

export const AV_TOOLTIP_ENTER_MS = 150;
export const AV_TOOLTIP_EXIT_MS = 100;
export const AV_TOOLTIP_OFFSET_DEFAULT = 8;
export const AV_TOOLTIP_SHOW_DELAY_DEFAULT = 700;
export const AV_TOOLTIP_HIDE_DELAY_DEFAULT = 0;
/** Grace period to move pointer from trigger onto tooltip when auto-hide is false. */
export const AV_TOOLTIP_HOVER_BRIDGE_MS = 150;

const VIEWPORT_MARGIN = 8;

const POSITION_FALLBACKS: Record<AvTooltipPosition, AvTooltipPosition[]> = {
  top: ['top', 'bottom', 'right', 'left'],
  bottom: ['bottom', 'top', 'right', 'left'],
  left: ['left', 'right', 'top', 'bottom'],
  right: ['right', 'left', 'top', 'bottom'],
};

export interface AvTooltipAlignMetrics {
  hostLeft: number;
  hostTop: number;
  hostWidth: number;
  hostHeight: number;
  tooltipWidth: number;
  tooltipHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  offset: number;
  positionTop: number;
  positionLeft: number;
}

export interface AvTooltipAlignResult {
  top: number;
  left: number;
  placement: AvTooltipPosition;
}

export function avTooltipClasses(): string {
  return AV_TOOLTIP;
}

export function avTooltipTextClasses(): string {
  return AV_TOOLTIP_TEXT;
}

export function avTooltipAnchorPoint(axis: AvTooltipPlacementAxis): string {
  const anchorPoints: Record<AvTooltipPlacementAxis, string> = {
    top: 'bottom center',
    bottom: 'top center',
    left: 'center right',
    right: 'center left',
  };

  return anchorPoints[axis];
}

export function avTooltipAlignPosition(
  position: AvTooltipPosition,
  metrics: AvTooltipAlignMetrics,
): Pick<AvTooltipAlignResult, 'top' | 'left'> {
  const {
    hostLeft,
    hostTop,
    hostWidth,
    hostHeight,
    tooltipWidth,
    tooltipHeight,
    offset,
    positionTop,
    positionLeft,
  } = metrics;

  switch (position) {
    case 'top':
      return {
        left: hostLeft + (hostWidth - tooltipWidth) / 2 + positionLeft,
        top: hostTop - tooltipHeight - offset + positionTop,
      };
    case 'bottom':
      return {
        left: hostLeft + (hostWidth - tooltipWidth) / 2 + positionLeft,
        top: hostTop + hostHeight + offset + positionTop,
      };
    case 'left':
      return {
        left: hostLeft - tooltipWidth - offset + positionLeft,
        top: hostTop + (hostHeight - tooltipHeight) / 2 + positionTop,
      };
    case 'right':
      return {
        left: hostLeft + hostWidth + offset + positionLeft,
        top: hostTop + (hostHeight - tooltipHeight) / 2 + positionTop,
      };
  }
}

export function avTooltipIsOutOfBounds(
  top: number,
  left: number,
  metrics: AvTooltipAlignMetrics,
): boolean {
  return (
    left < VIEWPORT_MARGIN ||
    top < VIEWPORT_MARGIN ||
    left + metrics.tooltipWidth > metrics.viewportWidth - VIEWPORT_MARGIN ||
    top + metrics.tooltipHeight > metrics.viewportHeight - VIEWPORT_MARGIN
  );
}

export function avTooltipAlign(
  preferred: AvTooltipPosition,
  metrics: AvTooltipAlignMetrics,
): AvTooltipAlignResult {
  const candidates = POSITION_FALLBACKS[preferred] ?? [preferred];

  for (const placement of candidates) {
    const { top, left } = avTooltipAlignPosition(placement, metrics);

    if (!avTooltipIsOutOfBounds(top, left, metrics)) {
      return { top, left, placement };
    }
  }

  const { top, left } = avTooltipAlignPosition(preferred, metrics);

  return { top, left, placement: preferred };
}

let tooltipIdCounter = 0;

export function avTooltipNextId(): string {
  tooltipIdCounter += 1;
  return `av-tooltip-${tooltipIdCounter}`;
}

export function avTooltipCreateArrowElement(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('data-slot', 'overlay-arrow');
  svg.setAttribute('height', '12');
  svg.setAttribute('width', '12');
  svg.setAttribute('viewBox', '0 0 12 12');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M0 0C5.48483 8 6.5 8 12 0Z');
  svg.appendChild(path);

  return svg;
}
