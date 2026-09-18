import { Component } from '@angular/core';

import { AvToggleButtonGroupImports } from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<av-toggle-button-group
  class="gap-1 rounded-xl border border-border/80 bg-surface p-1 shadow-sm"
  selection-mode="multiple"
  aria-label="Text formatting"
>
  <button
    av-toggle-button
    icon-only
    class="rounded-lg text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-accent-soft-foreground"
    value="bold"
    aria-label="Bold"
  >
    <app-icon icon="solar:text-bold-linear" size="16" />
  </button>
  <button
    av-toggle-button
    icon-only
    class="rounded-lg text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-accent-soft-foreground"
    value="italic"
    aria-label="Italic"
  >
    <app-icon icon="solar:text-italic-linear" size="16" />
  </button>
  <button
    av-toggle-button
    icon-only
    class="rounded-lg text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-accent-soft-foreground"
    value="underline"
    aria-label="Underline"
  >
    <app-icon icon="solar:text-underline-linear" size="16" />
  </button>
</av-toggle-button-group>`;

export const DEMO_NAME = 'toggle-button-group-custom-styles';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvToggleButtonGroupImports } from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-toggle-button-group-custom-styles-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: \`
${DEMO_TEMPLATE}
\`,
})
export class ToggleButtonGroupCustomStylesDemo {}`;

@Component({
  selector: 'app-toggle-button-group-custom-styles-demo',
  imports: [AvToggleButtonGroupImports, AppIconComponent],
  template: DEMO_TEMPLATE,
})
export class ToggleButtonGroupCustomStylesDemo {}
