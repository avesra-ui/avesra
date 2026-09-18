import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div av-switch aria-label="Power" class="group" [(selected)]="isSelected">
      <span av-switch-content>
        <span
          av-switch-control
          class="h-[31px] w-[51px] bg-blue-500 group-data-[selected=true]:bg-cyan-500 group-data-[selected=true]:shadow-[0_0_12px_rgba(6,182,212,0.5)]"
        >
          <span
            av-switch-thumb
            class="size-[27px] bg-white shadow-sm group-data-[selected=true]:ms-[22px] group-data-[selected=true]:shadow-lg"
          >
            <span av-switch-icon>
              @if (isSelected()) {
                <app-icon icon="solar:check-circle-bold" size="16" class="text-cyan-600" />
              } @else {
                <app-icon icon="solar:power-linear" size="16" class="text-blue-600" />
              }
            </span>
          </span>
        </span>
      </span>
    </div>`;

export const DEMO_NAME = 'switch-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-switch-custom-styles-demo',
  imports: [
    AvSwitchImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchCustomStylesDemo {
  readonly isSelected = signal(false);
}`;

@Component({
  selector: 'app-switch-custom-styles-demo',
  imports: [
    AvSwitchImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SwitchCustomStylesDemo {
  readonly isSelected = signal(false);
}
