import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvSkeletonComponent } from './index';
import type { AvSkeletonAnimationType } from './skeleton.utils';

@Component({
  template: `<div av-skeleton class="h-10 w-24" [animation-type]="animationType"></div>`,
  imports: [AvSkeletonComponent],
})
class SkeletonHostComponent {
  animationType: AvSkeletonAnimationType | undefined;
}

describe('AvSkeletonComponent', () => {
  let fixture: ComponentFixture<SkeletonHostComponent>;
  let host: SkeletonHostComponent;
  let skeleton: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    skeleton = fixture.nativeElement.querySelector('[data-slot="skeleton"]')!;
  });

  it('should create with default shimmer classes', () => {
    expect(skeleton.classList.contains('av-skeleton')).toBeTrue();
    expect(skeleton.classList.contains('av-skeleton--shimmer')).toBeTrue();
    expect(skeleton.getAttribute('aria-hidden')).toBe('true');
  });

  it('should preserve host utility classes', () => {
    expect(skeleton.classList.contains('h-10')).toBeTrue();
    expect(skeleton.classList.contains('w-24')).toBeTrue();
  });

  it('should apply pulse animation type', () => {
    host.animationType = 'pulse';
    fixture.detectChanges();

    expect(skeleton.classList.contains('av-skeleton--pulse')).toBeTrue();
    expect(skeleton.classList.contains('av-skeleton--shimmer')).toBeFalse();
  });

  it('should apply none animation type', () => {
    host.animationType = 'none';
    fixture.detectChanges();

    expect(skeleton.classList.contains('av-skeleton--none')).toBeTrue();
  });
});
