import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnDestroy,
  output,
  signal,
  TemplateRef,
  untracked,
  viewChild,
} from '@angular/core';

import { AvButtonComponent } from '../button/button.component';
import { AvCloseButtonComponent } from '../close-button/close-button.component';
import { AvToastService } from './toast.service';
import type { AvToastItemCloseEvent, AvToastMessage, AvToastPlacement } from './toast.types';
import {
  AV_TOAST_ENTER_MS,
  AV_TOAST_EXIT_MS,
  AV_TOAST_SWIPE_THRESHOLD_DEFAULT,
  avToastActionClasses,
  avToastClasses,
  avToastCloseClasses,
  avToastContentClasses,
  avToastDescriptionClasses,
  avToastIconNameForVariant,
  avToastIndicatorClasses,
  avToastIsBottomPlacement,
  avToastOffset,
  avToastStackStyles,
  avToastTitleClasses,
} from './toast.utils';

@Component({
  selector: 'av-toast-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AvButtonComponent, AvCloseButtonComponent, NgTemplateOutlet],
  template: `
    @if (rendered()) {
      <div
        #container
        [class]="toastClasses()"
        [style]="stackStyle()"
        [attr.data-front]="isFrontmost() ? 'true' : 'false'"
        [attr.data-frontmost]="isFrontmost() ? 'true' : 'false'"
        [attr.data-expanded]="expanded() ? 'true' : 'false'"
        [attr.data-hidden]="isHidden() ? 'true' : 'false'"
        [attr.data-visible]="isHidden() ? 'false' : 'true'"
        [attr.data-entering]="entering() ? 'true' : null"
        [attr.data-exiting]="exiting() ? 'true' : null"
        [attr.data-removed]="exiting() ? 'true' : null"
        [attr.data-swiping]="swiping() ? 'true' : 'false'"
        [attr.data-swipe-out]="swipeOut() ? 'true' : null"
        [attr.data-index]="index()"
        [attr.role]="role()"
        aria-live="polite"
        aria-atomic="true"
        (pointerdown)="onPointerDown($event)"
        (pointermove)="onPointerMove($event)"
        (pointerup)="onPointerUp()"
        (pointercancel)="onPointerUp()"
      >
        @if (!message().hideIndicator) {
          <div [class]="indicatorClasses()" data-slot="toast-indicator">
            @if (message().isLoading) {
              @if (loadingIcon(); as icon) {
                <ng-container *ngTemplateOutlet="icon" />
              } @else {
                <svg
                  data-slot="spinner"
                  class="animate-spin"
                  aria-hidden="true"
                  role="presentation"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    data-slot="spinner-icon"
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-dasharray="28"
                    stroke-dashoffset="8"
                  />
                </svg>
              }
            } @else {
              @switch (iconName()) {
                @case ('success') {
                  @if (successIcon(); as icon) {
                    <ng-container *ngTemplateOutlet="icon" />
                  } @else {
                    <svg
                      data-slot="toast-default-icon"
                      aria-hidden="true"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.9-1.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z"
                      />
                    </svg>
                  }
                }
                @case ('warning') {
                  @if (warningIcon(); as icon) {
                    <ng-container *ngTemplateOutlet="icon" />
                  } @else {
                    <svg
                      data-slot="toast-default-icon"
                      aria-hidden="true"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.134 2.994L2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      />
                    </svg>
                  }
                }
                @case ('danger') {
                  @if (dangerIcon(); as icon) {
                    <ng-container *ngTemplateOutlet="icon" />
                  } @else {
                    <svg
                      data-slot="toast-default-icon"
                      aria-hidden="true"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"
                      />
                    </svg>
                  }
                }
                @default {
                  @if (infoIcon(); as icon) {
                    <ng-container *ngTemplateOutlet="icon" />
                  } @else {
                    <svg
                      data-slot="toast-default-icon"
                      aria-hidden="true"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z"
                      />
                    </svg>
                  }
                }
              }
            }
          </div>
        }

        <div [class]="contentClasses()" data-slot="toast-content">
          <div [class]="titleClasses()" data-slot="toast-title">{{ message().title }}</div>
          @if (message().description) {
            <div [class]="descriptionClasses()" data-slot="toast-description">
              {{ message().description }}
            </div>
          }
          @if (message().actionLabel) {
            <div [class]="actionClasses() + ' sm:hidden'">
              <button av-button size="sm" variant="tertiary" (click)="onActionClick()">
                {{ message().actionLabel }}
              </button>
            </div>
          }
        </div>

        @if (message().actionLabel) {
          <div [class]="actionClasses() + ' hidden sm:block'">
            <button av-button size="sm" variant="tertiary" (click)="onActionClick()">
              {{ message().actionLabel }}
            </button>
          </div>
        }

        @if (message().closable !== false) {
          <button
            av-close-button
            type="button"
            [class]="closeClasses()"
            (click)="onCloseClick($event)"
          ></button>
        }
      </div>
    }
  `,
})
export class AvToastItemComponent implements AfterViewInit, OnDestroy {
  private readonly toastService = inject(AvToastService);
  private readonly containerRef = viewChild<ElementRef<HTMLElement>>('container');

