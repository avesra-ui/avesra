import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';

import { AvDisclosureContext } from '../disclosure/disclosure.context';
import { avAccordionIndicatorClasses } from './accordion.utils';

const SVG_NS = 'http://www.w3.org/2000/svg';
const CHEVRON_PATH_D =
  'M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[av-accordion-indicator]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.data-expanded]': 'context.expanded() ? "true" : null',
    'data-slot': 'accordion-indicator',
  },
})
export class AvAccordionIndicatorComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly context = inject(AvDisclosureContext);

  protected readonly classes = computed(() => avAccordionIndicatorClasses());

  constructor() {
    afterNextRender(() => this.ensureDefaultChevron());
  }

  private ensureDefaultChevron(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.elementRef.nativeElement.childNodes.length > 0) {
      return;
    }

    const element = this.elementRef.nativeElement;
    if (!(element instanceof SVGSVGElement)) {
      return;
    }

    element.setAttribute('xmlns', SVG_NS);
    element.setAttribute('aria-hidden', 'true');
    element.setAttribute('aria-label', 'Chevron down icon');
    element.setAttribute('fill', 'none');
    element.setAttribute('height', '16');
    element.setAttribute('width', '16');
    element.setAttribute('role', 'presentation');
    element.setAttribute('viewBox', '0 0 16 16');

    const path = this.document.createElementNS(SVG_NS, 'path');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('d', CHEVRON_PATH_D);
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('fill-rule', 'evenodd');
    element.appendChild(path);
  }
}
