import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { closeButtonDemos } from '../../../demos/close-button';


@Component({
  selector: 'app-close-button-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './close-button-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class CloseButtonDocPage {
  readonly demos = closeButtonDemos;
  readonly apiProps = getComponentProps('close-button');

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'interactive', title: 'Interactive' },
    { id: 'with-custom-icon', title: 'With Custom Icon' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'pending', title: 'Pending' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'styling', title: 'Styling' },
    { id: 'custom-styling', title: 'Custom Styling', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'accessibility', title: 'Accessibility', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
