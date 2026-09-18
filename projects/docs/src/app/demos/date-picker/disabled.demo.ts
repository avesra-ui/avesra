import { Component } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvDatePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

const DEMO_TEMPLATE = `<div
  av-date-picker
  class="w-72"
  name="date"
  disabled
  [value]="todayDate"
>
  <label av-label>Date</label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger>
        <span av-date-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <p av-description>This date picker is disabled.</p>
  <av-date-picker-popover>
    ${DATE_PICKER_CALENDAR_TEMPLATE}
  </av-date-picker-popover>
</div>`;

export const DEMO_NAME = 'date-picker-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvDatePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-disabled-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerDisabledDemo {
  readonly todayDate = today(getLocalTimeZone());
}`;

@Component({
  selector: 'app-date-picker-disabled-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerDisabledDemo {
  readonly todayDate = today(getLocalTimeZone());
}
