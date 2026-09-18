import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-drawer placement="left">
      <button av-button variant="secondary" av-drawer-trigger>
        <app-icon icon="solar:hamburger-menu-linear" size="16" />
        Menu
      </button>
      <ng-template avDrawerContent>
        <div av-drawer-dialog>
          <av-drawer-close-trigger />
          <div av-drawer-header>
            <h2 av-drawer-heading>Navigation</h2>
          </div>
          <div av-drawer-body>
            <nav class="flex flex-col gap-1">
              @for (item of navItems; track item.label) {
                <button
                  class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                  type="button"
                >
                  <app-icon [icon]="item.icon" size="20" class="text-muted" />
                  {{ item.label }}
                </button>
              }
            </nav>
          </div>
        </div>
      </ng-template>
    </av-drawer>`;

export const DEMO_NAME = 'drawer-navigation-drawer';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-drawer-navigation-drawer-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerNavigationDrawerDemo {
  readonly navItems = [
    { icon: 'solar:home-2-linear', label: 'Home' },
    { icon: 'solar:magnifer-linear', label: 'Search' },
    { icon: 'solar:bell-linear', label: 'Notifications' },
    { icon: 'solar:letter-linear', label: 'Messages' },
    { icon: 'solar:user-linear', label: 'Profile' },
    { icon: 'solar:settings-linear', label: 'Settings' },
  ];
}`;

@Component({
  selector: 'app-drawer-navigation-drawer-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerNavigationDrawerDemo {
  readonly navItems = [
    { icon: 'solar:home-2-linear', label: 'Home' },
    { icon: 'solar:magnifer-linear', label: 'Search' },
    { icon: 'solar:bell-linear', label: 'Notifications' },
    { icon: 'solar:letter-linear', label: 'Messages' },
    { icon: 'solar:user-linear', label: 'Profile' },
    { icon: 'solar:settings-linear', label: 'Settings' },
  ];
}
