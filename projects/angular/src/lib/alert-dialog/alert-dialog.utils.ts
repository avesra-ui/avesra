export type AvAlertDialogPlacement = 'auto' | 'top' | 'center' | 'bottom';
export type AvAlertDialogScroll = 'inside' | 'outside';
export type AvAlertDialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'cover';
export type AvAlertDialogBackdropVariant = 'opaque' | 'blur' | 'transparent';
export type AvAlertDialogIconStatus = 'default' | 'accent' | 'success' | 'warning' | 'danger';
export type AvAlertDialogAnimationState = 'idle' | 'entering' | 'exiting';
export type AvAlertDialogCloseResult = 'confirm' | 'cancel' | undefined;

/** Enter animation duration (ms) — keep in sync with themes CSS. */
export const AV_ALERT_DIALOG_ENTER_MS = 250;
/** Exit animation duration (ms) — keep in sync with themes CSS. */
export const AV_ALERT_DIALOG_EXIT_MS = 100;
/** Fallback when exit CSS animation does not fire (e.g. reduced motion). */
export const AV_ALERT_DIALOG_EXIT_FALLBACK_MS = AV_ALERT_DIALOG_EXIT_MS + 100;

const AV_ALERT_DIALOG_TRIGGER = 'av-alert-dialog__trigger';
const AV_ALERT_DIALOG_BACKDROP = 'av-alert-dialog__backdrop';
const AV_ALERT_DIALOG_CONTAINER = 'av-alert-dialog__container';
const AV_ALERT_DIALOG_DIALOG = 'av-alert-dialog__dialog';
const AV_ALERT_DIALOG_HEADER = 'av-alert-dialog__header';
const AV_ALERT_DIALOG_HEADING = 'av-alert-dialog__heading';
const AV_ALERT_DIALOG_ICON = 'av-alert-dialog__icon';
const AV_ALERT_DIALOG_BODY = 'av-alert-dialog__body';
const AV_ALERT_DIALOG_FOOTER = 'av-alert-dialog__footer';
const AV_ALERT_DIALOG_CLOSE_TRIGGER = 'av-alert-dialog__close-trigger';

export function avAlertDialogTriggerClasses(): string {
  return AV_ALERT_DIALOG_TRIGGER;
}

export function avAlertDialogBackdropClasses(
  variant: AvAlertDialogBackdropVariant = 'opaque',
): string {
  if (variant === 'blur') {
    // Default blur includes the opaque tint unless a custom className is set.
    return [
      AV_ALERT_DIALOG_BACKDROP,
      `${AV_ALERT_DIALOG_BACKDROP}--opaque`,
      `${AV_ALERT_DIALOG_BACKDROP}--blur`,
    ].join(' ');
  }

  return [AV_ALERT_DIALOG_BACKDROP, `${AV_ALERT_DIALOG_BACKDROP}--${variant}`].join(' ');
}

const CUSTOM_BACKDROP_BG_RE = /(?:^|\s)(?:bg-|from-|via-|to-|bg-linear)/;

/** Variant BEM classes plus optional consumer Tailwind / utility classes for CDK backdrop. */
export function avAlertDialogResolveBackdropClasses(
  variant: AvAlertDialogBackdropVariant = 'opaque',
  customClass = '',
): string[] {
  const custom = customClass.split(/\s+/).filter(Boolean);
  const hasCustomBg = CUSTOM_BACKDROP_BG_RE.test(` ${customClass}`);

  // Custom background utilities replace the default tint.
  if (hasCustomBg) {
    const classes = [AV_ALERT_DIALOG_BACKDROP];
    if (variant === 'blur') {
      classes.push(`${AV_ALERT_DIALOG_BACKDROP}--blur`);
    } else if (variant === 'transparent') {
      classes.push(`${AV_ALERT_DIALOG_BACKDROP}--transparent`);
    }
    return [...classes, ...custom];
  }

  return [...avAlertDialogBackdropClasses(variant).split(/\s+/).filter(Boolean), ...custom];
}

export interface AvAlertDialogContainerClassOptions {
  scroll?: AvAlertDialogScroll;
  /** Extra consumer utilities merged after BEM classes (e.g. custom enter/exit motion). */
  className?: string;
}

export function avAlertDialogContainerClasses(
  options: AvAlertDialogContainerClassOptions = {},
): string {
  const { scroll = 'inside', className = '' } = options;

  return [
    AV_ALERT_DIALOG_CONTAINER,
    scroll === 'outside' && `${AV_ALERT_DIALOG_CONTAINER}--scroll-outside`,
    ...className.split(/\s+/).filter(Boolean),
  ]
    .filter(Boolean)
    .join(' ');
}

export interface AvAlertDialogDialogClassOptions {
  scroll?: AvAlertDialogScroll;
  size?: AvAlertDialogSize;
}

export function avAlertDialogDialogClasses(
  options: AvAlertDialogDialogClassOptions = {},
): string {
  const { scroll = 'inside', size = 'md' } = options;

  return [
    AV_ALERT_DIALOG_DIALOG,
    scroll === 'inside' && `${AV_ALERT_DIALOG_DIALOG}--scroll-inside`,
    scroll === 'outside' && `${AV_ALERT_DIALOG_DIALOG}--scroll-outside`,
    size !== 'cover' && `${AV_ALERT_DIALOG_DIALOG}--${size}`,
    size === 'cover' && `${AV_ALERT_DIALOG_DIALOG}--cover`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avAlertDialogHeaderClasses(): string {
  return AV_ALERT_DIALOG_HEADER;
}

export function avAlertDialogHeadingClasses(): string {
  return AV_ALERT_DIALOG_HEADING;
}

export interface AvAlertDialogIconClassOptions {
  status?: AvAlertDialogIconStatus;
}

export function avAlertDialogIconClasses(
  options: AvAlertDialogIconClassOptions = {},
): string {
  const { status = 'danger' } = options;

  return [AV_ALERT_DIALOG_ICON, `${AV_ALERT_DIALOG_ICON}--${status}`].join(' ');
}

export interface AvAlertDialogBodyClassOptions {
  scroll?: AvAlertDialogScroll;
}

export function avAlertDialogBodyClasses(options: AvAlertDialogBodyClassOptions = {}): string {
  const { scroll = 'inside' } = options;

  return [
    AV_ALERT_DIALOG_BODY,
    scroll === 'inside' && `${AV_ALERT_DIALOG_BODY}--scroll-inside`,
    scroll === 'outside' && `${AV_ALERT_DIALOG_BODY}--scroll-outside`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avAlertDialogFooterClasses(): string {
  return AV_ALERT_DIALOG_FOOTER;
}

export function avAlertDialogCloseTriggerClasses(): string {
  return AV_ALERT_DIALOG_CLOSE_TRIGGER;
}
