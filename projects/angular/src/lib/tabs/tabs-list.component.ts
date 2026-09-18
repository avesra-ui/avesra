import { FocusKeyManager } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentInit,
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  untracked,
} from '@angular/core';

import { AvTabsContext } from './tabs.context';
import { AvTabsInkBar } from './tabs.ink-bar';
import { avTabsListClasses } from './tabs.utils';
import { AvTabsTabComponent } from './tabs-tab.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-tabs-list]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'tablist',
    '[attr.aria-orientation]': 'context.orientation()',
    '[attr.data-orientation]': 'context.orientation()',
    'data-slot': 'tabs-list',
    '(keydown)': 'onKeydown($event)',
    '(scroll)': 'updateIndicatorPosition()',
  },
})
export class AvTabsListComponent implements AfterContentInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly context = inject(AvTabsContext);
  private readonly inkBar = new AvTabsInkBar();

  @ContentChildren(AvTabsTabComponent, { descendants: true })
  private readonly items!: QueryList<AvTabsTabComponent>;

  private keyManager: FocusKeyManager<AvTabsTabComponent> | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private observedTabs = new Set<Element>();
  private lastOrientation: string | null = null;

  protected readonly classes = computed(() => avTabsListClasses());

  private readonly onWindowResize = (): void => {
    this.updateIndicatorPosition();
  };

  constructor() {
    afterNextRender(() => {
      this.syncTabs();
      this.updateIndicatorPosition();
      this.observeTabs();
    });

    effect(() => {
      const orientation = this.context.orientation();

      untracked(() => {
        if (this.keyManager && this.lastOrientation !== orientation) {
          this.setupKeyManager();
        }
      });
    });

    effect(() => {
      this.context.selectedKey();
      this.context.tabs();

      untracked(() => this.syncActiveItem());
    });

    effect(() => {
      this.context.selectedKey();
      this.context.tabs();
      this.context.variant();
      this.context.orientation();

      if (!isPlatformBrowser(this.platformId) || typeof requestAnimationFrame !== 'function') {
        return;
      }

      requestAnimationFrame(() => {
        this.updateIndicatorPosition();
        this.observeTabs();
      });
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onWindowResize);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('resize', this.onWindowResize);
      });
    }
  }

  ngAfterContentInit(): void {
    this.setupKeyManager();
    this.syncTabs();

    this.items.changes.subscribe(() => {
      this.syncTabs();
      this.setupKeyManager();
      this.updateIndicatorPosition();
      this.observeTabs();
    });
  }

  ngOnDestroy(): void {
    this.keyManager?.destroy();
    this.resizeObserver?.disconnect();
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!this.keyManager) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      const item = this.keyManager.activeItem;
      if (item && !item.disabled) {
        event.preventDefault();
        this.context.selectKey(item.id());
      }
      return;
    }

    this.keyManager.setFocusOrigin('keyboard');
    this.keyManager.onKeydown(event);
  }

  protected updateIndicatorPosition(): void {
    const listEl = this.elementRef.nativeElement;
    if (!isPlatformBrowser(this.platformId) || typeof listEl?.getBoundingClientRect !== 'function') {
      return;
    }

    const selectedTab = this.context.getTab(this.context.selectedKey());
    const style = this.inkBar.alignToElement(
      listEl,
      selectedTab?.elementRef.nativeElement ?? null,
      this.context.variant(),
      this.context.orientation(),
    );

    this.context.indicatorStyle.set(style);
  }

  private setupKeyManager(): void {
    this.keyManager?.destroy();

    const orientation = this.context.orientation();
    // Default FocusKeyManager skips `FocusableOption.disabled`.
    const keyManager = new FocusKeyManager(this.items).withHomeAndEnd().withWrap();

    if (orientation === 'vertical') {
      keyManager.withVerticalOrientation();
    } else {
      keyManager.withHorizontalOrientation('ltr');
    }

    this.keyManager = keyManager;
    this.lastOrientation = orientation;
    this.syncActiveItem();
  }

  private syncTabs(): void {
    if (!this.items) {
      return;
    }

    this.context.setTabs(this.items.toArray());
  }

  private syncActiveItem(): void {
    if (!this.keyManager) {
      return;
    }

    const selected = this.context.getTab(this.context.selectedKey());
    if (selected) {
      this.keyManager.updateActiveItem(selected);
    }
  }

  private observeTabs(): void {
    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const listEl = this.elementRef.nativeElement;
    const tabs = this.context.tabs().map((tab) => tab.elementRef.nativeElement);

    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.updateIndicatorPosition();
      });
      this.resizeObserver.observe(listEl);
    }

    for (const tab of this.observedTabs) {
      if (!tabs.includes(tab as HTMLElement)) {
        this.resizeObserver.unobserve(tab);
        this.observedTabs.delete(tab);
      }
    }

    for (const tab of tabs) {
      if (!this.observedTabs.has(tab)) {
        this.resizeObserver.observe(tab);
        this.observedTabs.add(tab);
      }
    }
  }
}
