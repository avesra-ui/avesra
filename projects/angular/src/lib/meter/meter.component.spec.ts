import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvMeterComponent,
  AvMeterFillComponent,
  AvMeterOutputComponent,
  AvMeterTrackComponent,
} from './index';
import type { AvMeterColor, AvMeterSize } from './meter.utils';

@Component({
  template: `
    <div
      av-meter
      [color]="color"
      [size]="size"
      [min]="min"
      [max]="max"
      [value]="value"
      [format-options]="formatOptions"
      [disabled]="disabled"
      [attr.aria-label]="ariaLabel"
    >
      <span av-meter-output></span>
      <div av-meter-track>
        <div av-meter-fill></div>
      </div>
    </div>
  `,
  imports: [
    AvMeterComponent,
    AvMeterOutputComponent,
    AvMeterTrackComponent,
    AvMeterFillComponent,
  ],
})
class MeterHostComponent {
  color: AvMeterColor = 'accent';
  size: AvMeterSize = 'md';
  min = 0;
  max = 100;
  value = 60;
  formatOptions: Intl.NumberFormatOptions | undefined;
  disabled = false;
  ariaLabel: string | undefined = 'Storage';
}

@Component({
  template: `
    <div av-meter [value]="45" aria-label="Storage usage">
      <div av-meter-track>
        <div av-meter-fill></div>
      </div>
    </div>
  `,
  imports: [AvMeterComponent, AvMeterTrackComponent, AvMeterFillComponent],
})
class MeterWithoutLabelHostComponent {}

describe('AvMeterComponent', () => {
  let fixture: ComponentFixture<MeterHostComponent>;
  let host: MeterHostComponent;
  let meter: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeterHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeterHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    meter = fixture.nativeElement.querySelector('[data-slot="meter"]')!;
  });

  it('should create with default modifier classes and meter role', () => {
    expect(meter.classList.contains('av-meter')).toBeTrue();
    expect(meter.classList.contains('av-meter--accent')).toBeTrue();
    expect(meter.classList.contains('av-meter--md')).toBeTrue();
    expect(meter.getAttribute('role')).toBe('meter');
    expect(meter.getAttribute('aria-valuenow')).toBe('60');
    expect(meter.getAttribute('aria-valuemin')).toBe('0');
    expect(meter.getAttribute('aria-valuemax')).toBe('100');
  });

  it('should apply color and size classes', () => {
    host.color = 'warning';
    host.size = 'lg';
    fixture.detectChanges();

    expect(meter.classList.contains('av-meter--warning')).toBeTrue();
    expect(meter.classList.contains('av-meter--lg')).toBeTrue();
  });

  it('should render output and fill width from value', () => {
    const output = meter.querySelector('[data-slot="meter-output"]');
    const fill = meter.querySelector('[data-slot="meter-fill"]') as HTMLElement;

    expect(output?.classList.contains('av-meter__output')).toBeTrue();
    expect(output?.textContent?.trim()).toBe(new Intl.NumberFormat(undefined).format(60));
    expect(fill.style.width).toBe('60%');
  });

  it('should format custom currency output', () => {
    host.min = 0;
    host.max = 1000;
    host.value = 750;
    host.formatOptions = { style: 'currency', currency: 'USD' };
    fixture.detectChanges();

    const output = meter.querySelector('[data-slot="meter-output"]');
    const fill = meter.querySelector('[data-slot="meter-fill"]') as HTMLElement;
    const expected = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
    }).format(750);

    expect(output?.textContent?.trim()).toBe(expected);
    expect(meter.getAttribute('aria-valuetext')).toBe(expected);
    expect(fill.style.width).toBe('75%');
  });

  it('should apply disabled attributes', () => {
    host.disabled = true;
    fixture.detectChanges();

    expect(meter.getAttribute('data-disabled')).toBe('true');
    expect(meter.getAttribute('aria-disabled')).toBe('true');
  });
});

describe('AvMeterComponent without label', () => {
  it('should render track-only composition', async () => {
    await TestBed.configureTestingModule({
      imports: [MeterWithoutLabelHostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(MeterWithoutLabelHostComponent);
    fixture.detectChanges();

    const meter = fixture.nativeElement.querySelector('[data-slot="meter"]')!;
    const fill = meter.querySelector('[data-slot="meter-fill"]') as HTMLElement;

    expect(meter.getAttribute('aria-label')).toBe('Storage usage');
    expect(meter.querySelector('[data-slot="meter-output"]')).toBeNull();
    expect(fill.style.width).toBe('45%');
  });
});
