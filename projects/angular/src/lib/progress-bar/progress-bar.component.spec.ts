import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvProgressBarComponent,
  AvProgressBarFillComponent,
  AvProgressBarOutputComponent,
  AvProgressBarTrackComponent,
} from './index';
import type { AvProgressBarColor, AvProgressBarSize } from './progress-bar.utils';

@Component({
  template: `
    <div
      av-progress-bar
      [color]="color"
      [size]="size"
      [min]="min"
      [max]="max"
      [value]="value"
      [format-options]="formatOptions"
      [is-indeterminate]="indeterminate"
      [disabled]="disabled"
      [attr.aria-label]="ariaLabel"
    >
      <span av-progress-bar-output></span>
      <div av-progress-bar-track>
        <div av-progress-bar-fill></div>
      </div>
    </div>
  `,
  imports: [
    AvProgressBarComponent,
    AvProgressBarOutputComponent,
    AvProgressBarTrackComponent,
    AvProgressBarFillComponent,
  ],
})
class ProgressBarHostComponent {
  color: AvProgressBarColor = 'accent';
  size: AvProgressBarSize = 'md';
  min = 0;
  max = 100;
  value = 60;
  formatOptions: Intl.NumberFormatOptions | undefined;
  indeterminate = false;
  disabled = false;
  ariaLabel: string | undefined = 'Loading';
}

@Component({
  template: `
    <div av-progress-bar is-indeterminate aria-label="Loading...">
      <div av-progress-bar-track>
        <div av-progress-bar-fill></div>
      </div>
    </div>
  `,
  imports: [AvProgressBarComponent, AvProgressBarTrackComponent, AvProgressBarFillComponent],
})
class ProgressBarIndeterminateHostComponent {}

describe('AvProgressBarComponent', () => {
  let fixture: ComponentFixture<ProgressBarHostComponent>;
  let host: ProgressBarHostComponent;
  let progressBar: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    progressBar = fixture.nativeElement.querySelector('[data-slot="progress-bar"]')!;
  });

  it('should create with default modifier classes and progressbar role', () => {
    expect(progressBar.classList.contains('av-progress-bar')).toBeTrue();
    expect(progressBar.classList.contains('av-progress-bar--accent')).toBeTrue();
    expect(progressBar.classList.contains('av-progress-bar--md')).toBeTrue();
    expect(progressBar.getAttribute('role')).toBe('progressbar');
    expect(progressBar.getAttribute('aria-valuenow')).toBe('60');
    expect(progressBar.getAttribute('aria-valuemin')).toBe('0');
    expect(progressBar.getAttribute('aria-valuemax')).toBe('100');
  });

  it('should apply color and size classes', () => {
    host.color = 'warning';
    host.size = 'lg';
    fixture.detectChanges();

    expect(progressBar.classList.contains('av-progress-bar--warning')).toBeTrue();
    expect(progressBar.classList.contains('av-progress-bar--lg')).toBeTrue();
  });

  it('should render output and fill width from value', () => {
    const output = progressBar.querySelector('[data-slot="progress-bar-output"]');
    const fill = progressBar.querySelector('[data-slot="progress-bar-fill"]') as HTMLElement;

    expect(output?.classList.contains('av-progress-bar__output')).toBeTrue();
    expect(output?.textContent?.trim()).toBe(new Intl.NumberFormat(undefined).format(60));
    expect(fill.style.width).toBe('60%');
  });

  it('should format custom currency output', () => {
    host.min = 0;
    host.max = 1000;
    host.value = 750;
    host.formatOptions = { style: 'currency', currency: 'USD' };
    fixture.detectChanges();

    const output = progressBar.querySelector('[data-slot="progress-bar-output"]');
    const fill = progressBar.querySelector('[data-slot="progress-bar-fill"]') as HTMLElement;
    const expected = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
    }).format(750);

    expect(output?.textContent?.trim()).toBe(expected);
    expect(progressBar.getAttribute('aria-valuetext')).toBe(expected);
    expect(fill.style.width).toBe('75%');
  });

  it('should clear aria-valuenow and fill width when indeterminate', () => {
    host.indeterminate = true;
    fixture.detectChanges();

    const fill = progressBar.querySelector('[data-slot="progress-bar-fill"]') as HTMLElement;

    expect(progressBar.hasAttribute('aria-valuenow')).toBeFalse();
    expect(progressBar.hasAttribute('aria-valuetext')).toBeFalse();
    expect(fill.style.width).toBe('');
  });

  it('should apply disabled attributes', () => {
    host.disabled = true;
    fixture.detectChanges();

    expect(progressBar.getAttribute('data-disabled')).toBe('true');
    expect(progressBar.getAttribute('aria-disabled')).toBe('true');
  });
});

describe('AvProgressBarComponent indeterminate', () => {
  it('should render indeterminate composition without output', async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarIndeterminateHostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ProgressBarIndeterminateHostComponent);
    fixture.detectChanges();

    const progressBar = fixture.nativeElement.querySelector('[data-slot="progress-bar"]')!;
    const fill = progressBar.querySelector('[data-slot="progress-bar-fill"]') as HTMLElement;

    expect(progressBar.getAttribute('aria-label')).toBe('Loading...');
    expect(progressBar.hasAttribute('aria-valuenow')).toBeFalse();
    expect(progressBar.querySelector('[data-slot="progress-bar-output"]')).toBeNull();
    expect(fill.style.width).toBe('');
  });
});
