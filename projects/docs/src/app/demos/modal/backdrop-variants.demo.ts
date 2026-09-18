import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalBackdropVariant,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
  @for (variant of backdropVariants; track variant) {
    <av-modal [backdrop]="variant">
      <button av-button variant="secondary" av-modal-trigger>
        {{ variant | titlecase }}
      </button>
      <ng-template avModalContent>
        <div av-modal-dialog class="sm:max-w-[360px]">
          <av-modal-close-trigger />
          <div av-modal-header>
            <div av-modal-icon class="bg-default text-foreground">
              <app-icon icon="solar:rocket-linear" size="20" />
            </div>
            <h2 av-modal-heading>Backdrop: {{ variant | titlecase }}</h2>
          </div>
          <div av-modal-body>
            <p>
              This modal uses the <code>{{ variant }}</code> backdrop variant. Compare the
              different visual effects: opaque provides full opacity, blur adds a backdrop
              filter, and transparent removes the background.
            </p>
          </div>
          <div av-modal-footer>
            <button av-button class="w-full" av-modal-close>Continue</button>
          </div>
        </div>
      </ng-template>
    </av-modal>
  }
</div>`;

export const DEMO_NAME = 'modal-backdrop-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalBackdropVariant,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-backdrop-variants-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalBackdropVariantsDemo {
  readonly backdropVariants: readonly AvModalBackdropVariant[] = ['opaque', 'blur', 'transparent'];
}`;

@Component({
  selector: 'app-modal-backdrop-variants-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalBackdropVariantsDemo {
  readonly backdropVariants: readonly AvModalBackdropVariant[] = ['opaque', 'blur', 'transparent'];
}
