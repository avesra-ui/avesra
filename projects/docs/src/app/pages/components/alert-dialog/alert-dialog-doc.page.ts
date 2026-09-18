import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { alertDialogDemos } from '../../../demos/alert-dialog';

@Component({
  selector: 'app-alert-dialog-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
    AvLinkComponent,
  ],
  templateUrl: './alert-dialog-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class AlertDialogDocPage {
  readonly demos = alertDialogDemos;
  readonly apiProps = getComponentProps('alert-dialog');

  readonly cssOverrideExample = `@layer components {
  .av-alert-dialog__backdrop {
    @apply bg-linear-to-br from-black/60 to-black/80;
  }

  .av-alert-dialog__dialog {
    @apply rounded-2xl border border-danger/20 shadow-2xl;
  }

  .av-alert-dialog__header {
    @apply gap-4;
  }

  .av-alert-dialog__icon {
    @apply size-16;
  }

  .av-alert-dialog__close-trigger {
    @apply rounded-full bg-white/10 hover:bg-white/20;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'examples', title: 'Examples' },
    { id: 'statuses', title: 'Statuses', depth: 2 },
    { id: 'placements', title: 'Placements', depth: 2 },
    { id: 'sizes', title: 'Sizes', depth: 2 },
    { id: 'controlled-state', title: 'Controlled State', depth: 2 },
    { id: 'custom-icon', title: 'Custom Icon', depth: 2 },
    { id: 'custom-trigger', title: 'Custom Trigger', depth: 2 },
    { id: 'backdrop-variants', title: 'Backdrop Variants', depth: 2 },
    { id: 'custom-backdrop', title: 'Custom Backdrop', depth: 2 },
    { id: 'dismiss-behavior', title: 'Dismiss Behavior', depth: 2 },
    { id: 'close-methods', title: 'Close Methods', depth: 2 },
    { id: 'programmatic', title: 'Programmatic', depth: 2 },
    { id: 'custom-animations', title: 'Custom Animations', depth: 2 },
    { id: 'scroll-behavior', title: 'Scroll Behavior', depth: 2 },
    { id: 'stacked-footer-actions', title: 'Stacked Footer Actions', depth: 2 },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 2 },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling-reference', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api', title: 'API Reference' },
  ];
}
