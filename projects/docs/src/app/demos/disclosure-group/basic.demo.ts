import { Component } from '@angular/core';

import {
  AvButtonComponent,
  AvDisclosureGroupImports,
  AvSeparatorImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4 bg-transparent p-4">
      <av-disclosure-group [(expandedKeys)]="expandedKeys">
        <av-disclosure id="preview" aria-label="Preview on your phone">
          <h3 av-disclosure-heading>
            <button
              av-button
              type="button"
              av-disclosure-trigger
              [variant]="isExpanded('preview') ? 'secondary' : 'tertiary'"
              full-width
              class="w-full border-none"
              [class.bg-transparent]="!isExpanded('preview')"
            >
              <div class="flex w-full items-center justify-start gap-2">
                <app-icon icon="solar:qr-code-linear" size="16" />
                Preview on your phone
              </div>
              <svg av-disclosure-indicator class="text-muted"></svg>
            </button>
          </h3>
          <div av-disclosure-content>
            <div
              av-disclosure-body
              class="mx-2 flex flex-col items-center gap-2 p-4 text-center"
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
        </av-disclosure>

        <hr av-separator class="my-2" />

        <av-disclosure id="download">
          <h3 av-disclosure-heading aria-label="Get the starter">
            <button
              av-button
              type="button"
              av-disclosure-trigger
              [variant]="isExpanded('download') ? 'secondary' : 'tertiary'"
              full-width
              class="w-full border-none"
              [class.bg-transparent]="!isExpanded('download')"
            >
              <div class="flex w-full items-center justify-start gap-2">
                <app-icon icon="solar:box-linear" size="16" />
                Get the starter
              </div>
              <svg av-disclosure-indicator class="text-muted"></svg>
            </button>
          </h3>
          <div av-disclosure-content>
            <div
              av-disclosure-body
              class="mx-2 flex flex-col items-center gap-2 p-4 text-center"
            >
              <p class="text-sm text-muted">
                Scan to clone the Avesra workspace and start composing components.
              </p>
              <img
                alt="QR code for the Avesra GitHub repository"
                class="aspect-square w-full max-w-54 rounded-2xl bg-white object-contain"
                src="/images/brand/avesra-qr.png"
              />
              <p class="text-sm text-muted">Open source. Angular 19 and Tailwind CSS v4.</p>
              <button av-button class="mt-4" variant="primary" type="button">
                <app-icon icon="avesra:github" size="16" />
                View on GitHub
              </button>
            </div>
          </div>
        </av-disclosure>
      </av-disclosure-group>
    </div>`;

export const DEMO_NAME = 'disclosure-group-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonComponent,
  AvDisclosureGroupImports,
  AvSeparatorImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-disclosure-group-basic-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureGroupImports,
    AvSeparatorImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-md' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class DisclosureGroupBasicDemo {
  expandedKeys: string[] = ['preview'];

  isExpanded(key: string): boolean {
    return this.expandedKeys.includes(key);
  }
}`;

@Component({
  selector: 'app-disclosure-group-basic-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureGroupImports,
    AvSeparatorImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-md' },
  template: DEMO_TEMPLATE,
})
export class DisclosureGroupBasicDemo {
  expandedKeys: string[] = ['preview'];

  isExpanded(key: string): boolean {
    return this.expandedKeys.includes(key);
  }
}
