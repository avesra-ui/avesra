import { Component } from '@angular/core';

import { AvTypographyImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-xl flex-col gap-4">
  <h1 av-typography-heading>Dashboard</h1>
  <p av-typography-paragraph>
    Convenience primitives are thin wrappers over Typography.
  </p>
  <p av-typography-paragraph color="muted" size="sm">
    Paragraph supports base, sm, and xs sizes.
  </p>
  <code av-typography-code>av-typography-code</code>
</div>`;

export const DEMO_NAME = 'typography-primitives';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTypographyImports } from '@avesra/angular';

@Component({
  selector: 'app-typography-primitives-demo',
  imports: [AvTypographyImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TypographyPrimitivesDemo {}`;

@Component({
  selector: 'app-typography-primitives-demo',
  imports: [AvTypographyImports],
  template: DEMO_TEMPLATE,
})
export class TypographyPrimitivesDemo {}
