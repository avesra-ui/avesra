import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { labelDemos } from '../../../demos/label';

@Component({
  selector: 'app-label-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './label-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class LabelDocPage {
  readonly demos = labelDemos;
  readonly apiProps = getComponentProps('label');

  readonly cssOverrideExample = `@layer components {
  .av-label {
    @apply text-base font-semibold text-foreground;
  }

  .av-label--invalid {
    @apply text-danger;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'with-required-indicator', title: 'With Required Indicator' },
    { id: 'with-disabled-state', title: 'With Disabled State' },
    { id: 'with-invalid-state', title: 'With Invalid State' },
    { id: 'styling', title: 'Styling' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'api', title: 'API' },
    { id: 'accessibility', title: 'Accessibility' },
  ];
}
