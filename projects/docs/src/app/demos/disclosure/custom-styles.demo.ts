import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDisclosureImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-disclosure [(expanded)]="expanded">
      <h3 av-disclosure-heading class="block">
        <button
          av-button
          type="button"
          av-disclosure-trigger
          variant="ghost"
          class="w-full justify-between rounded-xl border border-border/70 bg-linear-to-b from-neutral-50/90 to-white px-4 py-3 font-medium text-foreground shadow-sm ring-1 ring-black/5 hover:bg-muted/30 dark:from-neutral-900/80 dark:to-neutral-900 dark:ring-white/10"
        >
          <span class="flex items-center gap-2">
            <app-icon icon="solar:box-linear" size="16" class="text-muted" />
            Shipping details
          </span>
          <svg av-disclosure-indicator class="text-muted"></svg>
        </button>
      </h3>
      <div av-disclosure-content>
        <div
          av-disclosure-body
          class="mt-2 rounded-xl border border-border/70 bg-surface/50 p-4 text-sm leading-relaxed text-muted dark:bg-neutral-900/50"
        >
          Orders ship within 2 business days. Standard delivery takes 3–5 days; express is available
          at checkout.
        </div>
      </div>
    </av-disclosure>`;

export const DEMO_NAME = 'disclosure-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDisclosureImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-disclosure-custom-styles-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class DisclosureCustomStylesDemo {
  expanded = false;
}`;

@Component({
  selector: 'app-disclosure-custom-styles-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-sm' },
  template: DEMO_TEMPLATE,
})
export class DisclosureCustomStylesDemo {
  expanded = false;
}
