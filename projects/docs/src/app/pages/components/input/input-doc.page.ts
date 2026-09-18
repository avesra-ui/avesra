import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { inputDemos } from '../../../demos/input';

@Component({
  selector: 'app-input-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './input-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class InputDocPage {
  readonly demos = inputDemos;
  readonly apiProps = getComponentProps('input');

  readonly cssOverrideExample = `@layer components {
  .av-input {
    @apply rounded-lg border border-border bg-surface px-4 py-2 text-sm shadow-sm transition-colors;

    &:hover,
    &[data-hovered="true"] {
      @apply bg-surface-secondary border-border/80;
    }

    &:focus-visible,
    &[data-focus-visible="true"] {
      @apply border-accent ring-2 ring-accent/20;
    }

    &[data-invalid="true"] {
      @apply border-danger bg-danger-soft text-danger;
    }
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'in-surface', title: 'In Surface' },
    { id: 'full-width', title: 'Full Width' },
    { id: 'input-types', title: 'Input Types' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
