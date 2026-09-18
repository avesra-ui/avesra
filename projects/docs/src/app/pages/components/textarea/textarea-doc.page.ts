import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { textareaDemos } from '../../../demos/textarea';

@Component({
  selector: 'app-textarea-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './textarea-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class TextareaDocPage {
  readonly demos = textareaDemos;
  readonly apiProps = getComponentProps('textarea');

  /** Tailwind customization example. */
  readonly tailwindExample = `<textarea
  av-textarea
  class="h-28 w-full max-w-xs rounded-xl border border-border/80
    bg-surface text-sm shadow-sm ring-1 ring-black/5
    placeholder:text-muted
    focus-visible:ring-2 focus-visible:ring-neutral-400/25"
  aria-label="Notes"
  placeholder="Add a note..."
  rows="4"
></textarea>`;

  readonly globalCssExample = `@layer components {
  .av-textarea {
    @apply rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-6 shadow-sm;

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
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'in-surface', title: 'In Surface' },
    { id: 'full-width', title: 'Full Width' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'rows', title: 'Rows and Resizing' },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 3 },
    { id: 'global-css', title: 'Global CSS', depth: 3 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'api', title: 'API Reference' },
  ];
}
