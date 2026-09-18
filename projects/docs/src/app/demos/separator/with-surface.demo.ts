import { Component } from '@angular/core';
import { AvSeparatorImports, AvSurfaceComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-8">
  <div class="flex flex-col gap-2">
    <div av-surface variant="default" class="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6">
      <h3 class="text-base font-semibold text-foreground">Default Surface</h3>
      <hr av-separator />
      <p class="text-sm text-muted">Surface Content</p>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <div av-surface variant="secondary" class="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6">
      <h3 class="text-base font-semibold text-foreground">Secondary Surface</h3>
      <hr av-separator variant="secondary" />
      <p class="text-sm text-muted">Surface Content</p>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <div av-surface variant="tertiary" class="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6">
      <h3 class="text-base font-semibold text-foreground">Tertiary Surface</h3>
      <hr av-separator variant="tertiary" />
      <p class="text-sm text-muted">Surface Content</p>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <div
      av-surface
      variant="transparent"
      class="flex min-w-[320px] flex-col gap-3 rounded-3xl border border-border p-6"
    >
      <h3 class="text-base font-semibold text-foreground">Transparent Surface</h3>
      <hr av-separator />
      <p class="text-sm text-muted">Surface Content</p>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'separator-with-surface';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSeparatorImports, AvSurfaceComponent } from '@avesra/angular';

@Component({
  selector: 'app-separator-with-surface-demo',
  imports: [AvSeparatorImports, AvSurfaceComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class SeparatorWithSurfaceDemo {}`;

@Component({
  selector: 'app-separator-with-surface-demo',
  imports: [AvSeparatorImports, AvSurfaceComponent],
  template: DEMO_TEMPLATE,
})
export class SeparatorWithSurfaceDemo {}
