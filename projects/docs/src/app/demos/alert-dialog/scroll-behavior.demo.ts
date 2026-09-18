import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogScroll } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex max-w-sm flex-col gap-6">
      @for (mode of scrollModes; track mode.value) {
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold">{{ mode.value }}</h3>
          <p class="text-sm text-muted">{{ mode.description }}</p>
          <av-alert-dialog [scroll]="mode.value">
            <button av-button variant="secondary" av-alert-dialog-trigger>
              Open ({{ mode.value | titlecase }})
            </button>
            <ng-template avAlertDialogContent>
              <div av-alert-dialog-dialog class="sm:max-w-[400px]">
                <av-alert-dialog-close-trigger />
                <div av-alert-dialog-header>
                  <div av-alert-dialog-icon status="accent">
                    <app-icon icon="solar:info-circle-linear" size="20" />
                  </div>
                  <h2 av-alert-dialog-heading>
                    Scroll: {{ mode.value | titlecase }}
                  </h2>
                  <p class="text-sm leading-5 text-muted">{{ mode.hint }}</p>
                </div>
                <div av-alert-dialog-body>
                  @for (paragraph of scrollParagraphs; track paragraph) {
                    <p class="mb-3">
                      Paragraph {{ paragraph }}: Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                      amet hendrerit risus, sed porttitor quam.
                    </p>
                  }
                </div>
                <div av-alert-dialog-footer>
                  <button av-button variant="tertiary" av-alert-dialog-close>Cancel</button>
                  <button av-button av-alert-dialog-close>Confirm</button>
                </div>
              </div>
            </ng-template>
          </av-alert-dialog>
        </div>
      }
    </div>`;

export const DEMO_NAME = 'alert-dialog-scroll-behavior';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AvAlertDialogImports,
  AvButtonComponent,
} from '@avesra/angular';
import type { AvAlertDialogScroll } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-alert-dialog-scroll-behavior-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class AlertDialogScrollBehaviorDemo {
  readonly scrollModes: readonly {
    value: AvAlertDialogScroll;
    description: string;
    hint: string;
  }[] = [
    {
      value: 'inside',
      description:
        'Only the dialog body scrolls. Header and footer stay fixed while long content overflows inside the body.',
      hint: 'Content scrolls within the body; header and footer stay put.',
    },
    {
      value: 'outside',
      description:
        'The entire dialog scrolls within the viewport when content is taller than the available space.',
      hint: 'The whole dialog moves with the viewport scroll.',
    },
  ];

  readonly scrollParagraphs = Array.from({ length: 24 }, (_, index) => index + 1);
}`;

@Component({
  selector: 'app-alert-dialog-scroll-behavior-demo',
  imports: [
    TitleCasePipe,
    AppIconComponent,
    AvAlertDialogImports,
    AvButtonComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class AlertDialogScrollBehaviorDemo {
  readonly scrollModes: readonly {
    value: AvAlertDialogScroll;
    description: string;
    hint: string;
  }[] = [
    {
      value: 'inside',
      description:
        'Only the dialog body scrolls. Header and footer stay fixed while long content overflows inside the body.',
      hint: 'Content scrolls within the body; header and footer stay put.',
    },
    {
      value: 'outside',
      description:
        'The entire dialog scrolls within the viewport when content is taller than the available space.',
      hint: 'The whole dialog moves with the viewport scroll.',
    },
  ];

  readonly scrollParagraphs = Array.from({ length: 24 }, (_, index) => index + 1);
}
