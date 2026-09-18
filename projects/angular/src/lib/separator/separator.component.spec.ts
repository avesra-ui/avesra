import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvSeparatorComponent, AvSeparatorContainerComponent } from './index';
import type { AvSeparatorOrientation, AvSeparatorVariant } from './index';

@Component({
  template: `
    <hr av-separator [orientation]="orientation" [variant]="variant" />
    <div av-separator orientation="vertical" variant="tertiary"></div>

    <div av-separator-container orientation="vertical" variant="secondary">
      <div av-separator></div>
    </div>
  `,
  imports: [AvSeparatorComponent, AvSeparatorContainerComponent],
})
class SeparatorHostComponent {
  orientation: AvSeparatorOrientation = 'horizontal';
  variant: AvSeparatorVariant = 'default';
}

describe('AvSeparatorComponent', () => {
  let fixture: ComponentFixture<SeparatorHostComponent>;
  let host: SeparatorHostComponent;
  let horizontal: HTMLElement;
  let vertical: HTMLElement;
  let inherited: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparatorHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeparatorHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();

    horizontal = fixture.nativeElement.querySelector('hr')!;
    vertical = fixture.nativeElement.querySelector('div[av-separator]')!;
    inherited = fixture.nativeElement.querySelector('[av-separator-container] [av-separator]')!;
  });

  it('should render horizontal separator with default classes', () => {
    expect(horizontal.classList.contains('av-separator')).toBe(true);
    expect(horizontal.classList.contains('av-separator--horizontal')).toBe(true);
    expect(horizontal.classList.contains('av-separator--default')).toBe(true);
    expect(horizontal.getAttribute('role')).toBe('separator');
    expect(horizontal.getAttribute('aria-orientation')).toBe('horizontal');
    expect(horizontal.getAttribute('data-orientation')).toBe('horizontal');
  });

  it('should apply variant class', () => {
    host.variant = 'secondary';
    fixture.detectChanges();

    expect(horizontal.classList.contains('av-separator--secondary')).toBe(true);
  });

  it('should render vertical separator', () => {
    expect(vertical.classList.contains('av-separator--vertical')).toBe(true);
    expect(vertical.classList.contains('av-separator--tertiary')).toBe(true);
    expect(vertical.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('should inherit orientation and variant from container context', () => {
    expect(inherited.classList.contains('av-separator--vertical')).toBe(true);
    expect(inherited.classList.contains('av-separator--secondary')).toBe(true);
    expect(inherited.getAttribute('aria-orientation')).toBe('vertical');
  });
});
