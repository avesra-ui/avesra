import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col gap-3">
  <p class="text-sm text-muted">
    Control the modal with a signal and <code>[(open)]</code> on <code>av-modal</code>.
  </p>
  <div class="flex flex-col items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
    <p class="text-xs text-muted">
      Status:
      <span class="font-mono font-medium text-foreground">
        {{ open() ? 'open' : 'closed' }}
      </span>
    </p>
    <div class="flex gap-2">
      <button av-button size="sm" variant="secondary" (click)="openModal()">Open Modal</button>
      <button av-button size="sm" variant="tertiary" (click)="toggle()">Toggle</button>
    </div>
  </div>

  <av-modal [(open)]="open">
    <ng-template avModalContent>
      <div av-modal-dialog class="sm:max-w-[360px]">
        <av-modal-close-trigger />
        <div av-modal-header>
          <div av-modal-icon class="bg-accent-soft text-accent-soft-foreground">
            <app-icon icon="solar:check-circle-linear" size="20" />
          </div>
          <h2 av-modal-heading>Controlled with [(open)]</h2>
        </div>
        <div av-modal-body>
          <p>
            This modal is controlled by a signal. Bind <code>[(open)]</code> to manage visibility
            from outside the overlay tree.
          </p>
        </div>
        <div av-modal-footer>
          <button av-button variant="secondary" av-modal-close>Cancel</button>
          <button av-button av-modal-close>Confirm</button>
        </div>
      </div>
    </ng-template>
  </av-modal>
</div>`;

export const DEMO_NAME = 'modal-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-controlled-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalControlledDemo {
  readonly open = signal(false);

  openModal(): void {
    this.open.set(true);
  }

  toggle(): void {
    this.open.update((value) => !value);
  }
}`;

@Component({
  selector: 'app-modal-controlled-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalControlledDemo {
  readonly open = signal(false);

  openModal(): void {
    this.open.set(true);
  }

  toggle(): void {
    this.open.update((value) => !value);
  }
}
