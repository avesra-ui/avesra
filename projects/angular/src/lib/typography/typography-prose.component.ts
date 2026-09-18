import { Component, computed } from '@angular/core';

import { avTypographyProseClasses } from './typography.utils';

/**
 * Prose container — styles nested semantic HTML (h1–h6, p, code, lists, …)
 * without requiring `av-typography` on each child.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-typography-prose], article[av-typography-prose], section[av-typography-prose]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    'data-slot': 'typography-prose',
  },
})
export class AvTypographyProseComponent {
  protected readonly classes = computed(() => avTypographyProseClasses());
}
