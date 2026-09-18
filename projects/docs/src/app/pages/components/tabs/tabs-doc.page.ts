import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { tabsDemos } from '../../../demos/tabs';

@Component({
  selector: 'app-tabs-doc-page',
  imports: [DocPageComponent, ComponentPreviewComponent, DocApiTableComponent, DocSnippetComponent],
  templateUrl: './tabs-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class TabsDocPage {
  readonly demos = tabsDemos;
  readonly apiProps = getComponentProps('tabs');

  /** Tailwind class customization example. */
  readonly tailwindExample = `<div class="w-full max-w-lg text-center">
  <av-tabs default-selected-key="daily">
    <div
      class="w-fit
        **:data-[slot=tabs-tab]:h-6
        **:data-[slot=tabs-tab]:w-fit
        **:data-[slot=tabs-tab]:px-3
        **:data-[slot=tabs-tab]:text-sm
        **:data-[slot=tabs-tab]:font-normal
        **:data-[slot=tabs-tab]:data-[selected=true]:text-accent-foreground
        **:data-[slot=tabs-indicator]:bg-accent
        **:data-[slot=tabs-indicator]:shadow-none"
      av-tabs-list-container
    >
      <div av-tabs-list aria-label="Options">
        <span av-tabs-indicator></span>
        <button av-tabs-tab id="daily">Daily</button>
        <button av-tabs-tab id="weekly">Weekly</button>
        <button av-tabs-tab id="bi-weekly">Bi-Weekly</button>
        <button av-tabs-tab id="monthly">Monthly</button>
      </div>
    </div>
    <div class="px-4" av-tabs-panel id="daily">
      <h3 class="mb-2 font-semibold">Daily</h3>
      <p class="text-sm text-muted">Manage your daily tasks and goals.</p>
    </div>
    <div class="px-4" av-tabs-panel id="weekly">
      <h3 class="mb-2 font-semibold">Weekly</h3>
      <p class="text-sm text-muted">Manage your weekly tasks and goals.</p>
    </div>
    <div class="px-4" av-tabs-panel id="bi-weekly">
      <h3 class="mb-2 font-semibold">Bi-Weekly</h3>
      <p class="text-sm text-muted">Manage your bi-weekly tasks and goals.</p>
    </div>
    <div class="px-4" av-tabs-panel id="monthly">
      <h3 class="mb-2 font-semibold">Monthly</h3>
      <p class="text-sm text-muted">Manage your monthly tasks and goals.</p>
    </div>
  </av-tabs>
</div>`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'vertical', title: 'Vertical' },
    { id: 'overflow', title: 'Overflow' },
    { id: 'disabled-tab', title: 'Disabled Tab' },
    { id: 'with-separator', title: 'With Separator' },
    { id: 'secondary', title: 'Secondary Variant' },
    { id: 'secondary-vertical', title: 'Secondary Variant Vertical' },
    { id: 'styling', title: 'Styling' },
    { id: 'passing-tailwind-classes', title: 'Passing Tailwind CSS classes', depth: 3 },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'api', title: 'API Reference' },
  ];
}
