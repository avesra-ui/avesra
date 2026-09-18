import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvLinkComponent } from './link.component';

@Component({
  template: `<a av-link href="https://example.com" [disabled]="disabled">Link</a>`,
  imports: [AvLinkComponent],
})
class LinkHostComponent {
  disabled = false;
}

describe('AvLinkComponent', () => {
  let fixture: ComponentFixture<LinkHostComponent>;
  let link: HTMLAnchorElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkHostComponent);
    fixture.detectChanges();
    link = fixture.nativeElement.querySelector('a')!;
  });

  it('should create with default classes', () => {
    expect(link.classList.contains('av-link')).toBeTrue();
    expect(link.classList.contains('av-link--primary')).toBeTrue();
  });

  it('should mark external links', () => {
    expect(link.getAttribute('data-external')).toBe('true');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should disable navigation when disabled', () => {
    fixture.componentInstance.disabled = true;
    fixture.detectChanges();

    expect(link.getAttribute('aria-disabled')).toBe('true');
    expect(link.getAttribute('href')).toBeNull();
  });
});
