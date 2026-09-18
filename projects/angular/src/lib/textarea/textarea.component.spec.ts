import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvTextareaComponent } from './textarea.component';

@Component({
  template: `
    <textarea
      av-textarea
      placeholder="Description"
      rows="4"
      [variant]="variant"
      [full-width]="fullWidth"
      [disabled]="disabled"
      [invalid]="invalid"
    ></textarea>
  `,
  imports: [AvTextareaComponent],
})
class TextareaHostComponent {
  variant: 'primary' | 'secondary' = 'primary';
  fullWidth = false;
  disabled = false;
  invalid = false;
}

@Component({
  template: `<textarea av-textarea [formControl]="control"></textarea>`,
  imports: [AvTextareaComponent, ReactiveFormsModule],
})
class ReactiveTextareaHostComponent {
  readonly control = new FormControl('initial');
}

describe('AvTextareaComponent', () => {
  let fixture: ComponentFixture<TextareaHostComponent>;
  let textarea: HTMLTextAreaElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaHostComponent);
    fixture.detectChanges();
    textarea = fixture.nativeElement.querySelector('textarea')!;
  });

  it('should create with default classes', () => {
    expect(textarea.classList.contains('av-textarea')).toBeTrue();
    expect(textarea.classList.contains('av-textarea--primary')).toBeTrue();
    expect(textarea.getAttribute('data-slot')).toBe('textarea');
    expect(textarea.getAttribute('placeholder')).toBe('Description');
    expect(textarea.getAttribute('rows')).toBe('4');
  });

  it('should apply secondary variant', () => {
    fixture.componentInstance.variant = 'secondary';
    fixture.detectChanges();

    expect(textarea.classList.contains('av-textarea--secondary')).toBeTrue();
    expect(textarea.classList.contains('av-textarea--primary')).toBeFalse();
  });

  it('should apply full width modifier', () => {
    fixture.componentInstance.fullWidth = true;
    fixture.detectChanges();

    expect(textarea.classList.contains('av-textarea--full-width')).toBeTrue();
  });

  it('should reflect disabled state', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    expect(textarea.disabled).toBeTrue();
    expect(textarea.getAttribute('data-disabled')).toBe('true');
  });

  it('should reflect invalid state', () => {
    fixture.componentInstance.invalid = true;
    fixture.detectChanges();

    expect(textarea.getAttribute('aria-invalid')).toBe('true');
    expect(textarea.getAttribute('data-invalid')).toBe('true');
  });
});

describe('AvTextareaComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveTextareaHostComponent>;
  let textarea: HTMLTextAreaElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveTextareaHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveTextareaHostComponent);
    fixture.detectChanges();
    textarea = fixture.nativeElement.querySelector('textarea')!;
  });

  it('should sync with form control value', () => {
    expect(textarea.value).toBe('initial');

    fixture.componentInstance.control.setValue('updated');
    fixture.detectChanges();

    expect(textarea.value).toBe('updated');
  });

  it('should update form control on input', () => {
    textarea.value = 'typed';
    textarea.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.componentInstance.control.value).toBe('typed');
  });

  it('should respect form control disabled state', () => {
    fixture.componentInstance.control.disable();
    fixture.detectChanges();

    expect(textarea.disabled).toBeTrue();
    expect(textarea.getAttribute('data-disabled')).toBe('true');
  });
});
