import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<label av-label for="ig-prefix-icon">Email address</label>
    <div av-input-group>
      <div av-input-group-prefix>
        <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
      </div>
      <input
        av-input-group-input
        id="ig-prefix-icon"
        type="email"
        placeholder="name&#64;email.com"
      />
    </div>
    <p av-description>We'll never share this with anyone else</p>`;

export const DEMO_NAME = 'input-group-with-prefix-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-with-prefix-icon-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithPrefixIconDemo {}`;

@Component({
  selector: 'app-input-group-with-prefix-icon-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithPrefixIconDemo {}
