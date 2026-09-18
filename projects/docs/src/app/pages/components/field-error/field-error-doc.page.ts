import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { fieldErrorDemos } from '../../../demos/field-error';


@Component({
  selector: 'app-field-error-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
  ],
  templateUrl: './field-error-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class FieldErrorDocPage {
  readonly demos = fieldErrorDemos;
  readonly apiProps = getComponentProps('field-error');

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'basic-validation', title: 'Basic Validation' },
    { id: 'dynamic-messages', title: 'Dynamic Messages' },
    { id: 'multiple-errors', title: 'Multiple Error Messages' },
    { id: 'styling', title: 'Styling' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api', title: 'API' },
  ];
}
