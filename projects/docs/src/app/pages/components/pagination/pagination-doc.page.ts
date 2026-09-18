import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { paginationDemos } from '../../../demos/pagination';

@Component({
  selector: 'app-pagination-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './pagination-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class PaginationDocPage {
  readonly demos = paginationDemos;
  readonly apiProps = getComponentProps('pagination');

  readonly cssOverrideExample = `@layer components {
  .av-pagination {
    @apply gap-8;
  }

  .av-pagination__link {
    @apply rounded-md;
  }

  .av-pagination__summary {
    @apply text-xs font-semibold;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'simple-prev-next', title: 'Simple (Previous / Next)' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'with-ellipsis', title: 'With Ellipsis' },
    { id: 'with-summary', title: 'With Summary' },
    { id: 'custom-icons', title: 'Custom Icons' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API Reference' },
    { id: 'accessibility', title: 'Accessibility' },
  ];
}
