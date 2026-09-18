import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalSize,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-4">
  @for (size of sizes; track size) {
    <av-modal [size]="size">
      <button av-button variant="secondary" av-modal-trigger>
        {{ size | titlecase }}
      </button>
      <ng-template avModalContent>
        <div av-modal-dialog>
          <av-modal-close-trigger />
          <div av-modal-header>
            <div av-modal-icon class="bg-default text-foreground">
              <app-icon icon="solar:rocket-linear" size="20" />
            </div>
            <h2 av-modal-heading>Size: {{ size | titlecase }}</h2>
          </div>
          <div av-modal-body>
            <p>{{ sizeDescription(size) }}</p>
          </div>
          <div av-modal-footer>
            <button av-button variant="secondary" av-modal-close>Cancel</button>
            <button av-button av-modal-close>Confirm</button>
          </div>
        </div>
      </ng-template>
    </av-modal>
  }
</div>`;

export const DEMO_NAME = 'modal-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  AvButtonComponent,
  AvModalImports,
  type AvModalSize,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-modal-sizes-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalSizesDemo {
  readonly sizes: readonly AvModalSize[] = ['xs', 'sm', 'md', 'lg', 'cover', 'full'];

  sizeDescription(size: AvModalSize): string {
    switch (size) {
      case 'cover':
        return 'This modal uses the cover size variant. It spans the full screen with margins, keeping rounded corners and standard padding.';
      case 'full':
        return 'This modal uses the full size variant. It occupies the entire viewport without margins, rounded corners, or shadows.';
      default:
        return \`This modal uses the \${size} size variant. On mobile, sizes adapt to near full-width; on desktop each size has a different max-width.\`;
    }
  }
}`;

@Component({
  selector: 'app-modal-sizes-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ModalSizesDemo {
  readonly sizes: readonly AvModalSize[] = ['xs', 'sm', 'md', 'lg', 'cover', 'full'];

  sizeDescription(size: AvModalSize): string {
    switch (size) {
      case 'cover':
        return 'This modal uses the cover size variant. It spans the full screen with margins, keeping rounded corners and standard padding.';
      case 'full':
        return 'This modal uses the full size variant. It occupies the entire viewport without margins, rounded corners, or shadows.';
      default:
        return `This modal uses the ${size} size variant. On mobile, sizes adapt to near full-width; on desktop each size has a different max-width.`;
    }
  }
}
