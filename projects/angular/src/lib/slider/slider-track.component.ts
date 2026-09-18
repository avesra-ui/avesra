import { AfterViewInit, Component, computed, ElementRef, inject } from '@angular/core';

import { AvSliderContext } from './slider.context';

@Component({
  selector: '[av-slider-track]',
  template: `<ng-content />`,
  host: {
    class: 'av-slider__track',
    'data-slot': 'slider-track',
    '[attr.data-disabled]': 'context.isDisabled() ? "true" : null',
    '[attr.data-fill-start]': 'fillStart() ? "true" : null',
    '[attr.data-fill-end]': 'fillEnd() ? "true" : null',
    '(pointerdown)': 'onTrackPointerDown($event)',
  },
})
export class AvSliderTrackComponent implements AfterViewInit {
  private readonly element = inject(ElementRef<HTMLElement>);
  protected readonly context = inject(AvSliderContext);

  protected readonly fillStart = computed(() => {
    const { start, width } = this.context.getFillOffsets();
    const values = this.context.values();

    if (values.length > 1) {
      return start === 0;
    }

    return width > 0;
  });

  protected readonly fillEnd = computed(() => {
    const { start, width } = this.context.getFillOffsets();
    const values = this.context.values();

    if (values.length > 1) {
      return start * 100 + width * 100 === 100;
    }

    return width === 1;
  });

  ngAfterViewInit(): void {
    this.context.registerTrack(this.element.nativeElement);
  }

  protected onTrackPointerDown(event: PointerEvent): void {
    if (this.context.isDisabled() || event.button !== 0) {
      return;
    }

    const target = event.currentTarget as HTMLElement;
    if (event.target !== target) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const percent = this.getPercentFromPointer(event, rect);
    const index = this.getNearestThumbIndex(percent);
    this.context.setValueFromPercent(index, percent);
    this.context.markTouched();
  }

  private getNearestThumbIndex(percent: number): number {
    const values = this.context.values();

    if (values.length <= 1) {
      return 0;
    }

    let nearest = 0;
    let minDistance = Math.abs(percent - this.context.getThumbPercent(0));

    for (let index = 1; index < values.length; index++) {
      const distance = Math.abs(percent - this.context.getThumbPercent(index));

      if (distance < minDistance) {
        minDistance = distance;
        nearest = index;
      }
    }

    return nearest;
  }

  private getPercentFromPointer(event: PointerEvent, rect: DOMRect): number {
    if (this.context.orientation() === 'vertical') {
      return Math.min(1, Math.max(0, 1 - (event.clientY - rect.top) / rect.height));
    }

    return Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  }
}
