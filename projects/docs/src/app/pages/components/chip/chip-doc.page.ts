import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { chipDemos } from '../../../demos/chip';


@Component({
  selector: 'app-chip-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './chip-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ChipDocPage {
  readonly demos = chipDemos;
  readonly apiProps = getComponentProps('chip');

  readonly toc: DocTocItem[] = [
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'usage', title: 'Usage' },
    { id: 'variants', title: 'Variants' },
    { id: 'statuses', title: 'Statuses' },
    { id: 'with-icon', title: 'With Icons' },
    { id: 'styling', title: 'Styling' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
