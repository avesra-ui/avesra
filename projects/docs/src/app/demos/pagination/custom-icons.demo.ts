import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-pagination class="justify-center">
  <ul av-pagination-content>
    <li av-pagination-item>
      <button
        av-pagination-prev
        [disabled]="page() === 1"
        (click)="page.set(page() - 1)"
      >
        <span av-pagination-prev-icon>
          <svg
            class="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </span>
        <span>Back</span>
      </button>
    </li>
    @for (p of pages(); track p) {
      <li av-pagination-item>
        <button
          av-pagination-link
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
        <span>Forward</span>
        <span av-pagination-next-icon>
          <svg
            class="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </button>
    </li>
  </ul>
</av-pagination>`;

export const DEMO_NAME = 'pagination-custom-icons';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

@Component({
  selector: 'app-pagination-custom-icons-demo',
  imports: [AvPaginationImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PaginationCustomIconsDemo {
  readonly page = model(1);
  readonly totalPages = 3;

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages }, (_, index) => index + 1),
  );
}`;

@Component({
  selector: 'app-pagination-custom-icons-demo',
  imports: [AvPaginationImports],
  template: DEMO_TEMPLATE,
})
export class PaginationCustomIconsDemo {
  readonly page = model(1);
  readonly totalPages = 3;

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages }, (_, index) => index + 1),
  );
}
