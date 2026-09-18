import { inject, Injectable, signal } from '@angular/core';

import { AV_TOAST_CONFIG } from './toast.token';
import type {
  AvToastAddOptions,
  AvToastHeightEntry,
  AvToastMessage,
  AvToastPromiseMessage,
  AvToastPromiseOptions,
  AvToastVariant,
} from './toast.types';
import { AV_TOAST_TIMEOUT_DEFAULT, avToastNextId } from './toast.utils';

@Injectable()
export class AvToastService {
  private readonly config = inject(AV_TOAST_CONFIG, { optional: true });

  private readonly messagesState = signal<AvToastMessage[]>([]);
  private readonly heightsState = signal<AvToastHeightEntry[]>([]);
  private readonly dismissRequestsState = signal<ReadonlySet<string>>(new Set());

  /** All active toast messages (newest first). */
  readonly messages = this.messagesState.asReadonly();

  /** Measured heights keyed by toast id, ordered to match message order. */
  readonly heights = this.heightsState.asReadonly();

  /** Ids that should begin their exit animation. */
  readonly dismissRequests = this.dismissRequestsState.asReadonly();

  add(title: string, options: AvToastAddOptions = {}): string {
    const message = this.createMessage(title, options);
    this.messagesState.update((current) => [message, ...current]);
    return message.id;
  }

  addAll(messages: Array<{ title: string } & AvToastAddOptions>): void {
    const items = messages.map((entry) => this.createMessage(entry.title, entry));
    this.messagesState.update((current) => [...items, ...current]);
  }

  /** Patch an existing toast in place (used by `promise()` and loading flows). */
  update(id: string, patch: Partial<Omit<AvToastMessage, 'id'>>): void {
    this.messagesState.update((current) =>
      current.map((message) =>
        message.id === id
          ? {
              ...message,
              ...patch,
              id,
              updated: true,
            }
          : { ...message, updated: false },
      ),
    );
  }

  /**
   * Shows a loading toast, then swaps it to success/error when the promise settles.
   * Returns the toast id (same id across loading → result).
   */
  promise<T>(
    promiseOrFactory: Promise<T> | (() => Promise<T>),
    options: AvToastPromiseOptions<T>,
  ): string {
    const id = this.add(options.loading, {
      description: options.description,
      key: options.key,
      closable: options.closable,
      hideIndicator: options.hideIndicator,
      actionLabel: options.actionLabel,
      action: options.action,
      onClose: options.onClose,
      isLoading: true,
      sticky: true,
      life: 0,
      variant: 'default',
    });

    const pending =
      typeof promiseOrFactory === 'function' ? promiseOrFactory() : promiseOrFactory;

    let settled = false;

    pending
      .then((data) => {
        settled = true;
        const title = this.resolvePromiseMessage(options.success, data);
        this.update(id, {
          title,
          description: options.description,
          variant: 'success',
          isLoading: false,
          sticky: false,
          life: this.config?.life ?? AV_TOAST_TIMEOUT_DEFAULT,
        });
      })
      .catch((error: unknown) => {
        settled = true;
        const title = this.resolvePromiseMessage(
          options.error ?? 'Something went wrong',
          error,
        );
        this.update(id, {
          title,
          description: options.description,
          variant: 'danger',
          isLoading: false,
          sticky: false,
          life: this.config?.life ?? AV_TOAST_TIMEOUT_DEFAULT,
        });
      })
      .finally(() => {
        if (!settled) {
          this.close(id);
        }

        options.finally?.();
      });

    return id;
  }

  /** Request dismiss animation for one toast (or no-op if already gone). */
  close(id: string): void {
    if (!this.messagesState().some((message) => message.id === id)) {
      return;
    }

    this.dismissRequestsState.update((current) => {
      if (current.has(id)) {
        return current;
      }

      const next = new Set(current);
      next.add(id);
      return next;
    });
  }

  /** Request dismiss for all toasts, optionally filtered by region key. */
  clear(key?: string): void {
    const ids = this.messagesState()
      .filter((message) => key === undefined || message.key === key)
      .map((message) => message.id);

    if (ids.length === 0) {
      return;
    }

    this.dismissRequestsState.update((current) => {
      const next = new Set(current);
      for (const id of ids) {
        next.add(id);
      }
      return next;
    });
  }

  /** Remove toast from the store after exit animation completes. */
  remove(id: string): void {
    this.messagesState.update((current) => current.filter((message) => message.id !== id));
    this.removeHeight(id);
    this.dismissRequestsState.update((current) => {
      if (!current.has(id)) {
        return current;
      }

      const next = new Set(current);
      next.delete(id);
      return next;
    });
  }

  addHeight(entry: AvToastHeightEntry): void {
    this.heightsState.update((current) => {
      const without = current.filter((height) => height.toastId !== entry.toastId);
      return this.sortHeights([entry, ...without]);
    });
  }

  removeHeight(toastId: string): void {
    this.heightsState.update((current) => current.filter((height) => height.toastId !== toastId));
  }

  success(title: string, options: Omit<AvToastAddOptions, 'variant'> = {}): string {
    return this.add(title, { ...options, variant: 'success' });
  }

  danger(title: string, options: Omit<AvToastAddOptions, 'variant'> = {}): string {
    return this.add(title, { ...options, variant: 'danger' });
  }

  info(title: string, options: Omit<AvToastAddOptions, 'variant'> = {}): string {
    return this.add(title, { ...options, variant: 'accent' });
  }

  warning(title: string, options: Omit<AvToastAddOptions, 'variant'> = {}): string {
    return this.add(title, { ...options, variant: 'warning' });
  }

  private resolvePromiseMessage<T>(
    message: AvToastPromiseMessage<T>,
    value: T,
  ): string {
    return typeof message === 'function' ? message(value) : message;
  }

  private sortHeights(entries: AvToastHeightEntry[]): AvToastHeightEntry[] {
    const order = this.messagesState();
    return [...entries].sort(
      (a, b) =>
        order.findIndex((message) => message.id === a.toastId) -
        order.findIndex((message) => message.id === b.toastId),
    );
  }

  private createMessage(title: string, options: AvToastAddOptions): AvToastMessage {
    const defaultLife = this.config?.life ?? AV_TOAST_TIMEOUT_DEFAULT;
    const life = options.life !== undefined ? options.life : defaultLife;

    return {
      id: avToastNextId(),
      title,
      description: options.description,
      variant: options.variant ?? 'default',
      key: options.key,
      life,
      sticky: options.sticky ?? life === 0,
      closable: options.closable ?? true,
      isLoading: options.isLoading ?? false,
      hideIndicator: options.hideIndicator ?? false,
      actionLabel: options.actionLabel,
      action: options.action,
      onClose: options.onClose,
    };
  }
}

export type { AvToastVariant };
