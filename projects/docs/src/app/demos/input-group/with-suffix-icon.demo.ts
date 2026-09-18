import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<label av-label for="ig-suffix-icon">Email address</label>
    <div av-input-group>
      <input
        av-input-group-input
        id="ig-suffix-icon"
        type="email"
        placeholder="name&#64;email.com"
      />
      <div av-input-group-suffix>
        <app-icon icon="solar:letter-linear" size="16" class="text-muted" />
      </div>
    </div>
    <p av-description>We don't send spam</p>`;

export const DEMO_NAME = 'input-group-with-suffix-icon';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvDescriptionComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-with-suffix-icon-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithSuffixIconDemo {}`;

@Component({
  selector: 'app-input-group-with-suffix-icon-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithSuffixIconDemo {}
