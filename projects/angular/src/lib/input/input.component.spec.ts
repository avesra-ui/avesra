import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvInputComponent } from './input.component';

@Component({
  template: `
    <input
      av-input
      type="text"
      placeholder="Name"
      [variant]="variant"
      [full-width]="fullWidth"
      [disabled]="disabled"
      [invalid]="invalid"
    />
  `,
  imports: [AvInputComponent],
})
class InputHostComponent {
  variant: 'primary' | 'secondary' = 'primary';
  fullWidth = false;
  disabled = false;
  invalid = false;
}

@Component({
  template: `<input av-input type="text" [formControl]="control" />`,
  imports: [AvInputComponent, ReactiveFormsModule],
})
class ReactiveInputHostComponent {
  readonly control = new FormControl('initial');
}

describe('AvInputComponent', () => {
  let fixture: ComponentFixture<InputHostComponent>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputHostComponent);
    fixture.detectChanges();
    input = fixture.nativeElement.querySelector('input')!;
  });

  it('should create with default classes', () => {
    expect(input.classList.contains('av-input')).toBeTrue();
    expect(input.classList.contains('av-input--primary')).toBeTrue();
    expect(input.getAttribute('data-slot')).toBe('input');
    expect(input.getAttribute('placeholder')).toBe('Name');
    expect(input.getAttribute('type')).toBe('text');
  });

  it('should apply secondary variant', () => {
    fixture.componentInstance.variant = 'secondary';
    fixture.detectChanges();

    expect(input.classList.contains('av-input--secondary')).toBeTrue();
    expect(input.classList.contains('av-input--primary')).toBeFalse();
  });

  it('should apply full width modifier', () => {
    fixture.componentInstance.fullWidth = true;
    fixture.detectChanges();

    expect(input.classList.contains('av-input--full-width')).toBeTrue();
  });

  it('should reflect disabled state', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    expect(input.disabled).toBeTrue();
    expect(input.getAttribute('data-disabled')).toBe('true');
  });

  it('should reflect invalid state', () => {
    fixture.componentInstance.invalid = true;
    fixture.detectChanges();

    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('data-invalid')).toBe('true');
  });
});

describe('AvInputComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveInputHostComponent>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveInputHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveInputHostComponent);
    fixture.detectChanges();
    input = fixture.nativeElement.querySelector('input')!;
  });

  it('should sync with form control value', () => {
    expect(input.value).toBe('initial');

    fixture.componentInstance.control.setValue('updated');
    fixture.detectChanges();

    expect(input.value).toBe('updated');
  });

  it('should update form control on input', () => {
    input.value = 'typed';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.componentInstance.control.value).toBe('typed');
  });

  it('should respect form control disabled state', () => {
    fixture.componentInstance.control.disable();
    fixture.detectChanges();

    expect(input.disabled).toBeTrue();
    expect(input.getAttribute('data-disabled')).toBe('true');
  });
});
