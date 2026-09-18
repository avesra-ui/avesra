import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-2">
    <span class="text-xs font-medium text-muted capitalize">sm</span>
    <av-pagination class="justify-center" size="sm">
      <ul av-pagination-content>
        <li av-pagination-item>
          <button av-pagination-prev [disabled]="smPage() === 1" (click)="smPage.set(smPage() - 1)">
            <span av-pagination-prev-icon></span>
            <span>Previous</span>
          </button>
        </li>
        @for (p of pages(); track p) {
          <li av-pagination-item>
            <button av-pagination-link [active]="p === smPage()" (click)="smPage.set(p)">{{ p }}</button>
          </li>
        }
        <li av-pagination-item>
          <button av-pagination-next [disabled]="smPage() === totalPages" (click)="smPage.set(smPage() + 1)">
            <span>Next</span>
            <span av-pagination-next-icon></span>
          </button>
        </li>
      </ul>
    </av-pagination>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-xs font-medium text-muted capitalize">md</span>
    <av-pagination class="justify-center">
      <ul av-pagination-content>
        <li av-pagination-item>
          <button av-pagination-prev [disabled]="mdPage() === 1" (click)="mdPage.set(mdPage() - 1)">
            <span av-pagination-prev-icon></span>
            <span>Previous</span>
          </button>
        </li>
        @for (p of pages(); track p) {
          <li av-pagination-item>
            <button av-pagination-link [active]="p === mdPage()" (click)="mdPage.set(p)">{{ p }}</button>
          </li>
        }
        <li av-pagination-item>
          <button av-pagination-next [disabled]="mdPage() === totalPages" (click)="mdPage.set(mdPage() + 1)">
            <span>Next</span>
            <span av-pagination-next-icon></span>
          </button>
        </li>
      </ul>
    </av-pagination>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-xs font-medium text-muted capitalize">lg</span>
    <av-pagination class="justify-center" size="lg">
      <ul av-pagination-content>
        <li av-pagination-item>
          <button av-pagination-prev [disabled]="lgPage() === 1" (click)="lgPage.set(lgPage() - 1)">
            <span av-pagination-prev-icon></span>
            <span>Previous</span>
          </button>
        </li>
        @for (p of pages(); track p) {
          <li av-pagination-item>
            <button av-pagination-link [active]="p === lgPage()" (click)="lgPage.set(p)">{{ p }}</button>
          </li>
        }
        <li av-pagination-item>
          <button av-pagination-next [disabled]="lgPage() === totalPages" (click)="lgPage.set(lgPage() + 1)">
            <span>Next</span>
            <span av-pagination-next-icon></span>
          </button>
        </li>
      </ul>
    </av-pagination>
  </div>
</div>`;

export const DEMO_NAME = 'pagination-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, model } from '@angular/core';
import { AvPaginationImports } from '@avesra/angular';

@Component({
  selector: 'app-pagination-sizes-demo',
  imports: [AvPaginationImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class PaginationSizesDemo {
  readonly smPage = model(1);
  readonly mdPage = model(1);
  readonly lgPage = model(1);
  readonly totalPages = 3;

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages }, (_, index) => index + 1),
  );
}`;

@Component({
  selector: 'app-pagination-sizes-demo',
  imports: [AvPaginationImports],
  template: DEMO_TEMPLATE,
})
export class PaginationSizesDemo {
  readonly smPage = model(1);
  readonly mdPage = model(1);
  readonly lgPage = model(1);
  readonly totalPages = 3;

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages }, (_, index) => index + 1),
  );
}
