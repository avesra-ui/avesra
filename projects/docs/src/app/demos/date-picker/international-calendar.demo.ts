import { Component } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-date-picker
  class="w-72"
  name="international-date"
  locale="hi-IN-u-ca-indian"
  [default-value]="defaultValue"
>
  <label av-label>Event date</label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger>
        <span av-date-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <av-date-picker-popover>
    <div av-calendar aria-label="Event date" locale="hi-IN-u-ca-indian">
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
    </div>
  </av-date-picker-popover>
</div>`;

export const DEMO_NAME = 'date-picker-international-calendar';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-international-calendar-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerInternationalCalendarDemo {
  readonly defaultValue = today(getLocalTimeZone());
}`;

@Component({
  selector: 'app-date-picker-international-calendar-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerInternationalCalendarDemo {
  readonly defaultValue = today(getLocalTimeZone());
}
