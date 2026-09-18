import {
  Component,
  computed,
  contentChild,
  Directive,
  inject,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { AvCalendarContext } from './calendar.context';
import { AvCalendarGridContext } from './calendar-grid.context';
import { buildVisibleGrid } from './calendar.model';
import type { AvCalendarCellMeta } from './calendar.types';
import { avCalendarGridBodyClasses, avCalendarGridRowClasses } from './calendar.utils';
import { AvCalendarCellComponent } from './calendar-cell.component';

export interface AvCalendarCellTemplateContext {
  $implicit: AvCalendarCellMeta;
  date: AvCalendarCellMeta['date'];
  formattedDate: string;
  meta: AvCalendarCellMeta;
}

/**
 * Content-only cell template — library still owns the `av-calendar-cell` host.
 *
 * @example
 * ```html
 * <ng-template avCalendarCell let-meta>
 *   {{ meta.formattedDate }}
 *   <span av-calendar-cell-indicator></span>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avCalendarCell]',
})
export class AvCalendarCellDefDirective {
  constructor(public template: TemplateRef<AvCalendarCellTemplateContext>) {}
}

/**
 * Full cell element template — you own the `av-calendar-cell` host (class, attrs, …).
 * Prefer this when per-cell control is needed. Takes precedence over
 * {@link AvCalendarCellDefDirective}.
 *
 * @example
 * ```html
 * <ng-template avCalendarCellDef let-meta>
 *   <button av-calendar-cell [date]="meta.date" [meta]="meta" class="my-cell">
 *     {{ meta.formattedDate }}
 *   </button>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avCalendarCellDef]',
})
export class AvCalendarCellElementDefDirective {
  constructor(public template: TemplateRef<AvCalendarCellTemplateContext>) {}
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar-grid-body], tbody[av-calendar-grid-body]',
  imports: [AvCalendarCellComponent, NgTemplateOutlet],
  template: `
    @for (week of grid().weeks; track $index) {
      <div role="row" [class]="rowClasses()">
        @for (cell of week; track trackCell(cell, $index)) {
          @if (cell) {
            @if (cellElementTemplate(); as elementDef) {
              <ng-container
                [ngTemplateOutlet]="elementDef.template"
                [ngTemplateOutletContext]="cellContext(cell)"
              />
            } @else {
              @if (cellTemplate(); as def) {
                <button av-calendar-cell [date]="cell.date" [meta]="cell">
                  <ng-container
                    [ngTemplateOutlet]="def.template"
                    [ngTemplateOutletContext]="cellContext(cell)"
                  />
                </button>
              } @else {
                <button av-calendar-cell [date]="cell.date" [meta]="cell">
                  {{ cell.formattedDate }}
                </button>
              }
            }
          } @else {
            <div role="gridcell" aria-hidden="true" class="av-calendar__cell"></div>
          }
        }
      </div>
    }
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'calendar-grid-body',
  },
})
export class AvCalendarGridBodyComponent {
  private readonly calendar = inject(AvCalendarContext);
  private readonly gridCtx = inject(AvCalendarGridContext, { optional: true });

  /** Full cell host control (`avCalendarCellDef`). */
  protected readonly cellElementTemplate = contentChild(AvCalendarCellElementDefDirective);

  /** Content-only customization (`avCalendarCell`). */
  protected readonly cellTemplate = contentChild(AvCalendarCellDefDirective);

  protected cellContext(cell: AvCalendarCellMeta): AvCalendarCellTemplateContext {
    return {
      $implicit: cell,
      date: cell.date,
      formattedDate: cell.formattedDate,
      meta: cell,
    };
  }

  protected readonly classes = computed(() => avCalendarGridBodyClasses());
  protected readonly rowClasses = computed(() => avCalendarGridRowClasses());

  protected readonly grid = computed(() => {
    const focused = this.calendar.focusedValue();
    const duration = this.calendar.visibleDuration();
    const anchor = this.calendar.visibleAnchor();

    return buildVisibleGrid(
      anchor,
      duration,
      {
        locale: this.calendar.locale(),
        firstDayOfWeek: this.calendar.firstDayOfWeek(),
        timeZone: this.calendar.timeZone(),
        minValue: this.calendar.minValue(),
        maxValue: this.calendar.maxValue(),
        isDateUnavailable: this.calendar.isDateUnavailable(),
        selectionMode: this.calendar.selectionMode(),
        selectedValue: this.calendar.value(),
        focusedValue: focused,
        weeksInMonth: this.calendar.weeksInMonth(),
        weekdayStyle: this.calendar.weekdayStyle(),
      },
      this.gridCtx?.offset() ?? null,
    );
  });

  protected trackCell(cell: AvCalendarCellMeta | null, index: number): string {
    return cell?.date.toString() ?? `empty-${index}`;
  }
}
