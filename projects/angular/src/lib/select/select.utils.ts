export type {
  AvPopoverPlacement as AvSelectPlacement,
  AvPopoverPlacementAxis as AvSelectPlacementAxis,
} from '../popover/popover.utils';
export {
  AV_POPOVER_ENTER_MS as AV_SELECT_ENTER_MS,
  AV_POPOVER_EXIT_MS as AV_SELECT_EXIT_MS,
  AV_POPOVER_OFFSET_DEFAULT as AV_SELECT_OFFSET_DEFAULT,
  avPopoverAnchorPoint as avSelectAnchorPoint,
  avPopoverPlacementAxisFromConnection as avSelectPlacementAxisFromConnection,
  avPopoverPositions as avSelectPositions,
} from '../popover/popover.utils';

export type AvSelectAnimationState = 'idle' | 'entering' | 'exiting';

/** How the select was opened — drives focus policy. */
export type AvSelectOpenOrigin = 'mouse' | 'keyboard' | 'program';

/** Why the select closed — drives focus restore. */
export type AvSelectCloseReason = 'click' | 'keydown' | 'tab' | 'selection' | undefined;

export type AvSelectVariant = 'primary' | 'secondary';
export type AvSelectSelectionMode = 'single' | 'multiple';

export interface AvSelectClassOptions {
  variant?: AvSelectVariant;
  fullWidth?: boolean;
}

export interface AvSelectTriggerClassOptions {
  fullWidth?: boolean;
}

const AV_SELECT = 'av-select';
const AV_SELECT_TRIGGER = 'av-select__trigger';
const AV_SELECT_VALUE = 'av-select__value';
const AV_SELECT_INDICATOR = 'av-select__indicator';
const AV_SELECT_POPOVER = 'av-select__popover';

export function avSelectClasses(options: AvSelectClassOptions = {}): string {
  const { variant = 'primary', fullWidth = false } = options;
  const parts = [AV_SELECT, `${AV_SELECT}--${variant}`];

  if (fullWidth) {
    parts.push(`${AV_SELECT}--full-width`);
  }

  return parts.join(' ');
}

export function avSelectTriggerClasses(options: AvSelectTriggerClassOptions = {}): string {
  const { fullWidth = false } = options;
  const parts = [AV_SELECT_TRIGGER];

  if (fullWidth) {
    parts.push(`${AV_SELECT_TRIGGER}--full-width`);
  }

  return parts.join(' ');
}

export function avSelectValueClasses(): string {
  return AV_SELECT_VALUE;
}

export function avSelectIndicatorClasses(): string {
  return AV_SELECT_INDICATOR;
}

export function avSelectPopoverClasses(extraClass = ''): string {
  const parts = [AV_SELECT_POPOVER];
  const trimmed = extraClass.trim();

  if (trimmed) {
    parts.push(trimmed);
  }

  return parts.join(' ');
}
