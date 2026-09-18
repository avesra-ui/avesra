import { Component, computed, signal } from '@angular/core';

import {
  AvLabelComponent,
  AvSelectImports,
  AvRangeCalendarImports,
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
  <div av-select class="w-40" [(selectedKeys)]="selected">
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

  <div av-range-calendar aria-label="Trip dates" [visible-duration]="{ weeks: weeks() }">
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

export const DEMO_NAME = 'range-calendar-week-view';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvLabelComponent,
  AvSelectImports,
  AvRangeCalendarImports,
} from '@avesra/angular';

const WEEK_OPTIONS = ${JSON.stringify(WEEK_OPTIONS, null, 2)} as const;

@Component({
  selector: 'app-range-calendar-week-view-demo',
  imports: [
    AvRangeCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarWeekViewDemo {
  readonly weekOptions = WEEK_OPTIONS;
  readonly selected = signal<string[]>(['1']);
  readonly weeks = computed(() => Number(this.selected()[0] ?? 1));
}`;

@Component({
  selector: 'app-range-calendar-week-view-demo',
  imports: [
    AvRangeCalendarImports,
    AvSelectImports,
    AvLabelComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarWeekViewDemo {
  readonly weekOptions = WEEK_OPTIONS;
  readonly selected = signal<string[]>(['1']);
  readonly weeks = computed(() => Number(this.selected()[0] ?? 1));
}
