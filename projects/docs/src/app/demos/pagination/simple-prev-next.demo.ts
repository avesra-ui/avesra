import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-pagination class="w-full">
  <div av-pagination-summary>
    {{ startItem() }} to {{ endItem() }} of {{ totalItems }} invoices
  </div>
  <ul av-pagination-content>
    <li av-pagination-item>
      <button
        av-pagination-prev
        [disabled]="page() === 1"
        (click)="page.set(page() - 1)"
      >
        <span av-pagination-prev-icon></span>
        <span>Prev</span>
      </button>
    </li>
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

export const DEMO_NAME = 'pagination-simple-prev-next';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

@Component({
  selector: 'app-pagination-simple-prev-next-demo',
  imports: [AvPaginationImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PaginationSimplePrevNextDemo {
  readonly page = model(1);
  readonly totalPages = 10;
  readonly itemsPerPage = 5;
  readonly totalItems = 50;

  readonly startItem = computed(() => (this.page() - 1) * this.itemsPerPage + 1);
  readonly endItem = computed(() =>
    Math.min(this.page() * this.itemsPerPage, this.totalItems),
  );
}`;

@Component({
  selector: 'app-pagination-simple-prev-next-demo',
  imports: [AvPaginationImports],
  template: DEMO_TEMPLATE,
})
export class PaginationSimplePrevNextDemo {
  readonly page = model(1);
  readonly totalPages = 10;
  readonly itemsPerPage = 5;
  readonly totalItems = 50;

  readonly startItem = computed(() => (this.page() - 1) * this.itemsPerPage + 1);
  readonly endItem = computed(() =>
    Math.min(this.page() * this.itemsPerPage, this.totalItems),
  );
}
