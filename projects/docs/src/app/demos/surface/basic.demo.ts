import { Component } from '@angular/core';
import { AvSurfaceComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-surface
  variant="default"
  class="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6"
>
  <h3 class="text-base font-semibold text-foreground">Surface Content</h3>
  <p class="text-sm text-muted">
    This is a default surface variant. It uses bg-surface styling.
  </p>
</div>`;

export const DEMO_NAME = 'surface-basic';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSurfaceComponent } from '@avesra/angular';

@Component({
  selector: 'app-surface-basic-demo',
  imports: [AvSurfaceComponent],
  host: { class: 'block' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SurfaceBasicDemo {}`;

@Component({
  selector: 'app-surface-basic-demo',
  imports: [AvSurfaceComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SurfaceBasicDemo {}
