import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalendarDate } from '@internationalized/date';

import { AvCalendarComponent } from './calendar.component';
import { AvCalendarHeaderComponent } from './calendar-header.component';
import { AvCalendarHeadingComponent } from './calendar-heading.component';
import { AvCalendarNavButtonComponent } from './calendar-nav-button.component';
import { AvCalendarGridComponent } from './calendar-grid.component';
import { AvCalendarGridHeaderComponent } from './calendar-grid-header.component';
import { AvCalendarGridBodyComponent } from './calendar-grid-body.component';
import { AvCalendarCellComponent } from './calendar-cell.component';

@Component({
  imports: [
    AvCalendarComponent,
    AvCalendarHeaderComponent,
    AvCalendarHeadingComponent,
    AvCalendarNavButtonComponent,
    AvCalendarGridComponent,
    AvCalendarGridHeaderComponent,
    AvCalendarGridBodyComponent,
    AvCalendarCellComponent,
  ],
  template: `
    <div
      av-calendar
      aria-label="Test calendar"
      [(value)]="value"
      [default-focused-value]="focused"
    >
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
  `,
})
class CalendarHostComponent {
  value: CalendarDate | null = null;
  focused = new CalendarDate(2024, 6, 15);
}

describe('AvCalendarComponent', () => {
  let fixture: ComponentFixture<CalendarHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarHostComponent);
    fixture.detectChanges();
  });

  it('should render weekday headers and day cells', () => {
    const headers = fixture.debugElement.queryAll(By.css('[data-slot="calendar-header-cell"]'));
    const cells = fixture.debugElement.queryAll(By.css('[data-slot="calendar-cell"]'));

    expect(headers.length).toBe(7);
    expect(cells.length).toBeGreaterThan(20);
  });

  it('should select a date on cell click', () => {
    const cell = fixture.debugElement.query(By.css('[data-slot="calendar-cell"]:not([data-outside-month])'));
    cell.triggerEventHandler('click');
    fixture.detectChanges();

    expect(fixture.componentInstance.value).toBeTruthy();
  });
});
