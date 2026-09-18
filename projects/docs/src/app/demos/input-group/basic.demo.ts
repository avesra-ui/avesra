import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<label av-label for="ig-email">Email address</label>
    <div av-input-group>
      <div av-input-group-prefix>
        <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
      </div>
      <input
        av-input-group-input
        id="ig-email"
        type="email"
        placeholder="name&#64;email.com"
      />
    </div>`;

export const DEMO_NAME = 'input-group-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-basic-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupBasicDemo {}`;

@Component({
  selector: 'app-input-group-basic-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupBasicDemo {}
