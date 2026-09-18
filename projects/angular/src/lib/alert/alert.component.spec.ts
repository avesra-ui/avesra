import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvAlertComponent,
  AvAlertContentComponent,
  AvAlertDescriptionComponent,
  AvAlertIndicatorComponent,
  AvAlertTitleComponent,
} from './index';
import type { AvAlertStatus } from './alert.utils';

@Component({
  template: `
    <div av-alert [status]="status">
      <div av-alert-indicator></div>
      <div av-alert-content>
        <p av-alert-title>{{ title }}</p>
        <span av-alert-description>{{ description }}</span>
      </div>
    </div>
  `,
  imports: [
    AvAlertComponent,
    AvAlertIndicatorComponent,
    AvAlertContentComponent,
    AvAlertTitleComponent,
    AvAlertDescriptionComponent,
  ],
})
class AlertHostComponent {
  status: AvAlertStatus = 'default';
  title = 'New features available';
  description = 'Check out our latest updates.';
}

@Component({
  template: `
    <div av-alert status="accent">
      <div av-alert-indicator>
        <span data-testid="custom-indicator">custom</span>
      </div>
      <div av-alert-content>
        <p av-alert-title>Processing</p>
      </div>
    </div>
  `,
  imports: [
    AvAlertComponent,
    AvAlertIndicatorComponent,
    AvAlertContentComponent,
    AvAlertTitleComponent,
  ],
})
class AlertCustomIndicatorHostComponent {}

describe('AvAlertComponent', () => {
  let fixture: ComponentFixture<AlertHostComponent>;
  let host: AlertHostComponent;
  let alert: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    alert = fixture.nativeElement.querySelector('[data-slot="alert-root"]')!;
  });

  it('should create with default status classes', () => {
    expect(alert.classList.contains('av-alert')).toBeTrue();
    expect(alert.classList.contains('av-alert--default')).toBeTrue();
    expect(alert.getAttribute('role')).toBe('alert');
  });

  it('should apply status modifier classes', () => {
    host.status = 'success';
    fixture.detectChanges();

    expect(alert.classList.contains('av-alert--success')).toBeTrue();
    expect(alert.classList.contains('av-alert--default')).toBeFalse();
  });

  it('should render compound parts with BEM classes', () => {
    const indicator = alert.querySelector('[data-slot="alert-indicator"]');
    const content = alert.querySelector('[data-slot="alert-content"]');
    const title = alert.querySelector('[data-slot="alert-title"]');
    const description = alert.querySelector('[data-slot="alert-description"]');

    expect(indicator?.classList.contains('av-alert__indicator')).toBeTrue();
    expect(content?.classList.contains('av-alert__content')).toBeTrue();
    expect(title?.classList.contains('av-alert__title')).toBeTrue();
    expect(description?.classList.contains('av-alert__description')).toBeTrue();
    expect(title?.textContent?.trim()).toBe('New features available');
    expect(description?.textContent?.trim()).toBe('Check out our latest updates.');
  });

  it('should render default icon when indicator has no projected content', () => {
    const icon = alert.querySelector('[data-slot="alert-default-icon"]');

    expect(icon).toBeTruthy();
  });

  it('should swap default icon for warning status', () => {
    host.status = 'warning';
    fixture.detectChanges();

    const icon = alert.querySelector('[data-slot="alert-default-icon"]');
    expect(icon).toBeTruthy();
  });
});

describe('AvAlertIndicatorComponent', () => {
  it('should render custom projected content instead of default icon', async () => {
    await TestBed.configureTestingModule({
      imports: [AlertCustomIndicatorHostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AlertCustomIndicatorHostComponent);
    fixture.detectChanges();

    const indicator = fixture.nativeElement.querySelector('[data-slot="alert-indicator"]')!;
    const custom = indicator.querySelector('[data-testid="custom-indicator"]');
    const defaultIcon = indicator.querySelector('[data-slot="alert-default-icon"]');

    expect(custom?.textContent?.trim()).toBe('custom');
    expect(defaultIcon).toBeNull();
  });
});
