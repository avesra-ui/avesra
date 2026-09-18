import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvToggleButtonComponent } from './toggle-button.component';
import type { AvToggleButtonSize, AvToggleButtonVariant } from './toggle-button.utils';

@Component({
  template: `
    <button
      av-toggle-button
      [variant]="variant"
      [size]="size"
      [icon-only]="iconOnly"
      [disabled]="disabled"
      [(selected)]="selected"
    >
      Like
    </button>
  `,
  imports: [AvToggleButtonComponent],
})
class ToggleButtonHostComponent {
  variant: AvToggleButtonVariant = 'default';
  size: AvToggleButtonSize = 'md';
  iconOnly = false;
  disabled = false;
  selected = signal(false);
}

describe('AvToggleButtonComponent', () => {
  let fixture: ComponentFixture<ToggleButtonHostComponent>;
  let host: ToggleButtonHostComponent;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button')!;
  });

  it('should create with default classes', () => {
    expect(button.classList.contains('av-toggle-button')).toBeTrue();
    expect(button.classList.contains('av-toggle-button--default')).toBeTrue();
    expect(button.classList.contains('av-toggle-button--md')).toBeTrue();
  });

  it('should apply variant, size, and icon-only classes', () => {
    host.variant = 'ghost';
    host.size = 'lg';
    host.iconOnly = true;
    fixture.detectChanges();

    expect(button.classList.contains('av-toggle-button--ghost')).toBeTrue();
    expect(button.classList.contains('av-toggle-button--lg')).toBeTrue();
    expect(button.classList.contains('av-toggle-button--icon-only')).toBeTrue();
  });

  it('should toggle selected state on click', () => {
    button.click();
    fixture.detectChanges();

    expect(host.selected()).toBeTrue();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(button.getAttribute('data-selected')).toBe('true');
  });

  it('should not toggle when disabled', () => {
    host.disabled = true;
    fixture.detectChanges();

    button.click();
    fixture.detectChanges();

    expect(host.selected()).toBeFalse();
    expect(button.disabled).toBeTrue();
  });

  it('should bind host attributes', () => {
    expect(button.getAttribute('data-slot')).toBe('toggle-button');
    expect(button.type).toBe('button');
    expect(button.getAttribute('aria-pressed')).toBe('false');
  });
});
