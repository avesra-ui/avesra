import { Component, computed, inject, input, numberAttribute } from '@angular/core';

import { AvSliderContext } from './slider.context';
import { clamp } from './slider.utils';

@Component({
  selector: '[av-slider-thumb]',
  template: `<ng-content />`,
  host: {
    class: 'av-slider__thumb',
    'data-slot': 'slider-thumb',
    role: 'slider',
    tabindex: '0',
    '[attr.aria-valuemin]': 'context.min()',
    '[attr.aria-valuemax]': 'context.max()',
    '[attr.aria-valuenow]': 'thumbValue()',
    '[attr.aria-orientation]': 'context.orientation()',
    '[attr.aria-disabled]': 'context.isDisabled() || null',
    '[attr.data-disabled]': 'context.isDisabled() ? "true" : null',
    '[attr.data-dragging]': 'isDragging() ? "true" : null',
    '[attr.data-focus-visible]': 'isFocused() ? "true" : null',
    '[style.left.%]': 'isHorizontal() ? thumbPercent() * 100 : null',
    '[style.bottom.%]': 'isVertical() ? thumbPercent() * 100 : null',
    '(pointerdown)': 'onPointerDown($event)',
    '(keydown)': 'onKeydown($event)',
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
  },
})
export class AvSliderThumbComponent {
  protected readonly context = inject(AvSliderContext);

  /** Thumb index for single or range sliders. */
  readonly index = input(0, { transform: numberAttribute });

  private focused = false;

  protected readonly isHorizontal = computed(() => this.context.orientation() === 'horizontal');
  protected readonly isVertical = computed(() => this.context.orientation() === 'vertical');
  protected readonly thumbValue = computed(() => this.context.values()[this.index()] ?? this.context.min());
  protected readonly thumbPercent = computed(() => this.context.getThumbPercent(this.index()));
  protected readonly isDragging = computed(() => this.context.draggingIndex() === this.index());

  protected isFocused(): boolean {
    return this.focused;
  }

  protected onPointerDown(event: PointerEvent): void {
    if (this.context.isDisabled() || event.button !== 0) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);
    this.context.draggingIndex.set(this.index());

    const onMove = (moveEvent: PointerEvent) => this.handlePointerMove(moveEvent);
    const onUp = (upEvent: PointerEvent) => {
      target.releasePointerCapture(upEvent.pointerId);
      this.context.draggingIndex.set(null);
      target.removeEventListener('pointermove', onMove);
      target.removeEventListener('pointerup', onUp);
      target.removeEventListener('pointercancel', onUp);
      this.context.markTouched();
    };

    target.addEventListener('pointermove', onMove);
    target.addEventListener('pointerup', onUp);
    target.addEventListener('pointercancel', onUp);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.context.isDisabled()) {
      return;
    }

    const step = this.context.step();
    const min = this.context.min();
    const max = this.context.max();
    const current = this.thumbValue();
    let next = current;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        next = current + step;
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        next = current - step;
        break;
      case 'Home':
        next = min;
        break;
      case 'End':
        next = max;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.context.setThumbValue(this.index(), next);
    this.context.markTouched();
  }

  protected onFocus(): void {
    this.focused = true;
  }

  protected onBlur(): void {
    this.focused = false;
    this.context.markTouched();
  }

  private handlePointerMove(event: PointerEvent): void {
    const track = this.context.trackElement();
    if (!track) {
      return;
    }

    const rect = track.getBoundingClientRect();
    const percent = this.getPercentFromPointer(event, rect);
    this.context.setValueFromPercent(this.index(), percent);
  }

  private getPercentFromPointer(event: PointerEvent, rect: DOMRect): number {
    if (this.context.orientation() === 'vertical') {
      return clamp(1 - (event.clientY - rect.top) / rect.height, 0, 1);
    }

    return clamp((event.clientX - rect.left) / rect.width, 0, 1);
  }
}
