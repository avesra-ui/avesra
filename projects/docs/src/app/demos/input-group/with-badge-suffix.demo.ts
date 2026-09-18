import { Component } from '@angular/core';
import {
  AvChipImports,
  AvInputGroupImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-input-group>
      <input
        av-input-group-input
        placeholder="Email address"
        aria-label="Email address"
      />
      <div av-input-group-suffix class="pr-2">
        <span av-chip color="accent" size="md" variant="soft" label="Pro"></span>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-with-badge-suffix';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvChipImports,
  AvInputGroupImports,
} from '@avesra/angular';

@Component({
  selector: 'app-input-group-with-badge-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvChipImports,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithBadgeSuffixDemo {}`;

@Component({
  selector: 'app-input-group-with-badge-suffix-demo',
  imports: [
    AvInputGroupImports,
    AvChipImports,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithBadgeSuffixDemo {}
