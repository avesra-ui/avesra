import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  forwardRef,
  inject,
  input,
  LOCALE_ID,
  model,
  signal,
  untracked,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { CalendarDate, DateValue } from '@internationalized/date';
import { toCalendarDate } from '@internationalized/date';

import { AvDateFieldContext } from '../date-field/date-field.context';
import {
  AV_DATE_FIELD_FORMATS,
  type AvDateFieldFormats,
} from '../date-field/date-field.formats';
import { AvDateFieldIntl } from '../date-field/date-field.intl';
import {
  buildDateFieldSegments,
  clampDateFieldValue,
  commitDateFieldValue,
  dateFieldValueToIso,
} from '../date-field/date-field.model';
import type {
  AvDateFieldGranularity,
  AvDateFieldValue,
  AvDateSegment,
} from '../date-field/date-field.types';
import { AvDateRangePickerContext } from './date-range-picker.context';
import type { AvDateRangePickerValue } from './date-range-picker.types';
import { avDateRangePickerClasses } from './date-range-picker.utils';

let nextRangePickerId = 0;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-range-picker]',
  template: `
    <ng-content />
    @if (startName()) {
      <input
        type="hidden"
        [attr.name]="startName()"
        [value]="startIsoValue()"
        [disabled]="isDisabled() ? true : null"
      />
    }
    @if (endName()) {
      <input
        type="hidden"
        [attr.name]="endName()"
        [value]="endIsoValue()"
        [disabled]="isDisabled() ? true : null"
      />
    }
    @if (name()) {
      <input
        type="hidden"
        [attr.name]="name()"
        [value]="combinedIsoValue()"
        [disabled]="isDisabled() ? true : null"
      />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    role: 'group',
    '[attr.id]': 'resolvedId()',
    '[attr.aria-disabled]': 'isDisabled() ? "true" : null',
    '[attr.aria-invalid]': 'isInvalid() ? "true" : null',
    '[attr.aria-readonly]': 'readonly() ? "true" : null',
    '[attr.aria-required]': 'required() ? "true" : null',
    '[attr.data-disabled]': 'isDisabled() ? "true" : null',
    '[attr.data-invalid]': 'isInvalid() ? "true" : null',
    '[attr.data-readonly]': 'readonly() ? "true" : null',
    '[attr.data-required]': 'required() ? "true" : null',
    '[attr.data-open]': 'open() ? "true" : null',
    '[attr.data-focus-within]': 'focusWithin() ? "true" : null',
    'data-slot': 'date-range-picker',
  },
  providers: [
    AvDateRangePickerContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvDateRangePickerComponent),
      multi: true,
    },
  ],
})
export class AvDateRangePickerComponent implements ControlValueAccessor {
  private readonly pickerContext = inject(AvDateRangePickerContext);
  private readonly formats = inject(AV_DATE_FIELD_FORMATS);
  private readonly intl = inject(AvDateFieldIntl);
  private readonly localeId = inject(LOCALE_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly formDisabled = signal(false);
  private defaultsApplied = false;
  private suppressStartSegmentRebuild = false;
  private suppressEndSegmentRebuild = false;
  private onChange: (value: AvDateRangePickerValue) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly autoId = `av-date-range-picker-${++nextRangePickerId}`;

  private readonly startField = this.pickerContext.startField;
  private readonly endField = this.pickerContext.endField;

  /** Controlled complete range (`null` until both ends are set). */
  readonly value = model<AvDateRangePickerValue>(null);

  /** Uncontrolled initial value. */
  readonly defaultValue = input<AvDateRangePickerValue>(null, { alias: 'default-value' });

  /** Influences placeholder formatting when a field is empty. */
  readonly placeholderValue = input<DateValue | null>(null, { alias: 'placeholder-value' });

  readonly granularity = input<AvDateFieldGranularity>('day');
  readonly hourCycle = input<12 | 24 | undefined>(undefined, { alias: 'hour-cycle' });
  readonly locale = input<string | undefined>(undefined);

  /** Hide the time-zone name segment for ZonedDateTime values. */
  readonly hideTimeZone = input(false, {
    alias: 'hide-time-zone',
    transform: booleanAttribute,
  });

  /** Force leading zeros on numeric segments (overrides AV_DATE_FIELD_FORMATS). */
  readonly forceLeadingZeros = input<boolean | undefined>(undefined, {
    alias: 'force-leading-zeros',
  });

  readonly minValue = input<DateValue | null>(null, { alias: 'min-value' });
  readonly maxValue = input<DateValue | null>(null, { alias: 'max-value' });
  readonly isDateUnavailable = input<((date: DateValue) => boolean) | null>(null, {
    alias: 'is-date-unavailable',
  });

  readonly disabled = input(false, { transform: booleanAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });
  readonly invalid = input(false, { transform: booleanAttribute });
  readonly required = input(false, { transform: booleanAttribute });
  readonly fullWidth = input(false, {
    alias: 'full-width',
    transform: booleanAttribute,
  });

  /** Controls whether the calendar popover is open. */
  readonly open = model(false);

  /** Uncontrolled initial open state. */
  readonly defaultOpen = input(false, {
    alias: 'default-open',
    transform: booleanAttribute,
  });

  /** Closes the popover when clicking outside. */
  readonly dismissable = input(true, { transform: booleanAttribute });

  /** Disables closing via the Escape key. */
  readonly keyboardDismissDisabled = input(false, {
    alias: 'keyboard-dismiss-disabled',
    transform: booleanAttribute,
  });

  /** Close the popover after selecting a complete day range (default true when granularity is day). */
  readonly closeOnSelect = input(true, {
    alias: 'close-on-select',
    transform: booleanAttribute,
  });

  /** Optional single hidden input name (combined `start/end` ISO). */
  readonly name = input<string>();
  readonly startName = input<string | undefined>(undefined, { alias: 'start-name' });
  readonly endName = input<string | undefined>(undefined, { alias: 'end-name' });
  readonly id = input<string>();

  protected readonly classes = computed(() =>
    avDateRangePickerClasses({ fullWidth: this.fullWidth() }),
  );

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly isInvalid = computed(() => this.invalid());
  protected readonly resolvedId = computed(() => this.id() || this.autoId);
  protected readonly focusWithin = computed(
    () => this.startField.focusWithin() || this.endField.focusWithin(),
  );

  protected readonly startIsoValue = computed(() =>
    dateFieldValueToIso(this.value()?.start ?? null),
  );
  protected readonly endIsoValue = computed(() =>
    dateFieldValueToIso(this.value()?.end ?? null),
  );
  protected readonly combinedIsoValue = computed(() => {
    const range = this.value();
    if (!range) {
      return '';
    }
    return `${dateFieldValueToIso(range.start)}/${dateFieldValueToIso(range.end)}`;
  });

  private openDefaultsApplied = false;

  constructor() {
    this.bindFieldCallbacks(this.startField, 'start');
    this.bindFieldCallbacks(this.endField, 'end');

    this.pickerContext.registerOpenChange((value) => {
      if (this.open() !== value) {
        this.open.set(value);
      }
    });

    this.pickerContext.registerValueChange((value) => {
      this.setValue(value, true);
    });

    this.pickerContext.registerTouched(() => this.onTouched());

    effect(() => {
      const open = this.open();
      untracked(() => {
        if (open !== this.pickerContext.isOpen()) {
          this.pickerContext.setOpen(open);
        }
      });
    });

    effect(() => {
      const value = this.value();
      const locale = this.locale() || this.localeId;
      const granularity = this.granularity();
      const hourCycle = this.hourCycle();
      const placeholderValue = this.placeholderValue();
      const hideTimeZone = this.hideTimeZone();
      const forceLeadingZeros = this.forceLeadingZeros();
      const formats = {
        ...this.formats,
        forceLeadingZeros: forceLeadingZeros ?? this.formats.forceLeadingZeros,
      };
      const amLabel = this.intl.dayPeriodAm;
      const pmLabel = this.intl.dayPeriodPm;
      const startValue = value?.start ?? null;
      const endValue = value?.end ?? null;

      untracked(() => {
        this.syncFieldMeta(this.startField, {
          value: startValue,
          locale,
          granularity,
          hourCycle,
          placeholderValue,
          formats,
        });
        this.syncFieldMeta(this.endField, {
          value: endValue,
          locale,
          granularity,
          hourCycle,
          placeholderValue,
          formats,
        });

        this.pickerContext.value.set(value);
        this.pickerContext.locale.set(locale);
        this.pickerContext.granularity.set(granularity);

        if (!this.suppressStartSegmentRebuild) {
          this.startField.segments.set(
            buildDateFieldSegments({
              locale,
              value: startValue,
              placeholderValue,
              granularity,
              hourCycle,
              formats,
              amLabel,
              pmLabel,
              hideTimeZone,
            }),
          );
        } else {
          this.suppressStartSegmentRebuild = false;
        }

        if (!this.suppressEndSegmentRebuild) {
          this.endField.segments.set(
            buildDateFieldSegments({
              locale,
              value: endValue,
              placeholderValue,
              granularity,
              hourCycle,
              formats,
              amLabel,
              pmLabel,
              hideTimeZone,
            }),
          );
        } else {
          this.suppressEndSegmentRebuild = false;
        }
      });
    });

    effect(() => {
      const disabled = this.isDisabled();
      const readonly = this.readonly();
      const invalid = this.isInvalid();
      const required = this.required();
      const minValue = this.minValue();
      const maxValue = this.maxValue();
      const isDateUnavailable = this.isDateUnavailable();
      const fieldId = this.resolvedId();
      const dismissable = this.dismissable();
      const keyboardDismissDisabled = this.keyboardDismissDisabled();
      const closeOnSelect = this.closeOnSelect();

      untracked(() => {
        this.syncFieldState(this.startField, {
          disabled,
          readonly,
          invalid,
          required,
          minValue,
          maxValue,
          isDateUnavailable,
          fieldId: `${fieldId}-start`,
        });
        this.syncFieldState(this.endField, {
          disabled,
          readonly,
          invalid,
          required,
          minValue,
          maxValue,
          isDateUnavailable,
          fieldId: `${fieldId}-end`,
        });

        this.pickerContext.disabled.set(disabled);
        this.pickerContext.readonly.set(readonly);
        this.pickerContext.invalid.set(invalid);
        this.pickerContext.minValue.set(minValue);
        this.pickerContext.maxValue.set(maxValue);
        this.pickerContext.isDateUnavailable.set(isDateUnavailable);
        this.pickerContext.dismissable.set(dismissable);
        this.pickerContext.keyboardDismissDisabled.set(keyboardDismissDisabled);
        this.pickerContext.closeOnSelect.set(closeOnSelect);
      });
    });

    effect(() => {
      const defaultValue = this.defaultValue();
      if (this.defaultsApplied || this.value() !== null || defaultValue === null) {
        return;
      }
      this.defaultsApplied = true;
      untracked(() => this.setValue(defaultValue, false));
    });

    effect(() => {
      if (this.openDefaultsApplied || !this.defaultOpen() || this.open()) {
        return;
      }
      this.openDefaultsApplied = true;
      untracked(() => this.open.set(true));
    });

    this.destroyRef.onDestroy(() => this.pickerContext.dispose());
  }

  writeValue(value: AvDateRangePickerValue): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (value: AvDateRangePickerValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  private bindFieldCallbacks(field: AvDateFieldContext, which: 'start' | 'end'): void {
    field.commitSegments = (segments) => this.applySegments(which, segments);
    field.setFocusedSegment = (index) => field.focusedSegmentIndex.set(index);
    field.markTouched = () => this.onTouched();
    field.rebuildSegments = () => this.rebuildSegmentsFromValue(which);
  }

  private syncFieldMeta(
    field: AvDateFieldContext,
    options: {
      value: AvDateFieldValue;
      locale: string;
      granularity: AvDateFieldGranularity;
      hourCycle: 12 | 24 | undefined;
      placeholderValue: DateValue | null;
      formats: AvDateFieldFormats;
    },
  ): void {
    field.value.set(options.value);
    field.locale.set(options.locale);
    field.granularity.set(options.granularity);
    field.hourCycle.set(options.hourCycle);
    field.placeholderValue.set(options.placeholderValue);
    field.formats.set(options.formats);
  }

  private syncFieldState(
    field: AvDateFieldContext,
    options: {
      disabled: boolean;
      readonly: boolean;
      invalid: boolean;
      required: boolean;
      minValue: DateValue | null;
      maxValue: DateValue | null;
      isDateUnavailable: ((date: DateValue) => boolean) | null;
      fieldId: string;
    },
  ): void {
    field.disabled.set(options.disabled);
    field.readonly.set(options.readonly);
    field.invalid.set(options.invalid);
    field.required.set(options.required);
    field.minValue.set(options.minValue);
    field.maxValue.set(options.maxValue);
    field.isDateUnavailable.set(options.isDateUnavailable);
    field.fieldId.set(options.fieldId);
  }

  private applySegments(which: 'start' | 'end', segments: AvDateSegment[]): void {
    if (this.isDisabled() || this.readonly()) {
      return;
    }

    const field = which === 'start' ? this.startField : this.endField;
    const current = this.value();
    const previousFieldValue =
      which === 'start' ? (current?.start ?? null) : (current?.end ?? null);

    const committed = commitDateFieldValue(
      segments,
      this.granularity(),
      previousFieldValue,
      this.placeholderValue(),
    );

    field.segments.set(segments);

    if (!committed) {
      if (which === 'start') {
        this.suppressStartSegmentRebuild = true;
      } else {
        this.suppressEndSegmentRebuild = true;
      }

      // Incomplete typing: keep the other side's field value, clear CVA until both valid.
      if (which === 'start') {
        this.startField.value.set(null);
        if (current !== null) {
          this.setValue(null, true);
        }
      } else {
        this.endField.value.set(null);
        if (current !== null) {
          this.setValue(null, true);
        }
      }
      return;
    }

    const next = clampDateFieldValue(
      committed,
      this.minValue(),
      this.maxValue(),
      this.isDateUnavailable(),
    );

    if (!next) {
      return;
    }

    const nextDate = toCalendarDate(next);

    if (which === 'start') {
      this.commitStart(nextDate);
    } else {
      this.commitEnd(nextDate);
    }
  }

  private commitStart(start: CalendarDate): void {
    const current = this.value();
    let end = current?.end ?? (this.endField.value() ? toCalendarDate(this.endField.value()!) : null);

    // Material-like: if new start is after existing end, clear end.
    if (end && start.compare(end) > 0) {
      end = null;
      this.suppressEndSegmentRebuild = false;
      this.endField.value.set(null);
      this.rebuildSegmentsFromValue('end');
    }

    this.startField.value.set(start);

    if (end) {
      this.setValue({ start, end }, true);
    } else {
      if (current !== null) {
        this.setValue(null, true);
      }
      this.suppressStartSegmentRebuild = true;
    }
  }

  private commitEnd(end: CalendarDate): void {
    const current = this.value();
    let start =
      current?.start ?? (this.startField.value() ? toCalendarDate(this.startField.value()!) : null);

    // Prefer keeping an incomplete start-only state when end is typed first without start.
    if (!start) {
      start = end;
      this.startField.value.set(start);
      this.rebuildSegmentsFromValue('start');
    }

    // If end is before start, swap (or clear) — prefer treating typed end as new start.
    if (start.compare(end) > 0) {
      this.startField.value.set(end);
      this.endField.value.set(null);
      this.rebuildSegmentsFromValue('start');
      this.rebuildSegmentsFromValue('end');
      if (current !== null) {
        this.setValue(null, true);
      }
      this.suppressEndSegmentRebuild = true;
      return;
    }

    this.endField.value.set(end);
    this.setValue({ start, end }, true);
  }

  private rebuildSegmentsFromValue(which: 'start' | 'end'): void {
    const forceLeadingZeros = this.forceLeadingZeros();
    const formats = {
      ...this.formats,
      forceLeadingZeros: forceLeadingZeros ?? this.formats.forceLeadingZeros,
    };
    const field = which === 'start' ? this.startField : this.endField;
    const value =
      which === 'start'
        ? (this.value()?.start ?? this.startField.value())
        : (this.value()?.end ?? this.endField.value());

    field.segments.set(
      buildDateFieldSegments({
        locale: this.locale() || this.localeId,
        value,
        placeholderValue: this.placeholderValue(),
        granularity: this.granularity(),
        hourCycle: this.hourCycle(),
        formats,
        amLabel: this.intl.dayPeriodAm,
        pmLabel: this.intl.dayPeriodPm,
        hideTimeZone: this.hideTimeZone(),
      }),
    );
  }

  private setValue(value: AvDateRangePickerValue, emit: boolean): void {
    this.value.set(value);
    if (emit) {
      this.onChange(value);
    }
  }
}
