import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocApiProp } from '../../../models/doc-api-prop.model';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { tagGroupDemos } from '../../../demos/tag-group';

@Component({
  selector: 'app-tag-group-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './tag-group-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class TagGroupDocPage {
  readonly demos = tagGroupDemos;
  readonly apiProps = getComponentProps('tag-group');

  readonly tagProps: DocApiProp[] = [
    {
      name: 'value',
      type: 'string',
      description: 'Unique key for the tag (used for selection and remove).',
    },
    {
      name: 'text-value',
      type: 'string',
      description: 'Accessible text representation when the tag has complex content.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Tag size. Inherits from `av-tag-group` when omitted.',
    },
    {
      name: 'variant',
      type: "'default' | 'surface'",
      description: 'Visual variant. Inherits from `av-tag-group` when omitted.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether this tag is disabled.',
    },
  ];

  readonly removeButtonProps: DocApiProp[] = [
    {
      name: 'aria-label',
      type: 'string',
      default: "'Remove tag'",
      description: 'Accessible label for the remove action.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the remove button.',
    },
    {
      name: 'useDefaultIcon',
      type: 'boolean',
      default: 'true',
      description: 'Renders the built-in close icon when true.',
    },
  ];

  /** Tailwind customization example. */
  readonly tailwindExample = `<av-tag-group
  class="**:data-[slot=tag]:rounded-full **:data-[slot=tag]:px-3"
  selection-mode="single"
>
  <div class="gap-2" av-tag-group-list>
    <div av-tag value="news">News</div>
    <div av-tag value="travel">Travel</div>
  </div>
</av-tag-group>`;

  readonly globalCssExample = `@layer components {
  .av-tag-group {
    @apply flex flex-col gap-2;
  }

  .av-tag-group__list {
    @apply flex flex-wrap gap-2;
  }

  .av-tag {
    @apply rounded-full px-3 py-1;
  }

  .av-tag__remove-button {
    @apply ms-1;
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'sizes', title: 'Sizes' },
    { id: 'variants', title: 'Variants' },
    { id: 'disabled', title: 'Disabled' },
    { id: 'selection-modes', title: 'Selection Modes' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'with-error-message', title: 'With Error Message' },
    { id: 'with-list-data', title: 'With List Data' },
    { id: 'with-prefix', title: 'With Prefix' },
    { id: 'with-remove-button', title: 'With Remove Button' },
    { id: 'customization', title: 'Customization' },
    { id: 'tailwind-css', title: 'Tailwind CSS', depth: 3 },
    { id: 'global-css', title: 'Global CSS', depth: 3 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'api', title: 'API Reference' },
  ];
}
