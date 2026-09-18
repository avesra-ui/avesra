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

import { AvDateFieldContext } from '../date-field/date-field.context';
import { AV_DATE_FIELD_FORMATS } from '../date-field/date-field.formats';
import { AvDateFieldIntl } from '../date-field/date-field.intl';
import type { AvDateSegment } from '../date-field/date-field.types';
import {
  buildTimeFieldSegments,
  clampTimeFieldValue,
  commitTimeFieldValue,
  timeFieldValueToIso,
} from './time-field.model';
import type {
  AvTimeFieldGranularity,
  AvTimeFieldValue,
} from './time-field.types';
import { avTimeFieldClasses } from './time-field.utils';

let nextFieldId = 0;

/**
 * TimeField root — provides {@link AvDateFieldContext} so shared
 * `av-date-input-group` parts compose the input chrome.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-time-field]',
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
    'data-slot': 'time-field',
  },
  providers: [
    AvDateFieldContext,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AvTimeFieldComponent),
      multi: true,
    },
  ],
})
export class AvTimeFieldComponent implements ControlValueAccessor {
  private readonly context = inject(AvDateFieldContext);
  private readonly formats = inject(AV_DATE_FIELD_FORMATS);
  private readonly intl = inject(AvDateFieldIntl);
  private readonly localeId = inject(LOCALE_ID);
  private readonly formDisabled = signal(false);
  private defaultsApplied = false;
  private suppressSegmentRebuild = false;
  private onChange: (value: AvTimeFieldValue) => void = () => {};
  private onTouched: () => void = () => {};
  private readonly autoId = `av-time-field-${++nextFieldId}`;

  /** Controlled value (`@internationalized/date` TimeValue). */
  readonly value = model<AvTimeFieldValue>(null);

  /** Uncontrolled initial value. */
  readonly defaultValue = input<AvTimeFieldValue>(null, { alias: 'default-value' });

  /** Influences placeholder formatting when value is empty. */
  readonly placeholderValue = input<Exclude<AvTimeFieldValue, null> | null>(null, {
    alias: 'placeholder-value',
  });

  /** Default visible unit is `minute`. */
  readonly granularity = input<AvTimeFieldGranularity>('minute');
  readonly hourCycle = input<12 | 24 | undefined>(undefined, { alias: 'hour-cycle' });
  readonly locale = input<string | undefined>(undefined);

  readonly minValue = input<Exclude<AvTimeFieldValue, null> | null>(null, {
    alias: 'min-value',
  });
  readonly maxValue = input<Exclude<AvTimeFieldValue, null> | null>(null, {
    alias: 'max-value',
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
    avTimeFieldClasses({ fullWidth: this.fullWidth() }),
  );

  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());
  protected readonly isInvalid = computed(() => this.invalid());
  protected readonly resolvedId = computed(() => this.id() || this.autoId);
  protected readonly isoValue = computed(() => timeFieldValueToIso(this.value()));

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
        // Context value is DateField-typed; store null and keep Time on the model.
        this.context.value.set(null);
        this.context.locale.set(locale);
        this.context.granularity.set(granularity);
        this.context.hourCycle.set(hourCycle);
        this.context.placeholderValue.set(null);
        this.context.formats.set(formats);

        if (this.suppressSegmentRebuild) {
          this.suppressSegmentRebuild = false;
          return;
        }

        this.context.segments.set(
          buildTimeFieldSegments({
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
      const fieldId = this.resolvedId();

      untracked(() => {
        this.context.disabled.set(disabled);
        this.context.readonly.set(readonly);
        this.context.invalid.set(invalid);
        this.context.required.set(required);
        this.context.minValue.set(null);
        this.context.maxValue.set(null);
        this.context.isDateUnavailable.set(null);
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

  writeValue(value: AvTimeFieldValue): void {
    this.value.set(value ?? null);
  }

  registerOnChange(fn: (value: AvTimeFieldValue) => void): void {
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

    const committed = commitTimeFieldValue(
      segments,
      this.granularity(),
      this.value(),
      this.placeholderValue(),
    );

    this.context.segments.set(segments);

    if (!committed) {
      this.suppressSegmentRebuild = true;
      if (this.value() !== null) {
        this.setValue(null, true);
      }
      return;
    }

    const next = clampTimeFieldValue(committed, this.minValue(), this.maxValue());
    this.setValue(next, true);
  }

  private rebuildSegmentsFromValue(): void {
    this.context.segments.set(
      buildTimeFieldSegments({
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

  private setValue(value: AvTimeFieldValue, emit: boolean): void {
    this.value.set(value);
    if (emit) {
      this.onChange(value);
    }
  }
}
