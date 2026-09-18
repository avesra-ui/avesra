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

import { avBreadcrumbsSeparatorClasses } from './breadcrumbs.utils';

const SVG_NS = 'http://www.w3.org/2000/svg';
const CHEVRON_RIGHT_PATH_D =
  'M5.47 2.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 0-1.06Z';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[av-breadcrumbs-separator]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    'aria-hidden': 'true',
    'data-slot': 'breadcrumbs-separator',
  },
})
export class AvBreadcrumbsSeparatorComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly classes = computed(() => avBreadcrumbsSeparatorClasses());

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
    element.setAttribute('aria-label', 'Chevron right icon');
    element.setAttribute('fill', 'none');
    element.setAttribute('height', '16');
    element.setAttribute('width', '16');
    element.setAttribute('role', 'presentation');
    element.setAttribute('viewBox', '0 0 16 16');

    const path = this.document.createElementNS(SVG_NS, 'path');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('d', CHEVRON_RIGHT_PATH_D);
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('fill-rule', 'evenodd');
    element.appendChild(path);
  }
}
