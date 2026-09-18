/** Shared calendar compound markup for DatePicker demos. */
export const DATE_PICKER_CALENDAR_TEMPLATE = `<div av-calendar aria-label="Event date">
      <div av-calendar-header>
        <button av-calendar-year-picker-trigger>
          <span av-calendar-year-picker-trigger-heading></span>
          <span av-calendar-year-picker-trigger-indicator></span>
        </button>
        <button av-calendar-nav-button slot="previous"></button>
        <button av-calendar-nav-button slot="next"></button>
      </div>
      <div av-calendar-grid>
        <div av-calendar-grid-header></div>
        <div av-calendar-grid-body></div>
      </div>
      <div av-calendar-year-picker-grid></div>
    </div>`;

export const DATE_PICKER_CALENDAR_IMPORTS = [
  'AvCalendarComponent',
  'AvCalendarHeaderComponent',
  'AvCalendarYearPickerTriggerComponent',
  'AvCalendarYearPickerTriggerHeadingComponent',
  'AvCalendarYearPickerTriggerIndicatorComponent',
  'AvCalendarNavButtonComponent',
  'AvCalendarGridComponent',
  'AvCalendarGridHeaderComponent',
  'AvCalendarGridBodyComponent',
  'AvCalendarYearPickerGridComponent',
] as const;
