import { Component, computed, signal } from '@angular/core';

import {
  AvCalendarImports,
  AvLabelComponent,
  AvSelectImports,
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
      <div
        av-select
        class="w-40"
        [(selectedKeys)]="selected"
      >
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

      <div av-calendar aria-label="Day view" [visible-duration]="{ days: days() }">
        <div av-calendar-header>
          <div av-calendar-heading></div>
          <button av-calendar-nav-button slot="previous"></button>
          <button av-calendar-nav-button slot="next"></button>
        </div>
        <div av-calendar-grid>
          <div av-calendar-grid-header></div>
          <div av-calendar-grid-body></div>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'calendar-day-view';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvCalendarImports,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const DAY_OPTIONS = ${JSON.stringify(DAY_OPTIONS, null, 2)} as const;

@Component({
  selector: 'app-calendar-day-view-demo',
  imports: [
    AvCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarDayViewDemo {
  readonly dayOptions = DAY_OPTIONS;
  readonly selected = signal<string[]>(['7']);
  readonly days = computed(() => Number(this.selected()[0] ?? 7));
}`;

@Component({
  selector: 'app-calendar-day-view-demo',
  imports: [
    AvCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CalendarDayViewDemo {
  readonly dayOptions = DAY_OPTIONS;
  readonly selected = signal<string[]>(['7']);
  readonly days = computed(() => Number(this.selected()[0] ?? 7));
}
