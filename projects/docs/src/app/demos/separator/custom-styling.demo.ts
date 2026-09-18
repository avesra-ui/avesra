import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="max-w-md">
  <div class="space-y-1">
    <h4 class="text-sm font-medium text-foreground">Custom Separator</h4>
    <p class="text-sm text-muted">Pass Tailwind utilities on the host element.</p>
  </div>
  <hr
    av-separator
    class="my-8 h-0.5 bg-linear-to-r from-transparent via-accent to-transparent"
  />
</div>`;

export const DEMO_NAME = 'separator-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

@Component({
  selector: 'app-separator-custom-styling-demo',
  imports: [AvSeparatorImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SeparatorCustomStylingDemo {}`;

@Component({
  selector: 'app-separator-custom-styling-demo',
  imports: [AvSeparatorImports],
  template: DEMO_TEMPLATE,
})
export class SeparatorCustomStylingDemo {}