  readonly message = input.required<AvToastMessage>();
  readonly index = input.required<number>();
  readonly total = input.required<number>();
  readonly life = input(4000, { transform: numberAttribute });
  readonly placement = input.required<AvToastPlacement>();
  readonly gap = input(12, { transform: numberAttribute });
  readonly scaleFactor = input(0.05);
  readonly maxVisible = input(3, { transform: numberAttribute });
  readonly expanded = input(false, { transform: booleanAttribute });
  readonly interacting = input(false, { transform: booleanAttribute });
  readonly heightsBefore = input(0, { transform: numberAttribute });
  readonly frontHeight = input<number | undefined>(undefined);
  readonly swipeThreshold = input(AV_TOAST_SWIPE_THRESHOLD_DEFAULT, {
    transform: numberAttribute,
  });

  readonly successIcon = input<TemplateRef<unknown> | undefined>();
  readonly dangerIcon = input<TemplateRef<unknown> | undefined>();
  readonly warningIcon = input<TemplateRef<unknown> | undefined>();
  readonly infoIcon = input<TemplateRef<unknown> | undefined>();
  readonly loadingIcon = input<TemplateRef<unknown> | undefined>();

  readonly closed = output<AvToastItemCloseEvent>();

  protected readonly rendered = signal(true);
  protected readonly entering = signal(false);
  protected readonly exiting = signal(false);
  protected readonly swiping = signal(false);
  protected readonly swipeOut = signal(false);
  private readonly initialHeight = signal<number | undefined>(undefined);
  private readonly ready = signal(false);
  private initialized = false;

  protected readonly toastClasses = computed(() =>
    avToastClasses(this.message().variant ?? 'default', this.placement()),
  );
  protected readonly contentClasses = computed(() => avToastContentClasses());
  protected readonly indicatorClasses = computed(() => avToastIndicatorClasses());
  protected readonly titleClasses = computed(() => avToastTitleClasses());
  protected readonly descriptionClasses = computed(() => avToastDescriptionClasses());
  protected readonly closeClasses = computed(() => avToastCloseClasses());
  protected readonly actionClasses = computed(() => avToastActionClasses());
  protected readonly iconName = computed(() =>
    avToastIconNameForVariant(this.message().variant ?? 'default'),
  );
  protected readonly isFrontmost = computed(() => this.index() === 0);
  protected readonly isHidden = computed(() => this.index() >= this.maxVisible());
  protected readonly role = computed(() => {
    if (this.message().isLoading) {
      return 'status';
    }

    return this.message().variant === 'danger' ? 'alert' : 'status';
  });

  protected readonly stackStyle = computed(() => {
    const offset = avToastOffset({
      index: this.index(),
      gap: this.gap(),
      heightsBefore: this.heightsBefore(),
    });

    const styles = avToastStackStyles({
      index: this.index(),
      total: this.total(),
      gap: this.gap(),
      scaleFactor: this.scaleFactor(),
      placement: this.placement(),
      offset,
      frontHeight: this.frontHeight(),
      initialHeight: this.initialHeight(),
    });

    return Object.entries(styles)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; ');
  });

  private dismissTimeout: ReturnType<typeof setTimeout> | null = null;
  private enterTimeout: ReturnType<typeof setTimeout> | null = null;
  private exitTimeout: ReturnType<typeof setTimeout> | null = null;
  private isClosing = false;
  private isDestroyed = false;
  private resizeObserver: ResizeObserver | null = null;
  private remainingTime = 0;
  private timerStartedAt = 0;
  private timerPausedAt = 0;
  private pointerStart: { x: number; y: number } | null = null;
  private swipeAmount = 0;

