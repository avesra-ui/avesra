import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvAvatarComponent,
  AvAvatarFallbackComponent,
  AvAvatarImageComponent,
} from './index';
import type { AvAvatarColor, AvAvatarSize, AvAvatarVariant } from './avatar.utils';

@Component({
  template: `
    <span
      av-avatar
      [color]="color"
      [size]="size"
      [variant]="variant"
    >
      @if (showImage) {
        <img
          av-avatar-image
          [src]="src"
          alt="John Doe"
        />
      }
      <span av-avatar-fallback>{{ fallbackText }}</span>
    </span>
  `,
  imports: [AvAvatarComponent, AvAvatarImageComponent, AvAvatarFallbackComponent],
})
class AvatarHostComponent {
  color: AvAvatarColor = 'default';
  size: AvAvatarSize = 'md';
  variant: AvAvatarVariant = 'default';
  showImage = false;
  src = 'https://example.com/avatar.jpg';
  fallbackText = 'JD';
}

describe('AvAvatarComponent', () => {
  let fixture: ComponentFixture<AvatarHostComponent>;
  let host: AvatarHostComponent;
  let root: HTMLElement;
  let fallback: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    root = fixture.nativeElement.querySelector('[data-slot="avatar"]')!;
    fallback = fixture.nativeElement.querySelector('[data-slot="avatar-fallback"]')!;
  });

  it('should create with default classes', () => {
    expect(root.classList.contains('av-avatar')).toBeTrue();
    expect(root.classList.contains('av-avatar--md')).toBeTrue();
  });

  it('should show fallback when no image is provided', () => {
    expect(fallback.hidden).toBeFalse();
    expect(fallback.textContent?.trim()).toBe('JD');
  });

  it('should apply size and variant classes', () => {
    host.size = 'lg';
    host.variant = 'soft';
    fixture.detectChanges();

    expect(root.classList.contains('av-avatar--lg')).toBeTrue();
    expect(root.classList.contains('av-avatar--soft')).toBeTrue();
  });

  it('should apply fallback color classes from root color', () => {
    host.color = 'accent';
    fixture.detectChanges();

    expect(fallback.classList.contains('av-avatar__fallback--accent')).toBeTrue();
  });
});

describe('AvAvatarImageComponent', () => {
  let fixture: ComponentFixture<AvatarHostComponent>;
  let host: AvatarHostComponent;
  let image: HTMLImageElement;
  let fallback: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarHostComponent);
    host = fixture.componentInstance;
    host.showImage = true;
    fixture.detectChanges();
    image = fixture.nativeElement.querySelector('[data-slot="avatar-image"]')!;
    fallback = fixture.nativeElement.querySelector('[data-slot="avatar-fallback"]')!;
  });

  it('should render image with avatar image classes', () => {
    expect(image.classList.contains('av-avatar__image')).toBeTrue();
    expect(image.getAttribute('src')).toBe('https://example.com/avatar.jpg');
  });

  it('should hide fallback after image loads', () => {
    image.dispatchEvent(new Event('load'));
    fixture.detectChanges();

    expect(image.getAttribute('data-loaded')).toBe('true');
    expect(fallback.hidden).toBeTrue();
  });

  it('should show fallback when image fails to load', () => {
    image.dispatchEvent(new Event('error'));
    fixture.detectChanges();

    expect(fallback.hidden).toBeFalse();
    expect(image.getAttribute('data-loaded')).toBeNull();
  });
});
