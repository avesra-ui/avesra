import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
} from '@angular/core';

import { AvDisclosureContext } from './disclosure.context';
import { avDisclosureIndicatorClasses } from './disclosure.utils';

const SVG_NS = 'http://www.w3.org/2000/svg';
const CHEVRON_PATH_D =
  'M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'svg[av-disclosure-indicator]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    'aria-label': 'Chevron down icon',
    fill: 'none',
    height: '16',
    width: '16',
    role: 'presentation',
    viewBox: '0 0 16 16',
    '[class]': 'classes()',
    '[attr.data-expanded]': 'context.expanded() ? "true" : null',
    'data-slot': 'disclosure-indicator',
  },
})
export class AvDisclosureIndicatorComponent {
  private readonly elementRef = inject(ElementRef<SVGSVGElement>);
  protected readonly context = inject(AvDisclosureContext);

  protected readonly classes = computed(() => avDisclosureIndicatorClasses());

  constructor() {
    afterNextRender(() => {
      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('clip-rule', 'evenodd');
      path.setAttribute('d', CHEVRON_PATH_D);
      path.setAttribute('fill', 'currentColor');
      path.setAttribute('fill-rule', 'evenodd');
      this.elementRef.nativeElement.appendChild(path);
    });
  }
}
