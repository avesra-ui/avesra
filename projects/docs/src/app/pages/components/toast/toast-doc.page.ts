import { Component } from '@angular/core';

import { ComponentPreviewComponent } from '../../../components/component-preview/component-preview.component';
import { DocSnippetComponent } from '../../../components/doc-snippet/doc-snippet.component';
import { DocApiTableComponent } from '../../../components/doc-api-table/doc-api-table.component';
import { DocPageComponent } from '../../../components/doc-page/doc-page.component';
import { getComponentProps } from '../../../config/docs-components.config';
import type { DocApiProp } from '../../../models/doc-api-prop.model';
import type { DocTocItem } from '../../../models/doc-toc.model';
import { toastDemos } from '../../../demos/toast';

@Component({
  selector: 'app-toast-doc-page',
  imports: [
    DocPageComponent,
    ComponentPreviewComponent,
    DocApiTableComponent,
    DocSnippetComponent,
  ],
  templateUrl: './toast-doc.page.html',
  styleUrl: '../../shared/doc-prose.scss',
})
export class ToastDocPage {
  readonly demos = toastDemos;
  readonly regionProps = getComponentProps('toast').filter((prop) =>
    [
      'key',
      'life',
      'placement',
      'max-visible-toasts',
      'width',
      'gap',
      'scale-factor',
      'expand',
      'swipe-threshold',
      'prevent-duplicates',
      'closed',
    ].includes(prop.name),
  );

  readonly serviceProps = getComponentProps('toast').filter((prop) =>
    [
      'add',
      'addAll',
      'update',
      'promise',
      'clear',
      'close',
      'success',
      'danger',
      'info',
      'warning',
    ].includes(prop.name),
  );

  readonly toastOptionsProps: DocApiProp[] = [
    {
      name: 'description',
      type: 'string',
      description: 'Optional description text under the title.',
    },
    {
      name: 'variant',
      type: "'default' | 'accent' | 'success' | 'warning' | 'danger'",
      default: "'default'",
      description: 'Visual variant of the toast.',
    },
    {
      name: 'key',
      type: 'string',
      description: 'Routes the toast to a matching `av-toast` region key.',
    },
    {
      name: 'life',
      type: 'number',
      default: '4000',
      description:
        'Auto-dismiss timeout in milliseconds. Set to `0` (or use `sticky: true`) for persistent toasts.',
    },
    {
      name: 'sticky',
      type: 'boolean',
      default: 'false',
      description: 'Keeps the toast until dismissed.',
    },
    {
      name: 'closable',
      type: 'boolean',
      default: 'true',
      description: 'Shows the close button when true.',
    },
    {
      name: 'isLoading',
      type: 'boolean',
      default: 'false',
      description: 'Shows a loading spinner instead of the variant indicator.',
    },
    {
      name: 'hideIndicator',
      type: 'boolean',
      default: 'false',
      description: 'Hides the default variant indicator.',
    },
    {
      name: 'actionLabel',
      type: 'string',
      description: 'Label for the optional action button.',
    },
    {
      name: 'action',
      type: '() => void',
      description: 'Callback when the action button is pressed.',
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Callback when the toast is closed.',
    },
  ];

  readonly setupExample = `import { Component, inject } from '@angular/core';
import {
  provideAvesraToast,
  AvButtonComponent,
  AvToastComponent,
  AvToastService,
} from '@avesra/angular';

// app.config.ts
// providers: [provideAvesraToast()]

@Component({
  selector: 'app-root',
  imports: [AvButtonComponent, AvToastComponent],
  providers: [AvToastService], // or provideAvesraToast() in app.config
  template: \`
    <button av-button (click)="show()">Show toast</button>
    <av-toast placement="bottom" />
  \`,
})
export class App {
  private readonly toast = inject(AvToastService);

  show(): void {
    this.toast.add('Simple message');
  }
}`;

  readonly globalCssExample = `@layer components {
  .av-toast {
    @apply rounded-xl shadow-lg;
  }

  .av-toast__content {
    @apply gap-2;
  }
}`;

  readonly toastMethodExample = `private readonly toast = inject(AvToastService);

// Basic toast (auto-dismisses after 4 seconds by default)
this.toast.add('Event has been created');

// Variant helpers (also auto-dismiss after 4 seconds by default)
this.toast.success('File saved');
this.toast.info('New update available');
this.toast.warning('Please check your settings');
this.toast.danger('Something went wrong');

// With options
this.toast.add('Event has been created', {
  description: 'Your event has been scheduled for tomorrow',
  variant: 'default',
  life: 5000,
  onClose: () => console.log('Closed'),
  actionLabel: 'View',
  action: () => undefined,
});

// Manual loading state (persistent toast — no auto-dismiss)
const loadingId = this.toast.add('Creating event...', {
  isLoading: true,
  life: 0,
  sticky: true,
  closable: false,
});

// Later, close and show result
this.toast.close(loadingId);
this.toast.success('Event created');

// Or use promise() for the common async flow
this.toast.promise(save(), {
  loading: 'Saving…',
  success: (name) => \`Saved \${name}\`,
  error: 'Could not save',
});

// Queue helpers
this.toast.close(id);
this.toast.clear();
this.toast.clear('queue-errors');`;

  readonly toc: DocTocItem[] = [
    { id: 'import', title: 'Import' },
    { id: 'usage', title: 'Usage' },
    { id: 'anatomy', title: 'Anatomy' },
    { id: 'variants', title: 'Variants' },
    { id: 'placements', title: 'Placements' },
    { id: 'simple', title: 'Simple Toasts' },
    { id: 'hide-indicator', title: 'Custom Indicators' },
    { id: 'promise', title: 'Promise & Loading' },
    { id: 'loading', title: 'Loading' },
    { id: 'hover-expand', title: 'Hover Expand' },
    { id: 'callbacks', title: 'Callbacks' },
    { id: 'custom-queues', title: 'Custom Queues' },
    { id: 'setup', title: 'Setup' },
    { id: 'customization', title: 'Customization' },
    { id: 'global-css', title: 'Global CSS', depth: 3 },
    { id: 'styling', title: 'Styling Reference' },
    { id: 'css-classes', title: 'CSS Classes', depth: 3 },
    { id: 'interactive-states', title: 'Interactive States', depth: 3 },
    { id: 'api', title: 'API Reference' },
  ];
}
