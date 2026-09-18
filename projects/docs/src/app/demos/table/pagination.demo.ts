import { Component, computed, signal } from '@angular/core';
import {
  getPaginationRange,
  AvPaginationImports,
  AvTableImports,
} from '@avesra/angular';

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  email: string;
}

const USERS: User[] = [
  { id: 1, name: 'Kate Moore', role: 'CEO', status: 'Active', email: 'kate@acme.com' },
  { id: 2, name: 'John Smith', role: 'CTO', status: 'Active', email: 'john@acme.com' },
  { id: 3, name: 'Sara Johnson', role: 'CMO', status: 'On Leave', email: 'sara@acme.com' },
  { id: 4, name: 'Michael Brown', role: 'CFO', status: 'Active', email: 'michael@acme.com' },
  { id: 5, name: 'Emily Davis', role: 'Product Manager', status: 'Inactive', email: 'emily@acme.com' },
  { id: 6, name: 'Davis Wilson', role: 'Lead Designer', status: 'Active', email: 'davis@acme.com' },
  {
    id: 7,
    name: 'Olivia Martinez',
    role: 'Frontend Engineer',
    status: 'Active',
    email: 'olivia@acme.com',
  },
  {
    id: 8,
    name: 'James Taylor',
    role: 'Backend Engineer',
    status: 'Active',
    email: 'james@acme.com',
  },
];

const ROWS_PER_PAGE = 4;

const DEMO_TEMPLATE = `<div class="w-full max-w-3xl">
  <div av-table>
    <div av-table-scroll-container>
      <table av-table-content aria-label="Table with pagination" class="min-w-[600px]">
        <thead av-table-header>
          <tr>
            <th av-table-column>Name</th>
            <th av-table-column>Role</th>
            <th av-table-column>Status</th>
            <th av-table-column>Email</th>
          </tr>
        </thead>
        <tbody av-table-body>
          @for (user of pageItems(); track user.id) {
            <tr av-table-row>
              <td av-table-cell>{{ user.name }}</td>
              <td av-table-cell>{{ user.role }}</td>
              <td av-table-cell>{{ user.status }}</td>
              <td av-table-cell>{{ user.email }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <div av-table-footer class="w-full">
      <av-pagination size="sm" class="w-full">
        <div av-pagination-summary>
          {{ startItem() }} to {{ endItem() }} of {{ users.length }} results
        </div>
        <ul av-pagination-content>
          <li av-pagination-item>
            <button
              av-pagination-prev
              [disabled]="page() === 1"
              (click)="page.set(page() - 1)"
            >
              <span av-pagination-prev-icon></span>
              Prev
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
              Next
              <span av-pagination-next-icon></span>
            </button>
          </li>
        </ul>
      </av-pagination>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'table-pagination';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  getPaginationRange,
  AvPaginationImports,
  AvTableImports,
} from '@avesra/angular';

@Component({
  selector: 'app-table-pagination-demo',
  imports: [
    AvTableImports,
    AvPaginationImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TablePaginationDemo {
  readonly users = [
    { id: 1, name: 'Kate Moore', role: 'CEO', status: 'Active', email: 'kate@acme.com' },
    { id: 2, name: 'John Smith', role: 'CTO', status: 'Active', email: 'john@acme.com' },
    { id: 3, name: 'Sara Johnson', role: 'CMO', status: 'On Leave', email: 'sara@acme.com' },
    { id: 4, name: 'Michael Brown', role: 'CFO', status: 'Active', email: 'michael@acme.com' },
    { id: 5, name: 'Emily Davis', role: 'Product Manager', status: 'Inactive', email: 'emily@acme.com' },
    { id: 6, name: 'Davis Wilson', role: 'Lead Designer', status: 'Active', email: 'davis@acme.com' },
    {
      id: 7,
      name: 'Olivia Martinez',
      role: 'Frontend Engineer',
      status: 'Active',
      email: 'olivia@acme.com',
    },
    {
      id: 8,
      name: 'James Taylor',
      role: 'Backend Engineer',
      status: 'Active',
      email: 'james@acme.com',
    },
  ];

  readonly page = signal(1);
  readonly rowsPerPage = 4;
  readonly totalPages = Math.ceil(this.users.length / this.rowsPerPage);

  readonly range = computed(() => getPaginationRange(this.page(), this.totalPages));

  readonly pageItems = computed(() => {
    const start = (this.page() - 1) * this.rowsPerPage;
    return this.users.slice(start, start + this.rowsPerPage);
  });

  readonly startItem = computed(() => (this.page() - 1) * this.rowsPerPage + 1);

  readonly endItem = computed(() =>
    Math.min(this.page() * this.rowsPerPage, this.users.length),
  );
}`;

@Component({
  selector: 'app-table-pagination-demo',
  imports: [
    AvTableImports,
    AvPaginationImports,
  ],
  template: DEMO_TEMPLATE,
})
export class TablePaginationDemo {
  readonly users = USERS;
  readonly page = signal(1);
  readonly rowsPerPage = ROWS_PER_PAGE;
  readonly totalPages = Math.ceil(USERS.length / ROWS_PER_PAGE);

  readonly range = computed(() => getPaginationRange(this.page(), this.totalPages));

  readonly pageItems = computed(() => {
    const start = (this.page() - 1) * this.rowsPerPage;
    return this.users.slice(start, start + this.rowsPerPage);
  });

  readonly startItem = computed(() => (this.page() - 1) * this.rowsPerPage + 1);

  readonly endItem = computed(() =>
    Math.min(this.page() * this.rowsPerPage, this.users.length),
  );
}
