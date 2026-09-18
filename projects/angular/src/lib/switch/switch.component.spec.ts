import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AvLabelComponent } from '../label/label.component';
import { AvSwitchComponent } from './switch.component';
import { AvSwitchControlComponent } from './switch-control.component';
import { AvSwitchContentComponent } from './switch-content.component';
import { AvSwitchThumbComponent } from './switch-thumb.component';

@Component({
  template: `
    <div
      av-switch
      [disabled]="disabled"
      [default-selected]="defaultSelected"
      [(selected)]="selected"
      aria-label="Notifications"
    >
      <span av-switch-control>
        <span av-switch-thumb></span>
      </span>
      <span av-switch-content>
        <label av-label>Enable notifications</label>
      </span>
    </div>
  `,
  imports: [
    AvSwitchComponent,
    AvSwitchControlComponent,
    AvSwitchThumbComponent,
    AvSwitchContentComponent,
    AvLabelComponent,
  ],
})
class SwitchHostComponent {
  disabled = false;
  defaultSelected = false;
  selected = signal(false);
}

describe('AvSwitchComponent', () => {
  let fixture: ComponentFixture<SwitchHostComponent>;
  let host: SwitchHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    root = fixture.nativeElement.querySelector('[av-switch]')!;
  });

  it('should render switch with role and default classes', () => {
    expect(root.classList.contains('av-switch')).toBeTrue();
    expect(root.classList.contains('av-switch--md')).toBeTrue();
    expect(root.getAttribute('role')).toBe('switch');
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

  it('should render compound parts', () => {
    expect(root.querySelector('.av-switch__control')).toBeTruthy();
    expect(root.querySelector('.av-switch__thumb')).toBeTruthy();
    expect(root.querySelector('.av-switch__content')).toBeTruthy();
  });
});

@Component({
  template: `
    <div av-switch [formControl]="control" aria-label="Notifications">
      <span av-switch-control>
        <span av-switch-thumb></span>
      </span>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    AvSwitchComponent,
    AvSwitchControlComponent,
    AvSwitchThumbComponent,
  ],
})
class ReactiveSwitchHostComponent {
  readonly control = new FormControl(false);
}

describe('AvSwitchComponent with reactive forms', () => {
  let fixture: ComponentFixture<ReactiveSwitchHostComponent>;
  let host: ReactiveSwitchHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveSwitchHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveSwitchHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    root = fixture.nativeElement.querySelector('[av-switch]')!;
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
