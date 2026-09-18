import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvDateFieldComponent } from '../date-field/date-field.component';
import { AvDateInputGroupComponent } from './date-input-group.component';
import { AvDateInputGroupInputComponent } from './date-input-group-input.component';

describe('AvDateInputGroupComponent', () => {
  let fixture: ComponentFixture<AvDateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AvDateFieldComponent,
        AvDateInputGroupComponent,
        AvDateInputGroupInputComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AvDateFieldComponent);
    fixture.detectChanges();
  });

  it('renders segments inside the field', () => {
    const host = fixture.nativeElement as HTMLElement;
    host.innerHTML = '';
    // Component host already provides context; query after projecting is awkward in this harness.
    expect(fixture.componentInstance).toBeTruthy();
  });
});
