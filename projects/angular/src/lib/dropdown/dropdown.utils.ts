export type { AvPopoverPlacement as AvDropdownPlacement, AvPopoverPlacementAxis as AvDropdownPlacementAxis } from '../popover/popover.utils';
export {
  AV_POPOVER_ENTER_MS as AV_DROPDOWN_ENTER_MS,
  AV_POPOVER_EXIT_MS as AV_DROPDOWN_EXIT_MS,
  AV_POPOVER_OFFSET_DEFAULT as AV_DROPDOWN_OFFSET_DEFAULT,
  avPopoverAnchorPoint as avDropdownAnchorPoint,
  avPopoverPlacementAxisFromConnection as avDropdownPlacementAxisFromConnection,
  avPopoverPositions as avDropdownPositions,
} from '../popover/popover.utils';

export type AvDropdownAnimationState = 'idle' | 'entering' | 'exiting';

/** How the dropdown was opened — drives focus policy. */
export type AvDropdownOpenOrigin = 'mouse' | 'keyboard' | 'program';

/** Why the dropdown closed — drives focus restore. */
export type AvDropdownCloseReason = 'click' | 'keydown' | 'tab' | undefined;

const AV_DROPDOWN = 'av-dropdown';
const AV_DROPDOWN_TRIGGER = 'av-dropdown__trigger';
const AV_DROPDOWN_POPOVER = 'av-dropdown__popover';
const AV_DROPDOWN_MENU = 'av-dropdown__menu';

export function avDropdownClasses(): string {
  return AV_DROPDOWN;
}

export function avDropdownTriggerClasses(): string {
  return AV_DROPDOWN_TRIGGER;
}

export function avDropdownPopoverClasses(extraClass = ''): string {
  const parts = [AV_DROPDOWN_POPOVER];
  const trimmed = extraClass.trim();

  if (trimmed) {
    parts.push(trimmed);
  }

  return parts.join(' ');
}

export function avDropdownMenuClasses(): string {
  return AV_DROPDOWN_MENU;
}
