export type AvToastVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger';

export type AvToastPlacement =
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'top'
  | 'top-start'
  | 'top-end';

export interface AvToastOptions {
  description?: string;
  variant?: AvToastVariant;
  key?: string;
  life?: number;
  sticky?: boolean;
  closable?: boolean;
  isLoading?: boolean;
  hideIndicator?: boolean;
  actionLabel?: string;
  action?: () => void;
  onClose?: () => void;
}

export interface AvToastMessage extends AvToastOptions {
  id: string;
  title: string;
  /** Set when an in-place update should reset the auto-dismiss timer. */
  updated?: boolean;
}

export type AvToastAddOptions = Omit<AvToastOptions, never>;

export type AvToastPromiseMessage<T = unknown> = string | ((value: T) => string);

export interface AvToastPromiseOptions<T = unknown>
  extends Omit<AvToastAddOptions, 'variant' | 'isLoading' | 'sticky' | 'life' | 'title'> {
  loading: string;
  success: AvToastPromiseMessage<T>;
  error?: AvToastPromiseMessage<unknown>;
  finally?: () => void;
}

export interface AvToastItemCloseEvent {
  index: number;
  message: AvToastMessage;
}

export interface AvToastHeightEntry {
  toastId: string;
  height: number;
  key?: string;
}

export interface AvToastConfig {
  life?: number;
  gap?: number;
  width?: number;
  maxVisibleToasts?: number;
  scaleFactor?: number;
  /** Pixels of vertical swipe required to dismiss. */
  swipeThreshold?: number;
}
