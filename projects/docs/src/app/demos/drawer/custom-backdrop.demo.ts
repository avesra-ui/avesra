import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-drawer
  placement="right"
  backdrop="blur"
  backdrop-class="bg-linear-to-l from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
>
  <button av-button variant="secondary" av-drawer-trigger>Custom Backdrop</button>
  <ng-template avDrawerContent>
    <div av-drawer-dialog>
      <av-drawer-close-trigger />
      <div av-drawer-header>
        <h2 av-drawer-heading class="flex items-center gap-2">
          <app-icon class="text-accent" icon="solar:stars-linear" size="20" />
          Premium Backdrop
        </h2>
      </div>
      <div av-drawer-body>
        <p>
          This backdrop features a horizontal gradient that transitions from a dark color at the
          right edge to transparency, combined with the blur variant. Utility classes passed through
          <code>backdrop-class</code> layer over the variant styles.
        </p>
      </div>
      <div av-drawer-footer class="flex-col-reverse sm:flex-row">
        <button av-button class="w-full" variant="secondary" av-drawer-close>Close</button>
        <button av-button class="w-full" av-drawer-close>Amazing!</button>
      </div>
    </div>
  </ng-template>
</av-drawer>`;

export const DEMO_NAME = 'drawer-custom-backdrop';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDrawerImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-drawer-custom-backdrop-demo',
  imports: [
    AppIconComponent,
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerCustomBackdropDemo {}`;

@Component({
  selector: 'app-drawer-custom-backdrop-demo',
  imports: [
    AppIconComponent,
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class DrawerCustomBackdropDemo {}
