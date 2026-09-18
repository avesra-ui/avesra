import { Component } from '@angular/core';

import { AvButtonGroupImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-muted">Small</p>
    <av-button-group size="sm" variant="secondary">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-muted">Medium (default)</p>
    <av-button-group size="md" variant="secondary">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
  <div class="flex flex-col items-start gap-2">
    <p class="text-sm text-muted">Large</p>
    <av-button-group size="lg" variant="secondary">
      <button av-button>First</button>
      <button av-button><span av-button-group-separator></span>Second</button>
      <button av-button><span av-button-group-separator></span>Third</button>
    </av-button-group>
  </div>
</div>`;

export const DEMO_NAME = 'button-group-sizes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvButtonGroupImports } from '@avesra/angular';

@Component({
  selector: 'app-button-group-sizes-demo',
  imports: [AvButtonGroupImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupSizesDemo {}`;

@Component({
  selector: 'app-button-group-sizes-demo',
  imports: [AvButtonGroupImports],
  template: DEMO_TEMPLATE,
})
export class ButtonGroupSizesDemo {}
