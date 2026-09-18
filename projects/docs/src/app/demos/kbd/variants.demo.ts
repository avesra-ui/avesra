import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <span>Copy:</span>
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>C</span>
    </kbd>
    <kbd av-kbd variant="light">
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>C</span>
    </kbd>
  </div>
  <div class="flex items-center gap-2">
    <span>Paste:</span>
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>V</span>
    </kbd>
    <kbd av-kbd variant="light">
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>V</span>
    </kbd>
  </div>
  <div class="flex items-center gap-2">
    <span>Cut:</span>
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>X</span>
    </kbd>
    <kbd av-kbd variant="light">
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>X</span>
    </kbd>
  </div>
  <div class="flex items-center gap-2">
    <span>Undo:</span>
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>Z</span>
    </kbd>
    <kbd av-kbd variant="light">
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>Z</span>
    </kbd>
  </div>
  <div class="flex items-center gap-2">
    <span>Redo:</span>
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="command"></abbr>
      <abbr av-kbd-abbr key-value="shift"></abbr>
      <span av-kbd-content>Z</span>
    </kbd>
    <kbd av-kbd variant="light">
      <abbr av-kbd-abbr key-value="command"></abbr>
      <abbr av-kbd-abbr key-value="shift"></abbr>
      <span av-kbd-content>Z</span>
    </kbd>
  </div>
</div>`;

export const DEMO_NAME = 'kbd-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

@Component({
  selector: 'app-kbd-variants-demo',
  imports: [AvKbdImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class KbdVariantsDemo {}`;

@Component({
  selector: 'app-kbd-variants-demo',
  imports: [AvKbdImports],
  template: DEMO_TEMPLATE,
})
export class KbdVariantsDemo {}
