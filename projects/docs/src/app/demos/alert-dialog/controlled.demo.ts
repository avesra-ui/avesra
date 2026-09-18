import { Component, signal } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col gap-8">
      <div class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold text-foreground">With signal()</h3>
        <p class="text-sm leading-relaxed text-pretty text-muted">
          Control the alert dialog using Angular's <code class="text-foreground">signal</code> for
          simple state management. Perfect for basic use cases.
        </p>
        <div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
          <div class="flex w-full items-center justify-between">
            <p class="text-xs text-muted">
              Status:
              <span class="font-mono font-medium text-foreground">
                {{ signalOpen() ? 'open' : 'closed' }}
              </span>
            </p>
          </div>
          <div class="flex gap-2">
            <button av-button size="sm" variant="secondary" (click)="openSignal()">
              Open Dialog
            </button>
            <button av-button size="sm" variant="tertiary" (click)="toggleSignal()">
              Toggle
            </button>
          </div>
        </div>

        <av-alert-dialog [(open)]="signalOpen">
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="accent"></div>
                <h2 av-alert-dialog-heading>Controlled with signal()</h2>
              </div>
              <div av-alert-dialog-body>
                <p>
                  This alert dialog is controlled by Angular's <code>signal</code>. Bind
                  <code>[(open)]</code> to manage the dialog state externally.
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

      <div class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold text-foreground">With open / close / toggle helpers</h3>
        <p class="text-sm leading-relaxed text-pretty text-muted">
          Wrap a signal with helper methods like <code class="text-foreground">open()</code>,
          <code>close()</code>, and <code>toggle()</code> for a cleaner imperative API.
        </p>
        <div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
          <div class="flex w-full items-center justify-between">
            <p class="text-xs text-muted">
              Status:
              <span class="font-mono font-medium text-foreground">
                {{ overlayOpen() ? 'open' : 'closed' }}
              </span>
            </p>
          </div>
          <div class="flex gap-2">
            <button av-button size="sm" variant="secondary" (click)="open()">Open Dialog</button>
            <button av-button size="sm" variant="tertiary" (click)="toggle()">Toggle</button>
          </div>
        </div>

        <av-alert-dialog [(open)]="overlayOpen">
          <ng-template avAlertDialogContent>
            <div av-alert-dialog-dialog class="sm:max-w-[400px]">
              <av-alert-dialog-close-trigger />
              <div av-alert-dialog-header>
                <div av-alert-dialog-icon status="success"></div>
                <h2 av-alert-dialog-heading>Controlled with helpers</h2>
              </div>
              <div av-alert-dialog-body>
                <p>
                  Dedicated methods for common operations — call <code>open()</code>,
                  <code>close()</code>, or <code>toggle()</code> without hand-writing signal
                  updates at every call site.
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
    </div>`;

export const DEMO_NAME = 'alert-dialog-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-alert-dialog-controlled-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogControlledDemo {
  readonly signalOpen = signal(false);
  readonly overlayOpen = signal(false);

  openSignal(): void {
    this.signalOpen.set(true);
  }

  toggleSignal(): void {
    this.signalOpen.update((value) => !value);
  }

  open(): void {
    this.overlayOpen.set(true);
  }

  close(): void {
    this.overlayOpen.set(false);
  }

  toggle(): void {
    this.overlayOpen.update((value) => !value);
  }
}`;

@Component({
  selector: 'app-alert-dialog-controlled-demo',
  imports: [
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogControlledDemo {
  readonly signalOpen = signal(false);
  readonly overlayOpen = signal(false);

  openSignal(): void {
    this.signalOpen.set(true);
  }

  toggleSignal(): void {
    this.signalOpen.update((value) => !value);
  }

  open(): void {
    this.overlayOpen.set(true);
  }

  close(): void {
    this.overlayOpen.set(false);
  }

  toggle(): void {
    this.overlayOpen.update((value) => !value);
  }
}
