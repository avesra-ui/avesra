import { Component, computed, HostAttributeToken, inject } from '@angular/core';

import { AvDropdownContext } from './dropdown.context';
import { avDropdownAnchorPoint, avDropdownPopoverClasses } from './dropdown.utils';

/**
 * Visual popover surface rendered inside `avDropdownContent`.
 * Consumer classes stay on this element, same as `div[av-alert-dialog-dialog]`.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-dropdown-popover]',
  template: `<ng-content />`,
  host: {
    '[class]': 'classes()',
    '[attr.data-placement]': 'placementAxis()',
    '[attr.data-entering]': 'entering()',
    '[attr.data-exiting]': 'exiting()',
    '[style.--trigger-anchor-point]': 'anchorPoint()',
    'data-slot': 'dropdown-popover',
    '(animationend)': 'onAnimationEnd($event)',
  },
})
export class AvDropdownPopoverComponent {
  protected readonly context = inject(AvDropdownContext);
  private readonly hostClass = inject(new HostAttributeToken('class'), { optional: true }) ?? '';

  protected readonly placementAxis = computed(() => this.context.placementAxis());

  protected readonly anchorPoint = computed(() => avDropdownAnchorPoint(this.placementAxis()));

  protected readonly entering = computed(() =>
    this.context.animationState() === 'entering' ? 'true' : null,
  );

  protected readonly exiting = computed(() =>
    this.context.animationState() === 'exiting' ? 'true' : null,
  );

  protected readonly classes = computed(() =>
    [avDropdownPopoverClasses(), this.hostClass].filter(Boolean).join(' '),
  );

  protected onAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    if (event.target === event.currentTarget) {
      this.context.notifyExitAnimationEnd();
    }
  }
}
