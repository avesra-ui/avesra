import { Component } from '@angular/core';

import { AvTypographyImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col gap-2 rounded-xl border border-border/80 bg-surface-secondary p-4">
  <p av-typography type="body-xs" class="text-xs font-medium tracking-wide text-accent uppercase">Changelog</p>
  <h4 av-typography type="h4" class="font-semibold tracking-tight text-foreground">Faster search results</h4>
  <p av-typography type="body-sm" class="text-sm leading-relaxed text-muted">Queries now return in under 200ms…</p>
</div>`;

export const DEMO_NAME = 'typography-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTypographyImports } from '@avesra/angular';

@Component({
  selector: 'app-typography-custom-styles-demo',
  imports: [AvTypographyImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TypographyCustomStylesDemo {}`;

@Component({
  selector: 'app-typography-custom-styles-demo',
  imports: [AvTypographyImports],
  template: DEMO_TEMPLATE,
})
export class TypographyCustomStylesDemo {}
