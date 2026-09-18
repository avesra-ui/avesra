import { Directionality } from '@angular/cdk/bidi';
import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  signal,
  untracked,
  viewChild,
} from '@angular/core';

import { AvTabsContext } from './tabs.context';
import { AvTabsListComponent } from './tabs-list.component';
import {
  avTabsListContainerClasses,
  avTabsListContainerScrollerClasses,
  avTabsListContainerScrollNextClasses,
  avTabsListContainerScrollPrevClasses,
} from './tabs.utils';

const SCROLL_OFFSET = 1;
const SCROLL_FACTOR = 0.8;
const RESIZE_DEBOUNCE_MS = 32;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-tabs-list-container]',
  template: `
    <div
      #scroller
      [class]="scrollerClasses()"
      [attr.data-orientation]="orientation()"
      [attr.data-left-scroll]="leftScroll() ? 'true' : null"
      [attr.data-right-scroll]="rightScroll() ? 'true' : null"
      [attr.data-left-right-scroll]="leftRightScroll() ? 'true' : null"
      [attr.data-top-scroll]="topScroll() ? 'true' : null"
      [attr.data-bottom-scroll]="bottomScroll() ? 'true' : null"
      [attr.data-top-bottom-scroll]="topBottomScroll() ? 'true' : null"
      (scroll)="onScroll()"
    >
      <ng-content />
    </div>

    <button
      type="button"
      [class]="scrollPrevClasses()"
      [attr.aria-label]="orientation() === 'vertical' ? 'Scroll tabs up' : 'Scroll tabs left'"
      tabindex="-1"
      (click)="scrollPage(-1)"
    >
      @if (orientation() === 'vertical') {
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.47 10.53a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 1 1-1.06 1.06L8 6.56l-3.97 3.97a.75.75 0 0 1-1.06 0"
          />
        </svg>
      } @else {
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0"
          />
        </svg>
      }
    </button>

    <button
      type="button"
      [class]="scrollNextClasses()"
      [attr.aria-label]="orientation() === 'vertical' ? 'Scroll tabs down' : 'Scroll tabs right'"
      tabindex="-1"
      (click)="scrollPage(1)"
    >
      @if (orientation() === 'vertical') {
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06"
          />
        </svg>
      } @else {
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.47 2.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 0-1.06"
          />
        </svg>
      }
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'data-slot': 'tabs-list-container',
  },
})
export class AvTabsListContainerComponent {
  private readonly context = inject(AvTabsContext);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly dir = inject(Directionality, { optional: true });

  private readonly scroller = viewChild<ElementRef<HTMLElement>>('scroller');
  private readonly listEl = contentChild(AvTabsListComponent, { read: ElementRef });

  /** Extra classes merged onto the list container host. */
  readonly customClass = input('', { alias: 'class' });

  /** Disables overflow chevrons and scroll-shadow detection. */
  readonly disablePagination = input(false, {
    alias: 'disable-pagination',
    transform: booleanAttribute,
  });

  private readonly hasScrollBefore = signal(false);
  private readonly hasScrollAfter = signal(false);

  private resizeObserver: ResizeObserver | null = null;
  private rafId: number | null = null;
  private resizeDebounceId: ReturnType<typeof setTimeout> | null = null;
  private lastSelectedKey: string | null | undefined = undefined;
  private observersReady = false;

  protected readonly orientation = computed(() => this.context.orientation());

  protected readonly classes = computed(() => avTabsListContainerClasses(this.customClass()));

  protected readonly scrollerClasses = computed(() => avTabsListContainerScrollerClasses());

  protected readonly scrollPrevClasses = computed(() => avTabsListContainerScrollPrevClasses());

  protected readonly scrollNextClasses = computed(() => avTabsListContainerScrollNextClasses());

  protected readonly leftScroll = computed(
    () =>
      !this.disablePagination() &&
      this.orientation() === 'horizontal' &&
      this.hasScrollBefore() &&
      !this.hasScrollAfter(),
  );

  protected readonly rightScroll = computed(
    () =>
      !this.disablePagination() &&
      this.orientation() === 'horizontal' &&
      this.hasScrollAfter() &&
      !this.hasScrollBefore(),
  );

  protected readonly leftRightScroll = computed(
    () =>
      !this.disablePagination() &&
      this.orientation() === 'horizontal' &&
      this.hasScrollBefore() &&
      this.hasScrollAfter(),
  );

  protected readonly topScroll = computed(
    () =>
      !this.disablePagination() &&
      this.orientation() === 'vertical' &&
      this.hasScrollBefore() &&
      !this.hasScrollAfter(),
  );

  protected readonly bottomScroll = computed(
    () =>
      !this.disablePagination() &&
      this.orientation() === 'vertical' &&
      this.hasScrollAfter() &&
      !this.hasScrollBefore(),
  );

  protected readonly topBottomScroll = computed(
    () =>
      !this.disablePagination() &&
      this.orientation() === 'vertical' &&
      this.hasScrollBefore() &&
      this.hasScrollAfter(),
  );

  constructor() {
    afterNextRender(() => {
      this.observersReady = true;
      this.updatePagination();
      this.observeLayoutTargets();
    });

    // Overflow / layout metrics — not selection scrolling.
    effect(() => {
      this.context.tabs();
      this.context.orientation();
      this.disablePagination();
      this.listEl();

      untracked(() => {
        this.scheduleOverflowCheck();
        if (this.observersReady) {
          this.observeLayoutTargets();
        }
      });
    });

    // Scroll selected tab into the scroller only when the selection changes.
    effect(() => {
      const selectedKey = this.context.selectedKey();

      untracked(() => {
        if (selectedKey === this.lastSelectedKey) {
          return;
        }

        const isFirstRun = this.lastSelectedKey === undefined;
        this.lastSelectedKey = selectedKey;

        if (isFirstRun) {
          // Avoid animating on initial render; align after the first layout pass.
          this.scheduleOverflowCheck();
          this.scheduleScrollSelectedIntoScroller();
          return;
        }

        this.scheduleOverflowCheck();
        this.scrollSelectedIntoScroller('auto');
      });
    });

    if (isPlatformBrowser(this.platformId)) {
      const onWindowResize = (): void => this.scheduleOverflowCheck(true);
      window.addEventListener('resize', onWindowResize);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('resize', onWindowResize);
        this.resizeObserver?.disconnect();
        if (this.rafId != null) {
          cancelAnimationFrame(this.rafId);
        }
        if (this.resizeDebounceId != null) {
          clearTimeout(this.resizeDebounceId);
        }
      });
    }
  }

  protected onScroll(): void {
    this.checkOverflow();
  }

  /** Scroll the tab list by roughly one viewport page. */
  protected scrollPage(direction: 1 | -1): void {
    const el = this.getScroller();
    if (!el || this.disablePagination()) {
      return;
    }

    const isVertical = this.orientation() === 'vertical';
    const size = isVertical ? el.clientHeight : el.clientWidth;
    const delta = direction * size * SCROLL_FACTOR;

    el.scrollBy({
      behavior: 'smooth',
      [isVertical ? 'top' : 'left']: this.isRtl() && !isVertical ? -delta : delta,
    });
  }

  /** Public-style entry like Material `updatePagination()`. */
  private updatePagination(): void {
    this.checkOverflow();
  }

  private scheduleOverflowCheck(debounce = false): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (debounce) {
      if (this.resizeDebounceId != null) {
        clearTimeout(this.resizeDebounceId);
      }
      this.resizeDebounceId = setTimeout(() => {
        this.resizeDebounceId = null;
        this.checkOverflow();
      }, RESIZE_DEBOUNCE_MS);
      return;
    }

    if (typeof requestAnimationFrame !== 'function') {
      this.checkOverflow();
      return;
    }

    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
    }

    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.checkOverflow();
    });
  }

  private scheduleScrollSelectedIntoScroller(): void {
    if (!isPlatformBrowser(this.platformId) || typeof requestAnimationFrame !== 'function') {
      this.scrollSelectedIntoScroller('auto');
      return;
    }

    requestAnimationFrame(() => this.scrollSelectedIntoScroller('auto'));
  }

  private checkOverflow(): void {
    if (this.disablePagination() || !isPlatformBrowser(this.platformId)) {
      this.hasScrollBefore.set(false);
      this.hasScrollAfter.set(false);
      return;
    }

    const el = this.getScroller();
    if (!el) {
      return;
    }

    const isVertical = this.orientation() === 'vertical';
    const scrollStart = isVertical ? el.scrollTop : el.scrollLeft;
    const scrollSize = isVertical ? el.scrollHeight : el.scrollWidth;
    const clientSize = isVertical ? el.clientHeight : el.clientWidth;
    // Mirror Material's small threshold to avoid Safari enable/disable flicker.
    const overflowAmount = scrollSize - clientSize;

    if (overflowAmount < 5) {
      this.hasScrollBefore.set(false);
      this.hasScrollAfter.set(false);
      return;
    }

    const start = Math.abs(scrollStart);
    this.hasScrollBefore.set(start > SCROLL_OFFSET);
    this.hasScrollAfter.set(start + clientSize + SCROLL_OFFSET < scrollSize);
  }

  private observeLayoutTargets(): void {
    if (!isPlatformBrowser(this.platformId) || typeof ResizeObserver === 'undefined') {
      return;
    }

    const scroller = this.getScroller();
    if (!scroller) {
      return;
    }

    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => this.scheduleOverflowCheck(true));
    this.resizeObserver.observe(scroller);

    const listNative = this.listEl()?.nativeElement as HTMLElement | undefined;
    if (listNative) {
      this.resizeObserver.observe(listNative);
    }

    for (const tab of this.context.tabs()) {
      this.resizeObserver.observe(tab.elementRef.nativeElement);
    }
  }

  /**
   * Scrolls the selected tab into the scroller viewport without using
   * `Element.scrollIntoView()` (which can scroll the page). Mirrors Material `_scrollToLabel`.
   */
  private scrollSelectedIntoScroller(behavior: ScrollBehavior = 'auto'): void {
    if (this.disablePagination() || !isPlatformBrowser(this.platformId)) {
      return;
    }

    const scroller = this.getScroller();
    const tab = this.context.getTab(this.context.selectedKey());
    if (!scroller || !tab) {
      return;
    }

    const tabEl = tab.elementRef.nativeElement;
    const scrollerRect = scroller.getBoundingClientRect();
    const tabRect = tabEl.getBoundingClientRect();
    const isVertical = this.orientation() === 'vertical';

    if (isVertical) {
      if (tabRect.top < scrollerRect.top) {
        scroller.scrollBy({ top: tabRect.top - scrollerRect.top, behavior });
      } else if (tabRect.bottom > scrollerRect.bottom) {
        scroller.scrollBy({ top: tabRect.bottom - scrollerRect.bottom, behavior });
      }
      return;
    }

    if (tabRect.left < scrollerRect.left) {
      scroller.scrollBy({ left: tabRect.left - scrollerRect.left, behavior });
    } else if (tabRect.right > scrollerRect.right) {
      scroller.scrollBy({ left: tabRect.right - scrollerRect.right, behavior });
    }
  }

  private getScroller(): HTMLElement | null {
    return this.scroller()?.nativeElement ?? null;
  }

  private isRtl(): boolean {
    return this.dir?.value === 'rtl';
  }
}
