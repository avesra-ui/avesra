import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { formDemos } from '../../../demos/form';

@Component({
  selector: 'app-form-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './form-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class FormDocPage {
  readonly demos = formDemos;
  readonly apiProps = getComponentProps('form');

  readonly submitExample = `onSubmit(event: Event): void {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log('Form data:', data);
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'api', title: 'API' },
    { id: 'form-validation', title: 'Form Validation', depth: 2 },
    { id: 'validation-behavior', title: 'Validation Behavior', depth: 3 },
    { id: 'form-submission', title: 'Form Submission', depth: 2 },
    { id: 'integration', title: 'Integration with Form Fields', depth: 2 },
    { id: 'accessibility', title: 'Accessibility', depth: 2 },
  ];
}
