import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';

import { AvDateFieldContext } from '../date-field/date-field.context';
import {
  appendSegmentDigit,
  cycleSegmentValue,
  findEditableSegmentIndex,
  isDigitKey,
} from '../date-field/date-field.keyboard';
import type { AvDateSegment } from '../date-field/date-field.types';
import { AvDateFieldIntl } from '../date-field/date-field.intl';

import { avDateInputGroupSegmentClasses } from './date-input-group.utils';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[av-date-input-group-segment]',
  template: `{{ segment().text }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.tabindex]': 'tabIndex()',
    '[attr.data-type]': 'segment().type',
    '[attr.data-segment-id]': 'segment().id',
    '[attr.data-placeholder]': 'segment().isPlaceholder ? "true" : null',
    '[attr.data-focused]': 'isFocused() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    '[attr.aria-valuetext]': 'segment().isEditable ? segment().text : null',
    '[attr.aria-valuemin]': 'segment().isEditable ? segment().minValue : null',
    '[attr.aria-valuemax]': 'segment().isEditable ? segment().maxValue : null',
    '[attr.aria-valuenow]':
      'segment().isEditable && segment().value !== null ? segment().value : null',
    '[attr.role]': 'segment().isEditable ? "spinbutton" : null',
    '[attr.contenteditable]': 'false',
    'data-slot': 'date-input-group-segment',
    '(keydown)': 'onKeydown($event)',
    '(focus)': 'onFocus()',
    '(pointerdown)': 'onPointerDown($event)',
  },
})
export class AvDateInputGroupSegmentComponent {
  private readonly fieldContext = inject(AvDateFieldContext);
  private readonly intl = inject(AvDateFieldIntl);

  readonly segment = input.required<AvDateSegment>();
  readonly index = input.required<number>();

  protected readonly classes = computed(() => avDateInputGroupSegmentClasses());
  protected readonly isDisabled = computed(() => this.fieldContext.disabled());
  protected readonly isInvalid = computed(() => this.fieldContext.invalid());
  protected readonly isFocused = computed(
    () => this.fieldContext.focusedSegmentIndex() === this.index(),
  );

  protected readonly tabIndex = computed(() => {
    if (!this.segment().isEditable || this.isDisabled() || this.fieldContext.readonly()) {
      return -1;
    }
    const focused = this.fieldContext.focusedSegmentIndex();
    if (focused === null) {
      return this.isFirstEditable() ? 0 : -1;
    }
    return focused === this.index() ? 0 : -1;
  });

  protected onFocus(): void {
    this.fieldContext.setFocusedSegment?.(this.index());
  }

  protected onPointerDown(event: PointerEvent): void {
    if (!this.segment().isEditable || this.isDisabled() || event.button !== 0) {
      return;
    }
    event.preventDefault();
    (event.currentTarget as HTMLElement).focus();

    // Day period: click toggles AM/PM.
    if (this.segment().type === 'dayPeriod' && !this.fieldContext.readonly()) {
      this.toggleDayPeriod();
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    const segment = this.segment();
    if (!segment.isEditable || this.isDisabled() || this.fieldContext.readonly()) {
      return;
    }

    const segments = [...this.fieldContext.segments()];
    const index = this.index();

    if (segment.type === 'dayPeriod' && this.applyDayPeriodKey(event)) {
      return;
    }

    if (isDigitKey(event.key) && segment.type !== 'dayPeriod') {
      event.preventDefault();
      const digit = Number(event.key);
      const { value, advance } = appendSegmentDigit(
        segment.value,
        digit,
        segment.maxLength,
        segment.maxValue,
      );
      segments[index] = {
        ...segment,
        value,
        text: String(value).padStart(segment.type === 'year' ? 4 : 2, '0'),
        isPlaceholder: false,
      };
      this.fieldContext.commitSegments?.(segments);
      if (advance) {
        this.moveFocus(1);
      }
      return;
    }

    switch (event.key) {
      case 'ArrowUp':
      case 'PageUp': {
        event.preventDefault();
        this.updateNumeric(cycleSegmentValue(segment.value, 1, segment.minValue, segment.maxValue));
        break;
      }
      case 'ArrowDown':
      case 'PageDown': {
        event.preventDefault();
        this.updateNumeric(
          cycleSegmentValue(segment.value, -1, segment.minValue, segment.maxValue),
        );
        break;
      }
      case 'ArrowLeft': {
        event.preventDefault();
        this.moveFocus(-1);
        break;
      }
      case 'ArrowRight': {
        event.preventDefault();
        this.moveFocus(1);
        break;
      }
      case 'Backspace':
      case 'Delete': {
        event.preventDefault();
        if (segment.value === null) {
          this.moveFocus(-1);
          return;
        }
        segments[index] = {
          ...segment,
          value: null,
          text: segment.placeholder,
          isPlaceholder: true,
        };
        this.fieldContext.commitSegments?.(segments);
        break;
      }
      case ' ':
      case 'Enter': {
        if (segment.type === 'dayPeriod') {
          event.preventDefault();
          this.toggleDayPeriod();
        }
        break;
      }
      default:
        break;
    }
  }

  /** A/P (and first letter of intl AM/PM labels) set day period. */
  private applyDayPeriodKey(event: KeyboardEvent): boolean {
    if (event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) {
      return false;
    }

    const key = event.key.toLocaleLowerCase();
    const am = this.intl.dayPeriodAm.toLocaleLowerCase();
    const pm = this.intl.dayPeriodPm.toLocaleLowerCase();

    if (key === 'a' || key === am.charAt(0)) {
      event.preventDefault();
      this.updateNumeric(0);
      return true;
    }
    if (key === 'p' || key === pm.charAt(0)) {
      event.preventDefault();
      this.updateNumeric(1);
      return true;
    }
    return false;
  }

  private toggleDayPeriod(): void {
    const current = this.segment().value;
    this.updateNumeric(current === 1 ? 0 : 1);
  }

  private updateNumeric(value: number): void {
    const segment = this.segment();
    const segments = [...this.fieldContext.segments()];
    const index = this.index();
    const text =
      segment.type === 'dayPeriod'
        ? value === 1
          ? this.intl.dayPeriodPm
          : this.intl.dayPeriodAm
        : String(value).padStart(segment.type === 'year' ? 4 : 2, '0');

    segments[index] = {
      ...segment,
      value,
      text,
      isPlaceholder: false,
    };
    this.fieldContext.commitSegments?.(segments);
  }

  private moveFocus(direction: 1 | -1): void {
    const segments = this.fieldContext.segments();
    const next = findEditableSegmentIndex(segments, this.index(), direction);
    this.fieldContext.setFocusedSegment?.(next);
    queueMicrotask(() => {
      const root = (document.activeElement as HTMLElement | null)?.closest(
        '[data-slot="date-input-group"]',
      );
      const nextSegmentId = segments[next]?.id;
      const nextEl = nextSegmentId
        ? root?.querySelector<HTMLElement>(`[data-segment-id="${nextSegmentId}"]`)
        : undefined;
      nextEl?.focus();
    });
  }

  private isFirstEditable(): boolean {
    const segments = this.fieldContext.segments();
    const first = segments.findIndex((segment) => segment.isEditable);
    return first === this.index();
  }
}
