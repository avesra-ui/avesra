import { Component } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
  type AvRangeCalendarValue,
} from '@avesra/angular';

import { DATE_RANGE_PICKER_CALENDAR_TEMPLATE } from './range-calendar-compound';

const DEMO_TEMPLATE = `<div
  av-date-range-picker
  class="w-80"
  start-name="startDate"
  end-name="endDate"
  disabled
  [value]="defaultRange"
>
  <label av-label>Trip dates</label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input slot="start"></div>
    <span av-date-range-picker-range-separator></span>
    <div av-date-input-group-input slot="end"></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-range-picker-trigger>
        <span av-date-range-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <p av-description>This date range picker is disabled.</p>
  <av-date-range-picker-popover>
    ${DATE_RANGE_PICKER_CALENDAR_TEMPLATE}
  </av-date-range-picker-popover>
</div>`;

export const DEMO_NAME = 'date-range-picker-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
  type AvRangeCalendarValue,
} from '@avesra/angular';

@Component({
  selector: 'app-date-range-picker-disabled-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateRangePickerDisabledDemo {
  readonly defaultRange: AvRangeCalendarValue = {
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 3 }),
  };
}`;

@Component({
  selector: 'app-date-range-picker-disabled-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateRangePickerDisabledDemo {
  readonly defaultRange: AvRangeCalendarValue = {
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 3 }),
  };
}
