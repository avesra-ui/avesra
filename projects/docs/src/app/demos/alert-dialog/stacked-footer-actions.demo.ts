import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-alert-dialog backdrop="blur">
      <button av-button variant="secondary" av-alert-dialog-trigger>Premium offer</button>
      <ng-template avAlertDialogContent>
        <div av-alert-dialog-dialog class="sm:max-w-[360px]">
          <div av-alert-dialog-header class="items-center text-center">
            <div av-alert-dialog-icon status="accent">✨</div>
            <h2 av-alert-dialog-heading>Upgrade to Pro</h2>
          </div>
          <div av-alert-dialog-body class="text-center">
            <p>Unlock advanced components, themes, and priority support.</p>
          </div>
          <div av-alert-dialog-footer class="flex-col-reverse">
            <button av-button class="w-full" av-alert-dialog-close>Upgrade now</button>
            <button av-button class="w-full" variant="tertiary" av-alert-dialog-close>
              Maybe later
            </button>
          </div>
          <av-alert-dialog-close-trigger />
        </div>
      </ng-template>
    </av-alert-dialog>`;

export const DEMO_NAME = 'alert-dialog-stacked-footer-actions';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-stacked-footer-actions-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogStackedFooterActionsDemo {}`;

@Component({
  selector: 'app-alert-dialog-stacked-footer-actions-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogStackedFooterActionsDemo {}
