import { Component } from '@angular/core';

import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

const DEMO_TEMPLATE = `<div av-date-picker class="w-72" name="date">
  <label av-label>Date</label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger>
        <span av-date-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <av-date-picker-popover>
    ${DATE_PICKER_CALENDAR_TEMPLATE}
  </av-date-picker-popover>
</div>`;

export const DEMO_NAME = 'date-picker-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-basic-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerBasicDemo {}`;

@Component({
  selector: 'app-date-picker-basic-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerBasicDemo {}
