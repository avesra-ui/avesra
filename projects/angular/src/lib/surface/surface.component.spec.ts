import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvSurfaceComponent } from './surface.component';
import type { AvSurfaceVariant } from './surface.utils';

@Component({
  template: `
    <div av-surface [variant]="variant" class="rounded-3xl p-6">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  `,
  imports: [AvSurfaceComponent],
})
class SurfaceHostComponent {
  variant: AvSurfaceVariant = 'default';
  title = 'Surface Content';
  description = 'Nested content inherits surface foreground colors.';
}

describe('AvSurfaceComponent', () => {
  let fixture: ComponentFixture<SurfaceHostComponent>;
  let host: SurfaceHostComponent;
  let surface: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurfaceHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SurfaceHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    surface = fixture.nativeElement.querySelector('[data-slot="surface"]')!;
  });

  it('should create with default modifier classes', () => {
    expect(surface.classList.contains('av-surface')).toBeTrue();
    expect(surface.classList.contains('av-surface--default')).toBeTrue();
  });

  it('should apply updated variant classes', () => {
    host.variant = 'tertiary';
    fixture.detectChanges();

    expect(surface.classList.contains('av-surface--tertiary')).toBeTrue();
  });

  it('should render projected content', () => {
    expect(surface.querySelector('h3')?.textContent?.trim()).toBe('Surface Content');
    expect(surface.querySelector('p')?.textContent?.trim()).toBe(
      'Nested content inherits surface foreground colors.',
    );
  });
});
