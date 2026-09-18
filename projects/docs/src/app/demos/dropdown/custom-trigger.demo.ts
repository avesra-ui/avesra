import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const PROFILE_AVATAR_URL =
  '/images/gradients/gradient-warm-orange-yellow-red.png';

const DEMO_TEMPLATE = `<av-dropdown>
  <button
    av-dropdown-trigger
    custom-trigger
    type="button"
    class="rounded-full outline-none"
    aria-label="User menu"
  >
    <span av-avatar>
      <img av-avatar-image alt="Junior Garcia" src="${PROFILE_AVATAR_URL}" />
      <span av-avatar-fallback delay-ms="600">JD</span>
    </span>
  </button>
  <av-dropdown-popover>
    <div class="px-3 pt-3 pb-1">
      <div class="flex items-center gap-2">
        <span av-avatar size="sm">
          <img av-avatar-image alt="Jane" src="${PROFILE_AVATAR_URL}" />
          <span av-avatar-fallback delay-ms="600">JD</span>
        </span>
        <div class="flex flex-col gap-0">
          <p class="text-sm leading-5 font-medium">Jane Doe</p>
          <p class="text-xs leading-none text-muted">jane&#64;example.com</p>
        </div>
      </div>
    </div>
    <div av-dropdown-menu>
      <div av-menu-item id="dashboard" textValue="Dashboard">
        <label av-label>Dashboard</label>
      </div>
      <div av-menu-item id="profile" textValue="Profile">
        <label av-label>Profile</label>
      </div>
      <div av-menu-item id="settings" textValue="Settings">
        <div class="flex w-full items-center justify-between gap-2">
          <label av-label>Settings</label>
          <app-icon icon="solar:settings-linear" size="14" class="text-muted" />
        </div>
      </div>
      <div av-menu-item id="new-project" textValue="New project">
        <div class="flex w-full items-center justify-between gap-2">
          <label av-label>Create Team</label>
          <app-icon icon="solar:users-group-rounded-linear" size="14" class="text-muted" />
        </div>
      </div>
      <div av-menu-item id="logout" textValue="Logout" variant="danger">
        <div class="flex w-full items-center justify-between gap-2">
          <label av-label>Log Out</label>
          <app-icon icon="solar:logout-2-linear" size="14" class="text-danger" />
        </div>
      </div>
    </div>
  </av-dropdown-popover>
</av-dropdown>`;

const DEMO_IMPORTS = [
  AvDropdownImports,
  AvLabelComponent,
  AvAvatarImports,
  AppIconComponent,
] as const;

export const DEMO_NAME = 'dropdown-custom-trigger';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-dropdown-custom-trigger-demo',
  imports: [AvDropdownImports, AvLabelComponent, AvAvatarImports, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DropdownCustomTriggerDemo {}`;

@Component({
  selector: 'app-dropdown-custom-trigger-demo',
  imports: [...DEMO_IMPORTS],
  template: DEMO_TEMPLATE,
})
export class DropdownCustomTriggerDemo {}
