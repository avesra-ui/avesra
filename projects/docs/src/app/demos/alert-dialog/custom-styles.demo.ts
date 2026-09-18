import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-alert-dialog backdrop="blur">
      <button av-button variant="secondary" av-alert-dialog-trigger>Sign out</button>
      <ng-template avAlertDialogContent>
        <div
          av-alert-dialog-dialog
          class="relative overflow-hidden border border-border/80 bg-surface shadow-2xl ring-1 ring-accent/10 sm:max-w-[400px] dark:border-border/90 dark:bg-surface dark:ring-accent/15"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-accent/6 to-transparent dark:from-accent/10"
          ></div>
          <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-accent/35 to-transparent dark:via-accent/45"
          ></div>
          <div av-alert-dialog-header class="relative">
            <div av-alert-dialog-icon status="accent"></div>
            <h2 av-alert-dialog-heading>Sign out of your account?</h2>
          </div>
          <div av-alert-dialog-body class="relative">
            <p class="text-muted">
              You will be signed out on this device. Unsaved work in
              <strong class="text-foreground">Acme Workspace</strong> may be lost unless it was
              saved to the cloud.
            </p>
          </div>
          <div av-alert-dialog-footer>
            <button av-button variant="tertiary" av-alert-dialog-close>Stay signed in</button>
            <button av-button av-alert-dialog-close>Sign out</button>
          </div>
        </div>
      </ng-template>
    </av-alert-dialog>`;

export const DEMO_NAME = 'alert-dialog-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-custom-styles-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogCustomStylesDemo {}`;

@Component({
  selector: 'app-alert-dialog-custom-styles-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogCustomStylesDemo {}
