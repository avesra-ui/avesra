import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  output,
  signal,
  TemplateRef,
  untracked,
} from '@angular/core';

import { AV_TOAST_CONFIG } from './toast.token';
import { AvToastItemComponent } from './toast-item.component';
import { AvToastService } from './toast.service';
import type { AvToastItemCloseEvent, AvToastMessage, AvToastPlacement } from './toast.types';
import {
  AV_TOAST_GAP_DEFAULT,
  AV_TOAST_MAX_VISIBLE_DEFAULT,
  AV_TOAST_SCALE_FACTOR_DEFAULT,
  AV_TOAST_SWIPE_THRESHOLD_DEFAULT,
  AV_TOAST_TIMEOUT_DEFAULT,
  AV_TOAST_WIDTH_DEFAULT,
  avToastRegionClasses,
} from './toast.utils';

@Component({
  selector: 'av-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AvToastItemComponent],
  template: `
    @for (msg of messages(); track msg.id; let i = $index) {
      <av-toast-item
        [message]="msg"
        [index]="i"
        [total]="messages().length"
        [life]="life()"
        [placement]="placement()"
        [gap]="gap()"
        [scaleFactor]="scaleFactor()"
        [maxVisible]="maxVisibleToasts()"
        [expanded]="isExpanded()"
        [interacting]="interacting()"
        [heightsBefore]="heightsBefore(i)"
        [frontHeight]="frontHeight()"
        [swipeThreshold]="swipeThreshold()"
        [successIcon]="successIcon()"
        [dangerIcon]="dangerIcon()"
        [warningIcon]="warningIcon()"
        [infoIcon]="infoIcon()"
        [loadingIcon]="loadingIcon()"
        (closed)="onItemClosed($event)"
      />
    }
  `,
  host: {
    '[class]': 'regionClasses()',
    '[style]': 'regionStyles()',
    'data-slot': 'toast-region',
    '[attr.data-expanded]': 'isExpanded() ? "true" : "false"',
    tabindex: '-1',
    '(mouseenter)': 'onRegionMouseEnter()',
    '(mousemove)': 'onRegionMouseEnter()',
    '(mouseleave)': 'onRegionMouseLeave()',
    '(pointerdown)': 'onRegionPointerDown($event)',
    '(pointerup)': 'onRegionPointerUp()',
  },
})
export class AvToastComponent {
  private readonly toastService = inject(AvToastService);
  private readonly config = inject(AV_TOAST_CONFIG, { optional: true });

  /** Routes messages with a matching `key`. */
  readonly key = input<string | undefined>();

  /** Default auto-dismiss duration in milliseconds. */
  readonly life = input(this.config?.life ?? AV_TOAST_TIMEOUT_DEFAULT, {
    transform: numberAttribute,
  });

  /** Region placement. */
  readonly placement = input<AvToastPlacement>('bottom');

  /** Maximum number of visible stacked toasts. */
  readonly maxVisibleToasts = input(this.config?.maxVisibleToasts ?? AV_TOAST_MAX_VISIBLE_DEFAULT, {
    alias: 'max-visible-toasts',
    transform: numberAttribute,
  });

  /** Toast region width in pixels. */
  readonly width = input(this.config?.width ?? AV_TOAST_WIDTH_DEFAULT, {
    transform: numberAttribute,
  });

  /** Gap between stacked toasts in pixels. */
  readonly gap = input(this.config?.gap ?? AV_TOAST_GAP_DEFAULT, { transform: numberAttribute });

  /** Scale factor applied per stacked toast when collapsed. */
  readonly scaleFactor = input(this.config?.scaleFactor ?? AV_TOAST_SCALE_FACTOR_DEFAULT, {
    alias: 'scale-factor',
  });

  /** When true, the stack stays expanded (no collapsed peek). */
  readonly expand = input(false, { transform: booleanAttribute });

  /** Vertical swipe distance (px) required to dismiss. */
  readonly swipeThreshold = input(
    this.config?.swipeThreshold ?? AV_TOAST_SWIPE_THRESHOLD_DEFAULT,
    { alias: 'swipe-threshold', transform: numberAttribute },
  );

  /** Prevents adding duplicate open toasts with the same title and description. */
  readonly preventDuplicates = input(false, {
    alias: 'prevent-duplicates',
    transform: booleanAttribute,
  });

  /** Emitted after a toast is removed. */
  readonly closed = output<AvToastItemCloseEvent>();

  /** Optional icon overrides projected into the region. */
  readonly successIcon = contentChild<TemplateRef<unknown>>('successIcon');
  readonly dangerIcon = contentChild<TemplateRef<unknown>>('dangerIcon');
  readonly warningIcon = contentChild<TemplateRef<unknown>>('warningIcon');
  readonly infoIcon = contentChild<TemplateRef<unknown>>('infoIcon');
  readonly loadingIcon = contentChild<TemplateRef<unknown>>('loadingIcon');

  protected readonly interacting = signal(false);

  /** Hover expand state; resets when the region queue changes. */
  protected readonly expanded = linkedSignal({
    source: () => ({
      messages: this.toastService.messages(),
      key: this.key(),
    }),
    computation: ({ messages, key }) => messages.filter((message) => message.key === key).length < 1,
  });

  protected readonly messages = computed(() => {
    const key = this.key();
    return this.toastService.messages().filter((message) => message.key === key);
  });

  protected readonly regionHeights = computed(() => {
    const ids = new Set(this.messages().map((message) => message.id));
    return this.toastService.heights().filter((entry) => ids.has(entry.toastId));
  });

  protected readonly frontHeight = computed(() => this.regionHeights()[0]?.height);

  protected readonly isExpanded = computed(() => this.expand() || this.expanded());

  protected readonly regionClasses = computed(() => avToastRegionClasses(this.placement()));

  protected readonly regionStyles = computed(() => {
    const front = this.frontHeight();
    const parts = [
      `--av-toast-width: ${this.width()}px`,
      `--av-gap: ${this.gap()}px`,
      `--av-scale-factor: ${this.scaleFactor()}`,
    ];

    if (front !== undefined) {
      parts.push(`--front-toast-height: ${front}px`);
    }

    return parts.join('; ');
  });

  constructor() {
    effect(() => {
      if (!this.preventDuplicates()) {
        return;
      }

      const current = this.messages();

      // Only suppress duplicates among currently open toasts (newest first).
      // Keep the oldest open copy; remove newer duplicates.
      const seen = new Set<string>();
      for (let index = current.length - 1; index >= 0; index -= 1) {
        const message = current[index];
        const token = this.contentToken(message);

        if (seen.has(token)) {
          untracked(() => this.toastService.remove(message.id));
          continue;
        }

        seen.add(token);
      }
    });
  }

  protected heightsBefore(index: number): number {
    return this.regionHeights()
      .slice(0, index)
      .reduce((sum, entry) => sum + entry.height, 0);
  }

  protected onRegionMouseEnter(): void {
    this.expanded.set(true);
  }

  protected onRegionMouseLeave(): void {
    if (!this.interacting()) {
      this.expanded.set(false);
    }
  }

  protected onRegionPointerDown(event: PointerEvent): void {
    if (event.target instanceof HTMLElement && event.target.tagName === 'BUTTON') {
      return;
    }

    this.interacting.set(true);
  }

  protected onRegionPointerUp(): void {
    this.interacting.set(false);
  }

  protected onItemClosed(event: AvToastItemCloseEvent): void {
    this.closed.emit(event);
  }

  private contentToken(message: AvToastMessage): string {
    return `${message.title}\0${message.description ?? ''}\0${message.variant ?? 'default'}`;
  }
}
