import { Component, signal } from '@angular/core';

import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col gap-8">
      <div class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold text-foreground">With signal()</h3>
        <p class="text-sm leading-relaxed text-pretty text-muted">
          Control the drawer using Angular's <code class="text-foreground">signal</code> and
          <code class="text-foreground">[(open)]</code> for simple state management.
        </p>
        <div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
          <div class="flex w-full items-center justify-between">
            <p class="text-xs text-muted">
              Status:
              <span class="font-mono font-medium text-foreground">
                {{ isOpen() ? 'open' : 'closed' }}
              </span>
            </p>
          </div>
          <div class="flex gap-2">
            <button av-button size="sm" variant="secondary" type="button" (click)="openSignal()">
              Open Drawer
            </button>
            <button av-button size="sm" variant="tertiary" type="button" (click)="toggleSignal()">
              Toggle
            </button>
          </div>
        </div>

        <av-drawer [(open)]="isOpen" placement="right">
          <ng-template avDrawerContent>
            <div av-drawer-dialog>
              <av-drawer-close-trigger />
              <div av-drawer-header>
                <h2 av-drawer-heading>Controlled with signal()</h2>
              </div>
              <div av-drawer-body>
                <p>
                  This drawer is controlled by Angular's <code>signal</code>. Bind
                  <code>[(open)]</code> to manage the drawer state externally.
                </p>
              </div>
              <div av-drawer-footer>
                <button av-button variant="secondary" av-drawer-close>Close</button>
              </div>
            </div>
          </ng-template>
        </av-drawer>
      </div>

      <div class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold text-foreground">With open() / toggle()</h3>
        <p class="text-sm leading-relaxed text-pretty text-muted">
          Wrap a signal with helper methods for a cleaner API —
          <code class="text-foreground">open()</code>, <code class="text-foreground">close()</code>,
          and <code class="text-foreground">toggle()</code>.
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
            <button av-button size="sm" variant="secondary" type="button" (click)="openOverlay()">
              Open Drawer
            </button>
            <button av-button size="sm" variant="tertiary" type="button" (click)="toggleOverlay()">
              Toggle
            </button>
          </div>
        </div>

        <av-drawer [(open)]="overlayOpen" placement="right">
          <ng-template avDrawerContent>
            <div av-drawer-dialog>
              <av-drawer-close-trigger />
              <div av-drawer-header>
                <h2 av-drawer-heading>Controlled with open() / toggle()</h2>
              </div>
              <div av-drawer-body>
                <p>
                  Dedicated methods keep callers simple — use <code>open()</code>,
                  <code>close()</code>, or <code>toggle()</code> instead of updating the signal
                  inline.
                </p>
              </div>
              <div av-drawer-footer>
                <button av-button variant="secondary" av-drawer-close>Close</button>
              </div>
            </div>
          </ng-template>
        </av-drawer>
      </div>
    </div>`;

export const DEMO_NAME = 'drawer-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';

@Component({
  selector: 'app-drawer-controlled-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerControlledDemo {
  readonly isOpen = signal(false);
  readonly overlayOpen = signal(false);

  openSignal(): void {
    this.isOpen.set(true);
  }

  toggleSignal(): void {
    this.isOpen.update((value) => !value);
  }

  openOverlay(): void {
    this.overlayOpen.set(true);
  }

  toggleOverlay(): void {
    this.overlayOpen.update((value) => !value);
  }
}`;

@Component({
  selector: 'app-drawer-controlled-demo',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerControlledDemo {
  readonly isOpen = signal(false);
  readonly overlayOpen = signal(false);

  openSignal(): void {
    this.isOpen.set(true);
  }

  toggleSignal(): void {
    this.isOpen.update((value) => !value);
  }

  openOverlay(): void {
    this.overlayOpen.set(true);
  }

  toggleOverlay(): void {
    this.overlayOpen.update((value) => !value);
  }
}
