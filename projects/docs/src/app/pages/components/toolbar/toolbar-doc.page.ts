import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { toolbarDemos } from '../../../demos/toolbar';

@Component({
  selector: 'app-toolbar-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './toolbar-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ToolbarDocPage {
  readonly demos = toolbarDemos;
  readonly apiProps = getComponentProps('toolbar');

  readonly globalCssExample = `@layer components {
  .av-toolbar {
    @apply gap-4 rounded-lg bg-surface p-3;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'vertical', title: 'Vertical' },
    { id: 'attached', title: 'Attached' },
    { id: 'with-button-group', title: 'With ButtonGroup' },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 3 },
    { id: 'global-css', title: 'Global CSS', depth: 3 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'api', title: 'API Reference' },
  ];
}
