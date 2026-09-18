import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalPlacement,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
  @for (placement of placements; track placement) {
    <av-modal [placement]="placement">
      <button av-button variant="secondary" av-modal-trigger>
        {{ placement | titlecase }}
      </button>
      <ng-template avModalContent>
        <div av-modal-dialog class="sm:max-w-[360px]">
          <av-modal-close-trigger />
          <div av-modal-header>
            <div av-modal-icon class="bg-default text-foreground">
              <app-icon icon="solar:rocket-linear" size="20" />
            </div>
            <h2 av-modal-heading>Placement: {{ placement | titlecase }}</h2>
          </div>
          <div av-modal-body>
            <p>
              This modal uses the <code>{{ placement }}</code> placement option. Try different
              placements to see how the modal positions itself on the screen.
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

export const DEMO_NAME = 'modal-placements';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalPlacement,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-placements-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalPlacementsDemo {
  readonly placements: readonly AvModalPlacement[] = ['auto', 'top', 'center', 'bottom'];
}`;

@Component({
  selector: 'app-modal-placements-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalPlacementsDemo {
  readonly placements: readonly AvModalPlacement[] = ['auto', 'top', 'center', 'bottom'];
}
