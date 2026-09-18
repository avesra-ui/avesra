import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarDate } from '@internationalized/date';

import { AvDateFieldComponent } from './date-field.component';

describe('AvDateFieldComponent', () => {
  let fixture: ComponentFixture<AvDateFieldComponent>;
  let component: AvDateFieldComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvDateFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvDateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('applies full-width class', () => {
    fixture.componentRef.setInput('fullWidth', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.className).toContain('av-date-field--full-width');
  });

  it('writes CalendarDate via CVA', () => {
    const date = new CalendarDate(2025, 2, 3);
    component.writeValue(date);
    fixture.detectChanges();
    expect(component.value()?.toString()).toBe('2025-02-03');
  });
});
