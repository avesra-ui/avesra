import { Component, computed, signal } from '@angular/core';
import {
  AvChipImports,
  AvSpinnerComponent,
  AvTableImports,
  type AvChipColor,
} from '@avesra/angular';

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  email: string;
}

const ALL_USERS: User[] = [
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
  {
    id: 9,
    name: 'Sophia Anderson',
    role: 'QA Engineer',
    status: 'On Leave',
    email: 'sophia@acme.com',
  },
  { id: 10, name: 'Liam Thomas', role: 'DevOps Engineer', status: 'Active', email: 'liam@acme.com' },
  {
    id: 11,
    name: 'Lucas Martinez',
    role: 'Product Manager',
    status: 'Active',
    email: 'lucas@acme.com',
  },
  {
    id: 12,
    name: 'Emma Johnson',
    role: 'Frontend Engineer',
    status: 'Active',
    email: 'emma@acme.com',
  },
];

const ITEMS_PER_PAGE = 6;

const DEMO_TEMPLATE = `<div class="w-full max-w-3xl">
  <div av-table>
    <div av-table-scroll-container class="h-[280px] overflow-y-auto">
      <table av-table-content aria-label="Async loading table" class="min-w-[600px]">
        <thead av-table-header class="sticky top-0 z-10 bg-surface-secondary">
          <tr>
            <th av-table-column>Name</th>
            <th av-table-column>Role</th>
            <th av-table-column>Status</th>
            <th av-table-column>Email</th>
          </tr>
        </thead>
        <tbody av-table-body>
          @for (user of items(); track user.id) {
            <tr av-table-row>
              <td av-table-cell>{{ user.name }}</td>
              <td av-table-cell>{{ user.role }}</td>
              <td av-table-cell>
                <span av-chip [color]="statusColor(user.status)" size="sm" variant="soft">
                  <span av-chip-label>{{ user.status }}</span>
                </span>
              </td>
              <td av-table-cell>{{ user.email }}</td>
            </tr>
          }
          @if (hasMore()) {
            <tr av-table-load-more>
              <td av-table-cell colspan="4">
                <div av-table-load-more-content>
                  @if (loading()) {
                    <span av-spinner size="md"></span>
                  } @else {
                    <button
                      type="button"
                      class="text-sm text-accent underline-offset-2 hover:underline"
                      (click)="loadMore()"
                    >
                      Load more
                    </button>
                  }
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'table-async-loading';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvChipImports,
  AvSpinnerComponent,
  AvTableImports,
  type AvChipColor,
} from '@avesra/angular';

@Component({
  selector: 'app-table-async-loading-demo',
  imports: [
    AvTableImports,
    AvChipImports,
    AvSpinnerComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TableAsyncLoadingDemo {
  private readonly allUsers = [
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
    {
      id: 9,
      name: 'Sophia Anderson',
      role: 'QA Engineer',
      status: 'On Leave',
      email: 'sophia@acme.com',
    },
    { id: 10, name: 'Liam Thomas', role: 'DevOps Engineer', status: 'Active', email: 'liam@acme.com' },
    {
      id: 11,
      name: 'Lucas Martinez',
      role: 'Product Manager',
      status: 'Active',
      email: 'lucas@acme.com',
    },
    {
      id: 12,
      name: 'Emma Johnson',
      role: 'Frontend Engineer',
      status: 'Active',
      email: 'emma@acme.com',
    },
  ];

  readonly items = signal(this.allUsers.slice(0, 6));
  readonly loading = signal(false);
  readonly hasMore = computed(() => this.items().length < this.allUsers.length);

  private readonly statusColorMap: Record<string, AvChipColor> = {
    Active: 'success',
    Inactive: 'danger',
    'On Leave': 'warning',
  };

  statusColor(status: string): AvChipColor {
    return this.statusColorMap[status] ?? 'accent';
  }

  loadMore(): void {
    if (!this.hasMore() || this.loading()) return;
    this.loading.set(true);
    setTimeout(() => {
      this.items.update((prev) => this.allUsers.slice(0, prev.length + 6));
      this.loading.set(false);
    }, 1200);
  }
}`;

@Component({
  selector: 'app-table-async-loading-demo',
  imports: [
    AvTableImports,
    AvChipImports,
    AvSpinnerComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TableAsyncLoadingDemo {
  private readonly allUsers = ALL_USERS;
  readonly items = signal(ALL_USERS.slice(0, ITEMS_PER_PAGE));
  readonly loading = signal(false);
  readonly hasMore = computed(() => this.items().length < this.allUsers.length);

  private readonly statusColorMap: Record<string, AvChipColor> = {
    Active: 'success',
    Inactive: 'danger',
    'On Leave': 'warning',
  };

  statusColor(status: string): AvChipColor {
    return this.statusColorMap[status] ?? 'accent';
  }

  loadMore(): void {
    if (!this.hasMore() || this.loading()) return;
    this.loading.set(true);
    setTimeout(() => {
      this.items.update((prev) => this.allUsers.slice(0, prev.length + ITEMS_PER_PAGE));
      this.loading.set(false);
    }, 1200);
  }
}
