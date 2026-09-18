import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { checkboxGroupDemos } from '../../../demos/checkbox-group';


@Component({
  selector: 'app-checkbox-group-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './checkbox-group-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class CheckboxGroupDocPage {
  readonly demos = checkboxGroupDemos;
  readonly apiProps = getComponentProps('checkbox-group');

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'in-surface', title: 'In Surface' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'indeterminate', title: 'Indeterminate' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'validation', title: 'Validation' },
    { id: 'features-and-addons', title: 'Features and Add-ons Example' },
    { id: 'with-custom-indicator', title: 'With Custom Indicator' },
    { id: 'reactive-form', title: 'Reactive form' },
    { id: 'styling', title: 'Styling' },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'accessibility', title: 'Accessibility', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
