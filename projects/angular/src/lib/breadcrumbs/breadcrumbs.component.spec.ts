import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvBreadcrumbsComponent } from './breadcrumbs.component';
import { AvBreadcrumbsItemComponent } from './breadcrumbs-item.component';

@Component({
  template: `
    <av-breadcrumbs>
      <li av-breadcrumbs-item href="/home">Home</li>
      <li av-breadcrumbs-item>Current</li>
    </av-breadcrumbs>
  `,
  imports: [AvBreadcrumbsComponent, AvBreadcrumbsItemComponent],
})
class BreadcrumbsHostComponent {}

@Component({
  template: `
    <av-breadcrumbs disabled>
      <li av-breadcrumbs-item href="/home">Home</li>
      <li av-breadcrumbs-item>Current</li>
    </av-breadcrumbs>
  `,
  imports: [AvBreadcrumbsComponent, AvBreadcrumbsItemComponent],
})
class DisabledBreadcrumbsHostComponent {}

describe('AvBreadcrumbsComponent', () => {
  let fixture: ComponentFixture<BreadcrumbsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsHostComponent);
    fixture.detectChanges();
  });

  it('should render breadcrumb items', () => {
    const items = fixture.nativeElement.querySelectorAll('[data-slot="breadcrumbs-item"]');
    expect(items.length).toBe(2);
    expect(fixture.nativeElement.textContent).toContain('Current');
  });

  it('should mark the last item as current without an explicit current input', () => {
    expect(fixture.nativeElement.querySelector('[aria-current="page"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-current="true"]')?.textContent).toContain(
      'Current',
    );
  });

  it('should not render a separator after the current item', () => {
    const separators = fixture.nativeElement.querySelectorAll('[data-slot="breadcrumbs-separator"]');
    expect(separators.length).toBe(1);
  });
});

describe('AvBreadcrumbsComponent disabled', () => {
  it('should disable breadcrumb links', () => {
    const fixture = TestBed.createComponent(DisabledBreadcrumbsHostComponent);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector(
      'a[data-slot="breadcrumbs-link"]',
    );
    const breadcrumbs = fixture.nativeElement.querySelector('[data-slot="breadcrumbs"]');
    expect(link.getAttribute('aria-disabled')).toBe('true');
    expect(breadcrumbs?.getAttribute('data-disabled')).toBe('true');
  });
});
