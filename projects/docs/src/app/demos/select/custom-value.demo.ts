import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

const USERS = [
  {
    avatarUrl: '/images/gradients/gradient-blue-cyan.png',
    email: 'bob@avesra.dev',
    fallback: 'B',
    id: '1',
    name: 'Bob',
  },
  {
    avatarUrl: '/images/gradients/gradient-cyan-blue-purple.png',
    email: 'fred@avesra.dev',
    fallback: 'F',
    id: '2',
    name: 'Fred',
  },
  {
    avatarUrl: '/images/gradients/gradient-purple-violet.png',
    email: 'martha@avesra.dev',
    fallback: 'M',
    id: '3',
    name: 'Martha',
  },
  {
    avatarUrl: '/images/gradients/gradient-pink-magenta.png',
    email: 'john@avesra.dev',
    fallback: 'J',
    id: '4',
    name: 'John',
  },
  {
    avatarUrl: '/images/gradients/gradient-warm-orange-yellow-red.png',
    email: 'jane@avesra.dev',
    fallback: 'J',
    id: '5',
    name: 'Jane',
  },
] as const;

const DEMO_TEMPLATE = `<div av-select class="w-64" placeholder="Select a user" [(ngModel)]="selected">
  <label av-label>User</label>
  <button av-select-trigger>
    <span av-select-value>
      @if (selectedUser; as user) {
        <div class="flex items-center gap-2">
          <span av-avatar class="size-4" size="sm">
            <img av-avatar-image [alt]="user.name" [src]="user.avatarUrl" />
            <span av-avatar-fallback>{{ user.fallback }}</span>
          </span>
          <span>{{ user.name }}</span>
        </div>
      }
    </span>
    <span av-select-indicator></span>
  </button>
  <av-select-popover>
    <div av-list-box>
      @for (user of users; track user.id) {
        <div av-list-box-item [id]="user.id" [textValue]="user.name">
          <span av-avatar size="sm">
            <img av-avatar-image [alt]="user.name" [src]="user.avatarUrl" />
            <span av-avatar-fallback>{{ user.fallback }}</span>
          </span>
          <div class="flex flex-col">
            <label av-label>{{ user.name }}</label>
            <p av-description>{{ user.email }}</p>
          </div>
          <span av-list-box-item-indicator></span>
        </div>
      }
    </div>
  </av-select-popover>
</div>`;

export const DEMO_NAME = 'select-custom-value';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvSelectImports,
} from '@avesra/angular';

@Component({
  selector: 'app-select-custom-value-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SelectCustomValueDemo {
  selected: string | null = null;
  readonly users = ${JSON.stringify(USERS, null, 2)};

  get selectedUser() {
    return this.users.find((user) => user.id === this.selected) ?? null;
  }
}`;

@Component({
  selector: 'app-select-custom-value-demo',
  imports: [
    FormsModule,
    AvSelectImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class SelectCustomValueDemo {
  selected: string | null = null;
  readonly users = USERS;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selected) ?? null;
  }
}
