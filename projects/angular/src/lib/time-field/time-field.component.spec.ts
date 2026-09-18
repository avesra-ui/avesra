import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Time } from '@internationalized/date';

import { AvTimeFieldComponent } from './time-field.component';

describe('AvTimeFieldComponent', () => {
  let fixture: ComponentFixture<AvTimeFieldComponent>;
  let component: AvTimeFieldComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvTimeFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvTimeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('applies full-width class', () => {
    fixture.componentRef.setInput('fullWidth', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.className).toContain('av-time-field--full-width');
  });

  it('writes Time via CVA', () => {
    const time = new Time(9, 30);
    component.writeValue(time);
    fixture.detectChanges();
    expect(component.value()?.toString()).toBe('09:30:00');
  });
});
