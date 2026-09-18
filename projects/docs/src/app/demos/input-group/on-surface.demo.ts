import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-surface class="rounded-2xl p-6">
      <div class="flex w-full max-w-72 flex-col gap-1">
        <label av-label for="ig-on-surface">Email address</label>
        <div av-input-group variant="secondary">
          <div av-input-group-prefix>
            <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
          </div>
          <input
            av-input-group-input
            id="ig-on-surface"
            type="email"
            placeholder="name&#64;email.com"
          />
        </div>
        <p av-description>We'll never share this with anyone else</p>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-on-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
  AvSurfaceComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-on-surface-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvSurfaceComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full items-center justify-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupOnSurfaceDemo {}`;

@Component({
  selector: 'app-input-group-on-surface-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvSurfaceComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full items-center justify-center' },
  template: DEMO_TEMPLATE,
})
export class InputGroupOnSurfaceDemo {}
