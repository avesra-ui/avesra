import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvLabelComponent } from './label.component';

@Component({
  template: `
    <label
      av-label
      for="email"
      [required]="required"
      [disabled]="disabled"
      [invalid]="invalid"
    >
      Email
    </label>
  `,
  imports: [AvLabelComponent],
})
class LabelHostComponent {
  required = false;
  disabled = false;
  invalid = false;
}

describe('AvLabelComponent', () => {
  let fixture: ComponentFixture<LabelHostComponent>;
  let host: LabelHostComponent;
  let label: HTMLLabelElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    label = fixture.nativeElement.querySelector('label')!;
  });

  it('should create with default classes', () => {
    expect(label.classList.contains('av-label')).toBeTrue();
    expect(label.getAttribute('data-slot')).toBe('label');
    expect(label.getAttribute('for')).toBe('email');
    expect(label.textContent?.trim()).toBe('Email');
  });

  it('should apply required modifier class', () => {
    host.required = true;
    fixture.detectChanges();

    expect(label.classList.contains('av-label--required')).toBeTrue();
  });

  it('should apply disabled modifier class', () => {
    host.disabled = true;
    fixture.detectChanges();

    expect(label.classList.contains('av-label--disabled')).toBeTrue();
  });

  it('should apply invalid modifier class', () => {
    host.invalid = true;
    fixture.detectChanges();

    expect(label.classList.contains('av-label--invalid')).toBeTrue();
  });
});
