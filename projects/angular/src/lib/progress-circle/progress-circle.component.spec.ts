import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvProgressCircleComponent,
  AvProgressCircleFillCircleComponent,
  AvProgressCircleTrackCircleComponent,
  AvProgressCircleTrackComponent,
} from './index';
import {
  getProgressCircleStrokeDashoffset,
  AV_PROGRESS_CIRCLE_CIRCUMFERENCE,
} from './progress-circle.utils';
import type { AvProgressCircleColor, AvProgressCircleSize } from './progress-circle.utils';

@Component({
  template: `
    <div
      av-progress-circle
      [color]="color"
      [size]="size"
      [value]="value"
      [is-indeterminate]="indeterminate"
      [disabled]="disabled"
      aria-label="Loading"
    >
      <svg av-progress-circle-track>
        <circle av-progress-circle-track-circle></circle>
        <circle av-progress-circle-fill-circle></circle>
      </svg>
    </div>
  `,
  imports: [
    AvProgressCircleComponent,
    AvProgressCircleTrackComponent,
    AvProgressCircleTrackCircleComponent,
    AvProgressCircleFillCircleComponent,
  ],
})
class ProgressCircleHostComponent {
  color: AvProgressCircleColor = 'accent';
  size: AvProgressCircleSize = 'md';
  value = 60;
  indeterminate = false;
  disabled = false;
}

describe('AvProgressCircleComponent', () => {
  let fixture: ComponentFixture<ProgressCircleHostComponent>;
  let host: ProgressCircleHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCircleHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressCircleHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    root = fixture.nativeElement.querySelector('[data-slot="progress-circle"]')!;
  });

  it('should create with default modifier classes', () => {
    expect(root.classList.contains('av-progress-circle')).toBeTrue();
    expect(root.classList.contains('av-progress-circle--accent')).toBeTrue();
    expect(root.classList.contains('av-progress-circle--md')).toBeTrue();
  });

  it('should expose progressbar semantics', () => {
    expect(root.getAttribute('role')).toBe('progressbar');
    expect(root.getAttribute('aria-valuemin')).toBe('0');
    expect(root.getAttribute('aria-valuemax')).toBe('100');
    expect(root.getAttribute('aria-valuenow')).toBe('60');
    expect(root.getAttribute('aria-label')).toBe('Loading');
  });

  it('should render track and fill circles', () => {
    const track = root.querySelector('[data-slot="progress-circle-track"]');
    const trackCircle = root.querySelector('[data-slot="progress-circle-track-circle"]');
    const fillCircle = root.querySelector('[data-slot="progress-circle-fill-circle"]');

    expect(track?.classList.contains('av-progress-circle__track')).toBeTrue();
    expect(trackCircle?.classList.contains('av-progress-circle__track-circle')).toBeTrue();
    expect(fillCircle?.classList.contains('av-progress-circle__fill-circle')).toBeTrue();
    expect(fillCircle?.getAttribute('stroke-dashoffset')).toBe(
      String(getProgressCircleStrokeDashoffset(60, false)),
    );
  });

  it('should update classes and aria value when inputs change', () => {
    host.color = 'danger';
    host.size = 'lg';
    host.value = 25;
    fixture.detectChanges();

    expect(root.classList.contains('av-progress-circle--danger')).toBeTrue();
    expect(root.classList.contains('av-progress-circle--lg')).toBeTrue();
    expect(root.getAttribute('aria-valuenow')).toBe('25');
  });

  it('should omit aria-valuenow in indeterminate mode', () => {
    host.indeterminate = true;
    fixture.detectChanges();

    expect(root.getAttribute('aria-valuenow')).toBeNull();
    expect(root.querySelector('[data-slot="progress-circle-fill-circle"]')?.getAttribute('stroke-dashoffset')).toBe(
      String(AV_PROGRESS_CIRCLE_CIRCUMFERENCE * 0.75),
    );
  });

  it('should reflect disabled state', () => {
    host.disabled = true;
    fixture.detectChanges();

    expect(root.getAttribute('aria-disabled')).toBe('true');
    expect(root.getAttribute('data-disabled')).toBe('true');
  });
});

describe('progress-circle utils', () => {
  it('should calculate stroke dashoffset for determinate progress', () => {
    expect(getProgressCircleStrokeDashoffset(0, false)).toBe(AV_PROGRESS_CIRCLE_CIRCUMFERENCE);
    expect(getProgressCircleStrokeDashoffset(100, false)).toBe(0);
  });
});
