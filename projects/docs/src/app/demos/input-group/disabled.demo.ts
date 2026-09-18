import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-1">
      <label av-label for="ig-disabled-email" disabled>Email address</label>
      <div av-input-group disabled>
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-disabled-email"
          type="email"
          value="name&#64;email.com"
        />
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label av-label for="ig-disabled-price" disabled>Set a price</label>
      <div av-input-group disabled>
        <div av-input-group-prefix>$</div>
        <input av-input-group-input id="ig-disabled-price" type="number" value="10" />
        <div av-input-group-suffix>USD</div>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-disabled-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: \`<div class="flex flex-col gap-1">
      <label av-label for="ig-disabled-email" disabled>Email address</label>
      <div av-input-group disabled>
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-disabled-email"
          type="email"
          value="name&#64;email.com"
        />
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label av-label for="ig-disabled-price" disabled>Set a price</label>
      <div av-input-group disabled>
        <div av-input-group-prefix>\$</div>
        <input av-input-group-input id="ig-disabled-price" type="number" value="10" />
        <div av-input-group-suffix>USD</div>
      </div>
    </div>\`,
})
export class InputGroupDisabledDemo {}`;

@Component({
  selector: 'app-input-group-disabled-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class InputGroupDisabledDemo {}
