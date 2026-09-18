import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { alertDemos } from '../../../demos/alert';

@Component({
  selector: 'app-alert-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
    AvLinkComponent,
  ],
  templateUrl: './alert-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class AlertDocPage {
  readonly demos = alertDemos;
  readonly apiProps = getComponentProps('alert');

  readonly cssOverrideExample = `@layer components {
  .av-alert {
    @apply rounded-2xl shadow-lg;
  }

  .av-alert__title {
    @apply text-lg font-bold;
  }

  .av-alert--danger {
    @apply border-l-4 border-danger;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 2 },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling-reference', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
