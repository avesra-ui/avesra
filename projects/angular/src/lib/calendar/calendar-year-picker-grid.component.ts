import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';

import { AvCalendarContext } from './calendar.context';
import { isDismissKey, isSelectionKey, moveFocusedYear } from './calendar.keyboard';
import { formatYear, getYearRange } from './calendar.model';
import { avCalendarYearPickerGridClasses } from './calendar.utils';
import { AvCalendarYearPickerCellComponent } from './calendar-year-picker-cell.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'div[av-calendar-year-picker-grid]',
  imports: [AvCalendarYearPickerCellComponent],
  template: `
    <div
      #scrollHost
      role="listbox"
      [attr.aria-label]="calendar.ariaLabel() || null"
      [attr.aria-hidden]="!isOpen() ? 'true' : null"
      [attr.tabindex]="isOpen() ? 0 : -1"
      [attr.data-open]="isOpen() ? 'true' : null"
      [class]="classes()"
      [style.top.px]="top()"
      [style.height.px]="height()"
      (keydown)="onKeydown($event)"
    >
      @for (year of years(); track year.year) {
        <button
          av-calendar-year-picker-cell
          [year]="year.year"
          [selected]="year.selected"
          [disabled]="year.disabled"
        >
          {{ year.label }}
        </button>
      }
    </div>
  `,
  host: {
    class: 'contents',
    'data-slot': 'calendar-year-picker-grid',
  },
})
export class AvCalendarYearPickerGridComponent {
  readonly calendar = inject(AvCalendarContext);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly scrollHost = viewChild<ElementRef<HTMLElement>>('scrollHost');

  protected readonly top = signal(0);
  protected readonly height = signal(0);

  protected readonly classes = computed(() => avCalendarYearPickerGridClasses());
  protected readonly isOpen = computed(() => this.calendar.yearPickerOpen());

  protected readonly years = computed(() => {
    const focused = this.calendar.focusedValue();
    const locale = this.calendar.locale();
    const timeZone = this.calendar.timeZone();

    return getYearRange(
      this.calendar.minValue(),
      this.calendar.maxValue(),
      focused,
    ).map((option) => ({
      ...option,
      label: formatYear(option.date, locale, timeZone),
      selected: option.year === focused.year,
    }));
  });

  constructor() {
    afterNextRender(() => this.syncGeometry());

    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      if (this.isOpen()) {
        queueMicrotask(() => {
          this.syncGeometry();
          this.scrollToSelected();
        });
      } else {
        this.blurYearGridIfFocused();
      }
    });
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (!this.isOpen()) {
      return;
    }

    if (isDismissKey(event.key)) {
      event.preventDefault();
      this.calendar.setYearPickerOpen(false);
      return;
    }

    if (isSelectionKey(event.key)) {
      event.preventDefault();
      this.calendar.selectYear(this.calendar.focusedValue().year);
      return;
    }

    const nextYear = moveFocusedYear(this.calendar.focusedValue().year, event.key);

    if (nextYear != null) {
      event.preventDefault();
      const focused = this.calendar.focusedValue();
      let next = focused;

      try {
        next = focused.set({ year: nextYear });
      } catch {
        next = focused.set({ year: nextYear, day: 1 });
      }

      this.calendar.setFocusedValue(next);
      queueMicrotask(() => this.scrollToSelected());
    }
  }

  private syncGeometry(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const root = this.host.nativeElement.closest('[data-slot="calendar"]');
    const grid = root?.querySelector('[data-slot="calendar-grid"]') as HTMLElement | null;

    if (!grid || !root) {
      return;
    }

    const rootRect = (root as HTMLElement).getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();

    this.top.set(gridRect.top - rootRect.top);
    this.height.set(gridRect.height);
  }

  private scrollToSelected(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const host = this.scrollHost()?.nativeElement;
    if (!host) {
      return;
    }

    const selected = host.querySelector('[data-selected="true"]') as HTMLElement | null;
    selected?.scrollIntoView({ block: 'center' });
  }

  /** Avoid aria-hidden on an ancestor of the focused year cell when closing. */
  private blurYearGridIfFocused(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const host = this.scrollHost()?.nativeElement;
    const active = this.document.activeElement;
    if (host && active instanceof HTMLElement && host.contains(active)) {
      active.blur();
    }
  }
}
