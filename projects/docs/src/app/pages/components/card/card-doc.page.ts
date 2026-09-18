import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { cardDemos } from '../../../demos/card';

@Component({
  selector: 'app-card-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './card-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class CardDocPage {
  readonly demos = cardDemos;
  readonly apiProps = getComponentProps('card');

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'horizontal-layout', title: 'Horizontal Layout' },
    { id: 'with-avatar', title: 'With Avatar' },
    { id: 'with-images', title: 'With Images' },
    { id: 'with-form', title: 'With Form' },
    { id: 'styling', title: 'Styling', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'accessibility', title: 'Accessibility', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
