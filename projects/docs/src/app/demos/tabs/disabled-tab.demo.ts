import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tabs class="w-full max-w-md" default-selected-key="active">
  <div av-tabs-list-container>
    <div av-tabs-list aria-label="Tabs with disabled">
      <span av-tabs-indicator></span>
      <button av-tabs-tab id="active">Active</button>
      <button av-tabs-tab id="disabled" disabled>Disabled</button>
      <button av-tabs-tab id="available">Available</button>
    </div>
  </div>
  <div class="pt-4" av-tabs-panel id="active">
    <p>This tab is active and can be selected.</p>
  </div>
  <div class="pt-4" av-tabs-panel id="disabled">
    <p>This content cannot be accessed.</p>
  </div>
  <div class="pt-4" av-tabs-panel id="available">
    <p>This tab is also available for selection.</p>
  </div>
</av-tabs>`;

export const DEMO_NAME = 'tabs-disabled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

@Component({
  selector: 'app-tabs-disabled-tab-demo',
  imports: [AvTabsImports],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TabsDisabledTabDemo {}`;

@Component({
  selector: 'app-tabs-disabled-tab-demo',
  host: {
    class: 'w-full max-w-md',
  },
  imports: [AvTabsImports],
  template: DEMO_TEMPLATE,
})
export class TabsDisabledTabDemo {}
