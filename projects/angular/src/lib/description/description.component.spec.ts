import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvDescriptionComponent } from './description.component';

@Component({
  template: `<p av-description id="email-description">We'll never share your email.</p>`,
  imports: [AvDescriptionComponent],
})
class DescriptionHostComponent {}

describe('AvDescriptionComponent', () => {
  let fixture: ComponentFixture<DescriptionHostComponent>;
  let description: HTMLParagraphElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionHostComponent);
    fixture.detectChanges();
    description = fixture.nativeElement.querySelector('p')!;
  });

  it('should create with default classes', () => {
    expect(description.classList.contains('av-description')).toBeTrue();
    expect(description.getAttribute('data-slot')).toBe('description');
    expect(description.id).toBe('email-description');
    expect(description.textContent?.trim()).toBe("We'll never share your email.");
  });
});
