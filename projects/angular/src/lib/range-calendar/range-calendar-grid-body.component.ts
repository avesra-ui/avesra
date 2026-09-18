import {
  Component,
  computed,
  contentChild,
  Directive,
  inject,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { AvRangeCalendarContext } from './range-calendar.context';
import { AvRangeCalendarGridContext } from './range-calendar-grid.context';
import { buildRangeVisibleGrid } from './range-calendar.model';
import type { AvRangeCalendarCellMeta } from './range-calendar.types';
import {
  avRangeCalendarGridBodyClasses,
  avRangeCalendarGridRowClasses,
} from './range-calendar.utils';
import { AvRangeCalendarCellComponent } from './range-calendar-cell.component';

export interface AvRangeCalendarCellTemplateContext {
  $implicit: AvRangeCalendarCellMeta;
  date: AvRangeCalendarCellMeta['date'];
  formattedDate: string;
  meta: AvRangeCalendarCellMeta;
}

/**
 * Content-only cell template — library still owns the `av-range-calendar-cell` host.
 *
 * @example
 * ```html
 * <ng-template avRangeCalendarCell let-meta>
 *   {{ meta.formattedDate }}
 *   <span av-range-calendar-cell-indicator></span>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avRangeCalendarCell]',
})
export class AvRangeCalendarCellDefDirective {
  constructor(public template: TemplateRef<AvRangeCalendarCellTemplateContext>) {}
}

/**
 * Full cell element template — you own the `av-range-calendar-cell` host (class, attrs, …).
 * Prefer this when per-cell control is needed. Takes precedence over
 * {@link AvRangeCalendarCellDefDirective}.
 *
 * @example
 * ```html
 * <ng-template avRangeCalendarCellDef let-meta>
 *   <div av-range-calendar-cell [date]="meta.date" [meta]="meta" class="my-cell">
 *     {{ meta.formattedDate }}
 *   </div>
 * </ng-template>
 * ```
 */
@Directive({
  selector: 'ng-template[avRangeCalendarCellDef]',
})
export class AvRangeCalendarCellElementDefDirective {
  constructor(public template: TemplateRef<AvRangeCalendarCellTemplateContext>) {}
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-range-calendar-grid-body], tbody[av-range-calendar-grid-body]',
  imports: [AvRangeCalendarCellComponent, NgTemplateOutlet],
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
                <div av-range-calendar-cell [date]="cell.date" [meta]="cell">
                  <ng-container
                    [ngTemplateOutlet]="def.template"
                    [ngTemplateOutletContext]="cellContext(cell)"
                  />
                </div>
              } @else {
                <div av-range-calendar-cell [date]="cell.date" [meta]="cell">
                  {{ cell.formattedDate }}
                </div>
              }
            }
          } @else {
            <div
              role="gridcell"
              aria-hidden="true"
              aria-disabled="true"
              class="av-range-calendar__cell"
            ></div>
          }
        }
      </div>
    }
  `,
  host: {
    '[class]': 'classes()',
    'data-slot': 'range-calendar-grid-body',
  },
})
export class AvRangeCalendarGridBodyComponent {
  private readonly calendar = inject(AvRangeCalendarContext);
  private readonly gridCtx = inject(AvRangeCalendarGridContext, { optional: true });

  /** Full cell host control (`avRangeCalendarCellDef`). */
  protected readonly cellElementTemplate = contentChild(AvRangeCalendarCellElementDefDirective);

  /** Content-only customization (`avRangeCalendarCell`). */
  protected readonly cellTemplate = contentChild(AvRangeCalendarCellDefDirective);

  protected cellContext(cell: AvRangeCalendarCellMeta): AvRangeCalendarCellTemplateContext {
    return {
      $implicit: cell,
      date: cell.date,
      formattedDate: cell.formattedDate,
      meta: cell,
    };
  }

  protected readonly classes = computed(() => avRangeCalendarGridBodyClasses());
  protected readonly rowClasses = computed(() => avRangeCalendarGridRowClasses());

  protected readonly grid = computed(() => {
    const focused = this.calendar.focusedValue();
    const duration = this.calendar.visibleDuration();
    const anchor = this.calendar.visibleAnchor();
    // Depend on highlight signals so preview updates.
    this.calendar.workingRange();
    this.calendar.previewRange();
    this.calendar.value();

    return buildRangeVisibleGrid(
      anchor,
      duration,
      {
        locale: this.calendar.locale(),
        firstDayOfWeek: this.calendar.firstDayOfWeek(),
        timeZone: this.calendar.timeZone(),
        minValue: this.calendar.minValue(),
        maxValue: this.calendar.maxValue(),
        isDateUnavailable: this.calendar.isDateUnavailable(),
        anchorDate: this.calendar.anchorDate(),
        highlightRange: this.calendar.highlightRange(),
        focusedValue: focused,
        weeksInMonth: this.calendar.weeksInMonth(),
        weekdayStyle: this.calendar.weekdayStyle(),
      },
      this.gridCtx?.offset() ?? null,
    );
  });

  protected trackCell(cell: AvRangeCalendarCellMeta | null, index: number): string {
    return cell?.date.toString() ?? `empty-${index}`;
  }
}
