import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { selectDemos } from '../../../demos/select';

@Component({
  selector: 'app-select-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './select-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class SelectDocPage {
  readonly demos = selectDemos;
  readonly apiProps = getComponentProps('select');

  readonly cssOverrideExample = `@layer components {
  .av-select {
    @apply flex flex-col gap-1;
  }

  .av-select__trigger {
    @apply rounded-lg border border-border bg-surface p-2;
  }

  .av-select__value {
    @apply text-current;
  }

  .av-select__indicator {
    @apply text-muted;
  }

  .av-select__popover {
    @apply rounded-lg border border-border bg-surface p-2;
  }
}`;

  readonly tailwindClassesExample = `<div av-select class="w-full" placeholder="Select an item">
  <label av-label>State</label>
  <button av-select-trigger class="rounded-lg border bg-surface p-2">
    <span av-select-value></span>
    <span av-select-indicator></span>
  </button>
  <av-select-popover>
    <div av-list-box>
      <div av-list-box-item id="1" textValue="Item 1" class="hover:bg-surface-secondary">
        Item 1
        <span av-list-box-item-indicator></span>
      </div>
    </div>
  </av-select-popover>
</div>`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'full-width', title: 'Full Width' },
    { id: 'with-description', title: 'With Description' },
    { id: 'required', title: 'Required' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'with-disabled-options', title: 'With Disabled Options' },
    { id: 'multiple', title: 'Multiple Select' },
    { id: 'with-sections', title: 'With Sections' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'controlled-multiple', title: 'Controlled Multiple' },
    { id: 'controlled-open-state', title: 'Controlled Open State' },
    { id: 'custom-indicator', title: 'Custom Indicator' },
    { id: 'custom-value', title: 'Custom Value' },
    { id: 'in-surface', title: 'In Surface' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api', title: 'API' },
  ];
}
