import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvSpinnerComponent } from './index';
import type { AvSpinnerColor, AvSpinnerSize } from './spinner.utils';

@Component({
  template: `<span av-spinner class="custom-class" [color]="color" [size]="size"></span>`,
  imports: [AvSpinnerComponent],
})
class SpinnerHostComponent {
  color: AvSpinnerColor = 'accent';
  size: AvSpinnerSize = 'md';
}

describe('AvSpinnerComponent', () => {
  let fixture: ComponentFixture<SpinnerHostComponent>;
  let host: SpinnerHostComponent;
  let spinner: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    spinner = fixture.nativeElement.querySelector('[data-slot="spinner"]')!;
  });

  it('should create with default accent md classes', () => {
    expect(spinner.classList.contains('av-spinner')).toBeTrue();
    expect(spinner.classList.contains('av-spinner--accent')).toBeTrue();
    expect(spinner.classList.contains('av-spinner--md')).toBeTrue();
  });

  it('should preserve host utility classes', () => {
    expect(spinner.classList.contains('custom-class')).toBeTrue();
  });

  it('should render spinner icon svg', () => {
    const icon = spinner.querySelector('[data-slot="spinner-icon"]');
    expect(icon).toBeTruthy();
    expect(icon?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should apply size modifier', () => {
    host.size = 'lg';
    fixture.detectChanges();

    expect(spinner.classList.contains('av-spinner--lg')).toBeTrue();
    expect(spinner.classList.contains('av-spinner--md')).toBeFalse();
  });

  it('should apply color modifier', () => {
    host.color = 'danger';
    fixture.detectChanges();

    expect(spinner.classList.contains('av-spinner--danger')).toBeTrue();
    expect(spinner.classList.contains('av-spinner--accent')).toBeFalse();
  });
});
