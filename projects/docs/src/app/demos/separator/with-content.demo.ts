import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

interface SeparatorDemoItem {
  iconUrl: string;
  title: string;
  subtitle: string;
}

const SEPARATOR_DEMO_ITEMS: SeparatorDemoItem[] = [
  {
    iconUrl: '/images/icons/icon-3d-alarm-clock-red.png',
    title: 'Set Up Notifications',
    subtitle: 'Receive account activity updates',
  },
  {
    iconUrl: '/images/icons/icon-3d-shield-check.png',
    title: 'Secure Your Account',
    subtitle: 'Enable two-factor authentication',
  },
  {
    iconUrl: '/images/icons/icon-3d-rocket-launch.png',
    title: 'Launch Your Project',
    subtitle: 'Create your first workspace',
  },
];

const DEMO_TEMPLATE = `<div class="max-w-md space-y-4">
  @for (item of items; track item.title; let last = $last) {
    <div>
      <div class="flex items-center gap-3">
        <img [alt]="item.title" class="size-12" [src]="item.iconUrl" />
        <div class="flex-1 space-y-0">
          <h4 class="text-sm font-medium text-foreground">{{ item.title }}</h4>
          <p class="text-sm text-muted">{{ item.subtitle }}</p>
        </div>
      </div>
      @if (!last) {
        <hr av-separator class="my-4" />
      }
    </div>
  }
</div>`;

export const DEMO_NAME = 'separator-with-content';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

interface SeparatorDemoItem {
  iconUrl: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-separator-with-content-demo',
  imports: [AvSeparatorImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SeparatorWithContentDemo {
  readonly items: SeparatorDemoItem[] = [
    {
      iconUrl: '/images/icons/icon-3d-alarm-clock-red.png',
      title: 'Set Up Notifications',
      subtitle: 'Receive account activity updates',
    },
    {
      iconUrl: '/images/icons/icon-3d-shield-check.png',
      title: 'Secure Your Account',
      subtitle: 'Enable two-factor authentication',
    },
    {
      iconUrl: '/images/icons/icon-3d-rocket-launch.png',
      title: 'Launch Your Project',
      subtitle: 'Create your first workspace',
    },
  ];
}`;

@Component({
  selector: 'app-separator-with-content-demo',
  imports: [AvSeparatorImports],
  template: DEMO_TEMPLATE,
})
export class SeparatorWithContentDemo {
  readonly items = SEPARATOR_DEMO_ITEMS;
}
