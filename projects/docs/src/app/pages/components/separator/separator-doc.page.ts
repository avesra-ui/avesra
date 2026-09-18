import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { separatorDemos } from '../../../demos/separator';

@Component({
  selector: 'app-separator-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './separator-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class SeparatorDocPage {
  readonly demos = separatorDemos;
  readonly apiProps = getComponentProps('separator');

  readonly cssOverrideExample = `@layer components {
  .av-separator {
    @apply bg-accent h-[2px];
  }

  .av-separator--vertical {
    @apply bg-accent w-[2px];
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'with-surface', title: 'With Surface' },
    { id: 'vertical', title: 'Vertical' },
    { id: 'with-content', title: 'With Content' },
    { id: 'with-label', title: 'With Label' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
