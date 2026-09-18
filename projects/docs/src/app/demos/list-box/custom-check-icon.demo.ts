import { Component, signal } from '@angular/core';
import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvListBoxImports,
  AvSurfaceComponent,
} from '@avesra/angular';

const USERS = [
  {
    id: '1',
    name: 'Bob',
    email: 'bob@avesra.dev',
    avatar: '/images/gradients/gradient-blue-cyan.png',
    fallback: 'B',
  },
  {
    id: '2',
    name: 'Fred',
    email: 'fred@avesra.dev',
    avatar: '/images/gradients/gradient-cyan-blue-purple.png',
    fallback: 'F',
  },
  {
    id: '3',
    name: 'Martha',
    email: 'martha@avesra.dev',
    avatar: '/images/gradients/gradient-purple-violet.png',
    fallback: 'M',
  },
] as const;

const DEMO_TEMPLATE = `<div av-surface class="w-64 rounded-3xl shadow-surface">
  <div
    av-list-box
    aria-label="Users"
    selection-mode="multiple"
    [(selectedKeys)]="customCheckSelected"
    class="w-full"
  >
    @for (user of users; track user.id) {
      <div av-list-box-item [id]="user.id" [textValue]="user.name">
        <span av-avatar size="sm">
          <img av-avatar-image [alt]="user.name" [src]="user.avatar" />
          <span av-avatar-fallback>{{ user.fallback }}</span>
        </span>
        <div class="flex flex-col">
          <label av-label>{{ user.name }}</label>
          <p av-description>{{ user.email }}</p>
        </div>
        <span av-list-box-item-indicator>
          <svg class="size-4 text-accent" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
        </span>
      </div>
    }
  </div>
</div>
<p class="mt-3 text-sm text-muted">Selected: {{ customCheckSelected().join(', ') || 'none' }}</p>`;

export const DEMO_NAME = 'list-box-custom-check-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvAvatarImports,
  AvDescriptionComponent,
  AvLabelComponent,
  AvListBoxImports,
  AvSurfaceComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-list-box-custom-check-icon-demo',
  imports: [
    AvSurfaceComponent,
    AvListBoxImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ListBoxCustomCheckIconDemo {
  readonly customCheckSelected = signal<string[]>(['1', '2']);
  readonly users = ${JSON.stringify(USERS, null, 2)};
}`;

@Component({
  selector: 'app-list-box-custom-check-icon-demo',
  imports: [
    AvSurfaceComponent,
    AvListBoxImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvAvatarImports,
  ],
  template: DEMO_TEMPLATE,
})
export class ListBoxCustomCheckIconDemo {
  readonly customCheckSelected = signal<string[]>(['1', '2']);
  readonly users = USERS;
}
