import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-modal>
  <div
    av-modal-trigger
    class="group flex max-w-xs cursor-pointer items-center gap-3 rounded-2xl bg-surface p-4 shadow-xs select-none hover:bg-surface-secondary"
  >
    <div
      class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-soft-foreground"
    >
      <app-icon icon="solar:settings-linear" size="24" />
    </div>
    <div class="flex flex-1 flex-col gap-0.5">
      <p class="text-sm font-semibold">Settings</p>
      <p class="text-xs text-muted">Manage your preferences</p>
    </div>
  </div>
  <ng-template avModalContent>
    <div av-modal-dialog class="sm:max-w-[360px]">
      <av-modal-close-trigger />
      <div av-modal-header>
        <div av-modal-icon class="bg-accent-soft text-accent-soft-foreground">
          <app-icon icon="solar:settings-linear" size="20" />
        </div>
        <h2 av-modal-heading>Settings</h2>
      </div>
      <div av-modal-body>
        <p>
          Use <code>av-modal-trigger</code> on any focusable element to create custom triggers
          beyond standard buttons. This example shows a card-style trigger with an icon and
          descriptive text.
        </p>
      </div>
      <div av-modal-footer>
        <button av-button variant="secondary" av-modal-close>Cancel</button>
        <button av-button av-modal-close>Save</button>
      </div>
    </div>
  </ng-template>
</av-modal>`;

export const DEMO_NAME = 'modal-custom-trigger';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-custom-trigger-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalCustomTriggerDemo {}`;

@Component({
  selector: 'app-modal-custom-trigger-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalCustomTriggerDemo {}
