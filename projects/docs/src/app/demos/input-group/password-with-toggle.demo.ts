import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<label av-label for="ig-password">Password</label>
    <div av-input-group>
      <input
        av-input-group-input
        id="ig-password"
        [type]="passwordVisible() ? 'text' : 'password'"
        [value]="passwordVisible() ? '87$2h.3diua' : '••••••••'"
        readonly
      />
      <div av-input-group-suffix class="pr-0">
        <button
          av-button
          type="button"
          size="sm"
          variant="ghost"
          icon-only
          [attr.aria-label]="passwordVisible() ? 'Hide password' : 'Show password'"
          (click)="togglePasswordVisibility()"
        >
          @if (passwordVisible()) {
            <app-icon icon="solar:eye-linear" size="16" />
          } @else {
            <app-icon icon="solar:eye-closed-linear" size="16" />
          }
        </button>
      </div>
    </div>`;

export const DEMO_NAME = 'input-group-password-with-toggle';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvButtonComponent,
  AvInputGroupImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-input-group-password-with-toggle-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: \`<label av-label for="ig-password">Password</label>
    <div av-input-group>
      <input
        av-input-group-input
        id="ig-password"
        [type]="passwordVisible() ? 'text' : 'password'"
        [value]="passwordVisible() ? '87\$2h.3diua' : '••••••••'"
        readonly
      />
      <div av-input-group-suffix class="pr-0">
        <button
          av-button
          type="button"
          size="sm"
          variant="ghost"
          icon-only
          [attr.aria-label]="passwordVisible() ? 'Hide password' : 'Show password'"
          (click)="togglePasswordVisibility()"
        >
          @if (passwordVisible()) {
            <app-icon icon="solar:eye-linear" size="16" />
          } @else {
            <app-icon icon="solar:eye-closed-linear" size="16" />
          }
        </button>
      </div>
    </div>\`,
})
export class InputGroupPasswordWithToggleDemo {
  readonly passwordVisible = signal(false);

  togglePasswordVisibility(): void {
    this.passwordVisible.update((value) => !value);
  }
}`;

@Component({
  selector: 'app-input-group-password-with-toggle-demo',
  imports: [
    AvInputGroupImports,
    AvLabelComponent,
    AvButtonComponent,
    AppIconComponent,
  ],
  host: { class: 'flex w-full max-w-72 flex-col gap-1' },
  template: DEMO_TEMPLATE,
})
export class InputGroupPasswordWithToggleDemo {
  readonly passwordVisible = signal(false);

  togglePasswordVisibility(): void {
    this.passwordVisible.update((value) => !value);
  }
}
