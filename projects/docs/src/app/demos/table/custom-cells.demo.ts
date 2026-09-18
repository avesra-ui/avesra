import { Component, computed, signal } from '@angular/core';
import {
  AvAvatarImports,
  AvButtonComponent,
  AvCheckboxImports,
  AvChipImports,
  AvTableImports,
  type AvChipColor,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

import { AVATAR_DEMO_GRADIENTS } from '../avatar/avatar-demo.assets';

interface User {
  id: number;
  name: string;
  imageUrl: string;
  role: string;
  status: 'Active' | 'Inactive' | 'On Leave';
  email: string;
}

const USERS: User[] = [
  {
    id: 4586932,
    name: 'Kate Moore',
    imageUrl: AVATAR_DEMO_GRADIENTS.pink,
    role: 'Chief Executive Officer',
    status: 'Active',
    email: 'kate@acme.com',
  },
  {
    id: 5273849,
    name: 'John Smith',
    imageUrl: AVATAR_DEMO_GRADIENTS.cyanBluePurple,
    role: 'Chief Technology Officer',
    status: 'Active',
    email: 'john@acme.com',
  },
  {
    id: 7492836,
    name: 'Sara Johnson',
    imageUrl: AVATAR_DEMO_GRADIENTS.blueCyan,
    role: 'Chief Marketing Officer',
    status: 'On Leave',
    email: 'sara@acme.com',
  },
  {
    id: 8293746,
    name: 'Michael Brown',
    imageUrl: AVATAR_DEMO_GRADIENTS.purple,
    role: 'Chief Financial Officer',
    status: 'Active',
    email: 'michael@acme.com',
  },
  {
    id: 1234567,
    name: 'Emily Davis',
    imageUrl: AVATAR_DEMO_GRADIENTS.warm,
    role: 'Product Manager',
    status: 'Inactive',
    email: 'emily@acme.com',
  },
];

const DEMO_TEMPLATE = `<div class="w-full max-w-4xl">
  <div av-table>
    <div av-table-scroll-container>
      <table av-table-content aria-label="Table with custom cells" class="min-w-[800px]">
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
            <th av-table-column>Member</th>
            <th av-table-column>Role</th>
            <th av-table-column>Status</th>
            <th av-table-column class="text-end">Actions</th>
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
              <td av-table-cell>
                <div class="flex items-center gap-3">
                  <span av-avatar size="sm">
                    <img av-avatar-image [alt]="user.name" [src]="user.imageUrl" />
                    <span av-avatar-fallback>{{ initials(user.name) }}</span>
                  </span>
                  <div class="flex flex-col">
                    <span class="text-xs">{{ user.name }}</span>
                    <span class="text-xs text-muted">{{ user.email }}</span>
                  </div>
                </div>
              </td>
              <td av-table-cell class="min-w-52">{{ user.role }}</td>
              <td av-table-cell>
                <span av-chip [color]="statusColorMap[user.status]" size="sm" variant="soft">
                  <span av-chip-label>{{ user.status }}</span>
                </span>
              </td>
              <td av-table-cell>
                <div class="flex items-center justify-end gap-1">
                  <button av-button size="sm" variant="tertiary" icon-only aria-label="View user">
                    <app-icon icon="solar:eye-linear" size="16" />
                  </button>
                  <button av-button size="sm" variant="tertiary" icon-only aria-label="Edit user">
                    <app-icon icon="solar:pen-linear" size="16" />
                  </button>
                  <button av-button size="sm" variant="danger-soft" icon-only aria-label="Delete user">
                    <app-icon icon="solar:trash-bin-trash-linear" size="16" />
                  </button>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <div av-table-footer>
      <span class="text-sm text-muted">
        @if (selectedCount() > 0) {
          {{ selectedCount() }} of {{ users.length }} selected
        } @else {
          Showing {{ users.length }} results
        }
      </span>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'table-custom-cells';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvAvatarImports,
  AvButtonComponent,
  AvCheckboxImports,
  AvChipImports,
  AvTableImports,
  type AvChipColor,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-table-custom-cells-demo',
  imports: [
    AvTableImports,
    AvAvatarImports,
    AvChipImports,
    AvButtonComponent,
    AvCheckboxImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TableCustomCellsDemo {
  readonly users = [
    {
      id: 4586932,
      name: 'Kate Moore',
      imageUrl: '${AVATAR_DEMO_GRADIENTS.pink}',
      role: 'Chief Executive Officer',
      status: 'Active' as const,
      email: 'kate@acme.com',
    },
    {
      id: 5273849,
      name: 'John Smith',
      imageUrl: '${AVATAR_DEMO_GRADIENTS.cyanBluePurple}',
      role: 'Chief Technology Officer',
      status: 'Active' as const,
      email: 'john@acme.com',
    },
    {
      id: 7492836,
      name: 'Sara Johnson',
      imageUrl: '${AVATAR_DEMO_GRADIENTS.blueCyan}',
      role: 'Chief Marketing Officer',
      status: 'On Leave' as const,
      email: 'sara@acme.com',
    },
    {
      id: 8293746,
      name: 'Michael Brown',
      imageUrl: '${AVATAR_DEMO_GRADIENTS.purple}',
      role: 'Chief Financial Officer',
      status: 'Active' as const,
      email: 'michael@acme.com',
    },
    {
      id: 1234567,
      name: 'Emily Davis',
      imageUrl: '${AVATAR_DEMO_GRADIENTS.warm}',
      role: 'Product Manager',
      status: 'Inactive' as const,
      email: 'emily@acme.com',
    },
  ];

  readonly statusColorMap: Record<'Active' | 'Inactive' | 'On Leave', AvChipColor> = {
    Active: 'success',
    Inactive: 'danger',
    'On Leave': 'warning',
  };

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

  readonly selectedCount = computed(() => this.selectedIds().size);

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

  initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('');
  }
}`;

@Component({
  selector: 'app-table-custom-cells-demo',
  imports: [
    AvTableImports,
    AvAvatarImports,
    AvChipImports,
    AvButtonComponent,
    AvCheckboxImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class TableCustomCellsDemo {
  readonly users = USERS;

  readonly statusColorMap: Record<User['status'], AvChipColor> = {
    Active: 'success',
    Inactive: 'danger',
    'On Leave': 'warning',
  };

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

  readonly selectedCount = computed(() => this.selectedIds().size);

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

  initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('');
  }
}
