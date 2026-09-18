import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvSeparatorContainerComponent,
  AvSeparatorContentComponent,
  AvSeparatorLineComponent,
} from './index';

@Component({
  template: `
    <div av-separator-container orientation="vertical" variant="secondary">
      <div av-separator-line></div>
      <span av-separator-content>OR</span>
      <div av-separator-line></div>
    </div>

    <div av-separator-container>
      <div av-separator-line orientation="vertical" variant="tertiary"></div>
      <span av-separator-content orientation="vertical">AND</span>
      <div av-separator-line orientation="vertical" variant="tertiary"></div>
    </div>
  `,
  imports: [
    AvSeparatorContainerComponent,
    AvSeparatorLineComponent,
    AvSeparatorContentComponent,
  ],
})
class SeparatorCompoundHostComponent {}

describe('Separator compound components', () => {
  let fixture: ComponentFixture<SeparatorCompoundHostComponent>;
  let inheritedContainer: HTMLElement;
  let explicitContainer: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparatorCompoundHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeparatorCompoundHostComponent);
    fixture.detectChanges();

    const containers = fixture.nativeElement.querySelectorAll('[av-separator-container]');
    inheritedContainer = containers[0];
    explicitContainer = containers[1];
  });

  it('should render container with orientation classes', () => {
    expect(inheritedContainer.classList.contains('av-separator__container')).toBe(true);
    expect(inheritedContainer.classList.contains('av-separator__container--vertical')).toBe(
      true,
    );
  });

  it('should inherit orientation and variant on separator lines', () => {
    const lines = inheritedContainer.querySelectorAll('[av-separator-line]');

    expect(lines.length).toBe(2);
    expect(lines[0].classList.contains('av-separator__line--vertical')).toBe(true);
    expect(lines[0].classList.contains('av-separator__line--secondary')).toBe(true);
  });

  it('should inherit orientation on separator content', () => {
    const content = inheritedContainer.querySelector('[av-separator-content]')!;

    expect(content.classList.contains('av-separator__content--vertical')).toBe(true);
  });

  it('should allow explicit orientation and variant overrides', () => {
    const line = explicitContainer.querySelector('[av-separator-line]')!;

    expect(line.classList.contains('av-separator__line--vertical')).toBe(true);
    expect(line.classList.contains('av-separator__line--tertiary')).toBe(true);
  });
});
