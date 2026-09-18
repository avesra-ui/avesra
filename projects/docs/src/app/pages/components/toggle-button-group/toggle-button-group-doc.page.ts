import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocApiProp } from '../../../models/doc-api-prop.model';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { toggleButtonGroupDemos } from '../../../demos/toggle-button-group';

@Component({
  selector: 'app-toggle-button-group-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './toggle-button-group-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ToggleButtonGroupDocPage {
  readonly demos = toggleButtonGroupDemos;
  readonly apiProps = getComponentProps('toggle-button-group');

  readonly separatorProps: DocApiProp[] = [
    {
      name: '(host)',
      type: 'span[av-toggle-button-group-separator]',
      description:
        'Decorative divider. Place inside each toggle button except the first. Hidden automatically in detached mode.',
    },
  ];

  readonly globalCssExample = `@layer components {
  .av-toggle-button-group {
    @apply rounded-lg;
  }

  .av-toggle-button-group__separator {
    @apply opacity-25;
  }

  .av-toggle-button-group--full-width {
    @apply w-full;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'orientation', title: 'Orientation' },
    { id: 'full-width', title: 'Full Width' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'without-separator', title: 'Without Separator' },
    { id: 'detached', title: 'Detached' },
    { id: 'selection-mode', title: 'Selection Mode' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'disallow-empty-selection', title: 'Disallow Empty Selection' },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 3 },
    { id: 'global-css', title: 'Global CSS', depth: 3 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'api', title: 'API Reference' },
    { id: 'notes', title: 'Notes' },
  ];
}
