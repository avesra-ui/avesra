import { Component } from '@angular/core';
import { AvTableImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full max-w-3xl">
  <div av-table class="min-h-[200px]">
    <div av-table-scroll-container>
      <table av-table-content aria-label="Empty table" class="min-w-[600px]">
        <thead av-table-header>
          <tr>
            <th av-table-column>Name</th>
            <th av-table-column>Role</th>
            <th av-table-column>Status</th>
            <th av-table-column>Email</th>
          </tr>
        </thead>
        <tbody av-table-body>
          @if (users.length === 0) {
            <tr av-table-row>
              <td av-table-cell colspan="4">
                <div class="flex flex-col items-center justify-center gap-3 py-10 text-center">
                  <svg
                    class="size-6 text-muted"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20 7H4m16 0v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7m16 0-1.5-3h-13L4 7m4 4v6m4-6v6m4-6v6"
                    />
                  </svg>
                  <span class="text-sm text-muted">No results found</span>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'table-empty-state';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTableImports } from '@avesra/angular';

@Component({
  selector: 'app-table-empty-state-demo',
  imports: [AvTableImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TableEmptyStateDemo {
  readonly users: never[] = [];
}`;

@Component({
  selector: 'app-table-empty-state-demo',
  imports: [AvTableImports],
  template: DEMO_TEMPLATE,
})
export class TableEmptyStateDemo {
  readonly users: never[] = [];
}
