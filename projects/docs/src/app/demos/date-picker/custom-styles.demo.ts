import { Component } from '@angular/core';

import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-date-picker class="w-72" name="event-date">
  <label av-label>Event date</label>
  <div
    av-date-input-group
    full-width
    variant="secondary"
    class="rounded-xl border border-border/80 bg-default shadow-sm"
  >
    <div av-date-input-group-input></div>
    <div av-date-input-group-suffix>
      <button type="button" av-date-picker-trigger class="text-muted">
        <span av-date-picker-trigger-indicator></span>
      </button>
    </div>
  </div>
  <av-date-picker-popover panel-class="border border-border/80 shadow-sm">
    <div av-calendar aria-label="Event date" class="rounded-2xl bg-surface p-2">
      <div av-calendar-header>
        <div av-calendar-heading class="font-medium text-foreground"></div>
        <button
          av-calendar-nav-button
          class="text-muted hover:bg-default"
          slot="previous"
        ></button>
        <button
          av-calendar-nav-button
          class="text-muted hover:bg-default"
          slot="next"
        ></button>
      </div>
      <div av-calendar-grid>
        <div av-calendar-grid-header></div>
        <div av-calendar-grid-body></div>
      </div>
    </div>
  </av-date-picker-popover>
</div>`;

export const DEMO_NAME = 'date-picker-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDatePickerImports,
  AvLabelComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-date-picker-custom-styles-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DatePickerCustomStylesDemo {}`;

@Component({
  selector: 'app-date-picker-custom-styles-demo',
  imports: [
    AvDatePickerImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DatePickerCustomStylesDemo {}
