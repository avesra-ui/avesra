import {
  AfterViewInit,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { AvDropdownContext } from './dropdown.context';
import {
  avDropdownAnchorPoint,
  avDropdownPopoverClasses,
  avDropdownPositions,
  AV_DROPDOWN_OFFSET_DEFAULT,
} from './dropdown.utils';
import type { AvDropdownPlacement, AvDropdownPlacementAxis } from './dropdown.utils';

@Component({
  selector: 'av-dropdown-popover',
  template: `
    <ng-template #panel>
      <div
        [class]="classes()"
        [attr.data-placement]="placementAxis()"
        [attr.data-entering]="context.animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="context.animationState() === 'exiting' ? 'true' : null"
        [style.--trigger-anchor-point]="anchorPoint()"
        data-slot="dropdown-popover"
        (animationend)="onAnimationEnd($event)"
      >
        <ng-content />
      </div>
    </ng-template>
  `,
})
export class AvDropdownPopoverComponent implements AfterViewInit {
  protected readonly context = inject(AvDropdownContext);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);

  private readonly panelTemplate = viewChild.required<TemplateRef<unknown>>('panel');

  /** Preferred placement relative to the trigger. */
  readonly placement = input<AvDropdownPlacement>('bottom');

  /** Distance between trigger and menu in pixels. */
  readonly offset = input(AV_DROPDOWN_OFFSET_DEFAULT);

  /** Extra classes applied to the overlay panel (e.g. Tailwind `max-w-*`). */
  readonly customClass = input<string>('', { alias: 'class' });

  /** Whether the menu can flip to fit the viewport. */
  readonly shouldFlip = input(true, { alias: 'should-flip', transform: booleanAttribute });

  protected readonly placementAxis = signal<AvDropdownPlacementAxis>('bottom');

  protected readonly classes = computed(() => avDropdownPopoverClasses(this.customClass()));

  protected readonly anchorPoint = computed(() => avDropdownAnchorPoint(this.placementAxis()));

  ngAfterViewInit(): void {
    this.context.registerPanel({
      templateRef: this.panelTemplate(),
      viewContainerRef: this.viewContainerRef,
      getPositions: () => avDropdownPositions(this.placement(), this.offset()),
      shouldFlip: () => this.shouldFlip(),
      setPlacementAxis: (axis) => this.placementAxis.set(axis),
    });

    this.destroyRef.onDestroy(() => {
      this.context.unregisterPanel();
    });
  }

  protected onAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    if (event.target === event.currentTarget) {
      this.context.notifyExitAnimationEnd();
    }
  }
}
