import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col items-center gap-3">
  <div>Default Variant</div>
  <hr av-separator variant="default" />
  <div>Secondary Variant</div>
  <hr av-separator variant="secondary" />
  <div>Tertiary Variant</div>
  <hr av-separator variant="tertiary" />
</div>`;

export const DEMO_NAME = 'separator-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

@Component({
  selector: 'app-separator-variants-demo',
  imports: [AvSeparatorImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SeparatorVariantsDemo {}`;

@Component({
  selector: 'app-separator-variants-demo',
  imports: [AvSeparatorImports],
  template: DEMO_TEMPLATE,
})
export class SeparatorVariantsDemo {}
