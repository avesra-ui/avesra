import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvErrorMessageComponent } from './error-message.component';

@Component({
  template: `<p av-error-message>Please select at least one category</p>`,
  imports: [AvErrorMessageComponent],
})
class ErrorMessageHostComponent {}

describe('AvErrorMessageComponent', () => {
  let fixture: ComponentFixture<ErrorMessageHostComponent>;
  let errorMessage: HTMLParagraphElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageHostComponent);
    fixture.detectChanges();
    errorMessage = fixture.nativeElement.querySelector('p')!;
  });

  it('should create with default classes and accessibility attributes', () => {
    expect(errorMessage.classList.contains('av-error-message')).toBeTrue();
    expect(errorMessage.getAttribute('data-slot')).toBe('error-message');
    expect(errorMessage.getAttribute('role')).toBe('alert');
    expect(errorMessage.getAttribute('aria-live')).toBe('polite');
    expect(errorMessage.textContent?.trim()).toBe('Please select at least one category');
  });
});
