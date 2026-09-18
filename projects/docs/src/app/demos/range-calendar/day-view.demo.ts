import { Component, computed, signal } from '@angular/core';

import {
  AvLabelComponent,
  AvSelectImports,
  AvRangeCalendarImports,
} from '@avesra/angular';

const DAY_OPTIONS = [
  { id: '1', name: '1 day' },
  { id: '3', name: '3 days' },
  { id: '5', name: '5 days' },
  { id: '7', name: '7 days' },
  { id: '14', name: '14 days' },
  { id: '21', name: '21 days' },
] as const;

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-6">
  <div av-select class="w-40" [(selectedKeys)]="selected">
    <label av-label>Visible days</label>
    <button av-select-trigger>
      <span av-select-value></span>
      <span av-select-indicator></span>
    </button>
    <av-select-popover>
      <div av-list-box>
        @for (option of dayOptions; track option.id) {
          <div av-list-box-item [id]="option.id" [textValue]="option.name">
            {{ option.name }}
            <span av-list-box-item-indicator></span>
          </div>
        }
      </div>
    </av-select-popover>
  </div>

  <div av-range-calendar aria-label="Trip dates" [visible-duration]="{ days: days() }">
    <div av-range-calendar-header>
      <div av-range-calendar-heading></div>
      <button av-range-calendar-nav-button slot="previous"></button>
      <button av-range-calendar-nav-button slot="next"></button>
    </div>
    <div av-range-calendar-grid>
      <div av-range-calendar-grid-header></div>
      <div av-range-calendar-grid-body></div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'range-calendar-day-view';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvSelectImports,
  AvRangeCalendarImports,
} from '@avesra/angular';

const DAY_OPTIONS = ${JSON.stringify(DAY_OPTIONS, null, 2)} as const;

@Component({
  selector: 'app-range-calendar-day-view-demo',
  imports: [
    AvRangeCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarDayViewDemo {
  readonly dayOptions = DAY_OPTIONS;
  readonly selected = signal<string[]>(['7']);
  readonly days = computed(() => Number(this.selected()[0] ?? 7));
}`;

@Component({
  selector: 'app-range-calendar-day-view-demo',
  imports: [
    AvRangeCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarDayViewDemo {
  readonly dayOptions = DAY_OPTIONS;
  readonly selected = signal<string[]>(['7']);
  readonly days = computed(() => Number(this.selected()[0] ?? 7));
}
