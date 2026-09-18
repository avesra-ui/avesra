import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { listBoxDemos } from '../../../demos/list-box';

@Component({
  selector: 'app-list-box-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './list-box-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ListBoxDocPage {
  readonly demos = listBoxDemos;
  readonly apiProps = getComponentProps('list-box');

  readonly cssOverrideExample = `@layer components {
  .av-list-box {
    @apply rounded-lg border border-border bg-surface p-2;
  }

  .av-list-box-item {
    @apply rounded px-2 py-1 cursor-pointer;
  }

  .av-list-box-item--danger {
    @apply text-danger;
  }

  .av-list-box-item__indicator {
    @apply text-accent;
  }
}`;

  readonly exampleBasic = `<div
  av-list-box
  aria-label="Users"
  selection-mode="single"
  [(selectedKeys)]="selected"
>
  <div av-list-box-item id="1" textValue="Bob">
    <label av-label>Bob</label>
    <p av-description>bob@avesra.dev</p>
    <span av-list-box-item-indicator></span>
  </div>
  <div av-list-box-item id="2" textValue="Alice">
    <label av-label>Alice</label>
    <p av-description>alice@avesra.dev</p>
    <span av-list-box-item-indicator></span>
  </div>
</div>`;

  readonly exampleWithSections = `<div
  av-list-box
  aria-label="Actions"
  selection-mode="none"
  (action)="onAction($event)"
>
  <div av-list-box-section>
    <p class="px-2.5 py-1 text-xs font-medium text-muted">Actions</p>
    <div av-list-box-item id="new" textValue="New file">
      <label av-label>New file</label>
    </div>
    <div av-list-box-item id="edit" textValue="Edit file">
      <label av-label>Edit file</label>
    </div>
  </div>
  <div av-separator></div>
  <div av-list-box-section>
    <p class="px-2.5 py-1 text-xs font-medium text-muted">Danger zone</p>
    <div av-list-box-item id="delete" textValue="Delete" variant="danger">
      <label av-label>Delete</label>
    </div>
  </div>
</div>`;

  readonly exampleControlled = `import { Component, signal } from '@angular/core';
import {
  AvListBoxComponent,
  AvListBoxItemComponent,
  AvListBoxItemIndicatorComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-controlled-list-box',
  imports: [AvListBoxComponent, AvListBoxItemComponent, AvListBoxItemIndicatorComponent],
  template: \`
    <div
      av-list-box
      aria-label="Options"
      selection-mode="multiple"
      [(selectedKeys)]="selected"
    >
      <div av-list-box-item id="1" textValue="Option 1">
        Option 1
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="2" textValue="Option 2">
        Option 2
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-item id="3" textValue="Option 3">
        Option 3
        <span av-list-box-item-indicator></span>
      </div>
    </div>
  \`,
})
export class ControlledListBox {
  readonly selected = signal<string[]>(['1']);
}`;

  readonly exampleCustomIndicator = `<div
  av-list-box
  aria-label="Options"
  selection-mode="multiple"
  [(selectedKeys)]="selected"
>
  <div av-list-box-item id="1" textValue="Option 1">
    Option 1
    <span av-list-box-item-indicator>
      <!-- Projected content replaces the default checkmark -->
      <svg class="size-4 text-accent" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path
          d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
        />
      </svg>
    </span>
  </div>
</div>`;

  readonly toc: DocTocItem[] = [
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'with-disabled-items', title: 'With Disabled Items' },
    { id: 'with-sections', title: 'With Sections' },
    { id: 'multi-select', title: 'Multi Select' },
    { id: 'controlled', title: 'Controlled' },
    { id: 'custom-check-icon', title: 'Custom Check Icon' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 2 },
    { id: 'customizing-classes', title: 'Customizing the component classes', depth: 2 },
    { id: 'css-classes', title: 'CSS Classes', depth: 2 },
    { id: 'interactive-states', title: 'Interactive States', depth: 2 },
    { id: 'examples', title: 'Examples' },
    { id: 'example-basic', title: 'Basic Usage', depth: 2 },
    { id: 'example-with-sections', title: 'With Sections', depth: 2 },
    { id: 'example-controlled', title: 'Controlled Selection', depth: 2 },
    { id: 'example-custom-indicator', title: 'Custom Indicator', depth: 2 },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api', title: 'API' },
  ];
}
