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

import { AvDateRangePickerContext } from './date-range-picker.context';
import {
  avDateRangePickerAnchorPoint,
  avDateRangePickerPopoverClasses,
  avDateRangePickerPositions,
  AV_DATE_RANGE_PICKER_OFFSET_DEFAULT,
} from './date-range-picker.utils';
import type {
  AvDateRangePickerPlacement,
  AvDateRangePickerPlacementAxis,
} from './date-range-picker.utils';

let nextDateRangePickerPanelId = 0;

@Component({
  selector: 'av-date-range-picker-popover',
  template: `
    <ng-template #panel>
      <div
        [id]="panelId"
        [class]="classes()"
        [attr.data-placement]="placementAxis()"
        [attr.data-entering]="context.animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="context.animationState() === 'exiting' ? 'true' : null"
        [style.--trigger-anchor-point]="anchorPoint()"
        data-slot="date-range-picker-popover"
        role="dialog"
        (animationend)="onAnimationEnd($event)"
      >
        <ng-content />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'date-range-picker-popover-root',
  },
})
export class AvDateRangePickerPopoverComponent implements AfterViewInit {
  protected readonly context = inject(AvDateRangePickerContext);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);

  private readonly panelTemplate = viewChild.required<TemplateRef<unknown>>('panel');

  /** Preferred placement relative to the date input group (falls back to trigger). */
  readonly placement = input<AvDateRangePickerPlacement>('bottom');

  /** Distance between the input group and popover in pixels (default: 8). */
  readonly offset = input(AV_DATE_RANGE_PICKER_OFFSET_DEFAULT);

  /**
   * Extra CSS classes applied to the overlay panel
   * (merged after the BEM classes — same pattern as modal `container-class`).
   */
  readonly panelClass = input('', { alias: 'panel-class' });

  /** Whether the popover can flip to fit the viewport. */
  readonly shouldFlip = input(true, { alias: 'should-flip', transform: booleanAttribute });

  readonly panelId = `av-date-range-picker-panel-${++nextDateRangePickerPanelId}`;

  protected readonly placementAxis = signal<AvDateRangePickerPlacementAxis>('bottom');

  protected readonly classes = computed(() =>
    avDateRangePickerPopoverClasses({ className: this.panelClass() }),
  );

  protected readonly anchorPoint = computed(() =>
    avDateRangePickerAnchorPoint(this.placementAxis()),
  );

  constructor() {
    this.context.registerPanelId(this.panelId);

    this.destroyRef.onDestroy(() => {
      this.context.unregisterPanelId();
      this.context.unregisterPanel();
    });
  }

  ngAfterViewInit(): void {
    this.context.registerPanel({
      templateRef: this.panelTemplate(),
      viewContainerRef: this.viewContainerRef,
      getPositions: () => avDateRangePickerPositions(this.placement(), this.offset()),
      shouldFlip: () => this.shouldFlip(),
      setPlacementAxis: (axis) => this.placementAxis.set(axis),
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
