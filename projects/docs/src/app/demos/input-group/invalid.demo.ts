import { Component } from '@angular/core';
import {
  AvFieldErrorComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-1">
      <label av-label for="ig-invalid-email" required invalid>Email address</label>
      <div av-input-group invalid>
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-invalid-email"
          type="email"
          placeholder="name&#64;email.com"
          required
        />
      </div>
      <p av-field-error [visible]="true">Please enter a valid email address</p>
    </div>

    <div class="flex flex-col gap-1">
      <label av-label for="ig-invalid-price" required invalid>Set a price</label>
      <div av-input-group invalid>
        <div av-input-group-prefix>$</div>
        <input
          av-input-group-input
          id="ig-invalid-price"
          type="number"
          placeholder="0"
          required
        />
        <div av-input-group-suffix>USD</div>
      </div>
      <p av-field-error [visible]="true">Price must be greater than 0</p>
    </div>`;

export const DEMO_NAME = 'input-group-invalid';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvFieldErrorComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-invalid-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvFieldErrorComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: \`<div class="flex flex-col gap-1">
      <label av-label for="ig-invalid-email" required invalid>Email address</label>
      <div av-input-group invalid>
        <div av-input-group-prefix>
          <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
        </div>
        <input
          av-input-group-input
          id="ig-invalid-email"
          type="email"
          placeholder="name&#64;email.com"
          required
        />
      </div>
      <p av-field-error [visible]="true">Please enter a valid email address</p>
    </div>

    <div class="flex flex-col gap-1">
      <label av-label for="ig-invalid-price" required invalid>Set a price</label>
      <div av-input-group invalid>
        <div av-input-group-prefix>\$</div>
        <input
          av-input-group-input
          id="ig-invalid-price"
          type="number"
          placeholder="0"
          required
        />
        <div av-input-group-suffix>USD</div>
      </div>
      <p av-field-error [visible]="true">Price must be greater than 0</p>
    </div>\`,
})
export class InputGroupInvalidDemo {}`;

@Component({
  selector: 'app-input-group-invalid-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvFieldErrorComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-4' },
  template: DEMO_TEMPLATE,
})
export class InputGroupInvalidDemo {}
