import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<label av-label for="ig-icon-copy">Website</label>
    <div av-input-group>
      <div av-input-group-prefix>
        <app-icon icon="solar:global-linear" size="16" class="text-muted" />
      </div>
      <input av-input-group-input id="ig-icon-copy" value="avesraui.com" />
      <div av-input-group-suffix class="pr-0">
        <button
          av-button
          type="button"
          size="sm"
          variant="ghost"
          icon-only
          aria-label="Copy"
          (click)="copyWebsite()"
        >
          <app-icon icon="solar:copy-linear" size="16" />
        </button>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-with-icon-prefix-and-copy-suffix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-with-icon-prefix-and-copy-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithIconPrefixAndCopySuffixDemo {
  copyWebsite(): void {
    void navigator.clipboard?.writeText('avesraui.com');
  }
}`;

@Component({
  selector: 'app-input-group-with-icon-prefix-and-copy-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithIconPrefixAndCopySuffixDemo {
  copyWebsite(): void {
    void navigator.clipboard?.writeText('avesraui.com');
  }
}
