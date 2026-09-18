/** Shared range calendar compound markup for DateRangePicker demos. */
export const DATE_RANGE_PICKER_CALENDAR_TEMPLATE = `<div av-range-calendar aria-label="Trip dates">
      <div av-range-calendar-header>
        <button av-range-calendar-year-picker-trigger>
          <span av-range-calendar-year-picker-trigger-heading></span>
          <span av-range-calendar-year-picker-trigger-indicator></span>
        </button>
        <button av-range-calendar-nav-button slot="previous"></button>
        <button av-range-calendar-nav-button slot="next"></button>
      </div>
      <div av-range-calendar-grid>
        <div av-range-calendar-grid-header></div>
        <div av-range-calendar-grid-body></div>
      </div>
      <div av-range-calendar-year-picker-grid></div>
    </div>`;

export const DATE_RANGE_PICKER_CALENDAR_IMPORTS = [
  'AvRangeCalendarComponent',
  'AvRangeCalendarHeaderComponent',
  'AvRangeCalendarYearPickerTriggerComponent',
  'AvRangeCalendarYearPickerTriggerHeadingComponent',
  'AvRangeCalendarYearPickerTriggerIndicatorComponent',
  'AvRangeCalendarNavButtonComponent',
  'AvRangeCalendarGridComponent',
  'AvRangeCalendarGridHeaderComponent',
  'AvRangeCalendarGridBodyComponent',
  'AvRangeCalendarYearPickerGridComponent',
] as const;
