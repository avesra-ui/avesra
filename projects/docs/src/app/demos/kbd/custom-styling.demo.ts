import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<kbd av-kbd class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100">
  <span av-kbd-content>K</span>
</kbd>`;

export const DEMO_NAME = 'kbd-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

@Component({
  selector: 'app-kbd-custom-styling-demo',
  imports: [AvKbdImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class KbdCustomStylingDemo {}`;

@Component({
  selector: 'app-kbd-custom-styling-demo',
  imports: [AvKbdImports],
  template: DEMO_TEMPLATE,
})
export class KbdCustomStylingDemo {}
