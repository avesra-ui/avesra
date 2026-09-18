import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvInputGroupComponent } from './input-group.component';
import { AvInputGroupInputComponent } from './input-group-input.component';
import { AvInputGroupPrefixComponent } from './input-group-prefix.component';
import { AvInputGroupSuffixComponent } from './input-group-suffix.component';
import { AvInputGroupTextareaComponent } from './input-group-textarea.component';

@Component({
  template: `
    <div
      av-input-group
      [variant]="variant"
      [full-width]="fullWidth"
      [disabled]="disabled"
      [invalid]="invalid"
    >
      <div av-input-group-prefix>$</div>
      <input av-input-group-input type="text" placeholder="0" />
      <div av-input-group-suffix>USD</div>
    </div>
  `,
  imports: [
    AvInputGroupComponent,
    AvInputGroupPrefixComponent,
    AvInputGroupInputComponent,
    AvInputGroupSuffixComponent,
  ],
})
class InputGroupHostComponent {
  variant: 'primary' | 'secondary' = 'primary';
  fullWidth = false;
  disabled = false;
  invalid = false;
}

@Component({
  template: `
    <div av-input-group>
      <textarea av-input-group-textarea rows="3"></textarea>
    </div>
  `,
  imports: [AvInputGroupComponent, AvInputGroupTextareaComponent],
})
class TextareaHostComponent {}

@Component({
  template: `
    <div av-input-group>
      <input av-input-group-input type="text" [formControl]="control" />
    </div>
  `,
  imports: [AvInputGroupComponent, AvInputGroupInputComponent, ReactiveFormsModule],
})
class ReactiveHostComponent {
  readonly control = new FormControl('hello');
}

describe('AvInputGroupComponent', () => {
  let fixture: ComponentFixture<InputGroupHostComponent>;
  let group: HTMLElement;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGroupHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputGroupHostComponent);
    fixture.detectChanges();
    group = fixture.nativeElement.querySelector('[av-input-group]')!;
    input = fixture.nativeElement.querySelector('input')!;
  });

  it('should create with default classes and slots', () => {
    expect(group.classList.contains('av-input-group')).toBeTrue();
    expect(group.classList.contains('av-input-group--primary')).toBeTrue();
    expect(group.getAttribute('data-slot')).toBe('input-group');
    expect(group.getAttribute('role')).toBe('group');

    expect(fixture.nativeElement.querySelector('[av-input-group-prefix]')!.classList.contains('av-input-group__prefix')).toBeTrue();
    expect(input.classList.contains('av-input-group__input')).toBeTrue();
    expect(input.getAttribute('data-slot')).toBe('input-group-input');
    expect(fixture.nativeElement.querySelector('[av-input-group-suffix]')!.classList.contains('av-input-group__suffix')).toBeTrue();
  });

  it('should apply secondary variant and full width', () => {
    fixture.componentInstance.variant = 'secondary';
    fixture.componentInstance.fullWidth = true;
    fixture.detectChanges();

    expect(group.classList.contains('av-input-group--secondary')).toBeTrue();
    expect(group.classList.contains('av-input-group--full-width')).toBeTrue();
  });

  it('should reflect disabled state on group and input', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    expect(group.getAttribute('data-disabled')).toBe('true');
    expect(input.disabled).toBeTrue();
  });

  it('should reflect invalid state on group and input', () => {
    fixture.componentInstance.invalid = true;
    fixture.detectChanges();

    expect(group.getAttribute('data-invalid')).toBe('true');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('should focus input when clicking the group shell', () => {
    spyOn(input, 'focus');
    group.click();
    expect(input.focus).toHaveBeenCalled();
  });
});

describe('AvInputGroupTextareaComponent', () => {
  it('should render textarea with group input class and slot', () => {
    TestBed.configureTestingModule({
      imports: [TextareaHostComponent],
    });

    const fixture = TestBed.createComponent(TextareaHostComponent);
    fixture.detectChanges();

    const textarea = fixture.nativeElement.querySelector('textarea')!;
    expect(textarea.classList.contains('av-input-group__input')).toBeTrue();
    expect(textarea.getAttribute('data-slot')).toBe('input-group-textarea');
  });
});

describe('AvInputGroupInputComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveHostComponent>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveHostComponent);
    fixture.detectChanges();
    input = fixture.nativeElement.querySelector('input')!;
  });

  it('should sync with form control value', () => {
    expect(input.value).toBe('hello');

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
});
