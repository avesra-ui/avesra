import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvPaginationComponent } from './pagination.component';
import { AvPaginationContentComponent } from './pagination-content.component';
import { AvPaginationItemComponent } from './pagination-item.component';
import { AvPaginationLinkComponent } from './pagination-link.component';
import { AvPaginationNextComponent } from './pagination-next.component';
import { AvPaginationPrevComponent } from './pagination-prev.component';

@Component({
  template: `
    <av-pagination>
      <ul av-pagination-content>
        <li av-pagination-item>
          <button
            av-pagination-prev
            [disabled]="page === 1"
            (click)="page = page - 1"
          >
            Prev
          </button>
        </li>
        <li av-pagination-item>
          <button
            av-pagination-link
            [active]="page === 1"
            (click)="page = 1"
          >
            1
          </button>
        </li>
        <li av-pagination-item>
          <button
            av-pagination-link
            [active]="page === 2"
            (click)="page = 2"
          >
            2
          </button>
        </li>
        <li av-pagination-item>
          <button
            av-pagination-next
            [disabled]="page === 2"
            (click)="page = page + 1"
          >
            Next
          </button>
        </li>
      </ul>
    </av-pagination>
  `,
  imports: [
    AvPaginationComponent,
    AvPaginationContentComponent,
    AvPaginationItemComponent,
    AvPaginationLinkComponent,
    AvPaginationPrevComponent,
    AvPaginationNextComponent,
  ],
})
class PaginationHostComponent {
  page = 1;
}

describe('AvPaginationComponent', () => {
  let fixture: ComponentFixture<PaginationHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationHostComponent);
    fixture.detectChanges();
  });

  it('should render navigation landmark', () => {
    const root = fixture.nativeElement.querySelector('av-pagination');
    expect(root.getAttribute('role')).toBe('navigation');
    expect(root.getAttribute('aria-label')).toBe('pagination');
  });

  it('should let consumer control page via link clicks', () => {
    const links = fixture.nativeElement.querySelectorAll('[av-pagination-link]');
    links[1].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.page).toBe(2);
    expect(links[1].getAttribute('data-active')).toBe('true');
    expect(links[1].getAttribute('aria-current')).toBe('page');
  });

  it('should let consumer control page via next click', () => {
    fixture.nativeElement.querySelector('[av-pagination-next]').click();
    fixture.detectChanges();
    expect(fixture.componentInstance.page).toBe(2);
  });

  it('should disable previous on first page', () => {
    const prev = fixture.nativeElement.querySelector('[av-pagination-prev]');
    expect(prev.disabled).toBe(true);
  });
});
