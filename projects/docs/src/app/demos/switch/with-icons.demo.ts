import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-wrap gap-3">
      <div
        av-switch
        size="lg"
        aria-label="check"
        class="group"
        [(selected)]="check"
      >
        <span av-switch-content>
          <span
            av-switch-control
            class="group-data-[selected=true]:bg-green-500/80"
          >
            <span av-switch-thumb>
              <span av-switch-icon>
                <app-icon
                  [icon]="check() ? 'solar:check-circle-bold' : 'solar:power-linear'"
                  size="12"
                  class="opacity-100"
                  [class.opacity-70]="!check()"
                />
              </span>
            </span>
          </span>
        </span>
      </div>
      <div
        av-switch
        size="lg"
        aria-label="darkMode"
        class="group"
        [(selected)]="darkMode"
      >
        <span av-switch-content>
          <span av-switch-control>
            <span av-switch-thumb>
              <span av-switch-icon>
                <app-icon
                  [icon]="darkMode() ? 'solar:sun-bold' : 'solar:moon-bold'"
                  size="12"
                  class="opacity-100"
                  [class.opacity-70]="!darkMode()"
                />
              </span>
            </span>
          </span>
        </span>
      </div>
      <div
        av-switch
        size="lg"
        aria-label="microphone"
        class="group"
        [(selected)]="microphone"
      >
        <span av-switch-content>
          <span
            av-switch-control
            class="group-data-[selected=true]:bg-red-500/80"
          >
            <span av-switch-thumb>
              <span av-switch-icon>
                <app-icon
                  [icon]="microphone() ? 'solar:microphone-3-bold' : 'solar:microphone-3-linear'"
                  size="12"
                  class="opacity-100"
                  [class.opacity-70]="!microphone()"
                />
              </span>
            </span>
          </span>
        </span>
      </div>
      <div
        av-switch
        size="lg"
        aria-label="notification"
        class="group"
        [(selected)]="notification"
      >
        <span av-switch-content>
          <span
            av-switch-control
            class="group-data-[selected=true]:bg-purple-500/80"
          >
            <span av-switch-thumb>
              <span av-switch-icon>
                <app-icon
                  [icon]="notification() ? 'solar:bell-bold' : 'solar:bell-off-linear'"
                  size="12"
                  class="opacity-100"
                  [class.opacity-70]="!notification()"
                />
              </span>
            </span>
          </span>
        </span>
      </div>
      <div
        av-switch
        size="lg"
        aria-label="volume"
        class="group"
        [(selected)]="volume"
      >
        <span av-switch-content>
          <span
            av-switch-control
            class="group-data-[selected=true]:bg-blue-500/80"
          >
            <span av-switch-thumb>
              <span av-switch-icon>
                <app-icon
                  [icon]="volume() ? 'solar:volume-loud-bold' : 'solar:volume-cross-bold'"
                  size="12"
                  class="opacity-100"
                  [class.opacity-70]="!volume()"
                />
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>`;

export const DEMO_NAME = 'switch-with-icons';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvSwitchImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-switch-with-icons-demo',
  imports: [
    AvSwitchImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SwitchWithIconsDemo {
  readonly check = signal(true);
  readonly darkMode = signal(true);
  readonly microphone = signal(true);
  readonly notification = signal(true);
  readonly volume = signal(true);
}`;

@Component({
  selector: 'app-switch-with-icons-demo',
  imports: [
    AvSwitchImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class SwitchWithIconsDemo {
  readonly check = signal(true);
  readonly darkMode = signal(true);
  readonly microphone = signal(true);
  readonly notification = signal(true);
  readonly volume = signal(true);
}
