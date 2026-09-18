import { Component } from '@angular/core';

import {
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';
import { DATE_RANGE_PICKER_CALENDAR_TEMPLATE } from './range-calendar-compound';

const DEMO_TEMPLATE = `<div av-date-range-picker class="w-80" start-name="startDate" end-name="endDate">
  <label av-label>Trip dates</label>
  <div av-date-input-group full-width>
    <div av-date-input-group-input slot="start"></div>
    <span av-date-range-picker-range-separator></span>
    <div av-date-input-group-input slot="end"></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-range-picker-trigger>
        <span av-date-range-picker-trigger-indicator>
          <app-icon icon="solar:alt-arrow-down-linear" size="16" />
        </span>
      </button>
    </div>
  </div>
  <p av-description>Replace the default calendar icon by passing custom children.</p>
  <av-date-range-picker-popover>
    ${DATE_RANGE_PICKER_CALENDAR_TEMPLATE}
  </av-date-range-picker-popover>
</div>`;

export const DEMO_NAME = 'date-range-picker-with-custom-indicator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-date-range-picker-with-custom-indicator-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateRangePickerWithCustomIndicatorDemo {}`;

@Component({
  selector: 'app-date-range-picker-with-custom-indicator-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateRangePickerWithCustomIndicatorDemo {}
