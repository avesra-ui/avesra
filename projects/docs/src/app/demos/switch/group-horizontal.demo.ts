import { Component } from '@angular/core';
import {
  AvSwitchImports,
  AvSwitchGroupComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<av-switch-group orientation="horizontal" class="overflow-x-auto">
      <div av-switch name="notifications">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Notifications</span>
      </div>
      <div av-switch name="marketing">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Marketing</span>
      </div>
      <div av-switch name="social">
        <span av-switch-control>
          <span av-switch-thumb></span>
        </span>
        <span av-switch-content>Social</span>
      </div>
    </av-switch-group>`;

export const DEMO_NAME = 'switch-group-horizontal';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvSwitchImports,
  AvSwitchGroupComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-switch-group-horizontal-demo',
  imports: [
    AvSwitchGroupComponent,
    AvSwitchImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchGroupHorizontalDemo {}`;

@Component({
  selector: 'app-switch-group-horizontal-demo',
  imports: [
    AvSwitchGroupComponent,
    AvSwitchImports,
  ],
  template: DEMO_TEMPLATE,
})
export class SwitchGroupHorizontalDemo {}
