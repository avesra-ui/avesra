import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <span class="text-sm text-muted">Arrow Keys:</span>
    <div class="flex items-center gap-2">
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="up"></abbr>
      </kbd>
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="down"></abbr>
      </kbd>
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="left"></abbr>
      </kbd>
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="right"></abbr>
      </kbd>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <span class="text-sm text-muted">Page Navigation:</span>
    <div class="flex items-center gap-2">
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="pageup"></abbr>
      </kbd>
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="pagedown"></abbr>
      </kbd>
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="home"></abbr>
      </kbd>
      <kbd av-kbd>
        <abbr av-kbd-abbr key-value="end"></abbr>
      </kbd>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'kbd-navigation-keys';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvKbdImports } from '@avesra/angular';

@Component({
  selector: 'app-kbd-navigation-keys-demo',
  imports: [AvKbdImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class KbdNavigationKeysDemo {}`;

@Component({
  selector: 'app-kbd-navigation-keys-demo',
  imports: [AvKbdImports],
  template: DEMO_TEMPLATE,
})
export class KbdNavigationKeysDemo {}
