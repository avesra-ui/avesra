import { Component, computed, model } from '@angular/core';
import {
  getPaginationRange,
  AvPaginationImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full max-w-2xs overflow-x-auto sm:max-w-full">
  <av-pagination class="justify-center">
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
  </av-pagination>
</div>`;

export const DEMO_NAME = 'pagination-with-ellipsis';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, model } from '@angular/core';
import {
  getPaginationRange,
  AvPaginationImports,
} from '@avesra/angular';

@Component({
  selector: 'app-pagination-with-ellipsis-demo',
  imports: [AvPaginationImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PaginationWithEllipsisDemo {
  readonly page = model(1);
  readonly totalPages = 12;

  readonly range = computed(() => getPaginationRange(this.page(), this.totalPages));
}`;

@Component({
  selector: 'app-pagination-with-ellipsis-demo',
  imports: [AvPaginationImports],
  template: DEMO_TEMPLATE,
})
export class PaginationWithEllipsisDemo {
  readonly page = model(1);
  readonly totalPages = 12;

  readonly range = computed(() => getPaginationRange(this.page(), this.totalPages));
}
