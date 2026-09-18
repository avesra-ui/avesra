import { Component, computed, signal } from '@angular/core';

import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

import { AVATAR_DEMO_GRADIENTS } from '../avatar/avatar-demo.assets';

type User = {
  id: string;
  name: string;
  avatar: string;
  fallback: string;
};

const INITIAL_USERS: User[] = [
  {
    id: 'fred',
    name: 'Fred',
    avatar: AVATAR_DEMO_GRADIENTS.blueCyan,
    fallback: 'F',
  },
  {
    id: 'michael',
    name: 'Michael',
    avatar: AVATAR_DEMO_GRADIENTS.cyanBluePurple,
    fallback: 'M',
  },
  {
    id: 'jane',
    name: 'Jane',
    avatar: AVATAR_DEMO_GRADIENTS.purple,
    fallback: 'J',
  },
  {
    id: 'alice',
    name: 'Alice',
    avatar: AVATAR_DEMO_GRADIENTS.pink,
    fallback: 'A',
  },
  {
    id: 'bob',
    name: 'Bob',
    avatar: AVATAR_DEMO_GRADIENTS.warm,
    fallback: 'B',
  },
  {
    id: 'charlie',
    name: 'Charlie',
    avatar: AVATAR_DEMO_GRADIENTS.blackBlur,
    fallback: 'C',
  },
];

const DEMO_TEMPLATE = `<av-tag-group
  selection-mode="multiple"
  allows-removing
  [(selectedKeys)]="selected"
  (remove)="onRemove($event)"
>
  <label av-label>Team Members</label>
  <div av-tag-group-list>
    @for (user of users(); track user.id) {
      <div av-tag [value]="user.id" [text-value]="user.name">
        <span class="size-4" av-avatar>
          <img av-avatar-image [src]="user.avatar" [alt]="user.name" />
          <span av-avatar-fallback>{{ user.fallback }}</span>
        </span>
        {{ user.name }}
      </div>
    } @empty {
      <p class="p-1 text-sm text-muted">No team members</p>
    }
  </div>
  <p av-description>Select team members for your project</p>
</av-tag-group>

@if (selectedUsers().length > 0) {
  <div class="mt-4 flex flex-col gap-2">
    <p class="text-sm font-medium text-muted">Selected:</p>
    <div class="flex flex-wrap gap-2">
      @for (user of selectedUsers(); track user.id) {
        <div class="flex items-center gap-2 rounded-lg bg-surface-tertiary px-2 py-1">
          <span class="size-4" av-avatar>
            <img av-avatar-image [src]="user.avatar" [alt]="user.name" />
            <span av-avatar-fallback>{{ user.fallback }}</span>
          </span>
          <span class="text-sm">{{ user.name }}</span>
        </div>
      }
    </div>
  </div>
}`;

export const DEMO_NAME = 'tag-group-with-list-data';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvTagGroupImports,
} from '@avesra/angular';

type User = {
  id: string;
  name: string;
  avatar: string;
  fallback: string;
};

@Component({
  selector: 'app-tag-group-with-list-data-demo',
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
  ],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TagGroupWithListDataDemo {
  readonly users = signal<User[]>([/* … */]);
  readonly selected = signal<string[]>(['fred', 'michael']);
  readonly selectedUsers = computed(() =>
    this.users().filter((user) => this.selected().includes(user.id)),
  );

  onRemove(keys: string[]): void {
    this.users.update((items) => items.filter((user) => !keys.includes(user.id)));
    this.selected.update((keysSelected) => keysSelected.filter((key) => !keys.includes(key)));
  }
}`;

@Component({
  selector: 'app-tag-group-with-list-data-demo',
  host: {
    class: 'w-full max-w-sm',
  },
  imports: [
    AvTagGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class TagGroupWithListDataDemo {
  readonly users = signal<User[]>([...INITIAL_USERS]);
  readonly selected = signal<string[]>(['fred', 'michael']);
  readonly selectedUsers = computed(() =>
    this.users().filter((user) => this.selected().includes(user.id)),
  );

  onRemove(keys: string[]): void {
    this.users.update((items) => items.filter((user) => !keys.includes(user.id)));
    this.selected.update((keysSelected) => keysSelected.filter((key) => !keys.includes(key)));
  }
}
