import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvButtonComponent } from './button.component';
import type { AvButtonSize, AvButtonVariant } from './button.utils';

@Component({
  template: `
    <button
      av-button
      [variant]="variant"
      [size]="size"
      [pending]="pending"
    >
      Click
    </button>
  `,
  imports: [AvButtonComponent],
})
class ButtonHostComponent {
  variant: AvButtonVariant = 'primary';
  size: AvButtonSize = 'md';
  pending = false;
}

@Component({
  template: `
    <button av-button [disabled]="disabled" [pending]="pending">Click</button>
  `,
  imports: [AvButtonComponent],
})
class ButtonDisabledHostComponent {
  disabled: boolean | undefined = undefined;
  pending = false;
}

describe('AvButtonComponent', () => {
  let fixture: ComponentFixture<ButtonHostComponent>;
  let host: ButtonHostComponent;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button')!;
  });

  it('should create with default primary classes', () => {
    expect(button.classList.contains('av-button')).toBeTrue();
    expect(button.classList.contains('av-button--primary')).toBeTrue();
    expect(button.classList.contains('av-button--md')).toBeTrue();
  });

  it('should apply variant and size classes', () => {
    host.variant = 'danger';
    host.size = 'lg';
    fixture.detectChanges();

    expect(button.classList.contains('av-button--danger')).toBeTrue();
    expect(button.classList.contains('av-button--lg')).toBeTrue();
  });

  it('should disable when pending', () => {
    host.pending = true;
    fixture.detectChanges();

    expect(button.disabled).toBeTrue();
    expect(button.getAttribute('data-pending')).toBe('true');
  });

  it('should bind host attributes', () => {
    expect(button.getAttribute('data-slot')).toBe('button');
    expect(button.type).toBe('button');
  });
});

describe('AvButtonComponent disabled input', () => {
  let fixture: ComponentFixture<ButtonDisabledHostComponent>;
  let host: ButtonDisabledHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDisabledHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDisabledHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should prefer explicit disabled over pending', () => {
    host.disabled = false;
    host.pending = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('button')!.disabled).toBeFalse();
  });

  it('should disable when disabled is explicitly true', () => {
    host.disabled = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('button')!.disabled).toBeTrue();
  });
});

@Component({
  template: `<button av-button disabled>Static</button>`,
  imports: [AvButtonComponent],
})
class ButtonAttributeDisabledHostComponent {}

describe('AvButtonComponent disabled attribute', () => {
  it('should treat static disabled attribute as true', async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAttributeDisabledHostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(ButtonAttributeDisabledHostComponent);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button')!;
    expect(button.disabled).toBeTrue();
  });
});
