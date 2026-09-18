import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocApiProp } from '../../../models/doc-api-prop.model';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { switchDemos } from '../../../demos/switch';

@Component({
  selector: 'app-switch-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './switch-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class SwitchDocPage {
  readonly demos = switchDemos;
  readonly apiProps = getComponentProps('switch');

  readonly switchGroupApiProps: DocApiProp[] = [
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      default: "'vertical'",
      description: 'Layout direction of grouped switches.',
    },
  ];

  readonly cssOverrideExample = `@layer components {
  .av-switch {
    @apply inline-flex gap-3 items-center;
  }

  .av-switch__control {
    @apply h-5 w-8 bg-gray-400 data-[selected=true]:bg-blue-500;
  }

  .av-switch__thumb {
    @apply bg-white shadow-sm;
  }

  .av-switch__content {
    @apply items-center gap-3;
  }

  .av-switch__icon {
    @apply h-3 w-3 text-current;
  }
}`;

  readonly tailwindGroupExample = `<av-switch-group class="gap-8" orientation="horizontal">
  <div av-switch>
    <span av-switch-control>
      <span av-switch-thumb></span>
    </span>
    <span av-switch-content>Option 1</span>
  </div>
  <div av-switch>
    <span av-switch-control>
      <span av-switch-thumb></span>
    </span>
    <span av-switch-content>Option 2</span>
  </div>
</av-switch-group>`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'with-icons', title: 'With Icons' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'without-label', title: 'Without Label' },
    { id: 'with-description', title: 'With Description' },
    { id: 'default-selected', title: 'Default Selected' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'label-position', title: 'Label Position' },
    { id: 'group', title: 'Group' },
    { id: 'group-horizontal', title: 'Group Horizontal' },
    { id: 'form-integration', title: 'Form Integration' },
    { id: 'render-props', title: 'Render Props' },
    { id: 'custom-styles', title: 'Custom Styles' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
