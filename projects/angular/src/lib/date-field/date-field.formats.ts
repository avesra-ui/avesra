import { InjectionToken } from '@angular/core';

/**
 * Display / parsing options for DateField (Material `MAT_DATE_FORMATS` pattern).
 * Segment order still comes from the active locale via `Intl.DateTimeFormat`.
 */
export interface AvDateFieldFormats {
  /** Placeholder tokens shown for empty editable segments. */
  placeholders: {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
    dayPeriod: string;
  };
  /** Force leading zeros for month/day/hour when true. */
  forceLeadingZeros: boolean;
}

export const AV_DATE_FIELD_FORMATS_DEFAULT: AvDateFieldFormats = {
  placeholders: {
    year: 'yyyy',
    month: 'mm',
    day: 'dd',
    hour: '––',
    minute: '––',
    second: '––',
    dayPeriod: '––',
  },
  forceLeadingZeros: true,
};

export const AV_DATE_FIELD_FORMATS = new InjectionToken<AvDateFieldFormats>(
  'AV_DATE_FIELD_FORMATS',
  {
    providedIn: 'root',
    factory: () => AV_DATE_FIELD_FORMATS_DEFAULT,
  },
);
