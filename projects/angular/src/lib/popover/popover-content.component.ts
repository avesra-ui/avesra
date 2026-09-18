import { NgStyle } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import {
  booleanAttribute,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { AvPopoverContext } from './popover.context';
import {
  avPopoverAnchorPoint,
  avPopoverClasses,
  avPopoverPlacementAxisFromConnection,
  avPopoverPositions,
} from './popover.utils';
import type { AvPopoverPlacement, AvPopoverPlacementAxis } from './popover.utils';
import { AV_POPOVER_OFFSET_DEFAULT } from './popover.utils';

@Component({
  selector: 'av-popover-content',
  imports: [NgStyle, OverlayModule],
  template: `
    @if (context.overlayOrigin(); as origin) {
      <ng-template
        cdkConnectedOverlay
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayOpen]="context.isVisible()"
        [cdkConnectedOverlayPositions]="positions()"
        [cdkConnectedOverlayPush]="shouldFlip()"
        [cdkConnectedOverlayViewportMargin]="8"
        (positionChange)="onPositionChange($event)"
        (overlayOutsideClick)="onOutsideClick($event)"
        (overlayKeydown)="onOverlayKeydown($event)"
      >
        <div
          [class]="classes()"
          [attr.data-placement]="placementAxis()"
          [attr.data-entering]="context.animationState() === 'entering' ? 'true' : null"
          [attr.data-exiting]="context.animationState() === 'exiting' ? 'true' : null"
          [style.--trigger-anchor-point]="anchorPoint()"
          [ngStyle]="overlayStyle()"
          data-slot="popover"
          (animationend)="onAnimationEnd($event)"
        >
          <ng-content />
        </div>
      </ng-template>
    }
  `,
})
export class AvPopoverContentComponent {
  protected readonly context = inject(AvPopoverContext);

  /** Preferred placement relative to the trigger. */
  readonly placement = input<AvPopoverPlacement>('bottom');

  /** Distance between trigger and popover in pixels. */
  readonly offset = input(AV_POPOVER_OFFSET_DEFAULT);

  /** Whether the popover can flip to fit the viewport. */
  readonly shouldFlip = input(true, { alias: 'should-flip', transform: booleanAttribute });

  /** Extra classes applied to the portaled overlay panel. */
  readonly overlayClass = input('', { alias: 'overlay-class' });

  /** Inline styles applied to the portaled overlay panel. */
  readonly overlayStyle = input<Record<string, string | number>>({}, {
    alias: 'overlay-style',
  });

  protected readonly placementAxis = signal<AvPopoverPlacementAxis>('bottom');

  protected readonly classes = computed(() => {
    const extra = this.overlayClass().trim();
    const base = avPopoverClasses();

    return extra ? `${base} ${extra}` : base;
  });

  protected readonly anchorPoint = computed(() => avPopoverAnchorPoint(this.placementAxis()));

  protected readonly positions = computed(() =>
    avPopoverPositions(this.placement(), this.offset()),
  );

  protected onPositionChange(change: ConnectedOverlayPositionChange): void {
    if (this.context.isClosing()) {
      return;
    }

    this.placementAxis.set(avPopoverPlacementAxisFromConnection(change.connectionPair));
  }

  protected onAnimationEnd(event: AnimationEvent): void {
    if (this.context.animationState() !== 'exiting') {
      return;
    }

    if (event.target === event.currentTarget) {
      this.context.notifyExitAnimationEnd();
    }
  }

  protected onOutsideClick(event: MouseEvent): void {
    if (
      !this.context.dismissable() ||
      !this.context.isOpen() ||
      this.context.isClosing()
    ) {
      return;
    }

    const trigger = this.context.getTriggerElement();
    if (trigger?.contains(event.target as Node)) {
      return;
    }

    this.context.close();
  }

  protected onOverlayKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape' || this.context.keyboardDismissDisabled()) {
      return;
    }

    event.preventDefault();
    this.context.close();
  }
}
