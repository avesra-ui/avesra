import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { parseDate } from '@internationalized/date';

import {
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

/** Applied on each `av-range-calendar-cell` via `avRangeCalendarCellDef`. */
const CELL_CLASS_NAME = [
  'rounded-md',
  '[&_[data-slot=range-calendar-cell-button]]:rounded-md',
  'data-[outside-month=true]:text-muted',
  'data-[outside-month=true]:opacity-50',
  'data-[hovered=true]:not-data-[selected=true]:[&_[data-slot=range-calendar-cell-button]]:bg-default',
  'data-[today=true]:[&_[data-slot=range-calendar-cell-button]]:bg-success-soft',
  'data-[today=true]:[&_[data-slot=range-calendar-cell-button]]:text-success-soft-foreground',
  'data-[today=true]:data-[hovered=true]:not-data-[selected=true]:[&_[data-slot=range-calendar-cell-button]]:bg-success-soft-hover',
  'data-[selected=true]:!rounded-none',
  'data-[selected=true]:!bg-success-soft',
  'data-[outside-month=true]:data-[selected=true]:!bg-default/20',
  'data-[selection-start=true]:!rounded-tl-md',
  'data-[selection-start=true]:!rounded-bl-md',
  'data-[selection-end=true]:!rounded-tr-md',
  'data-[selection-end=true]:!rounded-br-md',
  'data-[selection-start=true]:[&_[data-slot=range-calendar-cell-button]]:!bg-success',
  'data-[selection-start=true]:[&_[data-slot=range-calendar-cell-button]]:!text-success-foreground',
  'data-[selection-start=true]:data-[pressed=true]:[&_[data-slot=range-calendar-cell-button]]:!bg-success-hover',
  'data-[selection-end=true]:[&_[data-slot=range-calendar-cell-button]]:!bg-success',
  'data-[selection-end=true]:[&_[data-slot=range-calendar-cell-button]]:!text-success-foreground',
  'data-[selection-end=true]:data-[pressed=true]:[&_[data-slot=range-calendar-cell-button]]:!bg-success-hover',
].join(' ');

const WRAPPER_CLASS = [
  'w-[15.75rem] overflow-hidden rounded-xl border border-border/80 bg-surface p-3 shadow-sm ring-1 ring-success/10',
  '[&_[data-slot=range-calendar]]:!w-full',
  '[&_[data-slot=range-calendar]]:!max-w-none',
  '[&_[data-slot=range-calendar-header]]:px-0.5',
  '[&_[data-slot=range-calendar-header]]:pb-4',
  '[&_[data-slot=range-calendar-heading]]:text-sm',
  '[&_[data-slot=range-calendar-heading]]:font-medium',
  '[&_[data-slot=range-calendar-heading]]:text-foreground',
  '[&_.av-range-calendar__nav-button]:rounded-md',
  '[&_.av-range-calendar__nav-button]:text-success',
  '[&_.av-range-calendar__nav-button]:hover:bg-success-soft',
  '[&_.av-range-calendar__nav-button]:active:scale-95',
  '[&_[data-slot=range-calendar-header-cell]]:pb-2',
  '[&_[data-slot=range-calendar-header-cell]]:text-xs',
  '[&_[data-slot=range-calendar-header-cell]]:font-medium',
  '[&_[data-slot=range-calendar-header-cell]]:text-muted',
].join(' ');

const DEMO_TEMPLATE = `<div [class]="wrapperClass">
  <div
    av-range-calendar
    aria-label="Hotel stay"
    first-day-of-week="mon"
    [default-value]="defaultValue"
    [default-focused-value]="defaultFocused"
  >
    <div av-range-calendar-header class="px-0.5 pb-4">
      <div av-range-calendar-heading class="text-sm font-medium text-foreground"></div>
      <button
        av-range-calendar-nav-button
        class="rounded-md text-success hover:bg-success-soft active:scale-95"
        slot="previous"
      ></button>
      <button
        av-range-calendar-nav-button
        class="rounded-md text-success hover:bg-success-soft active:scale-95"
        slot="next"
      ></button>
    </div>
    <div av-range-calendar-grid>
      <div av-range-calendar-grid-header></div>
      <div av-range-calendar-grid-body>
        <ng-template avRangeCalendarCellDef let-meta>
          <div
            av-range-calendar-cell
            [date]="meta.date"
            [meta]="meta"
            [class]="cellClass"
          >
            {{ meta.formattedDate }}
          </div>
        </ng-template>
      </div>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'range-calendar-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import type { CalendarDate } from '@internationalized/date';
import { parseDate } from '@internationalized/date';
import {
  AvRangeCalendarImports,
  type AvRangeCalendarValue,
} from '@avesra/angular';

const CELL_CLASS_NAME = ${JSON.stringify(CELL_CLASS_NAME)};

const WRAPPER_CLASS = ${JSON.stringify(WRAPPER_CLASS)};

@Component({
  selector: 'app-range-calendar-custom-styles-demo',
  imports: [AvRangeCalendarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class RangeCalendarCustomStylesDemo {
  readonly wrapperClass = WRAPPER_CLASS;
  readonly cellClass = CELL_CLASS_NAME;
  readonly defaultValue: AvRangeCalendarValue = {
    start: parseDate('2025-02-08'),
    end: parseDate('2025-02-14'),
  };
  readonly defaultFocused: CalendarDate = parseDate('2025-02-08');
}`;

@Component({
  selector: 'app-range-calendar-custom-styles-demo',
  imports: [AvRangeCalendarImports],
  template: DEMO_TEMPLATE,
})
export class RangeCalendarCustomStylesDemo {
  readonly wrapperClass = WRAPPER_CLASS;
  readonly cellClass = CELL_CLASS_NAME;
  readonly defaultValue: AvRangeCalendarValue = {
    start: parseDate('2025-02-08'),
    end: parseDate('2025-02-14'),
  };
  readonly defaultFocused: CalendarDate = parseDate('2025-02-08');
}
