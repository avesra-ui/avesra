import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<av-tabs class="w-full max-w-lg" orientation="vertical" default-selected-key="account">
  <div av-tabs-list-container>
    <div av-tabs-list aria-label="Vertical tabs">
      <span av-tabs-indicator></span>
      <button av-tabs-tab id="account">Account</button>
      <button av-tabs-tab id="security">Security</button>
      <button av-tabs-tab id="notifications">Notifications</button>
      <button av-tabs-tab id="billing">Billing</button>
    </div>
  </div>
  <div class="px-4" av-tabs-panel id="account">
    <h3 class="mb-2 font-semibold">Account Settings</h3>
    <p class="text-sm text-muted">Manage your account information and preferences.</p>
  </div>
  <div class="px-4" av-tabs-panel id="security">
    <h3 class="mb-2 font-semibold">Security Settings</h3>
    <p class="text-sm text-muted">
      Configure two-factor authentication and password settings.
    </p>
  </div>
  <div class="px-4" av-tabs-panel id="notifications">
    <h3 class="mb-2 font-semibold">Notification Preferences</h3>
    <p class="text-sm text-muted">Choose how and when you want to receive notifications.</p>
  </div>
  <div class="px-4" av-tabs-panel id="billing">
    <h3 class="mb-2 font-semibold">Billing Information</h3>
    <p class="text-sm text-muted">View and manage your subscription and payment methods.</p>
  </div>
</av-tabs>`;

export const DEMO_NAME = 'tabs-vertical';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTabsImports } from '@avesra/angular';

@Component({
  selector: 'app-tabs-vertical-demo',
  imports: [AvTabsImports],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class TabsVerticalDemo {}`;

@Component({
  selector: 'app-tabs-vertical-demo',
  host: {
    class: 'w-full max-w-lg',
  },
  imports: [AvTabsImports],
  template: DEMO_TEMPLATE,
})
export class TabsVerticalDemo {}
