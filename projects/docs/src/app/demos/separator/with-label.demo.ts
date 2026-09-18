import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="max-w-md space-y-6">
  <div av-separator-container>
    <div av-separator-line></div>
    <span av-separator-content>OR</span>
    <div av-separator-line></div>
  </div>

  <div av-separator-container orientation="vertical" class="mx-auto h-24">
    <div av-separator-line></div>
    <span av-separator-content>OR</span>
    <div av-separator-line></div>
  </div>
</div>`;

export const DEMO_NAME = 'separator-with-label';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSeparatorImports } from '@avesra/angular';

@Component({
  selector: 'app-separator-with-label-demo',
  imports: [AvSeparatorImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SeparatorWithLabelDemo {}`;

@Component({
  selector: 'app-separator-with-label-demo',
  imports: [AvSeparatorImports],
  template: DEMO_TEMPLATE,
})
export class SeparatorWithLabelDemo {}
