import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvLabelComponent } from '../label/label.component';
import { AvRadioComponent } from './radio.component';
import { AvRadioControlComponent } from './radio-control.component';
import { AvRadioContentComponent } from './radio-content.component';
import { AvRadioIndicatorComponent } from './radio-indicator.component';

@Component({
  template: `
    <div
      av-radio
      [disabled]="disabled"
      [default-selected]="defaultSelected"
      [(selected)]="selected"
      aria-label="Option"
    >
      <span av-radio-control>
        <span av-radio-indicator></span>
      </span>
      <span av-radio-content>
        <label av-label>Option</label>
      </span>
    </div>
  `,
  imports: [
    AvRadioComponent,
    AvRadioControlComponent,
    AvRadioIndicatorComponent,
    AvRadioContentComponent,
    AvLabelComponent,
  ],
})
class RadioHostComponent {
  disabled = false;
  defaultSelected = false;
  selected = signal(false);
}

describe('AvRadioComponent', () => {
  let fixture: ComponentFixture<RadioHostComponent>;
  let host: RadioHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    root = fixture.nativeElement.querySelector('[av-radio]')!;
  });

  it('should render radio with role and default classes', () => {
    expect(root.classList.contains('av-radio')).toBeTrue();
    expect(root.classList.contains('av-radio--primary')).toBeTrue();
    expect(root.getAttribute('role')).toBe('radio');
    expect(root.getAttribute('aria-checked')).toBe('false');
  });

  it('should select on click', () => {
    root.click();
    fixture.detectChanges();

    expect(host.selected()).toBeTrue();
    expect(root.getAttribute('aria-checked')).toBe('true');
    expect(root.getAttribute('data-selected')).toBe('true');
  });

  it('should select on Space key', () => {
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

  it('should not toggle off when clicked again', () => {
    root.click();
    fixture.detectChanges();
    root.click();
    fixture.detectChanges();

    expect(host.selected()).toBeTrue();
  });

  it('should not select when disabled', () => {
    host.disabled = true;
    fixture.detectChanges();

    root.click();
    fixture.detectChanges();

    expect(host.selected()).toBeFalse();
    expect(root.getAttribute('aria-disabled')).toBe('true');
  });

  it('should render compound parts', () => {
    expect(root.querySelector('.av-radio__control')).toBeTruthy();
    expect(root.querySelector('.av-radio__indicator')).toBeTruthy();
    expect(root.querySelector('.av-radio__content')).toBeTruthy();
  });
});

@Component({
  template: `
    <div av-radio [formControl]="control" aria-label="Option">
      <span av-radio-control>
        <span av-radio-indicator></span>
      </span>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    AvRadioComponent,
    AvRadioControlComponent,
    AvRadioIndicatorComponent,
  ],
})
class ReactiveRadioHostComponent {
  readonly control = new FormControl(false);
}

describe('AvRadioComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveRadioHostComponent>;
  let host: ReactiveRadioHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveRadioHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveRadioHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    root = fixture.nativeElement.querySelector('[av-radio]')!;
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
