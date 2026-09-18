import { Component } from '@angular/core';

import {
  AvDateRangePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-range-picker class="w-80" start-name="startDate" end-name="endDate">
  <label av-label>Trip dates</label>
  <div
    av-date-input-group
    full-width
    variant="secondary"
    class="rounded-xl border border-border/80 bg-default shadow-sm"
  >
    <div av-date-input-group-input slot="start"></div>
    <span av-date-range-picker-range-separator></span>
    <div av-date-input-group-input slot="end"></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-range-picker-trigger class="text-muted">
        <span av-date-range-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <av-date-range-picker-popover panel-class="border border-border/80 shadow-sm">
    <div av-range-calendar aria-label="Trip dates" class="rounded-2xl bg-surface p-2">
      <div av-range-calendar-header>
        <div av-range-calendar-heading class="font-medium text-foreground"></div>
        <button
          av-range-calendar-nav-button
          class="text-muted hover:bg-default"
          slot="previous"
        ></button>
        <button
          av-range-calendar-nav-button
          class="text-muted hover:bg-default"
          slot="next"
        ></button>
      </div>
      <div av-range-calendar-grid>
        <div av-range-calendar-grid-header></div>
        <div av-range-calendar-grid-body></div>
      </div>
    </div>
  </av-date-range-picker-popover>
</div>`;

export const DEMO_NAME = 'date-range-picker-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDateRangePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-range-picker-custom-styles-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateRangePickerCustomStylesDemo {}`;

@Component({
  selector: 'app-date-range-picker-custom-styles-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateRangePickerCustomStylesDemo {}
