import { Component } from '@angular/core';

import { AvAvatarImports } from '@avesra/angular';

import { AVATAR_DEMO_PORTRAITS } from './avatar-demo.assets';

interface AvatarGroupUser {
  id: number;
  image: string;
  name: string;
}

const GROUP_USERS: readonly AvatarGroupUser[] = [
  { id: 1, image: AVATAR_DEMO_PORTRAITS[0], name: 'John Doe' },
  { id: 2, image: AVATAR_DEMO_PORTRAITS[1], name: 'Kate Wilson' },
  { id: 3, image: AVATAR_DEMO_PORTRAITS[2], name: 'Emily Chen' },
  { id: 4, image: AVATAR_DEMO_PORTRAITS[3], name: 'Michael Brown' },
  { id: 5, image: AVATAR_DEMO_PORTRAITS[4], name: 'Olivia Davis' },
];

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
      <div class="flex -space-x-2">
        @for (user of basicUsers; track user.id) {
          <span av-avatar class="ring-2 ring-background">
            <img av-avatar-image [alt]="user.name" [src]="user.image" />
            <span av-avatar-fallback>{{ initials(user.name) }}</span>
          </span>
        }
      </div>

      <div class="flex -space-x-2">
        @for (user of counterUsers; track user.id) {
          <span av-avatar class="ring-2 ring-background">
            <img av-avatar-image [alt]="user.name" [src]="user.image" />
            <span av-avatar-fallback>{{ initials(user.name) }}</span>
          </span>
        }
        <span av-avatar class="ring-2 ring-background">
          <span av-avatar-fallback class="text-xs">+{{ overflowCount }}</span>
        </span>
      </div>
    </div>`;

export const DEMO_NAME = 'avatar-group';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAvatarImports } from '@avesra/angular';

@Component({
  selector: 'app-avatar-group-demo',
  imports: [AvAvatarImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AvatarGroupDemo {
  readonly users = ${JSON.stringify(GROUP_USERS, null, 2)};

  readonly basicUsers = this.users.slice(0, 4);
  readonly counterUsers = this.users.slice(0, 3);
  readonly overflowCount = this.users.length - 3;

  initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('');
  }
}`;

@Component({
  selector: 'app-avatar-group-demo',
  imports: [AvAvatarImports],
  template: DEMO_TEMPLATE,
})
export class AvatarGroupDemo {
  readonly users: readonly AvatarGroupUser[] = GROUP_USERS;

  readonly basicUsers = this.users.slice(0, 4);
  readonly counterUsers = this.users.slice(0, 3);
  readonly overflowCount = this.users.length - 3;

  initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('');
  }
}
