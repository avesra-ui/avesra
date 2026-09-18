import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AvTableBodyComponent,
  AvTableCellComponent,
  AvTableColumnComponent,
  AvTableComponent,
  AvTableContentComponent,
  AvTableFooterComponent,
  AvTableHeaderComponent,
  AvTableRowComponent,
  AvTableScrollContainerComponent,
} from './index';

@Component({
  template: `
    <div av-table [variant]="variant">
      <div av-table-scroll-container>
        <table av-table-content aria-label="Users">
          <thead av-table-header>
            <tr>
              <th av-table-column allows-sorting>Name</th>
              <th av-table-column>Role</th>
            </tr>
          </thead>
          <tbody av-table-body>
            <tr av-table-row [selected]="selected">
              <td av-table-cell>John Smith</td>
              <td av-table-cell>Engineer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div av-table-footer>1 result</div>
    </div>
  `,
  imports: [
    AvTableComponent,
    AvTableScrollContainerComponent,
    AvTableContentComponent,
    AvTableHeaderComponent,
    AvTableColumnComponent,
    AvTableBodyComponent,
    AvTableRowComponent,
    AvTableCellComponent,
    AvTableFooterComponent,
  ],
})
class TableHostComponent {
  variant: 'primary' | 'secondary' = 'primary';
  selected = false;
}

describe('AvTableComponent', () => {
  let fixture: ComponentFixture<TableHostComponent>;
  let host: TableHostComponent;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    root = fixture.nativeElement.querySelector('[data-slot="table"]')!;
  });

  it('should render root with primary variant classes', () => {
    expect(root.classList.contains('av-table-root')).toBeTrue();
    expect(root.classList.contains('av-table-root--primary')).toBeTrue();
  });

  it('should render table structure with slot classes', () => {
    expect(fixture.nativeElement.querySelector('[data-slot="table-scroll-container"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-slot="table-content"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-slot="table-header"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-slot="table-body"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-slot="table-row"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-slot="table-footer"]')?.textContent?.trim()).toBe(
      '1 result',
    );
  });

  it('should apply secondary variant and selected row state', () => {
    host.variant = 'secondary';
    host.selected = true;
    fixture.detectChanges();

    expect(root.classList.contains('av-table-root--secondary')).toBeTrue();

    const row = fixture.nativeElement.querySelector('[data-slot="table-row"]') as HTMLElement;
    expect(row.getAttribute('data-selected')).toBe('true');
  });

  it('should mark sortable columns', () => {
    const column = fixture.nativeElement.querySelector(
      '[data-slot="table-column"]',
    ) as HTMLElement;

    expect(column.getAttribute('data-allows-sorting')).toBe('true');
    expect(column.classList.contains('av-table__column')).toBeTrue();
  });
});
