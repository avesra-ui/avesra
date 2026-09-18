import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { tableDemos } from '../../../demos/table';

@Component({
  selector: 'app-table-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './table-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class TableDocPage {
  readonly demos = tableDemos;
  readonly apiProps = getComponentProps('table');

  readonly tailwindExample = `<div av-table class="border border-accent/20">
  <div av-table-scroll-container>
    <table av-table-content aria-label="Custom styled table">
      <thead av-table-header class="bg-accent/5">
        <tr>
          <th av-table-column>Name</th>
        </tr>
      </thead>
      <tbody av-table-body>
        <tr av-table-row class="hover:bg-accent/5">
          <td av-table-cell>Kate Moore</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;

  readonly cssOverrideExample = `@layer components {
  .av-table-root {
    @apply relative grid w-full overflow-clip;
  }

  .av-table__header {
    @apply bg-gray-100;
  }

  .av-table__column {
    @apply px-4 py-2.5 text-left text-xs font-medium text-gray-600;
  }

  .av-table__row {
    @apply border-b border-gray-200 bg-white;
  }

  .av-table__cell {
    @apply px-4 py-3 text-sm;
  }

  .av-table__footer {
    @apply flex items-center px-4 py-2.5;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'secondary-variant', title: 'Secondary Variant' },
    { id: 'async-loading', title: 'Async Loading' },
    { id: 'sorting', title: 'Sorting' },
    { id: 'selection', title: 'Selection' },
    { id: 'pagination', title: 'Pagination' },
    { id: 'column-resizing', title: 'Column Resizing' },
    { id: 'empty-state', title: 'Empty State' },
    { id: 'custom-cells', title: 'Custom Cells' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
