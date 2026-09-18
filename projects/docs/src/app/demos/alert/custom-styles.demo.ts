import { Component } from '@angular/core';

import {
  AvAlertImports,
  AvButtonComponent,
  AvCloseButtonComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="w-full max-w-xl">
      <div
        av-alert
        status="warning"
        class="relative overflow-hidden rounded-xl border border-warning/20 bg-linear-to-br from-warning/10 via-surface to-surface-secondary shadow-sm dark:border-warning/30 dark:from-warning/15 dark:via-surface dark:to-warning/5"
      >
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -top-8 -right-8 size-28 rounded-full bg-warning/15 blur-2xl dark:bg-warning/25"
        ></div>
        <div av-alert-indicator class="relative text-warning"></div>
        <div av-alert-content class="relative">
          <p av-alert-title>Payment method expires soon</p>
          <span av-alert-description>
            Your Visa ending in 4242 expires on March 28. Update billing to avoid interrupting your
            Pro subscription.
          </span>
          <button class="mt-3 sm:hidden" av-button size="sm" variant="tertiary" type="button">
            Update billing
          </button>
        </div>
        <button
          class="relative hidden shrink-0 sm:inline-flex"
          av-button
          size="sm"
          variant="tertiary"
          type="button"
        >
          Update billing
        </button>
        <button av-close-button class="relative" aria-label="Dismiss"></button>
      </div>
    </div>`;

export const DEMO_NAME = 'alert-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertImports,
  AvButtonComponent,
  AvCloseButtonComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-alert-custom-styles-demo',
  imports: [
    AvAlertImports,
    AvButtonComponent,
    AvCloseButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertCustomStylesDemo {}`;

@Component({
  selector: 'app-alert-custom-styles-demo',
  imports: [
    AvAlertImports,
    AvButtonComponent,
    AvCloseButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertCustomStylesDemo {}
