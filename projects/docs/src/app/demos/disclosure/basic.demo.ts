import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDisclosureImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-disclosure [(expanded)]="expanded">
      <h3 av-disclosure-heading class="block">
        <button av-button type="button" av-disclosure-trigger variant="secondary">
          <app-icon icon="solar:qr-code-linear" size="16" />
          Preview on your phone
          <svg av-disclosure-indicator></svg>
        </button>
      </h3>
      <div av-disclosure-content>
        <div av-disclosure-body>
          <div
            class="shadow-panel flex flex-col items-center rounded-3xl bg-surface p-4 text-center"
          >
            <p class="text-sm text-muted">
              Scan this QR code to open the Avesra docs on your phone.
            </p>
            <img
              alt="QR code for the Avesra documentation"
              class="aspect-square w-full max-w-54 rounded-2xl bg-white object-contain"
              src="/images/brand/avesra-qr.png"
            />
            <p class="text-sm text-muted">Works with any camera app.</p>
            <button av-button class="mt-4" variant="primary" type="button">
              <app-icon icon="solar:document-linear" size="16" />
              Open documentation
            </button>
          </div>
        </div>
      </div>
    </av-disclosure>`;

export const DEMO_NAME = 'disclosure-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDisclosureImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-disclosure-basic-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-md text-center' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class DisclosureBasicDemo {
  expanded = true;
}`;

@Component({
  selector: 'app-disclosure-basic-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-md text-center' },
  template: DEMO_TEMPLATE,
})
export class DisclosureBasicDemo {
  expanded = true;
}
