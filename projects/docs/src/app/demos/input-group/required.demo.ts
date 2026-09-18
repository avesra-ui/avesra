import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-1">
      <label av-label for="ig-required-email" required>Email address</label>
      <div av-input-group>
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-required-email"
          type="email"
          placeholder="name&#64;email.com"
          required
        />
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label av-label for="ig-required-price" required>Set a price</label>
      <div av-input-group>
        <div av-input-group-prefix>$</div>
        <input
          av-input-group-input
          id="ig-required-price"
          type="number"
          placeholder="0"
          required
        />
        <div av-input-group-suffix>USD</div>
      </div>
      <p av-description>What customers would pay</p>
    </div>`;

export const DEMO_NAME = 'input-group-required';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-required-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: \`<div class="flex flex-col gap-1">
      <label av-label for="ig-required-email" required>Email address</label>
      <div av-input-group>
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-required-email"
          type="email"
          placeholder="name&#64;email.com"
          required
        />
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label av-label for="ig-required-price" required>Set a price</label>
      <div av-input-group>
        <div av-input-group-prefix>\$</div>
        <input
          av-input-group-input
          id="ig-required-price"
          type="number"
          placeholder="0"
          required
        />
        <div av-input-group-suffix>USD</div>
      </div>
      <p av-description>What customers would pay</p>
    </div>\`,
})
export class InputGroupRequiredDemo {}`;

@Component({
  selector: 'app-input-group-required-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class InputGroupRequiredDemo {}
