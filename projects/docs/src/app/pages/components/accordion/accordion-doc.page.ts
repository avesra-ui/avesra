import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvLinkComponent } from '@avesra/angular';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { accordionDemos } from '../../../demos/accordion';

@Component({
  selector: 'app-accordion-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
    AvLinkComponent,
  ],
  templateUrl: './accordion-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class AccordionDocPage {
  readonly demos = accordionDemos;
  readonly apiProps = getComponentProps('accordion');

  readonly cssOverrideExample = `@layer components {
  .av-accordion {
    @apply rounded-xl bg-muted/40;
  }

  .av-accordion__trigger {
    @apply text-lg font-semibold;
  }

  .av-accordion--surface {
    @apply border-2 shadow-lg;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'examples', title: 'Examples' },
    { id: 'surface', title: 'Surface', depth: 2 },
    { id: 'without-separator', title: 'Without Separator', depth: 2 },
    { id: 'multiple-expanded', title: 'Multiple Expanded', depth: 2 },
    { id: 'disabled-state', title: 'Disabled State', depth: 2 },
    { id: 'controlled', title: 'Controlled', depth: 2 },
    { id: 'custom-indicator', title: 'Custom Indicator', depth: 2 },
    { id: 'faq-layout', title: 'FAQ Layout', depth: 2 },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 2 },
    { id: 'global-css', title: 'Global CSS', depth: 2 },
    { id: 'styling-reference', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
