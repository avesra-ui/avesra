import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvPaginationLinkComponent } from './pagination-link.component';

@Component({
  template: `
    <button av-pagination-link [active]="active" [disabled]="disabled">2</button>
  `,
  imports: [AvPaginationLinkComponent],
})
class LinkHostComponent {
  active = false;
  disabled = false;
}

describe('AvPaginationLinkComponent', () => {
  let fixture: ComponentFixture<LinkHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkHostComponent);
    fixture.detectChanges();
  });

  it('should apply link classes', () => {
    const link = fixture.nativeElement.querySelector('button');
    expect(link.className).toContain('av-pagination__link');
  });

  it('should set active attributes when active', () => {
    fixture.componentInstance.active = true;
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('button');
    expect(link.getAttribute('data-active')).toBe('true');
    expect(link.getAttribute('aria-current')).toBe('page');
    expect(link.disabled).toBe(false);
  });

  it('should remain clickable when active', () => {
    fixture.componentInstance.active = true;
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('button');
    expect(link.disabled).toBe(false);
  });

  it('should respect disabled input', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('button');
    expect(link.disabled).toBe(true);
    expect(link.getAttribute('aria-disabled')).toBe('true');
  });
});
