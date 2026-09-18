import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex h-5 items-center gap-4 text-sm">
  <span>Blog</span>
  <div av-separator orientation="vertical"></div>
  <span>Docs</span>
  <div av-separator orientation="vertical"></div>
  <span>Source</span>
</div>`;

export const DEMO_NAME = 'separator-vertical';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

@Component({
  selector: 'app-separator-vertical-demo',
  imports: [AvSeparatorImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SeparatorVerticalDemo {}`;

@Component({
  selector: 'app-separator-vertical-demo',
  imports: [AvSeparatorImports],
  template: DEMO_TEMPLATE,
})
export class SeparatorVerticalDemo {}
