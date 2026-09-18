import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="space-y-3">
  <p class="text-sm">
    Press
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="enter"></abbr>
    </kbd>
    to confirm or
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="escape"></abbr>
    </kbd>
    to cancel.
  </p>
  <p class="text-sm">
    Use
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="tab"></abbr>
    </kbd>
    to navigate between form fields and
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="shift"></abbr>
      <abbr av-kbd-abbr key-value="tab"></abbr>
    </kbd>
    to go back.
  </p>
  <p class="text-sm">
    Hold
    <kbd av-kbd>
      <abbr av-kbd-abbr key-value="space"></abbr>
    </kbd>
    to temporarily enable panning mode.
  </p>
</div>`;

export const DEMO_NAME = 'kbd-special-keys';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

@Component({
  selector: 'app-kbd-special-keys-demo',
  imports: [AvKbdImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class KbdSpecialKeysDemo {}`;

@Component({
  selector: 'app-kbd-special-keys-demo',
  imports: [AvKbdImports],
  template: DEMO_TEMPLATE,
})
export class KbdSpecialKeysDemo {}
