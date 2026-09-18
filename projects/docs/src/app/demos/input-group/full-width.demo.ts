import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex w-full flex-col gap-1">
      <label av-label for="ig-fw-email">Email address</label>
      <div av-input-group full-width>
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-fw-email"
          type="email"
          placeholder="name&#64;email.com"
        />
      </div>
    </div>

    <div class="flex w-full flex-col gap-1">
      <label av-label for="ig-fw-password">Password</label>
      <div av-input-group full-width>
        <input
          av-input-group-input
          id="ig-fw-password"
          type="password"
          placeholder="Enter password"
        />
        <div av-input-group-suffix>
          <app-icon icon="solar:eye-linear" size="16" class="text-muted" />
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-full-width';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-full-width-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-sm flex-col gap-4' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupFullWidthDemo {}`;

@Component({
  selector: 'app-input-group-full-width-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-sm flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class InputGroupFullWidthDemo {}
