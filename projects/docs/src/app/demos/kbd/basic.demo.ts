import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex items-center gap-4">
  <kbd av-kbd>
    <abbr av-kbd-abbr key-value="command"></abbr>
    <span av-kbd-content>K</span>
  </kbd>
  <kbd av-kbd>
    <abbr av-kbd-abbr key-value="shift"></abbr>
    <span av-kbd-content>P</span>
  </kbd>
  <kbd av-kbd>
    <abbr av-kbd-abbr key-value="ctrl"></abbr>
    <span av-kbd-content>C</span>
  </kbd>
  <kbd av-kbd>
    <abbr av-kbd-abbr key-value="option"></abbr>
    <span av-kbd-content>D</span>
  </kbd>
</div>`;

export const DEMO_NAME = 'kbd-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

@Component({
  selector: 'app-kbd-basic-demo',
  imports: [AvKbdImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class KbdBasicDemo {}`;

@Component({
  selector: 'app-kbd-basic-demo',
  imports: [AvKbdImports],
  template: DEMO_TEMPLATE,
})
export class KbdBasicDemo {}
