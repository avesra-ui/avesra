import { Component, signal } from '@angular/core';

import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <button av-toggle-button [(selected)]="isSelected">
    @if (isSelected()) {
      <app-icon icon="solar:heart-bold" size="16" />
      Liked
    } @else {
      <app-icon icon="solar:heart-linear" size="16" />
      Like
    }
  </button>
  <p class="text-sm text-muted">
    Status:
    <span class="font-medium">{{ isSelected() ? 'Selected' : 'Not selected' }}</span>
  </p>
</div>`;

export const DEMO_NAME = 'toggle-button-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvToggleButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-controlled-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ToggleButtonControlledDemo {
  readonly isSelected = signal(false);
}`;

@Component({
  selector: 'app-toggle-button-controlled-demo',
  imports: [AvToggleButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonControlledDemo {
  readonly isSelected = signal(false);
}
