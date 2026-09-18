import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { checkboxDemos } from '../../../demos/checkbox';

@Component({
  selector: 'app-checkbox-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './checkbox-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class CheckboxDocPage {
  readonly demos = checkboxDemos;
  readonly apiProps = getComponentProps('checkbox');

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'external-label', title: 'External Label' },
    { id: 'with-description', title: 'With Description' },
    { id: 'default-selected', title: 'Default Selected' },
    { id: 'invalid', title: 'Invalid' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'indeterminate', title: 'Indeterminate' },
    { id: 'form-integration', title: 'Form Integration' },
    { id: 'reactive-form-indeterminate', title: 'Reactive Form — Indeterminate' },
    { id: 'validation', title: 'Validation' },
    { id: 'custom-indicator', title: 'Custom Indicator' },
    { id: 'styling', title: 'Styling' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'accessibility', title: 'Accessibility', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
