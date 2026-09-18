import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="space-y-3">
  <div class="rounded-lg bg-surface p-4">
    <h4 class="mb-2 text-sm font-semibold">Quick Actions</h4>
    <ul class="space-y-2 text-sm">
      <li>
        • Open search:
        <kbd av-kbd>
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>K</span>
        </kbd>
      </li>
      <li>
        • Toggle sidebar:
        <kbd av-kbd>
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>B</span>
        </kbd>
      </li>
      <li>
        • New file:
        <kbd av-kbd>
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>N</span>
        </kbd>
      </li>
      <li>
        • Quick save:
        <kbd av-kbd>
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>S</span>
        </kbd>
      </li>
    </ul>
  </div>
</div>`;

export const DEMO_NAME = 'kbd-instructional-text';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

@Component({
  selector: 'app-kbd-instructional-text-demo',
  imports: [AvKbdImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class KbdInstructionalTextDemo {}`;

@Component({
  selector: 'app-kbd-instructional-text-demo',
  imports: [AvKbdImports],
  template: DEMO_TEMPLATE,
})
export class KbdInstructionalTextDemo {}
