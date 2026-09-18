import { Component, computed, signal } from '@angular/core';
import {
  AvCheckboxImports,
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
];

const DEMO_TEMPLATE = `<div class="flex w-full max-w-3xl flex-col gap-3">
  <div av-table>
    <div av-table-scroll-container>
      <table av-table-content aria-label="Table with selection" class="min-w-[600px]">
        <thead av-table-header>
          <tr>
            <th av-table-column class="w-12 pr-0">
              <div
                av-checkbox
                variant="secondary"
                aria-label="Select all"
                [selected]="allSelected()"
                [indeterminate]="someSelected()"
                (selectedChange)="toggleSelectAll($event)"
              >
                <span av-checkbox-control>
                  <span av-checkbox-indicator></span>
                </span>
              </div>
            </th>
            <th av-table-column>Name</th>
            <th av-table-column>Role</th>
            <th av-table-column>Status</th>
            <th av-table-column>Email</th>
          </tr>
        </thead>
        <tbody av-table-body>
          @for (user of users; track user.id) {
            <tr av-table-row [selected]="isSelected(user.id)">
              <td av-table-cell class="pr-0">
                <div
                  av-checkbox
                  variant="secondary"
                  [attr.aria-label]="'Select ' + user.name"
                  [selected]="isSelected(user.id)"
                  (selectedChange)="setSelected(user.id, $event)"
                >
                  <span av-checkbox-control>
                    <span av-checkbox-indicator></span>
                  </span>
                </div>
              </td>
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
  <p class="text-sm text-muted">
    Selected:
    <span class="font-medium">{{ selectedLabel() }}</span>
  </p>
</div>`;

export const DEMO_NAME = 'table-selection';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvCheckboxImports,
  AvTableImports,
} from '@avesra/angular';

@Component({
  selector: 'app-table-selection-demo',
  imports: [
    AvTableImports,
    AvCheckboxImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TableSelectionDemo {
  readonly users = [
    { id: 1, name: 'Kate Moore', role: 'CEO', status: 'Active', email: 'kate@acme.com' },
    { id: 2, name: 'John Smith', role: 'CTO', status: 'Active', email: 'john@acme.com' },
    { id: 3, name: 'Sara Johnson', role: 'CMO', status: 'On Leave', email: 'sara@acme.com' },
    { id: 4, name: 'Michael Brown', role: 'CFO', status: 'Active', email: 'michael@acme.com' },
  ];

  readonly selectedIds = signal<ReadonlySet<number>>(new Set());

  readonly allSelected = computed(
    () =>
      this.users.length > 0 &&
      this.users.every((user) => this.selectedIds().has(user.id)),
  );

  readonly someSelected = computed(() => {
    const count = this.selectedIds().size;
    return count > 0 && count < this.users.length;
  });

  readonly selectedLabel = computed(() => {
    const ids = this.selectedIds();
    if (ids.size === 0) return 'None';
    if (ids.size === this.users.length) return 'All';
    return Array.from(ids).join(', ');
  });

  isSelected(id: number): boolean {
    return this.selectedIds().has(id);
  }

  setSelected(id: number, selected: boolean): void {
    this.selectedIds.update((current) => {
      const next = new Set(current);
      if (selected) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  toggleSelectAll(selected: boolean): void {
    this.selectedIds.set(selected ? new Set(this.users.map((u) => u.id)) : new Set());
  }
}`;

@Component({
  selector: 'app-table-selection-demo',
  imports: [
    AvTableImports,
    AvCheckboxImports,
  ],
  template: DEMO_TEMPLATE,
})
export class TableSelectionDemo {
  readonly users = USERS;
  readonly selectedIds = signal<ReadonlySet<number>>(new Set());

  readonly allSelected = computed(
    () =>
      this.users.length > 0 &&
      this.users.every((user) => this.selectedIds().has(user.id)),
  );

  readonly someSelected = computed(() => {
    const count = this.selectedIds().size;
    return count > 0 && count < this.users.length;
  });

  readonly selectedLabel = computed(() => {
    const ids = this.selectedIds();
    if (ids.size === 0) return 'None';
    if (ids.size === this.users.length) return 'All';
    return Array.from(ids).join(', ');
  });

  isSelected(id: number): boolean {
    return this.selectedIds().has(id);
  }

  setSelected(id: number, selected: boolean): void {
    this.selectedIds.update((current) => {
      const next = new Set(current);
      if (selected) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  toggleSelectAll(selected: boolean): void {
    this.selectedIds.set(selected ? new Set(this.users.map((u) => u.id)) : new Set());
  }
}
