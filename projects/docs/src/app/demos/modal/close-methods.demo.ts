import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex max-w-2xl flex-col gap-8">
  <div class="flex flex-col gap-2">
    <h3 class="text-lg font-semibold">Using av-modal-close</h3>
    <p class="text-sm text-muted">
      The simplest way to close a modal. Add <code>av-modal-close</code> to any interactive element
      inside the overlay. When clicked, it closes the modal.
    </p>
    <av-modal>
      <button av-button variant="secondary" av-modal-trigger>Open Modal</button>
      <ng-template avModalContent>
        <div av-modal-dialog class="sm:max-w-[360px]">
          <div av-modal-header>
            <div av-modal-icon class="bg-accent-soft text-accent-soft-foreground">
              <app-icon icon="solar:info-circle-linear" size="20" />
            </div>
            <h2 av-modal-heading>Using av-modal-close</h2>
          </div>
          <div av-modal-body>
            <p>
              Click either button below — both have <code>av-modal-close</code> and will close
              the modal automatically.
            </p>
          </div>
          <div av-modal-footer>
            <button av-button variant="secondary" av-modal-close>Cancel</button>
            <button av-button av-modal-close>Confirm</button>
          </div>
        </div>
      </ng-template>
    </av-modal>
  </div>

  <div class="flex flex-col gap-2">
    <h3 class="text-lg font-semibold">Using [(open)]</h3>
    <p class="text-sm text-muted">
      Drive close from your component by setting <code>open</code> to <code>false</code>. Useful
      when you need validation or other logic before dismissing.
    </p>
    <av-modal [(open)]="programmaticOpen">
      <button av-button variant="secondary" av-modal-trigger>Open Modal</button>
      <ng-template avModalContent>
        <div av-modal-dialog class="sm:max-w-[360px]">
          <div av-modal-header>
            <div av-modal-icon class="bg-success-soft text-success-soft-foreground">
              <app-icon icon="solar:check-circle-linear" size="20" />
            </div>
            <h2 av-modal-heading>Using [(open)]</h2>
          </div>
          <div av-modal-body>
            <p>
              The buttons below call <code>closeProgrammatic()</code>, which sets
              <code>open</code> to <code>false</code> after optional custom logic.
            </p>
          </div>
          <div av-modal-footer>
            <button av-button variant="secondary" (click)="closeProgrammatic()">Cancel</button>
            <button av-button (click)="closeProgrammatic()">Confirm</button>
          </div>
        </div>
      </ng-template>
    </av-modal>
  </div>
</div>`;

export const DEMO_NAME = 'modal-close-methods';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-close-methods-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalCloseMethodsDemo {
  readonly programmaticOpen = signal(false);

  closeProgrammatic(): void {
    this.programmaticOpen.set(false);
  }
}`;

@Component({
  selector: 'app-modal-close-methods-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalCloseMethodsDemo {
  readonly programmaticOpen = signal(false);

  closeProgrammatic(): void {
    this.programmaticOpen.set(false);
  }
}
