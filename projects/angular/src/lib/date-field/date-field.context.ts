import { Injectable, signal } from '@angular/core';
import type { DateValue } from '@internationalized/date';

import type { AvDateFieldFormats } from './date-field.formats';
import type {
  AvDateFieldGranularity,
  AvDateFieldValue,
  AvDateSegment,
} from './date-field.types';

/** Shared DateField state for compound parts. */
@Injectable()
export class AvDateFieldContext {
  readonly value = signal<AvDateFieldValue>(null);
  readonly segments = signal<AvDateSegment[]>([]);
  readonly focusedSegmentIndex = signal<number | null>(null);
  readonly focusWithin = signal(false);

  readonly disabled = signal(false);
  readonly readonly = signal(false);
  readonly invalid = signal(false);
  readonly required = signal(false);

  readonly locale = signal('en-US');
  readonly granularity = signal<AvDateFieldGranularity>('day');
  readonly hourCycle = signal<12 | 24 | undefined>(undefined);
  readonly placeholderValue = signal<DateValue | null>(null);
  readonly minValue = signal<DateValue | null>(null);
  readonly maxValue = signal<DateValue | null>(null);
  readonly isDateUnavailable = signal<((date: DateValue) => boolean) | null>(null);
  readonly formats = signal<AvDateFieldFormats | null>(null);
  readonly fieldId = signal<string | null>(null);

  /** Set by root so parts can commit edits without circular DI. */
  commitSegments: ((segments: AvDateSegment[]) => void) | null = null;
  setFocusedSegment: ((index: number | null) => void) | null = null;
  markTouched: (() => void) | null = null;
  rebuildSegments: (() => void) | null = null;
}
