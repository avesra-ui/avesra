import { Component, signal } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-2xl flex-col gap-8">
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">Using av-alert-dialog-close</h3>
        <p class="text-sm text-muted">
          The simplest way to close a dialog. Add <code>av-alert-dialog-close</code> to any button
          within the dialog. When clicked, it will automatically close the dialog.
        </p>
        <av-alert-dialog>
          <button av-button variant="secondary" av-alert-dialog-trigger>Open Dialog</button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="accent"></div>
                <h2 av-alert-dialog-heading>Using av-alert-dialog-close</h2>
              </div>
              <div av-alert-dialog-body>
                <p>
                  Click either button below - both have <code>av-alert-dialog-close</code> and will
                  close the dialog automatically.
                </p>
              </div>
              <div av-alert-dialog-footer>
                <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
                <button av-button av-alert-dialog-close>Confirm</button>
              </div>
            </div>
          </ng-template>
        </av-alert-dialog>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">Using imperative close</h3>
        <p class="text-sm text-muted">
          Drive visibility with <code>[(open)]</code> and call <code>close()</code> yourself. This
          gives you full control over when and how to close the dialog, allowing you to add custom
          logic before closing.
        </p>
        <av-alert-dialog [(open)]="imperativeOpen">
          <button av-button variant="secondary" av-alert-dialog-trigger>Open Dialog</button>
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="success"></div>
                <h2 av-alert-dialog-heading>Using imperative close</h2>
              </div>
              <div av-alert-dialog-body>
                <p>
                  The buttons below call <code>close()</code> on the host. You can add validation
                  or other logic before setting open to <code>false</code>.
                </p>
              </div>
              <div av-alert-dialog-footer>
                <button av-button variant="tertiary" (click)="close()">Cancel</button>
                <button av-button (click)="close()">Confirm</button>
              </div>
            </div>
          </ng-template>
        </av-alert-dialog>
      </div>
    </div>`;

export const DEMO_NAME = 'alert-dialog-close-methods';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-close-methods-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogCloseMethodsDemo {
  readonly imperativeOpen = signal(false);

  close(): void {
    this.imperativeOpen.set(false);
  }
}`;

@Component({
  selector: 'app-alert-dialog-close-methods-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogCloseMethodsDemo {
  readonly imperativeOpen = signal(false);

  close(): void {
    this.imperativeOpen.set(false);
  }
}
