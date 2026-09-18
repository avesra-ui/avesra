import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';

import {
  AvButtonComponent,
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
  type AvRangeCalendarValue,
} from '@avesra/angular';

import { DATE_RANGE_PICKER_CALENDAR_TEMPLATE } from './range-calendar-compound';

const DEMO_TEMPLATE = `<div class="flex w-80 flex-col gap-4">
  <div av-date-range-picker start-name="startDate" end-name="endDate" [(value)]="value">
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
  </div>
  <p av-description>
    Current value:
    {{
      value()
        ? value()!.start.toString() + ' → ' + value()!.end.toString()
        : '(empty)'
    }}
  </p>
  <div class="flex gap-2">
    <button av-button variant="tertiary" type="button" (click)="setThisWeek()">
      Set this week
    </button>
    <button av-button variant="tertiary" type="button" (click)="value.set(null)">Clear</button>
  </div>
</div>`;

export const DEMO_NAME = 'date-range-picker-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { getLocalTimeZone, today } from '@internationalized/date';
import {
  AvButtonComponent,
  AvDateRangePickerImports,
  AvDescriptionComponent,
  AvLabelComponent,
  type AvRangeCalendarValue,
} from '@avesra/angular';

@Component({
  selector: 'app-date-range-picker-controlled-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DateRangePickerControlledDemo {
  readonly value = signal<AvRangeCalendarValue>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 6 }),
  });

  setThisWeek(): void {
    const start = today(getLocalTimeZone());
    this.value.set({ start, end: start.add({ days: 6 }) });
  }
}`;

@Component({
  selector: 'app-date-range-picker-controlled-demo',
  imports: [
    AvDateRangePickerImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DateRangePickerControlledDemo {
  readonly value = signal<AvRangeCalendarValue>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 6 }),
  });

  setThisWeek(): void {
    const start = today(getLocalTimeZone());
    this.value.set({ start, end: start.add({ days: 6 }) });
  }
}
