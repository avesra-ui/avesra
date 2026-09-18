import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { progressCircleDemos } from '../../../demos/progress-circle';

@Component({
  selector: 'app-progress-circle-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './progress-circle-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ProgressCircleDocPage {
  readonly demos = progressCircleDemos;
  readonly apiProps = getComponentProps('progress-circle');

  readonly cssOverrideExample = `@layer components {
  .av-progress-circle {
    @apply inline-flex;
  }

  .av-progress-circle__track {
    @apply size-12;
  }

  .av-progress-circle__fill-circle {
    stroke: purple;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'colors', title: 'Colors' },
    { id: 'indeterminate', title: 'Indeterminate' },
    { id: 'with-label', title: 'With Label' },
    { id: 'custom-svg', title: 'Custom SVG Props' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
