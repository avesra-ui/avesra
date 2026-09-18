import { Component } from '@angular/core';

import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

/** Attach custom host `data-custom` attributes on compound calendar parts. */
const DEMO_TEMPLATE = `<div av-date-picker class="w-72" name="date" data-custom="date-picker">
  <label av-label data-custom="date-picker-label">Date</label>
  <div av-date-input-group full-width data-custom="date-field-group">
    <div av-date-input-group-input data-custom="date-field-input"></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger data-custom="date-picker-trigger">
        <span av-date-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <av-date-picker-popover>
    ${DATE_PICKER_CALENDAR_TEMPLATE}
  </av-date-picker-popover>
</div>`;

export const DEMO_NAME = 'date-picker-render-function';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-render-function-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerRenderFunctionDemo {}`;

@Component({
  selector: 'app-date-picker-render-function-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerRenderFunctionDemo {}
