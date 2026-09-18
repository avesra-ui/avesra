import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { disclosureGroupDemos } from '../../../demos/disclosure-group';

@Component({
  selector: 'app-disclosure-group-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './disclosure-group-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class DisclosureGroupDocPage {
  readonly demos = disclosureGroupDemos;
  readonly apiProps = getComponentProps('disclosure-group');

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'styling', title: 'Styling', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'accessibility', title: 'Accessibility', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
