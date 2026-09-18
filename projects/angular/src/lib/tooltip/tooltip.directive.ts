import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Directive,
  ElementRef,
  inject,
  input,
  NgZone,
  numberAttribute,
  OnDestroy,
  PLATFORM_ID,
  signal,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import {
  AV_TOOLTIP_ENTER_MS,
  AV_TOOLTIP_EXIT_MS,
  AV_TOOLTIP_HIDE_DELAY_DEFAULT,
  AV_TOOLTIP_HOVER_BRIDGE_MS,
  AV_TOOLTIP_OFFSET_DEFAULT,
  AV_TOOLTIP_SHOW_DELAY_DEFAULT,
  avTooltipAlign,
  avTooltipAnchorPoint,
  avTooltipClasses,
  avTooltipCreateArrowElement,
  avTooltipNextId,
  avTooltipTextClasses,
} from './tooltip.utils';
import type { AvTooltipEvent, AvTooltipPosition } from './tooltip.utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[avTooltip]',
})
export class AvTooltipDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly ngZone = inject(NgZone);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /** Tooltip content. Supports plain text or a template. */
  readonly content = input<string | TemplateRef<unknown> | undefined>(undefined, {
    alias: 'avTooltip',
  });

  /** Preferred tooltip position. */
  readonly tooltipPosition = input<AvTooltipPosition>('top', { alias: 'tooltip-position' });

  /** Event that opens the tooltip. */
  readonly tooltipEvent = input<AvTooltipEvent>('hover', { alias: 'tooltip-event' });

  /** Delay before showing the tooltip in milliseconds. */
  readonly showDelay = input(AV_TOOLTIP_SHOW_DELAY_DEFAULT, {
    alias: 'show-delay',
    transform: numberAttribute,
  });

  /** Delay before hiding the tooltip in milliseconds. */
  readonly hideDelay = input(AV_TOOLTIP_HIDE_DELAY_DEFAULT, {
    alias: 'hide-delay',
    transform: numberAttribute,
  });

  /** Disables the tooltip. */
  readonly tooltipDisabled = input(false, {
    alias: 'tooltip-disabled',
    transform: booleanAttribute,
  });

  /** Hides the tooltip when the pointer leaves the trigger. */
  readonly autoHide = input(true, { alias: 'auto-hide', transform: booleanAttribute });

  /** Hides the tooltip when Escape is pressed. */
  readonly hideOnEscape = input(true, { alias: 'hide-on-escape', transform: booleanAttribute });

  /** Additional vertical offset in pixels. */
  readonly positionTop = input(0, { alias: 'position-top', transform: numberAttribute });

  /** Additional horizontal offset in pixels. */
  readonly positionLeft = input(0, { alias: 'position-left', transform: numberAttribute });

  private readonly tooltipId = signal(avTooltipNextId());
  private readonly isVisible = signal(false);

  private container: HTMLDivElement | null = null;
  private textElement: HTMLDivElement | null = null;
  private embeddedViewRef: ReturnType<ViewContainerRef['createEmbeddedView']> | null = null;

  private active = false;
  private showTimeout: ReturnType<typeof setTimeout> | null = null;
  private hideTimeout: ReturnType<typeof setTimeout> | null = null;
  private enterTimeout: ReturnType<typeof setTimeout> | null = null;
  private exitTimeout: ReturnType<typeof setTimeout> | null = null;

  private mouseEnterListener: ((event: MouseEvent) => void) | null = null;
  private mouseLeaveListener: ((event: MouseEvent) => void) | null = null;
  private focusListener: ((event: FocusEvent) => void) | null = null;
  private blurListener: ((event: FocusEvent) => void) | null = null;
  private touchStartListener: ((event: TouchEvent) => void) | null = null;
  private touchEndListener: ((event: TouchEvent) => void) | null = null;
  private containerMouseEnterListener: ((event: MouseEvent) => void) | null = null;
  private containerMouseLeaveListener: ((event: MouseEvent) => void) | null = null;
  private documentEscapeListener: (() => void) | null = null;
  private resizeListener: (() => void) | null = null;
  private scrollListener: (() => void) | null = null;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.bindTriggerListeners();
    });
  }

  ngOnDestroy(): void {
    this.deactivate(true);
    this.unbindTriggerListeners();
    this.unbindContainerListeners();
    this.unbindDocumentListeners();
    this.remove();
  }

  private bindTriggerListeners(): void {
    const host = this.element.nativeElement;
    const eventMode = this.tooltipEvent();

    if (eventMode === 'hover' || eventMode === 'both') {
      this.mouseEnterListener = () => this.activate();
      this.mouseLeaveListener = (event) => this.onMouseLeave(event);
      this.touchStartListener = () => this.activate();
      this.touchEndListener = () => {
        if (this.autoHide()) {
          this.deactivate();
        }
      };

      host.addEventListener('mouseenter', this.mouseEnterListener);
      host.addEventListener('mouseleave', this.mouseLeaveListener);
      host.addEventListener('touchstart', this.touchStartListener, { passive: true });
      host.addEventListener('touchend', this.touchEndListener, { passive: true });
    }

    if (eventMode === 'focus' || eventMode === 'both') {
      const target = this.getFocusTarget();

      this.focusListener = () => this.activate();
      this.blurListener = () => this.deactivate();

      target.addEventListener('focus', this.focusListener);
      target.addEventListener('blur', this.blurListener);
    }
  }

  private unbindTriggerListeners(): void {
    const host = this.element.nativeElement;

    if (this.mouseEnterListener) {
      host.removeEventListener('mouseenter', this.mouseEnterListener);
      this.mouseEnterListener = null;
    }

    if (this.mouseLeaveListener) {
      host.removeEventListener('mouseleave', this.mouseLeaveListener);
      this.mouseLeaveListener = null;
    }

    if (this.touchStartListener) {
      host.removeEventListener('touchstart', this.touchStartListener);
      this.touchStartListener = null;
    }

    if (this.touchEndListener) {
      host.removeEventListener('touchend', this.touchEndListener);
      this.touchEndListener = null;
    }

    if (this.focusListener || this.blurListener) {
      const target = this.getFocusTarget();

      if (this.focusListener) {
        target.removeEventListener('focus', this.focusListener);
        this.focusListener = null;
      }

      if (this.blurListener) {
        target.removeEventListener('blur', this.blurListener);
        this.blurListener = null;
      }
    }
  }

  private getFocusTarget(): HTMLElement {
    return this.element.nativeElement;
  }

  private onMouseLeave(event: MouseEvent): void {
    if (!this.autoHide()) {
      const related = event.relatedTarget as Node | null;

      if (
        related &&
        (this.container?.contains(related) ||
          this.textElement?.contains(related) ||
          this.element.nativeElement.contains(related))
      ) {
        return;
      }

      // relatedTarget is often null when crossing the gap between trigger and tooltip.
      // Schedule hide so the pointer can reach the tooltip; container mouseenter cancels it.
      this.deactivate();
      return;
    }

    this.deactivate();
  }

  private activate(): void {
    if (this.active || !this.hasContent() || this.tooltipDisabled()) {
      return;
    }

    this.active = true;
    this.clearHideTimeout();

    const delay = this.showDelay();

    if (delay > 0) {
      this.showTimeout = setTimeout(() => this.show(), delay);
    } else {
      this.show();
    }

    if (this.hideOnEscape()) {
      this.documentEscapeListener = () => {
        this.document.removeEventListener('keydown', this.onDocumentKeydown);
        this.documentEscapeListener = null;
      };
      this.document.addEventListener('keydown', this.onDocumentKeydown);
    }
  }

  private readonly onDocumentKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.deactivate(true);
    }
  };

  private deactivate(immediate = false): void {
    this.active = false;
    this.clearShowTimeout();

    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }

    if (immediate) {
      this.hide(true);
      return;
    }

    const delay = this.getEffectiveHideDelay();

    if (delay > 0) {
      this.hideTimeout = setTimeout(() => this.hide(), delay);
    } else {
      this.hide();
    }
  }

  private getEffectiveHideDelay(): number {
    if (!this.autoHide()) {
      return Math.max(this.hideDelay(), AV_TOOLTIP_HOVER_BRIDGE_MS);
    }

    return this.hideDelay();
  }

  private show(): void {
    if (!this.hasContent() || this.tooltipDisabled()) {
      return;
    }

    this.create();

    if (!this.container) {
      return;
    }

    // Measure after layout — align() needs non-zero tooltip dimensions.
    this.container.style.visibility = 'hidden';
    this.container.style.display = 'block';
    this.align();
    this.container.style.visibility = 'visible';

    this.container.setAttribute('data-entering', 'true');
    this.container.removeAttribute('data-exiting');
    this.isVisible.set(true);
    this.updateDescribedBy();

    this.enterTimeout = setTimeout(() => {
      this.container?.removeAttribute('data-entering');
    }, AV_TOOLTIP_ENTER_MS);

    this.bindDocumentListeners();
  }

  private hide(immediate = false): void {
    if (!this.container) {
      this.isVisible.set(false);
      return;
    }

    this.unbindDocumentListeners();

    if (immediate) {
      this.remove();
      return;
    }

    this.container.setAttribute('data-exiting', 'true');
    this.container.removeAttribute('data-entering');

    this.exitTimeout = setTimeout(() => {
      this.remove();
    }, AV_TOOLTIP_EXIT_MS);
  }

  private create(): void {
    if (this.container) {
      this.clearEmbeddedView();
      this.container.remove();
      this.container = null;
      this.textElement = null;
    }

    const container = this.document.createElement('div');
    container.className = avTooltipClasses();
    container.id = this.tooltipId();
    container.setAttribute('role', 'tooltip');
    container.setAttribute('data-slot', 'tooltip');
    container.style.display = 'none';

    const arrow = avTooltipCreateArrowElement();
    container.appendChild(arrow);

    const textElement = this.document.createElement('div');
    textElement.className = avTooltipTextClasses();
    textElement.setAttribute('data-slot', 'tooltip-text');
    container.appendChild(textElement);

    this.updateText(textElement);

    if (this.autoHide()) {
      container.style.pointerEvents = 'none';
    } else {
      container.style.pointerEvents = 'auto';
      this.bindContainerListeners(container);
    }

    this.document.body.appendChild(container);
    this.container = container;
    this.textElement = textElement;
  }

  private bindContainerListeners(container: HTMLDivElement): void {
    this.unbindContainerListeners();

    this.containerMouseEnterListener = () => {
      this.clearHideTimeout();
      this.active = true;
    };
    this.containerMouseLeaveListener = () => this.deactivate();

    container.addEventListener('mouseenter', this.containerMouseEnterListener);
    container.addEventListener('mouseleave', this.containerMouseLeaveListener);
  }

  private unbindContainerListeners(): void {
    if (!this.container) {
      this.containerMouseEnterListener = null;
      this.containerMouseLeaveListener = null;
      return;
    }

    if (this.containerMouseEnterListener) {
      this.container.removeEventListener('mouseenter', this.containerMouseEnterListener);
      this.containerMouseEnterListener = null;
    }

    if (this.containerMouseLeaveListener) {
      this.container.removeEventListener('mouseleave', this.containerMouseLeaveListener);
      this.containerMouseLeaveListener = null;
    }
  }

  private updateText(textElement: HTMLDivElement): void {
    this.clearEmbeddedView();
    textElement.replaceChildren();

    const content = this.content();

    if (content instanceof TemplateRef) {
      this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(content);
      this.embeddedViewRef.detectChanges();
      this.embeddedViewRef.rootNodes.forEach((node) => {
        if (node instanceof Node) {
          textElement.appendChild(node);
        }
      });
      return;
    }

    if (content !== undefined && content !== null && content !== '') {
      textElement.textContent = String(content);
    }
  }

  private clearEmbeddedView(): void {
    this.embeddedViewRef?.destroy();
    this.embeddedViewRef = null;
  }

  private align(): void {
    if (!this.container) {
      return;
    }

    const hostRect = this.element.nativeElement.getBoundingClientRect();
    const tooltipRect = this.container.getBoundingClientRect();

    const result = avTooltipAlign(this.tooltipPosition(), {
      hostLeft: hostRect.left,
      hostTop: hostRect.top,
      hostWidth: hostRect.width,
      hostHeight: hostRect.height,
      tooltipWidth: tooltipRect.width,
      tooltipHeight: tooltipRect.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      offset: AV_TOOLTIP_OFFSET_DEFAULT,
      positionTop: this.positionTop(),
      positionLeft: this.positionLeft(),
    });

    this.container.style.top = `${result.top}px`;
    this.container.style.left = `${result.left}px`;
    this.container.setAttribute('data-placement', result.placement);
    this.container.style.setProperty(
      '--trigger-anchor-point',
      avTooltipAnchorPoint(result.placement),
    );
  }

  private bindDocumentListeners(): void {
    this.resizeListener = () => this.hide(true);
    window.addEventListener('resize', this.resizeListener);

    this.scrollListener = () => this.hide(true);
    window.addEventListener('scroll', this.scrollListener, true);
  }

  private unbindDocumentListeners(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
    }

    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener, true);
      this.scrollListener = null;
    }
  }

  private remove(): void {
    this.clearTimers();
    this.unbindContainerListeners();
    this.isVisible.set(false);
    this.updateDescribedBy();
    this.clearEmbeddedView();

    if (this.container) {
      this.container.remove();
      this.container = null;
      this.textElement = null;
    }
  }

  private hasContent(): boolean {
    const content = this.content();
    return content instanceof TemplateRef || (content !== undefined && content !== null && content !== '');
  }

  private updateDescribedBy(): void {
    const host = this.element.nativeElement;

    if (this.isVisible()) {
      host.setAttribute('aria-describedby', this.tooltipId());
      return;
    }

    host.removeAttribute('aria-describedby');
  }

  private clearShowTimeout(): void {
    if (this.showTimeout !== null) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }

  private clearHideTimeout(): void {
    if (this.hideTimeout !== null) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  private clearTimers(): void {
    this.clearShowTimeout();
    this.clearHideTimeout();

    if (this.enterTimeout !== null) {
      clearTimeout(this.enterTimeout);
      this.enterTimeout = null;
    }

    if (this.exitTimeout !== null) {
      clearTimeout(this.exitTimeout);
      this.exitTimeout = null;
    }
  }
}
