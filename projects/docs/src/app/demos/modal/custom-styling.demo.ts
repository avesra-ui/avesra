import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-modal backdrop-class="bg-black/80" container-class="items-start pt-20">
  <button av-button variant="secondary" av-modal-trigger>Open Modal</button>
  <ng-template avModalContent>
    <div
      av-modal-dialog
      class="bg-linear-to-br from-accent to-accent-soft text-accent-foreground sm:max-w-[360px]"
    >
      <av-modal-close-trigger />
      <div av-modal-header>
        <h2 av-modal-heading>Custom Styled Modal</h2>
      </div>
      <div av-modal-body>
        <p>
          This modal has custom styling applied via <code>backdrop-class</code> and
          <code>container-class</code> on the root, plus utility classes on the dialog host.
        </p>
      </div>
      <div av-modal-footer>
        <button av-button av-modal-close>Close</button>
      </div>
    </div>
  </ng-template>
</av-modal>`;

export const DEMO_NAME = 'modal-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';

@Component({
  selector: 'app-modal-custom-styling-demo',
  imports: [
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalCustomStylingDemo {}`;

@Component({
  selector: 'app-modal-custom-styling-demo',
  imports: [
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalCustomStylingDemo {}
