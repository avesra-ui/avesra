import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvFieldErrorComponent } from './field-error.component';

@Component({
  template: `<p av-field-error [visible]="visible">Username must be at least 3 characters</p>`,
  imports: [AvFieldErrorComponent],
})
class FieldErrorHostComponent {
  visible = true;
}

describe('AvFieldErrorComponent', () => {
  let fixture: ComponentFixture<FieldErrorHostComponent>;
  let fieldError: HTMLParagraphElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldErrorHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldErrorHostComponent);
    fixture.detectChanges();
    fieldError = fixture.nativeElement.querySelector('p')!;
  });

  it('should create with default classes and accessibility attributes', () => {
    expect(fieldError.classList.contains('av-field-error')).toBeTrue();
    expect(fieldError.getAttribute('data-slot')).toBe('field-error');
    expect(fieldError.getAttribute('role')).toBe('alert');
    expect(fieldError.getAttribute('aria-live')).toBe('polite');
    expect(fieldError.getAttribute('data-visible')).toBe('true');
    expect(fieldError.textContent?.trim()).toBe('Username must be at least 3 characters');
  });

  it('should hide when visible is false', () => {
    fixture.componentInstance.visible = false;
    fixture.detectChanges();

    expect(fieldError.getAttribute('data-visible')).toBeNull();
  });
});
