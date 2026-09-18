import { Component, signal } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<button av-button [pending]="isLoading()" (click)="handlePress()">
  @if (isLoading()) {
    <app-icon icon="solar:refresh-linear" size="16" class="animate-spin" />
    Uploading...
  } @else {
    <app-icon icon="solar:paperclip-linear" size="16" />
    Upload File
  }
</button>`;

export const DEMO_NAME = 'button-loading-state';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-loading-state-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonLoadingStateDemo {
  readonly isLoading = signal(false);

  handlePress(): void {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 2000);
  }
}`;

@Component({
  selector: 'app-button-loading-state-demo',
  imports: [AvButtonComponent, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ButtonLoadingStateDemo {
  readonly isLoading = signal(false);

  handlePress(): void {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 2000);
  }
}
