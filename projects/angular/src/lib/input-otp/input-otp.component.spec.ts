import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvInputOtpGroupComponent } from './input-otp-group.component';
import { AvInputOtpSeparatorComponent } from './input-otp-separator.component';
import { AvInputOtpSlotComponent } from './input-otp-slot.component';
import { AvInputOtpValidationContext } from './input-otp.validation.context';
import { AvInputOtpComponent } from './input-otp.component';
import { AV_REGEXP_ONLY_DIGITS } from './input-otp.utils';

@Component({
  template: `
    <div
      av-input-otp
      [maxLength]="6"
      [invalid]="invalid"
      [pattern]="pattern"
      [disabled]="disabled"
      [validationErrors]="validationErrors"
      [pasteTransformer]="pasteTransformer"
      [(value)]="value"
      (complete)="onComplete($event)"
    >
      <div av-input-otp-group>
        <div av-input-otp-slot [index]="0"></div>
        <div av-input-otp-slot [index]="1"></div>
        <div av-input-otp-slot [index]="2"></div>
      </div>
      <div av-input-otp-separator></div>
      <div av-input-otp-group>
        <div av-input-otp-slot [index]="3"></div>
        <div av-input-otp-slot [index]="4"></div>
        <div av-input-otp-slot [index]="5"></div>
      </div>
    </div>
  `,
  imports: [
    AvInputOtpComponent,
    AvInputOtpGroupComponent,
    AvInputOtpSlotComponent,
    AvInputOtpSeparatorComponent,
  ],
})
class InputOtpHostComponent {
  value = signal('');
  invalid = false;
  disabled = false;
  pattern: string | undefined;
  validationErrors: string[] = [];
  pasteTransformer: ((text: string) => string) | undefined;
  completedCode = '';

  onComplete(code: string): void {
    this.completedCode = code;
  }
}

@Component({
  template: `<div av-input-otp [maxLength]="4" [formControl]="control"></div>`,
  imports: [AvInputOtpComponent, ReactiveFormsModule],
})
class ReactiveFormHostComponent {
  control = new FormControl('');
}

describe('AvInputOtpComponent', () => {
  let fixture: ComponentFixture<InputOtpHostComponent>;
  let root: HTMLElement;
  let input: HTMLInputElement;
  let validationContext: AvInputOtpValidationContext;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOtpHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputOtpHostComponent);
    fixture.detectChanges();
    root = fixture.nativeElement.querySelector('[av-input-otp]')!;
    input = root.querySelector('input')!;
    validationContext = fixture.debugElement.children[0].injector.get(
      AvInputOtpValidationContext,
    );
  });

  it('should create with compound structure and overlay input', () => {
    expect(root.classList.contains('av-input-otp')).toBeTrue();
    expect(root.querySelector('.av-input-otp__container')).toBeTruthy();
    expect(input.classList.contains('av-input-otp__input')).toBeTrue();
    expect(input.getAttribute('inputmode')).toBe('numeric');
    expect(input.getAttribute('autocomplete')).toBe('one-time-code');
    expect(root.querySelectorAll('[av-input-otp-slot]').length).toBe(6);
  });

  it('should update value from hidden input', () => {
    input.value = '123';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.componentInstance.value()).toBe('123');
  });

  it('should filter input by pattern', () => {
    fixture.componentInstance.pattern = AV_REGEXP_ONLY_DIGITS;
    fixture.detectChanges();

    input.value = '12a3';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.componentInstance.value()).toBe('123');
  });

  it('should emit complete when max length is reached', () => {
    input.value = '123456';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.componentInstance.completedCode).toBe('123456');
  });

  it('should handle paste with transformer', () => {
    fixture.componentInstance.pasteTransformer = (text) => text.replaceAll('-', '');
    fixture.detectChanges();

    const event = new ClipboardEvent('paste', {
      clipboardData: new DataTransfer(),
    });
    event.clipboardData?.setData('text', '12-3456');
    input.dispatchEvent(event);
    fixture.detectChanges();

    expect(fixture.componentInstance.value()).toBe('123456');
  });

  it('should reflect invalid state from invalid input and validation errors', () => {
    fixture.componentInstance.invalid = true;
    fixture.detectChanges();

    expect(root.getAttribute('data-invalid')).toBe('true');
    expect(validationContext.hasErrors()).toBeTrue();

    fixture.componentInstance.invalid = false;
    fixture.componentInstance.validationErrors = ['Invalid code'];
    fixture.detectChanges();

    expect(root.getAttribute('data-invalid')).toBe('true');
    expect(validationContext.firstError()).toBe('Invalid code');
  });

  it('should block printable keys when full', () => {
    fixture.componentInstance.value.set('123456');
    fixture.detectChanges();
    input.value = '123456';
    input.setSelectionRange(6, 6);

    const event = new KeyboardEvent('keydown', { key: '7', cancelable: true });
    input.dispatchEvent(event);

    expect(event.defaultPrevented).toBeTrue();
  });

  it('should prevent backspace at start when empty', () => {
    input.value = '';
    input.setSelectionRange(0, 0);

    const event = new KeyboardEvent('keydown', { key: 'Backspace', cancelable: true });
    input.dispatchEvent(event);

    expect(event.defaultPrevented).toBeTrue();
  });

  it('should disable input when disabled', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    expect(input.disabled).toBeTrue();
    expect(root.getAttribute('data-disabled')).toBe('true');
  });
});

describe('AvInputOtpComponent with ReactiveForms', () => {
  it('should integrate with FormControl', () => {
    const fixture = TestBed.createComponent(ReactiveFormHostComponent);
    fixture.detectChanges();

    const host = fixture.componentInstance;
    host.control.setValue('1234');
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('1234');
  });
});
