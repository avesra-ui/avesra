import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { inputGroupDemos } from '../../../demos/input-group';

@Component({
  selector: 'app-input-group-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
    RouterLink,
  ],
  templateUrl: './input-group-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class InputGroupDocPage {
  readonly demos = inputGroupDemos;
  readonly apiProps = getComponentProps('input-group');

  readonly cssOverrideExample = `@layer components {
  .av-input-group {
    @apply bg-field text-field-foreground shadow-field rounded-field inline-flex min-h-9 items-center overflow-hidden border text-sm outline-none;
  }

  .av-input-group__input {
    @apply flex-1 rounded-none border-0 bg-transparent px-3 py-2 shadow-none outline-none;
  }

  .av-input-group__prefix {
    @apply text-field-placeholder flex h-full items-center justify-center bg-transparent px-3;
  }

  .av-input-group__suffix {
    @apply text-field-placeholder flex h-full items-center justify-center bg-transparent px-3;
  }

  .av-input-group--secondary {
    @apply shadow-none;
    background-color: var(--color-default);
  }
}`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'in-surface', title: 'In Surface' },
    { id: 'loading-state', title: 'Loading State' },
    { id: 'required-field', title: 'Required Field' },
    { id: 'disabled-state', title: 'Disabled State' },
    { id: 'full-width', title: 'Full Width' },
    { id: 'text-prefix', title: 'Text Prefix' },
    { id: 'text-suffix', title: 'Text Suffix' },
    { id: 'icon-prefix-and-text-suffix', title: 'Icon Prefix and Text Suffix' },
    { id: 'copy-button-suffix', title: 'Copy Button Suffix' },
    { id: 'icon-prefix-and-copy-button', title: 'Icon Prefix and Copy Button' },
    { id: 'password-toggle', title: 'Password Toggle' },
    { id: 'keyboard-shortcut', title: 'Keyboard Shortcut' },
    { id: 'badge-suffix', title: 'Badge Suffix' },
    { id: 'validation', title: 'Validation' },
    { id: 'with-prefix-icon', title: 'With Prefix Icon' },
    { id: 'with-suffix-icon', title: 'With Suffix Icon' },
    { id: 'with-prefix-and-suffix', title: 'With Prefix and Suffix' },
    { id: 'with-textarea', title: 'With TextArea' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'api', title: 'API' },
  ];
}
