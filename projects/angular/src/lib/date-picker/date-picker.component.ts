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
import type { DateValue } from '@internationalized/date';

import { AvDateFieldContext } from '../date-field/date-field.context';
import { AV_DATE_FIELD_FORMATS } from '../date-field/date-field.formats';
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
import { AvDatePickerContext } from './date-picker.context';
import type { AvDatePickerValue } from './date-picker.types';
import { avDatePickerClasses } from './date-picker.utils';

let nextPickerId = 0;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-picker]',
  template: `
    <ng-content />
    @if (name()) {
      <input
        type="hidden"
        [attr.name]="name()"
        [value]="isoValue()"
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
    '[attr.data-focus-within]': 'fieldContext.focusWithin() ? "true" : null',
    'data-slot': 'date-picker',
  },
  providers: [
    AvDatePickerContext,
    AvDateFieldContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvDatePickerComponent),
      multi: true,
    },
  ],
})
export class AvDatePickerComponent implements ControlValueAccessor {
  private readonly pickerContext = inject(AvDatePickerContext);
  private readonly fieldContext = inject(AvDateFieldContext);
  private readonly formats = inject(AV_DATE_FIELD_FORMATS);
  private readonly intl = inject(AvDateFieldIntl);
  private readonly localeId = inject(LOCALE_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly formDisabled = signal(false);
  private defaultsApplied = false;
  private suppressSegmentRebuild = false;
  private onChange: (value: AvDatePickerValue) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly autoId = `av-date-picker-${++nextPickerId}`;

  /** Controlled value (`@internationalized/date`). */
  readonly value = model<AvDatePickerValue>(null);

  /** Uncontrolled initial value. */
  readonly defaultValue = input<AvDatePickerValue>(null, { alias: 'default-value' });

  /** Influences placeholder formatting when value is empty. */
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

  /** Close the popover after selecting a day (default true when granularity is day). */
  readonly closeOnSelect = input(true, {
    alias: 'close-on-select',
    transform: booleanAttribute,
  });

  readonly name = input<string>();
  readonly id = input<string>();

  protected readonly classes = computed(() =>
    avDatePickerClasses({ fullWidth: this.fullWidth() }),
  );

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly isInvalid = computed(() => this.invalid());
  protected readonly resolvedId = computed(() => this.id() || this.autoId);
  protected readonly isoValue = computed(() => dateFieldValueToIso(this.value()));

  private openDefaultsApplied = false;

  constructor() {
    this.fieldContext.commitSegments = (segments) => this.applySegments(segments);
    this.fieldContext.setFocusedSegment = (index) =>
      this.fieldContext.focusedSegmentIndex.set(index);
    this.fieldContext.markTouched = () => this.onTouched();
    this.fieldContext.rebuildSegments = () => this.rebuildSegmentsFromValue();

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

      untracked(() => {
        this.fieldContext.value.set(value);
        this.fieldContext.locale.set(locale);
        this.fieldContext.granularity.set(granularity);
        this.fieldContext.hourCycle.set(hourCycle);
        this.fieldContext.placeholderValue.set(placeholderValue);
        this.fieldContext.formats.set(formats);

        this.pickerContext.value.set(value);
        this.pickerContext.locale.set(locale);
        this.pickerContext.granularity.set(granularity);

        if (this.suppressSegmentRebuild) {
          this.suppressSegmentRebuild = false;
          return;
        }

        this.fieldContext.segments.set(
          buildDateFieldSegments({
            locale,
            value,
            placeholderValue,
            granularity,
            hourCycle,
            formats,
            amLabel,
            pmLabel,
            hideTimeZone,
          }),
        );
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
        this.fieldContext.disabled.set(disabled);
        this.fieldContext.readonly.set(readonly);
        this.fieldContext.invalid.set(invalid);
        this.fieldContext.required.set(required);
        this.fieldContext.minValue.set(minValue);
        this.fieldContext.maxValue.set(maxValue);
        this.fieldContext.isDateUnavailable.set(isDateUnavailable);
        this.fieldContext.fieldId.set(fieldId);

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

  writeValue(value: AvDatePickerValue): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (value: AvDatePickerValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }

  private applySegments(segments: AvDateSegment[]): void {
    if (this.isDisabled() || this.readonly()) {
      return;
    }

    const committed = commitDateFieldValue(
      segments,
      this.granularity(),
      this.value(),
      this.placeholderValue(),
    );

    this.fieldContext.segments.set(segments);

    if (!committed) {
      this.suppressSegmentRebuild = true;
      if (this.value() !== null) {
        this.setValue(null, true);
      }
      return;
    }

    const next = clampDateFieldValue(
      committed,
      this.minValue(),
      this.maxValue(),
      this.isDateUnavailable(),
    );
    this.setValue(next, true);
  }

  private rebuildSegmentsFromValue(): void {
    const forceLeadingZeros = this.forceLeadingZeros();
    const formats = {
      ...this.formats,
      forceLeadingZeros: forceLeadingZeros ?? this.formats.forceLeadingZeros,
    };

    this.fieldContext.segments.set(
      buildDateFieldSegments({
        locale: this.locale() || this.localeId,
        value: this.value(),
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

  private setValue(value: AvDateFieldValue, emit: boolean): void {
    this.value.set(value);
    if (emit) {
      this.onChange(value);
    }
  }
}
