import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { errorMessageDemos } from '../../../demos/error-message';

@Component({
  selector: 'app-error-message-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './error-message-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ErrorMessageDocPage {
  readonly demos = errorMessageDemos;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'when-to-use', title: 'When to Use' },
    { id: 'error-message-vs-field-error', title: 'ErrorMessage vs FieldError' },
    { id: 'styling', title: 'Styling' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
  ];
}
