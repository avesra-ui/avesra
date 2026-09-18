export type {
  AvPopoverPlacement as AvDatePickerPlacement,
  AvPopoverPlacementAxis as AvDatePickerPlacementAxis,
} from '../popover/popover.utils';
export {
  AV_POPOVER_ENTER_MS as AV_DATE_PICKER_ENTER_MS,
  AV_POPOVER_EXIT_MS as AV_DATE_PICKER_EXIT_MS,
  AV_POPOVER_OFFSET_DEFAULT as AV_DATE_PICKER_OFFSET_DEFAULT,
  avPopoverAnchorPoint as avDatePickerAnchorPoint,
  avPopoverPlacementAxisFromConnection as avDatePickerPlacementAxisFromConnection,
  avPopoverPositions as avDatePickerPositions,
} from '../popover/popover.utils';

export type AvDatePickerAnimationState = 'idle' | 'entering' | 'exiting';

/** How the popover was opened — drives focus policy. */
export type AvDatePickerOpenOrigin = 'mouse' | 'keyboard' | 'program';

/** Why the popover closed — drives focus restore. */
export type AvDatePickerCloseReason = 'click' | 'keydown' | 'tab' | 'selection' | undefined;

export interface AvDatePickerClassOptions {
  fullWidth?: boolean;
}

const AV_DATE_PICKER = 'av-date-picker';
const AV_DATE_PICKER_TRIGGER = 'av-date-picker__trigger';
const AV_DATE_PICKER_TRIGGER_INDICATOR = 'av-date-picker__trigger-indicator';
const AV_DATE_PICKER_POPOVER = 'av-date-picker__popover';

export function avDatePickerClasses(options: AvDatePickerClassOptions = {}): string {
  const { fullWidth = false } = options;
  const parts = [AV_DATE_PICKER];

  if (fullWidth) {
    parts.push(`${AV_DATE_PICKER}--full-width`);
  }

  return parts.join(' ');
}

export function avDatePickerTriggerClasses(): string {
  return AV_DATE_PICKER_TRIGGER;
}

export function avDatePickerTriggerIndicatorClasses(): string {
  return AV_DATE_PICKER_TRIGGER_INDICATOR;
}

export interface AvDatePickerPopoverClassOptions {
  /** Extra consumer utilities merged after BEM classes. */
  className?: string;
}

export function avDatePickerPopoverClasses(
  options: AvDatePickerPopoverClassOptions = {},
): string {
  const { className = '' } = options;
  return [AV_DATE_PICKER_POPOVER, ...className.split(/\s+/).filter(Boolean)].join(' ');
}
