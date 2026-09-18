import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tabs class="w-full max-w-md" default-selected-key="overview">
  <div av-tabs-list-container>
    <div av-tabs-list aria-label="Options">
      <span av-tabs-indicator></span>
      <button av-tabs-tab id="overview">Overview</button>
      <button av-tabs-tab id="analytics">
        <span av-tabs-separator></span>
        Analytics
      </button>
      <button av-tabs-tab id="reports">
        <span av-tabs-separator></span>
        Reports
      </button>
    </div>
  </div>
  <div class="pt-4" av-tabs-panel id="overview">
    <p>View your project overview and recent activity.</p>
  </div>
  <div class="pt-4" av-tabs-panel id="analytics">
    <p>Track your metrics and analyze performance data.</p>
  </div>
  <div class="pt-4" av-tabs-panel id="reports">
    <p>Generate and download detailed reports.</p>
  </div>
</av-tabs>`;

export const DEMO_NAME = 'tabs-with-separator';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

@Component({
  selector: 'app-tabs-with-separator-demo',
  imports: [AvTabsImports],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TabsWithSeparatorDemo {}`;

@Component({
  selector: 'app-tabs-with-separator-demo',
  host: {
    class: 'w-full max-w-md',
  },
  imports: [AvTabsImports],
  template: DEMO_TEMPLATE,
})
export class TabsWithSeparatorDemo {}
