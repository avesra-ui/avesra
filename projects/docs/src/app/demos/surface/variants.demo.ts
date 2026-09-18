import { Component } from '@angular/core';
import { AvSurfaceComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <p class="text-sm font-medium text-muted">Default</p>
    <div
      av-surface
      variant="default"
      class="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6"
    >
      <h3 class="text-base font-semibold text-foreground">Surface Content</h3>
      <p class="text-sm text-muted">
        This is a default surface variant. It uses bg-surface styling.
      </p>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <p class="text-sm font-medium text-muted">Secondary</p>
    <div
      av-surface
      variant="secondary"
      class="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6"
    >
      <h3 class="text-base font-semibold text-foreground">Surface Content</h3>
      <p class="text-sm text-muted">
        This is a secondary surface variant. It uses bg-surface-secondary styling.
      </p>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <p class="text-sm font-medium text-muted">Tertiary</p>
    <div
      av-surface
      variant="tertiary"
      class="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6"
    >
      <h3 class="text-base font-semibold text-foreground">Surface Content</h3>
      <p class="text-sm text-muted">
        This is a tertiary surface variant. It uses bg-surface-tertiary styling.
      </p>
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <p class="text-sm font-medium text-muted">Transparent</p>
    <div
      av-surface
      variant="transparent"
      class="flex min-w-[320px] flex-col gap-3 rounded-3xl border p-6"
    >
      <h3 class="text-base font-semibold text-foreground">Surface Content</h3>
      <p class="text-sm text-muted">
        This is a transparent surface variant. It has no background, suitable for overlays and
        cards with custom backgrounds.
      </p>
    </div>
  </div>
</div>`;

export const DEMO_NAME = 'surface-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSurfaceComponent } from '@avesra/angular';

@Component({
  selector: 'app-surface-variants-demo',
  imports: [AvSurfaceComponent],
  host: { class: 'block' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SurfaceVariantsDemo {}`;

@Component({
  selector: 'app-surface-variants-demo',
  imports: [AvSurfaceComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SurfaceVariantsDemo {}
