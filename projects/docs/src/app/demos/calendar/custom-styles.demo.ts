import { Component } from '@angular/core';

import { AvCalendarImports } from '@avesra/angular';

/** Applied on each `av-calendar-cell` via `avCalendarCellDef`. */
const CELL_CLASS_NAME = [
  'rounded-3xl',
  'hover:bg-default',
  'data-[hovered=true]:bg-default',
  'data-[outside-month=true]:text-muted',
  'data-[outside-month=true]:opacity-50',
  'data-[selected=true]:bg-accent',
  'data-[selected=true]:text-accent-foreground',
  'data-[selected=true]:hover:bg-accent-hover',
  'data-[selected=true]:data-[hovered=true]:bg-accent-hover',
  'data-[selected=true]:data-[outside-month=true]:bg-default',
  'data-[today=true]:bg-accent-soft',
  'data-[today=true]:text-accent-soft-foreground',
  'data-[today=true]:hover:bg-accent-soft-hover',
  'data-[today=true]:data-[hovered=true]:bg-accent-soft-hover',
  'data-[selected=true]:data-[today=true]:bg-accent',
  'data-[selected=true]:data-[today=true]:hover:bg-accent-hover',
].join(' ');

const DEMO_TEMPLATE = `<div
  av-calendar
  aria-label="Custom styled calendar"
  class="w-[15.75rem] rounded-2xl border border-border/80 bg-surface p-3 shadow-sm ring-1 ring-accent/5"
>
  <div av-calendar-header class="px-0.5 pb-4">
    <div av-calendar-heading class="text-sm font-medium text-foreground"></div>
    <button
      av-calendar-nav-button
      class="text-accent-soft-foreground hover:bg-default hover:text-accent-soft-foreground active:scale-95"
      slot="previous"
    ></button>
    <button
      av-calendar-nav-button
      class="text-accent-soft-foreground hover:bg-default hover:text-accent-soft-foreground active:scale-95"
      slot="next"
    ></button>
  </div>
  <div av-calendar-grid>
    <div av-calendar-grid-header></div>
    <div av-calendar-grid-body>
      <ng-template avCalendarCellDef let-meta>
        <button
          av-calendar-cell
          [date]="meta.date"
          [meta]="meta"
          [class]="cellClass"
        >
          {{ meta.formattedDate }}
        </button>
      </ng-template>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'calendar-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCalendarImports } from '@avesra/angular';

const CELL_CLASS_NAME = ${JSON.stringify(CELL_CLASS_NAME)};

@Component({
  selector: 'app-calendar-custom-styles-demo',
  imports: [AvCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CalendarCustomStylesDemo {
  readonly cellClass = CELL_CLASS_NAME;
}`;

@Component({
  selector: 'app-calendar-custom-styles-demo',
  imports: [AvCalendarImports],
  template: DEMO_TEMPLATE,
})
export class CalendarCustomStylesDemo {
  readonly cellClass = CELL_CLASS_NAME;
}
