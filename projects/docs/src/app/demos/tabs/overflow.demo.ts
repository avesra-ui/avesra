import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tabs class="w-[400px]" default-selected-key="overview">
  <div av-tabs-list-container>
    <div av-tabs-list aria-label="Overflow options">
      <span av-tabs-indicator></span>
      <button av-tabs-tab id="overview">Overview</button>
      <button av-tabs-tab id="analytics">Analytics</button>
      <button av-tabs-tab id="reports">Reports</button>
      <button av-tabs-tab id="performance">Performance</button>
      <button av-tabs-tab id="engagement">Engagement</button>
      <button av-tabs-tab id="audience">Audience</button>
      <button av-tabs-tab id="acquisition">Acquisition</button>
      <button av-tabs-tab id="retention">Retention</button>
      <button av-tabs-tab id="settings">Settings</button>
    </div>
  </div>
  <div av-tabs-panel id="overview"><p>Overview panel content.</p></div>
  <div av-tabs-panel id="analytics"><p>Analytics panel content.</p></div>
  <div av-tabs-panel id="reports"><p>Reports panel content.</p></div>
  <div av-tabs-panel id="performance"><p>Performance panel content.</p></div>
  <div av-tabs-panel id="engagement"><p>Engagement panel content.</p></div>
  <div av-tabs-panel id="audience"><p>Audience panel content.</p></div>
  <div av-tabs-panel id="acquisition"><p>Acquisition panel content.</p></div>
  <div av-tabs-panel id="retention"><p>Retention panel content.</p></div>
  <div av-tabs-panel id="settings"><p>Settings panel content.</p></div>
</av-tabs>`;

export const DEMO_NAME = 'tabs-overflow';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

@Component({
  selector: 'app-tabs-overflow-demo',
  imports: [AvTabsImports],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TabsOverflowDemo {}`;

@Component({
  selector: 'app-tabs-overflow-demo',
  host: {
    class: 'w-[400px]',
  },
  imports: [AvTabsImports],
  template: DEMO_TEMPLATE,
})
export class TabsOverflowDemo {}
