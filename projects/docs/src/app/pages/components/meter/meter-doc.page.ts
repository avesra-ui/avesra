import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { meterDemos } from '../../../demos/meter';

@Component({
  selector: 'app-meter-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './meter-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class MeterDocPage {
  readonly demos = meterDemos;
  readonly apiProps = getComponentProps('meter');

  readonly cssOverrideExample = `@layer components {
  .av-meter {
    @apply w-full gap-2;
  }

  .av-meter__track {
    @apply h-3 rounded-full;
  }

  .av-meter__fill {
    @apply rounded-full;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'colors', title: 'Colors' },
    { id: 'without-label', title: 'Without Label' },
    { id: 'custom-value', title: 'Custom Value Scale' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
