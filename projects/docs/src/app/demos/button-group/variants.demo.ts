import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-2">
    <p class="text-sm text-muted">Primary</p>
    <av-button-group variant="primary">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <p class="text-sm text-muted">Secondary</p>
    <av-button-group variant="secondary">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <p class="text-sm text-muted">Tertiary</p>
    <av-button-group variant="tertiary">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <p class="text-sm text-muted">Outline</p>
    <av-button-group variant="outline">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <p class="text-sm text-muted">Ghost</p>
    <av-button-group variant="ghost">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col gap-2">
    <p class="text-sm text-muted">Danger</p>
    <av-button-group variant="danger">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
</div>`;

export const DEMO_NAME = 'button-group-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-button-group-variants-demo',
  imports: [AvButtonGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupVariantsDemo {}`;

@Component({
  selector: 'app-button-group-variants-demo',
  imports: [AvButtonGroupImports],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupVariantsDemo {}
