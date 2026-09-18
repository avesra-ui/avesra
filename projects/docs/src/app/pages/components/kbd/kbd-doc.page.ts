import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { kbdDemos } from '../../../demos/kbd';

@Component({
  selector: 'app-kbd-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './kbd-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class KbdDocPage {
  readonly demos = kbdDemos;
  readonly apiProps = getComponentProps('kbd');

  readonly cssOverrideExample = `@layer components {
  .av-kbd {
    @apply bg-gray-100 dark:bg-gray-800 border-gray-300;
  }

  .av-kbd__abbr {
    @apply font-bold;
  }

  .av-kbd__content {
    @apply text-sm;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'navigation-keys', title: 'Navigation Keys' },
    { id: 'inline-usage', title: 'Inline Usage' },
    { id: 'instructional-text', title: 'Instructional Text' },
    { id: 'special-keys', title: 'Special Keys' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API' },
    { id: 'key-values', title: 'Key Values', depth: 2 },
  ];
}
