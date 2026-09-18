import { Component } from '@angular/core';

import {
  AvToggleButtonGroupImports,
  AvToolbarComponent,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-toolbar
  class="gap-1 rounded-xl border border-border/80 bg-surface-secondary p-1.5"
  aria-label="Formatting toolbar"
>
  <av-toggle-button-group class="gap-0.5" selection-mode="multiple" aria-label="Text style">
    <button
      av-toggle-button
      icon-only
      class="rounded-lg data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
      value="bold"
      aria-label="Bold"
    >
      <app-icon icon="solar:text-bold-linear" size="16" />
    </button>
    <button
      av-toggle-button
      icon-only
      class="rounded-lg data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
      value="italic"
      aria-label="Italic"
    >
      <app-icon icon="solar:text-italic-linear" size="16" />
    </button>
    <button
      av-toggle-button
      icon-only
      class="rounded-lg data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
      value="underline"
      aria-label="Underline"
    >
      <app-icon icon="solar:text-underline-linear" size="16" />
    </button>
  </av-toggle-button-group>
</av-toolbar>`;

export const DEMO_NAME = 'toolbar-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvToggleButtonGroupImports,
  AvToolbarComponent,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toolbar-custom-styles-demo',
  imports: [
    AvToolbarComponent,
    AvToggleButtonGroupImports,
    AppIconComponent,
  ],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class ToolbarCustomStylesDemo {}`;

@Component({
  selector: 'app-toolbar-custom-styles-demo',
  imports: [
    AvToolbarComponent,
    AvToggleButtonGroupImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class ToolbarCustomStylesDemo {}
