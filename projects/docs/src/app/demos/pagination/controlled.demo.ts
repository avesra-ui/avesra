import { Component, computed, model } from '@angular/core';
import {
  getPaginationRange,
  AvPaginationImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-pagination>
  <div av-pagination-summary>
    Showing {{ startItem() }}-{{ endItem() }} of {{ totalItems }} results
  </div>
  <ul av-pagination-content>
    <li av-pagination-item>
      <button
        av-pagination-prev
        [disabled]="page() === 1"
        (click)="page.set(page() - 1)"
      >
        <span av-pagination-prev-icon></span>
        <span>Previous</span>
      </button>
    </li>
    @for (item of range(); track $index) {
      <li av-pagination-item>
        @if (item === 'ellipsis') {
          <span av-pagination-ellipsis></span>
        } @else {
          <button
            av-pagination-link
            [active]="item === page()"
            (click)="page.set(item)"
          >
            {{ item }}
          </button>
        }
      </li>
    }
    <li av-pagination-item>
      <button
        av-pagination-next
        [disabled]="page() === totalPages"
        (click)="page.set(page() + 1)"
      >
        <span>Next</span>
        <span av-pagination-next-icon></span>
      </button>
    </li>
  </ul>
</av-pagination>`;

export const DEMO_NAME = 'pagination-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, model } from '@angular/core';
import {
  getPaginationRange,
  AvPaginationImports,
} from '@avesra/angular';

@Component({
  selector: 'app-pagination-controlled-demo',
  imports: [AvPaginationImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PaginationControlledDemo {
  readonly page = model(1);
  readonly totalPages = 12;
  readonly itemsPerPage = 10;
  readonly totalItems = 120;

  readonly range = computed(() => getPaginationRange(this.page(), this.totalPages));
  readonly startItem = computed(() => (this.page() - 1) * this.itemsPerPage + 1);
  readonly endItem = computed(() =>
    Math.min(this.page() * this.itemsPerPage, this.totalItems),
  );
}`;

@Component({
  selector: 'app-pagination-controlled-demo',
  imports: [AvPaginationImports],
  template: DEMO_TEMPLATE,
})
export class PaginationControlledDemo {
  readonly page = model(1);
  readonly totalPages = 12;
  readonly itemsPerPage = 10;
  readonly totalItems = 120;

  readonly range = computed(() => getPaginationRange(this.page(), this.totalPages));
  readonly startItem = computed(() => (this.page() - 1) * this.itemsPerPage + 1);
  readonly endItem = computed(() =>
    Math.min(this.page() * this.itemsPerPage, this.totalItems),
  );
}
