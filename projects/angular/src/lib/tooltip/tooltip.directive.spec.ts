import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AV_TOOLTIP_EXIT_MS, AV_TOOLTIP_HOVER_BRIDGE_MS, AV_TOOLTIP_SHOW_DELAY_DEFAULT } from './tooltip.utils';
import { AvTooltipDirective } from './tooltip.directive';

@Component({
  template: `
    <button
      id="trigger"
      [avTooltip]="content"
      [tooltip-disabled]="disabled"
      [show-delay]="showDelay"
      [auto-hide]="autoHide"
      [hide-delay]="hideDelay"
    >
      Hover
    </button>
  `,
  imports: [AvTooltipDirective],
})
class TooltipHostComponent {
  content = 'Tooltip text';
  disabled = false;
  showDelay = 0;
  autoHide = true;
  hideDelay = 0;
}

describe('AvTooltipDirective', () => {
  let fixture: ComponentFixture<TooltipHostComponent>;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipHostComponent);
    fixture.detectChanges();
    trigger = fixture.nativeElement.querySelector('#trigger');
  });

  afterEach(() => {
    document.querySelectorAll('.av-tooltip').forEach((node) => node.remove());
  });

  it('should create tooltip overlay on mouse enter', fakeAsync(() => {
    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    tick();

    const tooltip = document.querySelector('.av-tooltip');
    expect(tooltip).toBeTruthy();
    expect(tooltip?.textContent).toContain('Tooltip text');
    expect(tooltip?.getAttribute('role')).toBe('tooltip');
  }));

  it('should respect show delay', fakeAsync(() => {
    fixture.componentInstance.showDelay = AV_TOOLTIP_SHOW_DELAY_DEFAULT;
    fixture.detectChanges();

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    tick(AV_TOOLTIP_SHOW_DELAY_DEFAULT - 1);
    expect(document.querySelector('.av-tooltip')).toBeNull();

    tick(1);
    expect(document.querySelector('.av-tooltip')).toBeTruthy();
  }));

  it('should not show when disabled', fakeAsync(() => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    tick();

    expect(document.querySelector('.av-tooltip')).toBeNull();
  }));

  it('should hide on mouse leave', fakeAsync(() => {
    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    tick();

    trigger.dispatchEvent(new MouseEvent('mouseleave'));
    tick(AV_TOOLTIP_EXIT_MS);

    expect(document.querySelector('.av-tooltip')).toBeNull();
  }));

  it('should set aria-describedby while visible', fakeAsync(() => {
    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    tick();

    const tooltipId = document.querySelector('.av-tooltip')?.id ?? null;
    expect(trigger.getAttribute('aria-describedby')).toBe(tooltipId);
  }));

  it('should keep tooltip open when pointer moves onto it with auto-hide false', fakeAsync(() => {
    fixture.componentInstance.autoHide = false;
    fixture.detectChanges();

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    tick();

    const tooltip = document.querySelector('.av-tooltip') as HTMLDivElement;
    expect(tooltip).toBeTruthy();
    expect(tooltip.style.pointerEvents).toBe('auto');

    trigger.dispatchEvent(new MouseEvent('mouseleave', { relatedTarget: null }));
    tick(AV_TOOLTIP_HOVER_BRIDGE_MS - 1);
    expect(document.querySelector('.av-tooltip')).toBeTruthy();

    tooltip.dispatchEvent(new MouseEvent('mouseenter'));
    tick(500);
    expect(document.querySelector('.av-tooltip')).toBeTruthy();

    tooltip.dispatchEvent(new MouseEvent('mouseleave'));
    tick(AV_TOOLTIP_HOVER_BRIDGE_MS + AV_TOOLTIP_EXIT_MS);
    expect(document.querySelector('.av-tooltip')).toBeNull();
  }));

  it('should hide on trigger mouse leave when auto-hide is true', fakeAsync(() => {
    fixture.componentInstance.autoHide = true;
    fixture.componentInstance.hideDelay = 200;
    fixture.detectChanges();

    trigger.dispatchEvent(new MouseEvent('mouseenter'));
    tick();

    trigger.dispatchEvent(new MouseEvent('mouseleave'));
    tick(199);
    expect(document.querySelector('.av-tooltip')).toBeTruthy();

    tick(1 + AV_TOOLTIP_EXIT_MS);
    expect(document.querySelector('.av-tooltip')).toBeNull();
  }));
});
