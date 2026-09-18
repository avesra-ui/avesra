import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvLabelComponent } from '../label/label.component';
import { AvCheckboxComponent } from './checkbox.component';
import { AvCheckboxControlComponent } from './checkbox-control.component';
import { AvCheckboxContentComponent } from './checkbox-content.component';
import { AvCheckboxIndicatorComponent } from './checkbox-indicator.component';

@Component({
  template: `
    <div
      av-checkbox
      [disabled]="disabled"
      [default-selected]="defaultSelected"
      [indeterminate]="indeterminate"
      [(selected)]="selected"
      aria-label="Terms"
    >
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
      <span av-checkbox-content>
        <label av-label>Accept terms</label>
      </span>
    </div>
  `,
  imports: [
    AvCheckboxComponent,
    AvCheckboxControlComponent,
    AvCheckboxIndicatorComponent,
    AvCheckboxContentComponent,
    AvLabelComponent,
  ],
})
class CheckboxHostComponent {
  disabled = false;
  defaultSelected = false;
  indeterminate = false;
  selected = signal(false);
}

describe('AvCheckboxComponent', () => {
  let fixture: ComponentFixture<CheckboxHostComponent>;
  let host: CheckboxHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    root = fixture.nativeElement.querySelector('[av-checkbox]')!;
  });

  it('should render checkbox with role and default classes', () => {
    expect(root.classList.contains('av-checkbox')).toBeTrue();
    expect(root.classList.contains('av-checkbox--primary')).toBeTrue();
    expect(root.getAttribute('role')).toBe('checkbox');
    expect(root.getAttribute('aria-checked')).toBe('false');
  });

  it('should toggle selected state on click', () => {
    root.click();
    fixture.detectChanges();

    expect(host.selected()).toBeTrue();
    expect(root.getAttribute('aria-checked')).toBe('true');
    expect(root.getAttribute('data-selected')).toBe('true');
  });

  it('should toggle selected state on Space key', () => {
    root.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    fixture.detectChanges();

    expect(host.selected()).toBeTrue();
  });

  it('should apply default selected state', () => {
    host.defaultSelected = true;
    fixture.detectChanges();

    expect(host.selected()).toBeTrue();
    expect(root.getAttribute('aria-checked')).toBe('true');
  });

  it('should not toggle when disabled', () => {
    host.disabled = true;
    fixture.detectChanges();

    root.click();
    fixture.detectChanges();

    expect(host.selected()).toBeFalse();
    expect(root.getAttribute('aria-disabled')).toBe('true');
  });

  it('should render indeterminate state', () => {
    host.indeterminate = true;
    fixture.detectChanges();

    expect(root.getAttribute('aria-checked')).toBe('mixed');
    expect(root.getAttribute('data-indeterminate')).toBe('true');
    expect(
      root.querySelector('[data-slot="checkbox-default-indicator--indeterminate"]'),
    ).toBeTruthy();
  });

  it('should render compound parts', () => {
    expect(root.querySelector('.av-checkbox__control')).toBeTruthy();
    expect(root.querySelector('.av-checkbox__indicator')).toBeTruthy();
    expect(root.querySelector('.av-checkbox__content')).toBeTruthy();
  });
});

@Component({
  template: `
    <div av-checkbox [formControl]="control" aria-label="Terms">
      <span av-checkbox-control>
        <span av-checkbox-indicator></span>
      </span>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    AvCheckboxComponent,
    AvCheckboxControlComponent,
    AvCheckboxIndicatorComponent,
  ],
})
class ReactiveCheckboxHostComponent {
  readonly control = new FormControl(false);
}

describe('AvCheckboxComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveCheckboxHostComponent>;
  let host: ReactiveCheckboxHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveCheckboxHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveCheckboxHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    root = fixture.nativeElement.querySelector('[av-checkbox]')!;
  });

  it('should reflect form control value', () => {
    host.control.setValue(true);
    fixture.detectChanges();

    expect(root.getAttribute('aria-checked')).toBe('true');
  });

  it('should update form control value on click', () => {
    root.click();
    fixture.detectChanges();

    expect(host.control.value).toBeTrue();
  });

  it('should respect form control disabled state', () => {
    host.control.disable();
    fixture.detectChanges();

    root.click();
    fixture.detectChanges();

    expect(host.control.value).toBeFalse();
    expect(root.getAttribute('aria-disabled')).toBe('true');
  });
});
