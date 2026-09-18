import { Component } from '@angular/core';
import {
  AvSwitchImports,
  AvSwitchGroupComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-switch-group>
      <div av-switch name="notifications">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Allow Notifications</span>
      </div>
      <div av-switch name="marketing">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Marketing emails</span>
      </div>
      <div av-switch name="social">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Social media updates</span>
      </div>
    </av-switch-group>`;

export const DEMO_NAME = 'switch-group';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvSwitchImports,
  AvSwitchGroupComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-switch-group-demo',
  imports: [
    AvSwitchGroupComponent,
    AvSwitchImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchGroupDemo {}`;

@Component({
  selector: 'app-switch-group-demo',
  imports: [
    AvSwitchGroupComponent,
    AvSwitchImports,
  ],
  template: DEMO_TEMPLATE,
})
export class SwitchGroupDemo {}
