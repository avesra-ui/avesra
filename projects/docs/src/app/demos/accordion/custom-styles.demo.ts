import { Component } from '@angular/core';

import { AvAccordionImports } from '@avesra/angular';

interface CustomStylesItem {
  title: string;
  subtitle: string;
  content: string;
  iconUrl: string;
}

const ITEMS: CustomStylesItem[] = [
  {
    title: 'Set Up Notifications',
    subtitle: 'Receive account activity updates',
    content: 'Stay informed about your account activity with real-time notifications.',
    iconUrl: '/images/icons/icon-3d-alarm-clock-red.png',
  },
  {
    title: 'Secure Your Account',
    subtitle: 'Enable two-factor authentication',
    content: 'Protect your workspace by turning on two-factor authentication for sign-in.',
    iconUrl: '/images/icons/icon-3d-shield-check.png',
  },
  {
    title: 'Launch Your Project',
    subtitle: 'Create your first workspace',
    content: 'Spin up a workspace, invite your team, and start shipping from one place.',
    iconUrl: '/images/icons/icon-3d-rocket-launch.png',
  },
];

const DEMO_TEMPLATE = `<av-accordion class="w-full max-w-md rounded-2xl bg-surface/10" variant="surface">
      @for (item of items; track item.title; let index = $index) {
        <av-accordion-item [id]="'custom-styles-' + index" class="group/item">
          <h3 av-accordion-heading>
            <button
              av-accordion-trigger
              class="group flex items-center gap-2 transition-none hover:bg-surface"
            >
              <img
                [alt]="item.title"
                class="h-11 w-11 transition-[scale,rotate] duration-300 ease-out group-hover/item:scale-120 group-hover/item:-rotate-10 group-hover/item:drop-shadow-lg"
                [src]="item.iconUrl"
              />
              <div class="flex flex-col gap-0">
                <span class="font-medium leading-5">{{ item.title }}</span>
                <span class="font-normal leading-6 text-muted/80">{{ item.subtitle }}</span>
              </div>
              <svg av-accordion-indicator class="text-muted/50"></svg>
            </button>
          </h3>
          <div av-accordion-panel>
            <div av-accordion-body class="text-muted/80">{{ item.content }}</div>
          </div>
        </av-accordion-item>
      }
    </av-accordion>`;

export const DEMO_NAME = 'accordion-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvAccordionImports } from '@avesra/angular';

@Component({
  selector: 'app-accordion-custom-styles-demo',
  imports: [
    AvAccordionImports,
  ],
  host: { class: 'flex w-full justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class AccordionCustomStylesDemo {
  readonly items = ${JSON.stringify(ITEMS, null, 2)};
}`;

@Component({
  selector: 'app-accordion-custom-styles-demo',
  imports: [
    AvAccordionImports,
  ],
  host: { class: 'flex w-full justify-center' },
  template: DEMO_TEMPLATE,
})
export class AccordionCustomStylesDemo {
  readonly items = ITEMS;
}
