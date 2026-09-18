export type AvDrawerPlacement = 'top' | 'bottom' | 'left' | 'right';
export type AvDrawerBackdropVariant = 'opaque' | 'blur' | 'transparent';
export type AvDrawerAnimationState = 'idle' | 'entering' | 'exiting';
export type AvDrawerCloseResult = unknown;

/** Enter animation duration (ms) — keep in sync with themes CSS. */
export const AV_DRAWER_ENTER_MS = 250;
/** Exit animation duration (ms) — keep in sync with themes CSS. */
export const AV_DRAWER_EXIT_MS = 250;
/** Fallback when exit CSS animation does not fire (e.g. reduced motion). */
export const AV_DRAWER_EXIT_FALLBACK_MS = AV_DRAWER_EXIT_MS + 100;

const AV_DRAWER_TRIGGER = 'av-drawer__trigger';
const AV_DRAWER_BACKDROP = 'av-drawer__backdrop';
const AV_DRAWER_CONTENT = 'av-drawer__content';
const AV_DRAWER_DIALOG = 'av-drawer__dialog';
const AV_DRAWER_HEADER = 'av-drawer__header';
const AV_DRAWER_HEADING = 'av-drawer__heading';
const AV_DRAWER_BODY = 'av-drawer__body';
const AV_DRAWER_FOOTER = 'av-drawer__footer';
const AV_DRAWER_HANDLE = 'av-drawer__handle';
const AV_DRAWER_CLOSE_TRIGGER = 'av-drawer__close-trigger';

export function avDrawerTriggerClasses(): string {
  return AV_DRAWER_TRIGGER;
}

export function avDrawerBackdropClasses(variant: AvDrawerBackdropVariant = 'opaque'): string {
  if (variant === 'blur') {
    return [
      AV_DRAWER_BACKDROP,
      `${AV_DRAWER_BACKDROP}--opaque`,
      `${AV_DRAWER_BACKDROP}--blur`,
    ].join(' ');
  }

  return [AV_DRAWER_BACKDROP, `${AV_DRAWER_BACKDROP}--${variant}`].join(' ');
}

const CUSTOM_BACKDROP_BG_RE = /(?:^|\s)(?:bg-|from-|via-|to-|bg-linear)/;

/** Variant BEM classes plus optional consumer Tailwind / utility classes for the visual backdrop. */
export function avDrawerResolveBackdropClasses(
  variant: AvDrawerBackdropVariant = 'opaque',
  customClass = '',
): string[] {
  const custom = customClass.split(/\s+/).filter(Boolean);
  const hasCustomBg = CUSTOM_BACKDROP_BG_RE.test(` ${customClass}`);

  if (hasCustomBg) {
    const classes = [AV_DRAWER_BACKDROP];
    if (variant === 'blur') {
      classes.push(`${AV_DRAWER_BACKDROP}--blur`);
    } else if (variant === 'transparent') {
      classes.push(`${AV_DRAWER_BACKDROP}--transparent`);
    }
    return [...classes, ...custom];
  }

  return [...avDrawerBackdropClasses(variant).split(/\s+/).filter(Boolean), ...custom];
}

export interface AvDrawerContentClassOptions {
  placement?: AvDrawerPlacement;
  /** Extra consumer utilities merged after BEM classes. */
  className?: string;
}

export function avDrawerContentClasses(options: AvDrawerContentClassOptions | AvDrawerPlacement = {}): string {
  const normalized =
    typeof options === 'string'
      ? { placement: options }
      : options;
  const { placement = 'bottom', className = '' } = normalized;

  return [
    AV_DRAWER_CONTENT,
    `${AV_DRAWER_CONTENT}--${placement}`,
    ...className.split(/\s+/).filter(Boolean),
  ]
    .filter(Boolean)
    .join(' ');
}

export function avDrawerDialogClasses(placement: AvDrawerPlacement = 'bottom'): string {
  return [
    AV_DRAWER_DIALOG,
    placement === 'top' && `${AV_DRAWER_DIALOG}--top`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avDrawerHeaderClasses(): string {
  return AV_DRAWER_HEADER;
}

export function avDrawerHeadingClasses(): string {
  return AV_DRAWER_HEADING;
}

export function avDrawerBodyClasses(): string {
  return AV_DRAWER_BODY;
}

export function avDrawerFooterClasses(): string {
  return AV_DRAWER_FOOTER;
}

export function avDrawerHandleClasses(): string {
  return AV_DRAWER_HANDLE;
}

export function avDrawerCloseTriggerClasses(): string {
  return AV_DRAWER_CLOSE_TRIGGER;
}
