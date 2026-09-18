import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-modal>
  <button av-button variant="secondary" av-modal-trigger>Open Modal</button>
  <ng-template avModalContent>
    <div av-modal-dialog class="sm:max-w-[360px]">
      <av-modal-close-trigger />
      <div av-modal-header>
        <div av-modal-icon class="bg-default text-foreground">
          <app-icon icon="solar:rocket-linear" size="20" />
        </div>
        <h2 av-modal-heading>Welcome to Avesra</h2>
      </div>
      <div av-modal-body>
        <p>
          A beautiful, fast, and modern Angular UI library for building accessible and
          customizable web applications with ease.
        </p>
      </div>
      <div av-modal-footer>
        <button av-button class="w-full" av-modal-close>Continue</button>
      </div>
    </div>
  </ng-template>
</av-modal>`;

export const DEMO_NAME = 'modal-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvModalImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-basic-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalBasicDemo {}`;

@Component({
  selector: 'app-modal-basic-demo',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalBasicDemo {}
