import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { popoverDemos } from '../../../demos/popover';

@Component({
  selector: 'app-popover-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './popover-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class PopoverDocPage {
  readonly demos = popoverDemos;
  readonly apiProps = getComponentProps('popover');

  readonly cssOverrideExample = `@layer components {
  .av-popover {
    @apply rounded-xl shadow-2xl;
  }

  .av-popover__dialog {
    @apply p-4;
  }

  .av-popover__heading {
    @apply text-lg font-bold;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'with-arrow', title: 'With Arrow' },
    { id: 'interactive-content', title: 'Interactive Content' },
    { id: 'placement', title: 'Placement' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
  ];
}
