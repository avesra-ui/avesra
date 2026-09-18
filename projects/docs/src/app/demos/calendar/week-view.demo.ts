import { Component, computed, signal } from '@angular/core';

import {
  AvCalendarImports,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const WEEK_OPTIONS = [
  { id: '1', name: '1 week' },
  { id: '2', name: '2 weeks' },
  { id: '3', name: '3 weeks' },
  { id: '4', name: '4 weeks' },
  { id: '5', name: '5 weeks' },
  { id: '6', name: '6 weeks' },
  { id: '8', name: '8 weeks' },
] as const;

const DEMO_TEMPLATE = `<div class="flex flex-col items-center gap-6">
      <div
        av-select
        class="w-40"
        [(selectedKeys)]="selected"
      >
        <label av-label>Visible weeks</label>
        <button av-select-trigger>
          <span av-select-value></span>
          <span av-select-indicator></span>
        </button>
        <av-select-popover>
          <div av-list-box>
            @for (option of weekOptions; track option.id) {
              <div av-list-box-item [id]="option.id" [textValue]="option.name">
                {{ option.name }}
                <span av-list-box-item-indicator></span>
              </div>
            }
          </div>
        </av-select-popover>
      </div>

      <div av-calendar aria-label="Week view" [visible-duration]="{ weeks: weeks() }">
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

export const DEMO_NAME = 'calendar-week-view';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvCalendarImports,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const WEEK_OPTIONS = ${JSON.stringify(WEEK_OPTIONS, null, 2)} as const;

@Component({
  selector: 'app-calendar-week-view-demo',
  imports: [
    AvCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarWeekViewDemo {
  readonly weekOptions = WEEK_OPTIONS;
  readonly selected = signal<string[]>(['1']);
  readonly weeks = computed(() => Number(this.selected()[0] ?? 1));
}`;

@Component({
  selector: 'app-calendar-week-view-demo',
  imports: [
    AvCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CalendarWeekViewDemo {
  readonly weekOptions = WEEK_OPTIONS;
  readonly selected = signal<string[]>(['1']);
  readonly weeks = computed(() => Number(this.selected()[0] ?? 1));
}
