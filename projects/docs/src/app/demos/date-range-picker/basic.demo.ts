import { Component } from '@angular/core';

import {
  AvDateRangePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

import { DATE_RANGE_PICKER_CALENDAR_TEMPLATE } from './range-calendar-compound';

const DEMO_TEMPLATE = `<div av-date-range-picker class="w-80" start-name="startDate" end-name="endDate">
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
  <av-date-range-picker-popover>
    ${DATE_RANGE_PICKER_CALENDAR_TEMPLATE}
  </av-date-range-picker-popover>
</div>`;

export const DEMO_NAME = 'date-range-picker-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateRangePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-range-picker-basic-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateRangePickerBasicDemo {}`;

@Component({
  selector: 'app-date-range-picker-basic-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateRangePickerBasicDemo {}
