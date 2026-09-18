import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvDisclosureGroupComponent } from './disclosure-group.component';

describe('AvDisclosureGroupComponent', () => {
  let fixture: ComponentFixture<AvDisclosureGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvDisclosureGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvDisclosureGroupComponent);
    fixture.detectChanges();
  });

  it('should apply group class', () => {
    expect(fixture.nativeElement.classList.contains('av-disclosure-group')).toBeTrue();
  });
});
