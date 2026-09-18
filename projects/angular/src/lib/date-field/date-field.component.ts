import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
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

import { AvDateFieldContext } from './date-field.context';
import { AV_DATE_FIELD_FORMATS } from './date-field.formats';
import { AvDateFieldIntl } from './date-field.intl';
import {
  buildDateFieldSegments,
  clampDateFieldValue,
  commitDateFieldValue,
  dateFieldValueToIso,
} from './date-field.model';
import type {
  AvDateFieldGranularity,
  AvDateFieldValue,
  AvDateSegment,
} from './date-field.types';
import { avDateFieldClasses } from './date-field.utils';

let nextFieldId = 0;

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-date-field]',
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
    '[attr.data-focus-within]': 'context.focusWithin() ? "true" : null',
    'data-slot': 'date-field',
  },
  providers: [
    AvDateFieldContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvDateFieldComponent),
      multi: true,
    },
  ],
})
export class AvDateFieldComponent implements ControlValueAccessor {
  private readonly context = inject(AvDateFieldContext);
  private readonly formats = inject(AV_DATE_FIELD_FORMATS);
  private readonly intl = inject(AvDateFieldIntl);
  private readonly localeId = inject(LOCALE_ID);
  private readonly formDisabled = signal(false);
  private defaultsApplied = false;
  private suppressSegmentRebuild = false;
  private onChange: (value: AvDateFieldValue) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly autoId = `av-date-field-${++nextFieldId}`;

  /** Controlled value (`@internationalized/date`). */
  readonly value = model<AvDateFieldValue>(null);

  /** Uncontrolled initial value. */
  readonly defaultValue = input<AvDateFieldValue>(null, { alias: 'default-value' });

  /** Influences placeholder formatting when value is empty. */
  readonly placeholderValue = input<DateValue | null>(null, { alias: 'placeholder-value' });

  readonly granularity = input<AvDateFieldGranularity>('day');
  readonly hourCycle = input<12 | 24 | undefined>(undefined, { alias: 'hour-cycle' });
  readonly locale = input<string | undefined>(undefined);

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

  readonly name = input<string>();
  readonly id = input<string>();

  protected readonly classes = computed(() =>
    avDateFieldClasses({ fullWidth: this.fullWidth() }),
  );

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly isInvalid = computed(() => this.invalid());
  protected readonly resolvedId = computed(() => this.id() || this.autoId);
  protected readonly isoValue = computed(() => dateFieldValueToIso(this.value()));

  constructor() {
    this.context.commitSegments = (segments) => this.applySegments(segments);
    this.context.setFocusedSegment = (index) => this.context.focusedSegmentIndex.set(index);
    this.context.markTouched = () => this.onTouched();
    this.context.rebuildSegments = () => this.rebuildSegmentsFromValue();

    effect(() => {
      const value = this.value();
      const locale = this.locale() || this.localeId;
      const granularity = this.granularity();
      const hourCycle = this.hourCycle();
      const placeholderValue = this.placeholderValue();
      const formats = this.formats;
      const amLabel = this.intl.dayPeriodAm;
      const pmLabel = this.intl.dayPeriodPm;

      untracked(() => {
        this.context.value.set(value);
        this.context.locale.set(locale);
        this.context.granularity.set(granularity);
        this.context.hourCycle.set(hourCycle);
        this.context.placeholderValue.set(placeholderValue);
        this.context.formats.set(formats);

        if (this.suppressSegmentRebuild) {
          this.suppressSegmentRebuild = false;
          return;
        }

        this.context.segments.set(
          buildDateFieldSegments({
            locale,
            value,
            placeholderValue,
            granularity,
            hourCycle,
            formats,
            amLabel,
            pmLabel,
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

      untracked(() => {
        this.context.disabled.set(disabled);
        this.context.readonly.set(readonly);
        this.context.invalid.set(invalid);
        this.context.required.set(required);
        this.context.minValue.set(minValue);
        this.context.maxValue.set(maxValue);
        this.context.isDateUnavailable.set(isDateUnavailable);
        this.context.fieldId.set(fieldId);
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
  }

  writeValue(value: AvDateFieldValue): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (value: AvDateFieldValue) => void): void {
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

    this.context.segments.set(segments);

    if (!committed) {
      // Keep in-progress edits; avoid effect wiping placeholders mid-typing.
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
    this.context.segments.set(
      buildDateFieldSegments({
        locale: this.locale() || this.localeId,
        value: this.value(),
        placeholderValue: this.placeholderValue(),
        granularity: this.granularity(),
        hourCycle: this.hourCycle(),
        formats: this.formats,
        amLabel: this.intl.dayPeriodAm,
        pmLabel: this.intl.dayPeriodPm,
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
