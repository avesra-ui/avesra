import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvKbdImports,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-input-group>
      <input av-input-group-input placeholder="Command" aria-label="Command" />
      <div av-input-group-suffix class="pr-2">
        <kbd av-kbd>
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>K</span>
        </kbd>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-with-keyboard-shortcut';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvInputGroupImports,
  AvKbdImports,
} from '@avesra/angular';

@Component({
  selector: 'app-input-group-with-keyboard-shortcut-demo',
  imports: [
    AvInputGroupImports,
    AvKbdImports,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class InputGroupWithKeyboardShortcutDemo {}`;

@Component({
  selector: 'app-input-group-with-keyboard-shortcut-demo',
  imports: [
    AvInputGroupImports,
    AvKbdImports,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupWithKeyboardShortcutDemo {}
