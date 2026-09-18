import { Component, computed, signal } from '@angular/core';
import { AvTableImports } from '@avesra/angular';

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  email: string;
}

type SortableColumn = 'name' | 'role' | 'status' | 'email';
type SortDirection = 'ascending' | 'descending';

interface SortDescriptor {
  column: SortableColumn;
  direction: SortDirection;
}

const USERS: User[] = [
  { id: 1, name: 'Kate Moore', role: 'CEO', status: 'Active', email: 'kate@acme.com' },
  { id: 2, name: 'John Smith', role: 'CTO', status: 'Active', email: 'john@acme.com' },
  { id: 3, name: 'Sara Johnson', role: 'CMO', status: 'On Leave', email: 'sara@acme.com' },
  { id: 4, name: 'Michael Brown', role: 'CFO', status: 'Active', email: 'michael@acme.com' },
  {
    id: 5,
    name: 'Emily Davis',
    role: 'Product Manager',
    status: 'Inactive',
    email: 'emily@acme.com',
  },
];

const DEMO_TEMPLATE = `<div class="w-full max-w-3xl">
  <div av-table>
    <div av-table-scroll-container>
      <table av-table-content aria-label="Sortable table" class="min-w-[600px]">
        <thead av-table-header>
          <tr>
            @for (col of columns; track col) {
              <th
                av-table-column
                allows-sorting
                [attr.aria-sort]="sortAria(col)"
                (click)="toggleSort(col)"
              >
                <span class="flex items-center justify-between gap-2">
                  {{ labels[col] }}
                  @if (sortDirection(col); as direction) {
                    <svg
                      class="size-3 shrink-0 transition-transform duration-100 ease-out"
                      [class.rotate-180]="direction === 'descending'"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 3.5 4 9.5h8L8 3.5Z" />
                    </svg>
                  }
                </span>
              </th>
            }
          </tr>
        </thead>
        <tbody av-table-body>
          @for (user of sortedUsers(); track user.id) {
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
  </div>
</div>`;

export const DEMO_NAME = 'table-sorting';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import { AvTableImports } from '@avesra/angular';

@Component({
  selector: 'app-table-sorting-demo',
  imports: [AvTableImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TableSortingDemo {
  readonly columns = ['name', 'role', 'status', 'email'] as const;
  readonly labels = {
    name: 'Name',
    role: 'Role',
    status: 'Status',
    email: 'Email',
  } as const;

  private readonly users = [
    { id: 1, name: 'Kate Moore', role: 'CEO', status: 'Active', email: 'kate@acme.com' },
    { id: 2, name: 'John Smith', role: 'CTO', status: 'Active', email: 'john@acme.com' },
    { id: 3, name: 'Sara Johnson', role: 'CMO', status: 'On Leave', email: 'sara@acme.com' },
    { id: 4, name: 'Michael Brown', role: 'CFO', status: 'Active', email: 'michael@acme.com' },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'Product Manager',
      status: 'Inactive',
      email: 'emily@acme.com',
    },
  ];

  readonly sortDescriptor = signal({ column: 'name', direction: 'ascending' as const });

  readonly sortedUsers = computed(() => {
    const { column, direction } = this.sortDescriptor();
    return [...this.users].sort((a, b) => {
      const cmp = String(a[column]).localeCompare(String(b[column]));
      return direction === 'descending' ? -cmp : cmp;
    });
  });

  toggleSort(column: 'name' | 'role' | 'status' | 'email'): void {
    this.sortDescriptor.update((current) => {
      if (current.column === column) {
        return {
          column,
          direction: current.direction === 'ascending' ? 'descending' : 'ascending',
        };
      }
      return { column, direction: 'ascending' };
    });
  }

  sortAria(column: 'name' | 'role' | 'status' | 'email'): 'ascending' | 'descending' | 'none' {
    const descriptor = this.sortDescriptor();
    return descriptor.column === column ? descriptor.direction : 'none';
  }

  sortDirection(column: 'name' | 'role' | 'status' | 'email'): 'ascending' | 'descending' | null {
    const descriptor = this.sortDescriptor();
    return descriptor.column === column ? descriptor.direction : null;
  }
}`;

@Component({
  selector: 'app-table-sorting-demo',
  imports: [AvTableImports],
  template: DEMO_TEMPLATE,
})
export class TableSortingDemo {
  readonly columns: SortableColumn[] = ['name', 'role', 'status', 'email'];
  readonly labels: Record<SortableColumn, string> = {
    name: 'Name',
    role: 'Role',
    status: 'Status',
    email: 'Email',
  };

  private readonly users = USERS;

  readonly sortDescriptor = signal<SortDescriptor>({
    column: 'name',
    direction: 'ascending',
  });

  readonly sortedUsers = computed(() => {
    const { column, direction } = this.sortDescriptor();
    return [...this.users].sort((a, b) => {
      const cmp = String(a[column]).localeCompare(String(b[column]));
      return direction === 'descending' ? -cmp : cmp;
    });
  });

  toggleSort(column: SortableColumn): void {
    this.sortDescriptor.update((current) => {
      if (current.column === column) {
        return {
          column,
          direction: current.direction === 'ascending' ? 'descending' : 'ascending',
        };
      }
      return { column, direction: 'ascending' };
    });
  }

  sortAria(column: SortableColumn): 'ascending' | 'descending' | 'none' {
    const descriptor = this.sortDescriptor();
    return descriptor.column === column ? descriptor.direction : 'none';
  }

  sortDirection(column: SortableColumn): SortDirection | null {
    const descriptor = this.sortDescriptor();
    return descriptor.column === column ? descriptor.direction : null;
  }
}
