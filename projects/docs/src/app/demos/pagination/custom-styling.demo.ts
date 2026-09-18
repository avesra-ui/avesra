import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-pagination class="gap-8 justify-center">
  <ul av-pagination-content class="gap-2">
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
    @for (p of pages(); track p) {
      <li av-pagination-item>
        <button
          av-pagination-link
          class="rounded-md"
          [active]="p === page()"
          (click)="page.set(p)"
        >
          {{ p }}
        </button>
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

export const DEMO_NAME = 'pagination-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

@Component({
  selector: 'app-pagination-custom-styling-demo',
  imports: [AvPaginationImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PaginationCustomStylingDemo {
  readonly page = model(1);
  readonly totalPages = 3;

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages }, (_, index) => index + 1),
  );
}`;

@Component({
  selector: 'app-pagination-custom-styling-demo',
  imports: [AvPaginationImports],
  template: DEMO_TEMPLATE,
})
export class PaginationCustomStylingDemo {
  readonly page = model(1);
  readonly totalPages = 3;

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages }, (_, index) => index + 1),
  );
}
