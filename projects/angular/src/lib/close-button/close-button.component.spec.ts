import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvCloseButtonComponent } from './close-button.component';
import type { AvCloseButtonVariant } from './close-button.utils';

@Component({
  template: `
    <button
      av-close-button
      [variant]="variant"
      [pending]="pending"
      [aria-label]="ariaLabel"
    ></button>
  `,
  imports: [AvCloseButtonComponent],
})
class CloseButtonHostComponent {
  variant: AvCloseButtonVariant = 'default';
  pending = false;
  ariaLabel = 'Close';
}

@Component({
  template: `
    <button av-close-button [useDefaultIcon]="false" aria-label="Dismiss">
      <span data-testid="custom-icon">×</span>
    </button>
  `,
  imports: [AvCloseButtonComponent],
})
class CloseButtonCustomIconHostComponent {}

describe('AvCloseButtonComponent', () => {
  let fixture: ComponentFixture<CloseButtonHostComponent>;
  let host: CloseButtonHostComponent;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseButtonHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseButtonHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button')!;
  });

  it('should create with default classes', () => {
    expect(button.classList.contains('av-close-button')).toBeTrue();
    expect(button.classList.contains('av-close-button--default')).toBeTrue();
  });

  it('should render the default close icon', () => {
    expect(button.querySelector('[data-slot="close-button-icon"]')).not.toBeNull();
  });

  it('should disable when pending', () => {
    host.pending = true;
    fixture.detectChanges();

    expect(button.disabled).toBeTrue();
    expect(button.getAttribute('data-pending')).toBe('true');
  });

  it('should bind host attributes', () => {
    expect(button.getAttribute('data-slot')).toBe('close-button');
    expect(button.getAttribute('aria-label')).toBe('Close');
    expect(button.type).toBe('button');
  });
});

describe('AvCloseButtonComponent with custom icon', () => {
  let fixture: ComponentFixture<CloseButtonCustomIconHostComponent>;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseButtonCustomIconHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CloseButtonCustomIconHostComponent);
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button')!;
  });

  it('should not render the default icon when content is projected', () => {
    expect(button.querySelector('[data-testid="custom-icon"]')).not.toBeNull();
    expect(button.querySelector('[data-slot="close-button-icon"]')).toBeNull();
  });
});
