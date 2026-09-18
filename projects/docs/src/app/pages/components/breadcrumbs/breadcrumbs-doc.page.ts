import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { breadcrumbsDemos } from '../../../demos/breadcrumbs';

@Component({
  selector: 'app-breadcrumbs-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './breadcrumbs-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class BreadcrumbsDocPage {
  readonly demos = breadcrumbsDemos;
  readonly apiProps = getComponentProps('breadcrumbs');

  readonly cssOverrideExample = `@layer components {
  .av-breadcrumbs {
    @apply gap-4 text-lg;
  }

  .av-breadcrumbs__link {
    @apply font-semibold;
  }

  .av-breadcrumbs__separator {
    @apply text-blue-500;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'navigation-levels', title: 'Navigation Levels' },
    { id: 'disabled', title: 'Disabled State' },
    { id: 'custom-separator', title: 'Custom Separator' },
    { id: 'render-function', title: 'Render Function' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api', title: 'API Reference' },
  ];
}
