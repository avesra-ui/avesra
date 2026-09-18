import { Component } from '@angular/core';

import { AvChipImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-wrap items-center gap-3">
      <span av-chip label="Default"></span>
      <span av-chip color="accent" label="Accent"></span>
      <span av-chip color="success" label="Success"></span>
      <span av-chip color="warning" label="Warning"></span>
      <span av-chip color="danger" label="Danger"></span>
    </div>`;

export const DEMO_NAME = 'chip-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvChipImports } from '@avesra/angular';

@Component({
  selector: 'app-chip-basic-demo',
  imports: [AvChipImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ChipBasicDemo {}`;

@Component({
  selector: 'app-chip-basic-demo',
  imports: [AvChipImports],
  template: DEMO_TEMPLATE,
})
export class ChipBasicDemo {}
