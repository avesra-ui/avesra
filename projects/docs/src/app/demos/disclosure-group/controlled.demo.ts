import { Component, computed, signal } from '@angular/core';

import {
  avDisclosureGroupNavigation,
  AvButtonComponent,
  AvDisclosureGroupImports,
  AvSeparatorImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4 rounded-3xl p-4">
      <div class="mb-2 flex items-center justify-between">
        <h3 class="text-lg font-semibold">Avesra docs</h3>
        <div class="flex gap-2">
          <button
            av-button
            type="button"
            aria-label="Previous disclosure"
            size="sm"
            variant="secondary"
            icon-only
            [disabled]="navigation().isPrevDisabled"
            (click)="navigation().onPrevious()"
          >
            <app-icon icon="solar:alt-arrow-up-linear" size="16" />
          </button>
          <button
            av-button
            type="button"
            aria-label="Next disclosure"
            size="sm"
            variant="secondary"
            icon-only
            [disabled]="navigation().isNextDisabled"
            (click)="navigation().onNext()"
          >
            <app-icon icon="solar:alt-arrow-down-linear" size="16" />
          </button>
        </div>
      </div>

      <av-disclosure-group
        [expandedKeys]="expandedKeys()"
        (expandedKeysChange)="expandedKeys.set($event)"
      >
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

export const DEMO_NAME = 'disclosure-group-controlled';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import {
  avDisclosureGroupNavigation,
  AvButtonComponent,
  AvDisclosureGroupImports,
  AvSeparatorImports,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-disclosure-group-controlled-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureGroupImports,
    AvSeparatorImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-md' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class DisclosureGroupControlledDemo {
  readonly expandedKeys = signal<string[]>(['preview']);
  private readonly itemIds = ['preview', 'download'];

  protected readonly navigation = computed(() =>
    avDisclosureGroupNavigation({
      expandedKeys: new Set(this.expandedKeys()),
      itemIds: this.itemIds,
      onExpandedChange: (keys) => this.expandedKeys.set([...keys]),
    }),
  );

  isExpanded(key: string): boolean {
    return this.expandedKeys().includes(key);
  }
}`;

@Component({
  selector: 'app-disclosure-group-controlled-demo',
  imports: [
    AvButtonComponent,
    AvDisclosureGroupImports,
    AvSeparatorImports,
    AppIconComponent,
  ],
  host: { class: 'w-full max-w-md' },
  template: DEMO_TEMPLATE,
})
export class DisclosureGroupControlledDemo {
  readonly expandedKeys = signal<string[]>(['preview']);
  private readonly itemIds = ['preview', 'download'];

  protected readonly navigation = computed(() =>
    avDisclosureGroupNavigation({
      expandedKeys: new Set(this.expandedKeys()),
      itemIds: this.itemIds,
      onExpandedChange: (keys) => this.expandedKeys.set([...keys]),
    }),
  );

  isExpanded(key: string): boolean {
    return this.expandedKeys().includes(key);
  }
}
