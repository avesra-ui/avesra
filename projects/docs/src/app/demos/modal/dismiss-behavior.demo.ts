import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex max-w-sm flex-col gap-6">
  <div class="flex flex-col gap-2">
    <h3 class="text-lg font-semibold">dismissable</h3>
    <p class="text-sm text-muted">
      Controls whether the modal can be dismissed by clicking the overlay backdrop. Defaults to
      <code>true</code>. Set to <code>false</code> to require an explicit close action.
    </p>
    <av-modal [dismissable]="false">
      <button av-button variant="secondary" av-modal-trigger>Open Modal</button>
      <ng-template avModalContent>
        <div av-modal-dialog class="sm:max-w-[360px]">
          <av-modal-close-trigger />
          <div av-modal-header>
            <div av-modal-icon class="bg-default text-foreground">
              <app-icon icon="solar:info-circle-linear" size="20" />
            </div>
            <h2 av-modal-heading>dismissable = false</h2>
            <p class="text-sm leading-5 text-muted">Clicking the backdrop won't close this modal</p>
          </div>
          <div av-modal-body>
            <p>
              Try clicking outside this modal on the overlay — it won't close. Use the close
              button or press Escape to dismiss it.
            </p>
          </div>
          <div av-modal-footer>
            <button av-button class="w-full" av-modal-close>Close</button>
          </div>
        </div>
      </ng-template>
    </av-modal>
  </div>

  <div class="flex flex-col gap-2">
    <h3 class="text-lg font-semibold">keyboard-dismiss-disabled</h3>
    <p class="text-sm text-muted">
      When set, the Escape key will not close the modal. Users must use an explicit close action or
      the backdrop (when dismissable).
    </p>
    <av-modal keyboard-dismiss-disabled>
      <button av-button variant="secondary" av-modal-trigger>Open Modal</button>
      <ng-template avModalContent>
        <div av-modal-dialog class="sm:max-w-[360px]">
          <av-modal-close-trigger />
          <div av-modal-header>
            <div av-modal-icon class="bg-default text-foreground">
              <app-icon icon="solar:info-circle-linear" size="20" />
            </div>
            <h2 av-modal-heading>keyboard-dismiss-disabled</h2>
            <p class="text-sm leading-5 text-muted">Escape key is disabled</p>
          </div>
          <div av-modal-body>
            <p>
              Press Escape — nothing happens. Use the close button or click the overlay backdrop
              to dismiss this modal.
            </p>
          </div>
          <div av-modal-footer>
            <button av-button class="w-full" av-modal-close>Close</button>
          </div>
        </div>
      </ng-template>
    </av-modal>
  </div>
</div>`;

export const DEMO_NAME = 'modal-dismiss-behavior';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-dismiss-behavior-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalDismissBehaviorDemo {}`;

@Component({
  selector: 'app-modal-dismiss-behavior-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalDismissBehaviorDemo {}
