export type AvModalPlacement = 'auto' | 'top' | 'center' | 'bottom';
export type AvModalScroll = 'inside' | 'outside';
export type AvModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'cover' | 'full';
export type AvModalBackdropVariant = 'opaque' | 'blur' | 'transparent';
export type AvModalAnimationState = 'idle' | 'entering' | 'exiting';
export type AvModalCloseResult = unknown;

/** Enter animation duration (ms) — keep in sync with themes CSS. */
export const AV_MODAL_ENTER_MS = 250;
/** Exit animation duration (ms) — keep in sync with themes CSS. */
export const AV_MODAL_EXIT_MS = 100;
/** Fallback when exit CSS animation does not fire (e.g. reduced motion). */
export const AV_MODAL_EXIT_FALLBACK_MS = AV_MODAL_EXIT_MS + 100;

const AV_MODAL_TRIGGER = 'av-modal__trigger';
const AV_MODAL_BACKDROP = 'av-modal__backdrop';
const AV_MODAL_CONTAINER = 'av-modal__container';
const AV_MODAL_DIALOG = 'av-modal__dialog';
const AV_MODAL_HEADER = 'av-modal__header';
const AV_MODAL_HEADING = 'av-modal__heading';
const AV_MODAL_ICON = 'av-modal__icon';
const AV_MODAL_BODY = 'av-modal__body';
const AV_MODAL_FOOTER = 'av-modal__footer';
const AV_MODAL_CLOSE_TRIGGER = 'av-modal__close-trigger';

export function avModalTriggerClasses(): string {
  return AV_MODAL_TRIGGER;
}

export function avModalBackdropClasses(variant: AvModalBackdropVariant = 'opaque'): string {
  if (variant === 'blur') {
    return [
      AV_MODAL_BACKDROP,
      `${AV_MODAL_BACKDROP}--opaque`,
      `${AV_MODAL_BACKDROP}--blur`,
    ].join(' ');
  }

  return [AV_MODAL_BACKDROP, `${AV_MODAL_BACKDROP}--${variant}`].join(' ');
}

const CUSTOM_BACKDROP_BG_RE = /(?:^|\s)(?:bg-|from-|via-|to-|bg-linear)/;

/** Variant BEM classes plus optional consumer Tailwind / utility classes for the visual backdrop. */
export function avModalResolveBackdropClasses(
  variant: AvModalBackdropVariant = 'opaque',
  customClass = '',
): string[] {
  const custom = customClass.split(/\s+/).filter(Boolean);
  const hasCustomBg = CUSTOM_BACKDROP_BG_RE.test(` ${customClass}`);

  if (hasCustomBg) {
    const classes = [AV_MODAL_BACKDROP];
    if (variant === 'blur') {
      classes.push(`${AV_MODAL_BACKDROP}--blur`);
    } else if (variant === 'transparent') {
      classes.push(`${AV_MODAL_BACKDROP}--transparent`);
    }
    return [...classes, ...custom];
  }

  return [...avModalBackdropClasses(variant).split(/\s+/).filter(Boolean), ...custom];
}

export interface AvModalContainerClassOptions {
  scroll?: AvModalScroll;
  size?: AvModalSize;
  /** Extra consumer utilities merged after BEM classes (e.g. custom enter/exit motion). */
  className?: string;
}

export function avModalContainerClasses(options: AvModalContainerClassOptions = {}): string {
  const { scroll = 'inside', size = 'md', className = '' } = options;

  return [
    AV_MODAL_CONTAINER,
    scroll === 'outside' && `${AV_MODAL_CONTAINER}--scroll-outside`,
    size === 'full' && `${AV_MODAL_CONTAINER}--full`,
    ...className.split(/\s+/).filter(Boolean),
  ]
    .filter(Boolean)
    .join(' ');
}

export interface AvModalDialogClassOptions {
  scroll?: AvModalScroll;
  size?: AvModalSize;
}

export function avModalDialogClasses(options: AvModalDialogClassOptions = {}): string {
  const { scroll = 'inside', size = 'md' } = options;

  return [
    AV_MODAL_DIALOG,
    scroll === 'inside' && `${AV_MODAL_DIALOG}--scroll-inside`,
    scroll === 'outside' && `${AV_MODAL_DIALOG}--scroll-outside`,
    size !== 'full' && size !== 'cover' && `${AV_MODAL_DIALOG}--${size}`,
    size === 'cover' && `${AV_MODAL_DIALOG}--cover`,
    size === 'full' && `${AV_MODAL_DIALOG}--full`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avModalHeaderClasses(): string {
  return AV_MODAL_HEADER;
}

export function avModalHeadingClasses(): string {
  return AV_MODAL_HEADING;
}

export function avModalIconClasses(): string {
  return AV_MODAL_ICON;
}

export interface AvModalBodyClassOptions {
  scroll?: AvModalScroll;
}

export function avModalBodyClasses(options: AvModalBodyClassOptions = {}): string {
  const { scroll = 'inside' } = options;

  return [
    AV_MODAL_BODY,
    scroll === 'inside' && `${AV_MODAL_BODY}--scroll-inside`,
    scroll === 'outside' && `${AV_MODAL_BODY}--scroll-outside`,
  ]
    .filter(Boolean)
    .join(' ');
}

export function avModalFooterClasses(): string {
  return AV_MODAL_FOOTER;
}

export function avModalCloseTriggerClasses(): string {
  return AV_MODAL_CLOSE_TRIGGER;
}
