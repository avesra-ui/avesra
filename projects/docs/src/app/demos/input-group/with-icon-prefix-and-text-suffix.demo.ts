import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<label av-label for="ig-icon-text">Website</label>
    <div av-input-group>
      <div av-input-group-prefix>
        <app-icon icon="solar:global-linear" size="16" class="text-muted" />
      </div>
      <input av-input-group-input id="ig-icon-text" value="avesraui" />
      <div av-input-group-suffix>.com</div>
    </div>`;

export const DEMO_NAME = 'input-group-with-icon-prefix-and-text-suffix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-with-icon-prefix-and-text-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithIconPrefixAndTextSuffixDemo {}`;

@Component({
  selector: 'app-input-group-with-icon-prefix-and-text-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithIconPrefixAndTextSuffixDemo {}
