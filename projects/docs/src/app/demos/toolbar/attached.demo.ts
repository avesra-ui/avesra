import { Component } from '@angular/core';
import { AvButtonGroupImports, AvSeparatorImports, AvToggleButtonGroupImports, AvToolbarComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-toolbar aria-label="Attached toolbar" attached>
      <av-toggle-button-group selection-mode="multiple">
        <button av-toggle-button value="bold" icon-only aria-label="Bold">B</button>
        <button av-toggle-button value="italic" icon-only aria-label="Italic">
          <span av-toggle-button-group-separator></span>
          I
        </button>
        <button av-toggle-button value="underline" icon-only aria-label="Underline">
          <span av-toggle-button-group-separator></span>
          U
        </button>
      </av-toggle-button-group>
      <hr av-separator />
      <av-button-group>
        <button av-button variant="secondary" icon-only aria-label="Copy">C</button>
        <button av-button variant="secondary" icon-only aria-label="Cut">
          <span av-button-group-separator></span>
          X
        </button>
      </av-button-group>
    </av-toolbar>`;

export const DEMO_NAME = 'toolbar-attached';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports, AvSeparatorImports, AvToggleButtonGroupImports, AvToolbarComponent } from '@avesra/angular';

@Component({
  selector: 'app-toolbar-attached-demo',
  imports: [AvToolbarComponent, AvToggleButtonGroupImports, AvSeparatorImports, AvButtonGroupImports],
  template: \`<av-toolbar aria-label="Attached toolbar" attached>
      <av-toggle-button-group selection-mode="multiple">
        <button av-toggle-button value="bold" icon-only aria-label="Bold">B</button>
        <button av-toggle-button value="italic" icon-only aria-label="Italic">
          <span av-toggle-button-group-separator></span>
          I
        </button>
        <button av-toggle-button value="underline" icon-only aria-label="Underline">
          <span av-toggle-button-group-separator></span>
          U
        </button>
      </av-toggle-button-group>
      <hr av-separator />
      <av-button-group>
        <button av-button variant="secondary" icon-only aria-label="Copy">C</button>
        <button av-button variant="secondary" icon-only aria-label="Cut">
          <span av-button-group-separator></span>
          X
        </button>
      </av-button-group>
    </av-toolbar>\`,
})
export class ToolbarAttachedDemo {
}`;

@Component({
  selector: 'app-toolbar-attached-demo',
  imports: [AvToolbarComponent, AvToggleButtonGroupImports, AvSeparatorImports, AvButtonGroupImports],
  template: DEMO_TEMPLATE,
})
export class ToolbarAttachedDemo {}
