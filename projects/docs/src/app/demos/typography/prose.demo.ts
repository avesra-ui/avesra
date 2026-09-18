import { Component } from '@angular/core';

import { AvTypographyImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-typography-prose class="flex max-w-xl flex-col gap-3">
  <h1>Prose title</h1>
  <p>Prose styles nested semantic HTML without av-typography on each child.</p>
  <h2>Section title</h2>
  <p>Inline code like <code>render</code> receives code treatment.</p>
</div>`;

export const DEMO_NAME = 'typography-prose';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTypographyImports } from '@avesra/angular';

@Component({
  selector: 'app-typography-prose-demo',
  imports: [AvTypographyImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TypographyProseDemo {}`;

@Component({
  selector: 'app-typography-prose-demo',
  imports: [AvTypographyImports],
  template: DEMO_TEMPLATE,
})
export class TypographyProseDemo {}
