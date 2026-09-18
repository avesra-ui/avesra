import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-alert-dialog>
      <div
        av-alert-dialog-trigger
        class="group flex max-w-xs items-center gap-3 rounded-2xl bg-surface p-4 shadow-sm select-none hover:bg-surface-secondary"
      >
        <div
          class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-danger-soft text-danger-soft-foreground"
        >
          <app-icon icon="solar:trash-bin-trash-linear" size="24" />
        </div>
        <div class="flex flex-1 flex-col gap-0.5">
          <p class="text-sm font-semibold">Delete Item</p>
          <p class="text-xs text-muted">Permanently remove this item</p>
        </div>
      </div>
      <ng-template avAlertDialogContent>
        <div av-alert-dialog-dialog class="sm:max-w-[400px]">
          <av-alert-dialog-close-trigger />
          <div av-alert-dialog-header>
            <div av-alert-dialog-icon status="danger">
              <app-icon icon="solar:trash-bin-trash-linear" size="20" />
            </div>
            <h2 av-alert-dialog-heading>Delete this item?</h2>
          </div>
          <div av-alert-dialog-body>
            <p>
              Use <code>av-alert-dialog-trigger</code> to create custom trigger elements beyond
              standard buttons. This example shows a card-style trigger with icons and descriptive
              text.
            </p>
          </div>
          <div av-alert-dialog-footer>
            <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
            <button av-button variant="danger" av-alert-dialog-close>Delete Item</button>
          </div>
        </div>
      </ng-template>
    </av-alert-dialog>`;

export const DEMO_NAME = 'alert-dialog-custom-trigger';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-alert-dialog-custom-trigger-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogCustomTriggerDemo {}`;

@Component({
  selector: 'app-alert-dialog-custom-trigger-demo',
  imports: [
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogCustomTriggerDemo {}
