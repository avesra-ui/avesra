import { Component } from '@angular/core';

import {
  AvButtonGroupImports,
  AvChipImports,
  AvDescriptionComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex flex-col items-start gap-6">
      <div class="flex flex-col gap-2">
        <av-dropdown>
          <av-button-group>
            <button av-button>Merge pull request</button>
            <button av-button icon-only aria-label="More options" av-dropdown-trigger>
              <span av-button-group-separator></span>
              <app-icon icon="solar:alt-arrow-down-linear" size="16" />
            </button>
          </av-button-group>
          <av-dropdown-popover class="max-w-[290px]" placement="bottom end">
            <div av-dropdown-menu>
              <div
                av-menu-item
                id="merge"
                textValue="Create a merge commit"
                class="flex flex-col items-start gap-1"
              >
                <label av-label>Create a merge commit</label>
                <p av-description>
                  All commits from this branch will be added to the base branch
                </p>
              </div>
              <div
                av-menu-item
                id="squash-and-merge"
                textValue="Squash and merge"
                class="flex flex-col items-start gap-1"
              >
                <label av-label>Squash and merge</label>
                <p av-description>
                  The 14 commits from this branch will be combined into one commit in the base
                  branch
                </p>
              </div>
              <div
                av-menu-item
                id="rebase-and-merge"
                textValue="Rebase and merge"
                class="flex flex-col items-start gap-1"
              >
                <label av-label>Rebase and merge</label>
                <p av-description>
                  The 14 commits from this branch will be rebased and added to the base branch
                </p>
              </div>
            </div>
          </av-dropdown-popover>
        </av-dropdown>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-x-2 gap-y-4">
          <av-button-group variant="tertiary">
            <button av-button>
              <app-icon icon="solar:branching-paths-linear" size="14" />
              Fork
              <span av-chip color="accent" size="sm" variant="soft">24</span>
            </button>
            <button av-button icon-only aria-label="Fork options">
              <span av-button-group-separator></span>
              <app-icon icon="solar:alt-arrow-down-linear" size="16" />
            </button>
          </av-button-group>
          <av-button-group variant="tertiary">
            <button av-button icon-only aria-label="Scan QR code">
              <app-icon icon="solar:qr-code-linear" size="16" />
            </button>
            <button av-button>
              <span av-button-group-separator></span>
              Scan to pay
            </button>
          </av-button-group>
          <av-button-group variant="tertiary">
            <button av-button>
              <app-icon icon="solar:like-linear" size="16" />
              <span class="text-xs font-semibold">2.4K</span>
            </button>
            <button av-button icon-only aria-label="Dislike">
              <span av-button-group-separator></span>
              <app-icon icon="solar:dislike-linear" size="16" />
            </button>
          </av-button-group>
          <av-button-group variant="tertiary">
            <button av-button>
              <app-icon icon="solar:star-linear" size="14" />
              Star
            </button>
            <button av-button class="px-2">
              <span av-button-group-separator></span>
              <span av-chip color="accent" size="sm" variant="soft">104</span>
            </button>
          </av-button-group>
          <av-button-group variant="tertiary">
            <button av-button>
              <app-icon icon="solar:pin-linear" size="16" />
              Pinned
            </button>
            <button av-button icon-only aria-label="Pin options">
              <span av-button-group-separator></span>
              <app-icon icon="solar:alt-arrow-down-linear" size="16" />
            </button>
          </av-button-group>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <av-button-group variant="tertiary">
          <button av-button>
            <app-icon icon="solar:alt-arrow-left-linear" size="16" />
            Previous
          </button>
          <button av-button>
            <span av-button-group-separator></span>
            Next
            <app-icon icon="solar:alt-arrow-right-linear" size="16" />
          </button>
        </av-button-group>
      </div>

      <div class="flex flex-col gap-2">
        <av-button-group variant="tertiary">
          <button av-button>
            <app-icon icon="solar:gallery-linear" size="16" />
            Photos
          </button>
          <button av-button>
            <span av-button-group-separator></span>
            <app-icon icon="solar:videocamera-linear" size="16" />
            Videos
          </button>
          <button av-button icon-only aria-label="More options">
            <span av-button-group-separator></span>
            <app-icon icon="solar:menu-dots-linear" size="16" />
          </button>
        </av-button-group>
      </div>

      <div class="flex flex-col gap-2">
        <av-button-group variant="tertiary">
          <button av-button>Left</button>
          <button av-button>
            <span av-button-group-separator></span>
            Center
          </button>
          <button av-button>
            <span av-button-group-separator></span>
            Right
          </button>
        </av-button-group>
      </div>

      <div class="flex flex-col gap-2">
        <av-button-group variant="tertiary">
          <button av-button icon-only aria-label="Align left">
            <app-icon icon="solar:align-left-linear" size="16" />
          </button>
          <button av-button icon-only aria-label="Align top">
            <span av-button-group-separator></span>
            <app-icon icon="solar:align-top-linear" size="16" />
          </button>
          <button av-button icon-only aria-label="Align right">
            <span av-button-group-separator></span>
            <app-icon icon="solar:align-right-linear" size="16" />
          </button>
          <button av-button icon-only aria-label="Align bottom">
            <span av-button-group-separator></span>
            <app-icon icon="solar:align-bottom-linear" size="16" />
          </button>
        </av-button-group>
      </div>
    </div>`;

const DEMO_IMPORTS = [
  AvButtonGroupImports,
  AvChipImports,
  AvDropdownImports,
  AvLabelComponent,
  AvDescriptionComponent,
  AppIconComponent,
];

export const DEMO_NAME = 'button-group-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvButtonGroupImports,
  AvChipImports,
  AvDescriptionComponent,
  AvDropdownImports,
  AvLabelComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-button-group-basic-demo',
  imports: [
    AvButtonGroupImports,
    AvChipImports,
    AvDropdownImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ButtonGroupBasicDemo {}`;

@Component({
  selector: 'app-button-group-basic-demo',
  imports: DEMO_IMPORTS,
  template: DEMO_TEMPLATE,
})
export class ButtonGroupBasicDemo {}
