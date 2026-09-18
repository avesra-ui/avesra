export type {
  AvPopoverPlacement as AvDateRangePickerPlacement,
  AvPopoverPlacementAxis as AvDateRangePickerPlacementAxis,
} from '../popover/popover.utils';
export {
  AV_POPOVER_ENTER_MS as AV_DATE_RANGE_PICKER_ENTER_MS,
  AV_POPOVER_EXIT_MS as AV_DATE_RANGE_PICKER_EXIT_MS,
  AV_POPOVER_OFFSET_DEFAULT as AV_DATE_RANGE_PICKER_OFFSET_DEFAULT,
  avPopoverAnchorPoint as avDateRangePickerAnchorPoint,
  avPopoverPlacementAxisFromConnection as avDateRangePickerPlacementAxisFromConnection,
  avPopoverPositions as avDateRangePickerPositions,
} from '../popover/popover.utils';

export type AvDateRangePickerAnimationState = 'idle' | 'entering' | 'exiting';

/** How the popover was opened — drives focus policy. */
export type AvDateRangePickerOpenOrigin = 'mouse' | 'keyboard' | 'program';

/** Why the popover closed — drives focus restore. */
export type AvDateRangePickerCloseReason = 'click' | 'keydown' | 'tab' | 'selection' | undefined;

export interface AvDateRangePickerClassOptions {
  fullWidth?: boolean;
}

const AV_DATE_RANGE_PICKER = 'av-date-range-picker';
const AV_DATE_RANGE_PICKER_TRIGGER = 'av-date-range-picker__trigger';
const AV_DATE_RANGE_PICKER_TRIGGER_INDICATOR = 'av-date-range-picker__trigger-indicator';
const AV_DATE_RANGE_PICKER_RANGE_SEPARATOR = 'av-date-range-picker__range-separator';
const AV_DATE_RANGE_PICKER_POPOVER = 'av-date-range-picker__popover';

export function avDateRangePickerClasses(options: AvDateRangePickerClassOptions = {}): string {
  const { fullWidth = false } = options;
  const parts = [AV_DATE_RANGE_PICKER];

  if (fullWidth) {
    parts.push(`${AV_DATE_RANGE_PICKER}--full-width`);
  }

  return parts.join(' ');
}

export function avDateRangePickerTriggerClasses(): string {
  return AV_DATE_RANGE_PICKER_TRIGGER;
}

export function avDateRangePickerTriggerIndicatorClasses(): string {
  return AV_DATE_RANGE_PICKER_TRIGGER_INDICATOR;
}

export function avDateRangePickerRangeSeparatorClasses(): string {
  return AV_DATE_RANGE_PICKER_RANGE_SEPARATOR;
}

export interface AvDateRangePickerPopoverClassOptions {
  /** Extra consumer utilities merged after BEM classes. */
  className?: string;
}

export function avDateRangePickerPopoverClasses(
  options: AvDateRangePickerPopoverClassOptions = {},
): string {
  const { className = '' } = options;
  return [AV_DATE_RANGE_PICKER_POPOVER, ...className.split(/\s+/).filter(Boolean)].join(' ');
}
