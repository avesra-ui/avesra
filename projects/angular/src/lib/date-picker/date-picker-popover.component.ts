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

import { AvDatePickerContext } from './date-picker.context';
import {
  avDatePickerAnchorPoint,
  avDatePickerPopoverClasses,
  avDatePickerPositions,
  AV_DATE_PICKER_OFFSET_DEFAULT,
} from './date-picker.utils';
import type { AvDatePickerPlacement, AvDatePickerPlacementAxis } from './date-picker.utils';

let nextDatePickerPanelId = 0;

@Component({
  selector: 'av-date-picker-popover',
  template: `
    <ng-template #panel>
      <div
        [id]="panelId"
        [class]="classes()"
        [attr.data-placement]="placementAxis()"
        [attr.data-entering]="context.animationState() === 'entering' ? 'true' : null"
        [attr.data-exiting]="context.animationState() === 'exiting' ? 'true' : null"
        [style.--trigger-anchor-point]="anchorPoint()"
        data-slot="date-picker-popover"
        role="dialog"
        (animationend)="onAnimationEnd($event)"
      >
        <ng-content />
      </div>
    </ng-template>
  `,
  host: {
    'data-slot': 'date-picker-popover-root',
  },
})
export class AvDatePickerPopoverComponent implements AfterViewInit {
  protected readonly context = inject(AvDatePickerContext);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);

  private readonly panelTemplate = viewChild.required<TemplateRef<unknown>>('panel');

  /** Preferred placement relative to the date input group (falls back to trigger). */
  readonly placement = input<AvDatePickerPlacement>('bottom');

  /** Distance between the input group and popover in pixels (default: 8). */
  readonly offset = input(AV_DATE_PICKER_OFFSET_DEFAULT);

  /**
   * Extra CSS classes applied to the overlay panel
   * (merged after the BEM classes — same pattern as modal `container-class`).
   */
  readonly panelClass = input('', { alias: 'panel-class' });

  /** Whether the popover can flip to fit the viewport. */
  readonly shouldFlip = input(true, { alias: 'should-flip', transform: booleanAttribute });

  readonly panelId = `av-date-picker-panel-${++nextDatePickerPanelId}`;

  protected readonly placementAxis = signal<AvDatePickerPlacementAxis>('bottom');

  protected readonly classes = computed(() =>
    avDatePickerPopoverClasses({ className: this.panelClass() }),
  );

  protected readonly anchorPoint = computed(() => avDatePickerAnchorPoint(this.placementAxis()));

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
      getPositions: () => avDatePickerPositions(this.placement(), this.offset()),
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
