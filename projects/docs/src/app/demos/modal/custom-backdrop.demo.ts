import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-modal
  backdrop="blur"
  backdrop-class="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
>
  <button av-button variant="secondary" av-modal-trigger>Custom Backdrop</button>
  <ng-template avModalContent>
    <div av-modal-dialog class="sm:max-w-[360px]">
      <av-modal-close-trigger />
      <div av-modal-header class="items-center text-center">
        <div av-modal-icon class="bg-accent-soft text-accent-soft-foreground">
          <app-icon icon="solar:stars-linear" size="20" />
        </div>
        <h2 av-modal-heading>Premium Backdrop</h2>
      </div>
      <div av-modal-body>
        <p>
          This backdrop features a gradient that transitions from a dark color at the bottom to
          transparency at the top, combined with the blur variant. Utility classes passed through
          <code>backdrop-class</code> layer over the variant styles.
        </p>
      </div>
      <div av-modal-footer class="flex-col-reverse">
        <button av-button class="w-full" av-modal-close>Amazing!</button>
        <button av-button class="w-full" variant="secondary" av-modal-close>Close</button>
      </div>
    </div>
  </ng-template>
</av-modal>`;

export const DEMO_NAME = 'modal-custom-backdrop';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-custom-backdrop-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalCustomBackdropDemo {}`;

@Component({
  selector: 'app-modal-custom-backdrop-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalCustomBackdropDemo {}