  constructor() {
    effect(() => {
      const id = this.message().id;
      if (!this.toastService.dismissRequests().has(id)) {
        return;
      }

      untracked(() => this.dismiss());
    });

    effect(() => {
      const msg = this.message();
      if (!msg.updated || this.isClosing) {
        return;
      }

      untracked(() => {
        this.clearDismissTimeout();
        this.remainingTime = msg.life ?? this.life();
        this.observeHeight();

        if (this.ready() && !msg.sticky && msg.life !== 0 && !this.expanded() && !this.interacting()) {
          this.startTimer();
        }
      });
    });

    effect(() => {
      const expanded = this.expanded();
      const interacting = this.interacting();
      const ready = this.ready();
      const msg = this.message();

      if (!ready || msg.sticky || msg.life === 0 || msg.isLoading || this.isClosing) {
        return;
      }

      untracked(() => {
        if (expanded || interacting) {
          this.pauseTimer();
        } else {
          this.startTimer();
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    this.clearDismissTimeout();
    this.clearEnterTimeout();
    this.clearExitTimeout();
    this.resizeObserver?.disconnect();
    this.toastService.removeHeight(this.message().id);
  }

  protected onCloseClick(event: Event): void {
    event.preventDefault();
    this.dismiss();
  }

  protected onActionClick(): void {
    this.message().action?.();
  }

  protected onPointerDown(event: PointerEvent): void {
    if (this.message().closable === false || this.message().isLoading) {
      return;
    }

    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      return;
    }

    target.setPointerCapture?.(event.pointerId);
    this.swiping.set(true);
    this.pointerStart = { x: event.clientX, y: event.clientY };
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.pointerStart) {
      return;
    }

    const deltaY = event.clientY - this.pointerStart.y;
    const isBottom = avToastIsBottomPlacement(this.placement());
    const clamped = isBottom ? Math.max(0, deltaY) : Math.min(0, deltaY);
    const threshold = event.pointerType === 'touch' ? 10 : 2;

    if (Math.abs(clamped) < threshold && Math.abs(event.clientX - this.pointerStart.x) > threshold) {
      this.pointerStart = null;
      this.swiping.set(false);
      this.setSwipeAmount(0);
      return;
    }

    if (Math.abs(clamped) >= threshold) {
      this.setSwipeAmount(clamped);
    }
  }

  protected onPointerUp(): void {
    if (!this.swiping()) {
      return;
    }

    const amount = Math.abs(this.swipeAmount);
    this.pointerStart = null;
    this.swiping.set(false);

    if (amount >= this.swipeThreshold()) {
      this.swipeOut.set(true);
      this.dismiss();
      return;
    }

    this.setSwipeAmount(0);
  }

  dismiss(): void {
    if (this.isClosing || this.isDestroyed) {
      return;
    }

    this.isClosing = true;
    this.clearDismissTimeout();
    this.exiting.set(true);
    this.entering.set(false);
    this.toastService.removeHeight(this.message().id);

    this.clearExitTimeout();
    this.exitTimeout = setTimeout(() => {
      if (this.isDestroyed) {
        return;
      }

      this.rendered.set(false);
      const event = { index: this.index(), message: this.message() };
      this.toastService.remove(this.message().id);
      this.closed.emit(event);
      this.message().onClose?.();
    }, AV_TOAST_EXIT_MS);
  }

  private setSwipeAmount(amount: number): void {
    this.swipeAmount = amount;
    const element = this.containerRef()?.nativeElement;
    element?.style.setProperty('--swipe-amount', `${amount}px`);
  }

  private init(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.rendered.set(true);
    this.entering.set(true);

    const msg = this.message();
    this.remainingTime = msg.life ?? this.life();
    this.observeHeight();

    this.clearEnterTimeout();
    this.enterTimeout = setTimeout(() => {
      this.entering.set(false);
      this.ready.set(true);

      if (
        !this.expanded() &&
        !this.interacting() &&
        !msg.sticky &&
        msg.life !== 0 &&
        !msg.isLoading
      ) {
        this.startTimer();
      }
    }, AV_TOAST_ENTER_MS);
  }

  private startTimer(): void {
    const msg = this.message();

    if (
      this.dismissTimeout !== null ||
      msg.sticky ||
      msg.life === 0 ||
      msg.isLoading ||
      this.isClosing ||
      this.remainingTime <= 0
    ) {
      return;
    }

    this.timerStartedAt = Date.now();
    this.timerPausedAt = 0;

    this.dismissTimeout = setTimeout(() => {
      this.dismiss();
    }, this.remainingTime);
  }

  private pauseTimer(): void {
    if (this.dismissTimeout === null) {
      return;
    }

    if (this.timerPausedAt < this.timerStartedAt) {
      const elapsed = Date.now() - this.timerStartedAt;
      this.remainingTime = Math.max(0, this.remainingTime - elapsed);
    }

    this.timerPausedAt = Date.now();
    this.clearDismissTimeout();
  }

  private clearDismissTimeout(): void {
    if (this.dismissTimeout !== null) {
      clearTimeout(this.dismissTimeout);
      this.dismissTimeout = null;
    }
  }

  private clearEnterTimeout(): void {
    if (this.enterTimeout !== null) {
      clearTimeout(this.enterTimeout);
      this.enterTimeout = null;
    }
  }

  private clearExitTimeout(): void {
    if (this.exitTimeout !== null) {
      clearTimeout(this.exitTimeout);
      this.exitTimeout = null;
    }
  }

  private observeHeight(): void {
    const element = this.containerRef()?.nativeElement;

    if (!element || typeof ResizeObserver === 'undefined') {
      return;
    }

    const publish = (height: number): void => {
      if (height <= 0) {
        return;
      }

      if (!this.expanded() && !this.isFrontmost() && this.initialHeight() !== undefined) {
        return;
      }

      this.initialHeight.set(height);
      this.toastService.addHeight({
        toastId: this.message().id,
        height,
        key: this.message().key,
      });
    };

    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => {
      publish(element.getBoundingClientRect().height);
    });
    this.resizeObserver.observe(element);
    publish(element.getBoundingClientRect().height);
  }
}
