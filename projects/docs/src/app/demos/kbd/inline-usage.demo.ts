import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="space-y-4">
  <p class="text-sm">
    Press
    <kbd av-kbd>
      <span av-kbd-content>Esc</span>
    </kbd>
    to close the dialog.
  </p>
  <p class="text-sm">
    Use
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>K</span>
    </kbd>
    to open the command palette.
  </p>
  <p class="text-sm">
    Navigate with
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="up"></abbr>
    </kbd>
    and
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="down"></abbr>
    </kbd>
    arrow keys.
  </p>
  <p class="text-sm">
    Save your work with
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="command"></abbr>
      <span av-kbd-content>S</span>
    </kbd>
    regularly.
  </p>
</div>`;

export const DEMO_NAME = 'kbd-inline-usage';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

@Component({
  selector: 'app-kbd-inline-usage-demo',
  imports: [AvKbdImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class KbdInlineUsageDemo {}`;

@Component({
  selector: 'app-kbd-inline-usage-demo',
  imports: [AvKbdImports],
  template: DEMO_TEMPLATE,
})
export class KbdInlineUsageDemo {}
