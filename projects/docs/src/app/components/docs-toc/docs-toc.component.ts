import {
  afterNextRender,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  signal,
  untracked,
} from '@angular/core';
import { Router, RouterLink, type UrlTree } from '@angular/router';

import type { DocTocItem } from '../../models/doc-toc.model';
import { scrollDocsAnchorIntoView } from '../../utils/docs-anchor-scroll';
import { AppIconComponent } from '../app-icon/app-icon.component';
import { DocsTocNewsletterComponent } from './docs-toc-newsletter.component';

/** Heading must pass this line when no section intersects the viewport. */
const READ_LINE_OFFSET_PX = 120;

@Component({
  selector: 'app-docs-toc',
  imports: [AppIconComponent, DocsTocNewsletterComponent, RouterLink],
  templateUrl: './docs-toc.component.html',
  styleUrl: './docs-toc.component.scss',
})
export class DocsTocComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly injector = inject(Injector);
  private readonly router = inject(Router);

  readonly items = input<DocTocItem[]>([]);

  readonly activeIds = signal<string[]>([]);
  readonly thumbTop = signal(0);
  readonly thumbHeight = signal(0);
  readonly thumbVisible = signal(false);

  private scrollContainer: HTMLElement | null = null;
  private resizeListener: (() => void) | null = null;
  private contentResizeObserver: ResizeObserver | null = null;
  /** Last section id we auto-scrolled the TOC list to (outer scroll spy). */
  private lastTocAutoScrollId: string | null = null;

  constructor() {
    effect(() => {
      const items = this.items();

      untracked(() => {
        afterNextRender(
          () => {
            if (items.length > 0) {
              this.setupScrollSpy();
            }
          },
          { injector: this.injector },
        );
      });
    });

    this.destroyRef.onDestroy(() => {
      this.teardownScrollSpy();
    });
  }

  isActive(id: string): boolean {
    return this.activeIds().includes(id);
  }

  onTocClick(event: MouseEvent, id: string): void {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    event.preventDefault();
    void this.router.navigateByUrl(this.linkFor(id), { replaceUrl: true }).then(() => {
      scrollDocsAnchorIntoView(id);
    });
  }

  /** Same URL path as the active doc page; TOC lives on the layout route, not the leaf route. */
  linkFor(id: string): UrlTree {
    const url = this.router.parseUrl(this.router.url);
    url.fragment = id;
    return url;
  }

  private readonly onScroll = (): void => {
    this.syncActiveIds();
  };

  private setupScrollSpy(): void {
    this.teardownScrollSpy();

    const container = this.getScrollContainer();
    const contentRoot = this.getContentRoot();

    if (!contentRoot || this.items().length === 0) {
      this.activeIds.set([]);
      this.thumbVisible.set(false);
      return;
    }

    this.scrollContainer = container;
    this.resizeListener = this.onScroll;

    if (container) {
      container.addEventListener('scroll', this.onScroll, { passive: true });
    }

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });

    this.contentResizeObserver = new ResizeObserver(() => {
      this.syncActiveIds();
    });
    this.contentResizeObserver.observe(contentRoot);

    this.syncActiveIds();
    this.scrollToHashIfPresent();
  }

  private teardownScrollSpy(): void {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.onScroll);
      this.scrollContainer = null;
    }

    if (this.resizeListener) {
      window.removeEventListener('scroll', this.resizeListener);
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
    }

    this.contentResizeObserver?.disconnect();
    this.contentResizeObserver = null;
    this.lastTocAutoScrollId = null;
  }

  private scrollToHashIfPresent(): void {
    const fragment =
      this.router.parseUrl(this.router.url).fragment ??
      (window.location.hash.slice(1) || null);

    if (!fragment || !this.items().some((item) => item.id === fragment)) {
      return;
    }

    this.lastTocAutoScrollId = fragment;
    this.scrollTocLinkIntoView(fragment);
    scrollDocsAnchorIntoView(fragment, 'auto');
    this.syncActiveIds();
  }

  private scrollTocLinkIntoView(id: string, behavior: ScrollBehavior = 'auto'): void {
    const scrollContainer = this.getTocScrollContainer();
    const link = this.getTocLink(id);

    if (!scrollContainer || !link) {
      return;
    }

    const listItem = link.closest('li');
    const prevLink = listItem?.previousElementSibling?.querySelector(
      '.av-docs-toc__link',
    ) as HTMLElement | null;
    const nextLink = listItem?.nextElementSibling?.querySelector(
      '.av-docs-toc__link',
    ) as HTMLElement | null;

    const topTarget = prevLink ?? link;
    const bottomTarget = nextLink ?? link;
    const containerRect = scrollContainer.getBoundingClientRect();
    const topRect = topTarget.getBoundingClientRect();
    const bottomRect = bottomTarget.getBoundingClientRect();
    let nextScrollTop = scrollContainer.scrollTop;

    if (topRect.top < containerRect.top) {
      nextScrollTop += topRect.top - containerRect.top;
    } else if (bottomRect.bottom > containerRect.bottom) {
      nextScrollTop += bottomRect.bottom - containerRect.bottom;
    } else {
      return;
    }

    scrollContainer.scrollTo({ top: Math.max(0, nextScrollTop), behavior });
  }

  private getTocBody(): HTMLElement | null {
    return this.element.nativeElement.querySelector('.av-docs-toc__scroll');
  }

  private getTocScrollContainer(): HTMLElement | null {
    const scroll = this.getTocBody();

    if (scroll && scroll.scrollHeight > scroll.clientHeight) {
      return scroll;
    }

    const rail = this.element.nativeElement.closest('.layout-toc') as HTMLElement | null;

    if (rail && rail.scrollHeight > rail.clientHeight) {
      return rail;
    }

    return scroll;
  }

  private getTocLink(id: string): HTMLElement | null {
    const list = this.element.nativeElement.querySelector('.av-docs-toc__list');

    if (!list) {
      return null;
    }

    return (
      (list.querySelector(`a[data-toc-id="${id}"]`) as HTMLElement | null) ??
      (list.querySelector(`a[href="#${id}"]`) as HTMLElement | null)
    );
  }

  private syncActiveIds(): void {
    const container = this.getScrollContainer();
    const items = this.items();

    if (items.length === 0) {
      this.activeIds.set([]);
      this.thumbVisible.set(false);
      return;
    }

    const visibleTop = container ? container.getBoundingClientRect().top : 0;
    const visibleBottom = container
      ? container.getBoundingClientRect().bottom
      : window.innerHeight;
    const active: string[] = [];

    for (const item of items) {
      const section = this.getSectionById(item.id);

      if (!section) {
        continue;
      }

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < visibleBottom && rect.bottom > visibleTop;

      if (isVisible) {
        active.push(item.id);
      }
    }

    if (active.length === 0) {
      const readLine = visibleTop + READ_LINE_OFFSET_PX;
      let fallbackId = items[0].id;

      for (const item of items) {
        const section = this.getSectionById(item.id);

        if (!section) {
          continue;
        }

        const heading = this.getSectionHeading(section);

        if (heading.getBoundingClientRect().top <= readLine) {
          fallbackId = item.id;
        }
      }

      active.push(fallbackId);
    }

    this.activeIds.set(active);
    this.updateThumb();
    this.syncTocScrollToActive(active);
  }

  /**
   * When the page scrolls, scroll-spy updates active ids and the thumb indicator.
   * If the TOC list has its own scroll area, bring the current section link into view.
   */
  private syncTocScrollToActive(active: string[]): void {
    const focusId = active[active.length - 1];

    if (!focusId || focusId === this.lastTocAutoScrollId) {
      return;
    }

    this.lastTocAutoScrollId = focusId;
    this.scrollTocLinkIntoView(focusId, 'auto');
  }

  private getContentRoot(): HTMLElement | null {
    return document.getElementById('av-doc-page');
  }

  private getSectionById(id: string): HTMLElement | null {
    const contentRoot = this.getContentRoot();

    if (!contentRoot) {
      return null;
    }

    return contentRoot.querySelector(`#${CSS.escape(id)}`) as HTMLElement | null;
  }

  private getSectionHeading(section: HTMLElement): HTMLElement {
    if (section.matches('.av-doc-prose__heading, .av-doc-prose__subheading, h2, h3, h4')) {
      return section;
    }

    return (
      (section.querySelector('.av-doc-prose__heading, .av-doc-prose__subheading, h2, h3, h4') as
        | HTMLElement
        | null) ?? section
    );
  }

  private updateThumb(): void {
    const track = this.element.nativeElement.querySelector('.av-docs-toc__track') as HTMLElement | null;
    const list = this.element.nativeElement.querySelector('.av-docs-toc__list') as HTMLElement | null;
    const active = this.activeIds();

    if (!track || !list || active.length === 0) {
      this.thumbVisible.set(false);
      return;
    }

    const trackRect = track.getBoundingClientRect();
    let upper = Number.POSITIVE_INFINITY;
    let lower = 0;

    for (const id of active) {
      const link =
        (list.querySelector(`a[data-toc-id="${id}"]`) as HTMLElement | null) ??
        (list.querySelector(`a[href="#${id}"]`) as HTMLElement | null);

      if (!link) {
        continue;
      }

      const rect = link.getBoundingClientRect();

      upper = Math.min(upper, rect.top - trackRect.top);
      lower = Math.max(lower, rect.bottom - trackRect.top);
    }

    if (!Number.isFinite(upper)) {
      this.thumbVisible.set(false);
      return;
    }

    this.thumbTop.set(upper);
    this.thumbHeight.set(Math.max(lower - upper, 0));
    this.thumbVisible.set(true);
  }

  private getScrollContainer(): HTMLElement | null {
    const shell = this.element.nativeElement.closest('.av-docs-shell') as HTMLElement | null;

    if (!shell) {
      return null;
    }

    const { overflowY } = getComputedStyle(shell);
    const scrollableOverflow =
      overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay';

    if (scrollableOverflow && shell.scrollHeight > shell.clientHeight) {
      return shell;
    }

    return null;
  }
}
