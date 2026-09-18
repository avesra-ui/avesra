import { Component } from '@angular/core';

import {
  AvDatePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { DATE_PICKER_CALENDAR_TEMPLATE } from './calendar-compound';

const DEMO_TEMPLATE = `<div av-date-picker class="w-72" name="date">
  <label av-label>Date</label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger>
        <span av-date-picker-trigger-indicator>
          <app-icon icon="solar:alt-arrow-down-linear" size="16" />
        </span>
      </button>
    </div>
  </div>
  <p av-description>Replace the default calendar icon by passing custom children.</p>
  <av-date-picker-popover>
    ${DATE_PICKER_CALENDAR_TEMPLATE}
  </av-date-picker-popover>
</div>`;

export const DEMO_NAME = 'date-picker-with-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDatePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-date-picker-with-custom-indicator-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerWithCustomIndicatorDemo {}`;

@Component({
  selector: 'app-date-picker-with-custom-indicator-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerWithCustomIndicatorDemo {}
