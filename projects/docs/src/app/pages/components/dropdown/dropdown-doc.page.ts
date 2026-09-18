import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { dropdownDemos } from '../../../demos/dropdown';

@Component({
  selector: 'app-dropdown-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './dropdown-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class DropdownDocPage {
  readonly demos = dropdownDemos;
  readonly apiProps = getComponentProps('dropdown');

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'with-icons', title: 'With Icons' },
    { id: 'with-descriptions', title: 'With Descriptions' },
    { id: 'with-disabled-items', title: 'With Disabled Items' },
    { id: 'with-sections', title: 'With Sections' },
    { id: 'multiple-selection', title: 'With Multiple Selection' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'controlled-open-state', title: 'Controlled Open State' },
    { id: 'single-selection', title: 'With Single Selection' },
    { id: 'single-custom-indicator', title: 'Single With Custom Indicator' },
    { id: 'with-keyboard-shortcuts', title: 'With Keyboard Shortcuts' },
    { id: 'custom-trigger', title: 'Custom Trigger' },
    { id: 'styling', title: 'Styling', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'menu-classes', title: 'Menu Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'examples', title: 'Examples', depth: 2 },
    { id: 'accessibility', title: 'Accessibility', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
