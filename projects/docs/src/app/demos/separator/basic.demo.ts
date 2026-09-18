import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="max-w-md">
  <div class="space-y-1">
    <h4 class="text-sm font-medium text-foreground">Avesra Components</h4>
    <p class="text-sm text-muted">Beautiful, fast and modern Angular UI library.</p>
  </div>
  <hr av-separator class="my-4" />
  <div class="flex h-5 items-center gap-4 text-sm">
    <span>Blog</span>
    <div av-separator orientation="vertical"></div>
    <span>Docs</span>
    <div av-separator orientation="vertical"></div>
    <span>Source</span>
  </div>
</div>`;

export const DEMO_NAME = 'separator-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

@Component({
  selector: 'app-separator-basic-demo',
  imports: [AvSeparatorImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SeparatorBasicDemo {}`;

@Component({
  selector: 'app-separator-basic-demo',
  imports: [AvSeparatorImports],
  template: DEMO_TEMPLATE,
})
export class SeparatorBasicDemo {}
