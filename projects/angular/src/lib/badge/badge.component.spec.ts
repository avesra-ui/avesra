import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvBadgeAnchorComponent,
  AvBadgeComponent,
  AvBadgeLabelComponent,
} from './index';
import type { AvBadgeColor, AvBadgePlacement, AvBadgeSize, AvBadgeVariant } from './badge.utils';

@Component({
  template: `
    <span
      av-badge-anchor
    >
      <span
        av-badge
        [color]="color"
        [size]="size"
        [variant]="variant"
        [placement]="placement"
        [label]="label"
      ></span>
    </span>
  `,
  imports: [AvBadgeAnchorComponent, AvBadgeComponent],
})
class BadgeHostComponent {
  color: AvBadgeColor = 'accent';
  size: AvBadgeSize = 'sm';
  variant: AvBadgeVariant = 'primary';
  placement: AvBadgePlacement = 'top-right';
  label: string | number | undefined = '5';
}

@Component({
  template: `
    <span av-badge>
      <span av-badge-label>{{ text }}</span>
    </span>
  `,
  imports: [AvBadgeComponent, AvBadgeLabelComponent],
})
class BadgeLabelHostComponent {
  text = 'New';
}

describe('AvBadgeComponent', () => {
  let fixture: ComponentFixture<BadgeHostComponent>;
  let host: BadgeHostComponent;
  let badge: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    badge = fixture.nativeElement.querySelector('[data-slot="badge"]')!;
  });

  it('should create with default modifier classes', () => {
    expect(badge.classList.contains('av-badge')).toBeTrue();
    expect(badge.classList.contains('av-badge--accent')).toBeTrue();
    expect(badge.classList.contains('av-badge--sm')).toBeTrue();
    expect(badge.classList.contains('av-badge--primary')).toBeTrue();
    expect(badge.classList.contains('av-badge--top-right')).toBeTrue();
  });

  it('should render label input content', () => {
    const label = badge.querySelector('[data-slot="badge-label"]');

    expect(label).toBeTruthy();
    expect(label?.textContent?.trim()).toBe('5');
    expect(label?.classList.contains('av-badge__label')).toBeTrue();
  });

  it('should apply updated variant and placement classes', () => {
    host.variant = 'soft';
    host.placement = 'bottom-right';
    host.color = 'danger';
    fixture.detectChanges();

    expect(badge.classList.contains('av-badge--soft')).toBeTrue();
    expect(badge.classList.contains('av-badge--bottom-right')).toBeTrue();
    expect(badge.classList.contains('av-badge--danger')).toBeTrue();
  });
});

describe('AvBadgeLabelComponent', () => {
  let fixture: ComponentFixture<BadgeLabelHostComponent>;
  let label: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeLabelHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeLabelHostComponent);
    fixture.detectChanges();
    label = fixture.nativeElement.querySelector('[data-slot="badge-label"]')!;
  });

  it('should render projected label content', () => {
    expect(label.classList.contains('av-badge__label')).toBeTrue();
    expect(label.textContent?.trim()).toBe('New');
  });
});

describe('AvBadgeAnchorComponent', () => {
  let fixture: ComponentFixture<BadgeHostComponent>;
  let anchor: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeHostComponent);
    fixture.detectChanges();
    anchor = fixture.nativeElement.querySelector('[data-slot="badge-anchor"]')!;
  });

  it('should render with anchor class', () => {
    expect(anchor.classList.contains('av-badge-anchor')).toBeTrue();
  });
});
