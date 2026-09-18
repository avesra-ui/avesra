import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  untracked,
} from '@angular/core';

import { AvDisclosureContext } from '../disclosure/disclosure.context';
import { syncDisclosurePanelHeight } from '../disclosure/disclosure.utils';
import { avAccordionPanelClasses } from './accordion.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-accordion-panel]',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.id]': 'context.contentId()',
    '[attr.data-expanded]': 'context.expanded() ? "true" : null',
    '[attr.aria-hidden]': 'context.expanded() ? null : "true"',
    role: 'region',
    'data-slot': 'accordion-panel',
  },
})
export class AvAccordionPanelComponent implements AfterViewInit, OnDestroy {
  protected readonly context = inject(AvDisclosureContext);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private resizeObserver: ResizeObserver | null = null;
  private heightSyncInitialized = false;

  protected readonly classes = computed(() => avAccordionPanelClasses());

  constructor() {
    effect(() => {
      const expanded = this.context.expanded();
      untracked(() => {
        if (!isPlatformBrowser(this.platformId)) {
          return;
        }

        syncDisclosurePanelHeight(
          this.elementRef.nativeElement,
          expanded,
          this.heightSyncInitialized,
        );
        this.heightSyncInitialized = true;
      });
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.elementRef.nativeElement;
    syncDisclosurePanelHeight(element, this.context.expanded(), false);

    this.resizeObserver = new ResizeObserver(() => {
      if (this.context.expanded()) {
        syncDisclosurePanelHeight(element, true, false);
      }
    });
    this.resizeObserver.observe(element);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }
}
