import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-1">
      <label av-label for="ig-primary">Primary variant</label>
      <div av-input-group variant="primary">
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-primary"
          placeholder="name&#64;email.com"
        />
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label av-label for="ig-secondary">Secondary variant</label>
      <div av-input-group variant="secondary">
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-secondary"
          placeholder="name&#64;email.com"
        />
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-variants-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupVariantsDemo {}`;

@Component({
  selector: 'app-input-group-variants-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class InputGroupVariantsDemo {}
