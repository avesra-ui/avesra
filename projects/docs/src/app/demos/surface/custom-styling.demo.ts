import { Component } from '@angular/core';
import { AvSurfaceComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div
  av-surface
  variant="default"
  class="w-full max-w-sm rounded-xl border border-accent/15 bg-linear-to-br from-accent/8 via-surface to-surface-secondary p-4"
>
  <h3 class="text-sm font-semibold text-foreground">Billing overview</h3>
  <p class="text-sm text-muted">View invoices and payment methods in one place.</p>
</div>`;

export const DEMO_NAME = 'surface-custom-styling';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvSurfaceComponent } from '@avesra/angular';

@Component({
  selector: 'app-surface-custom-styling-demo',
  imports: [AvSurfaceComponent],
  host: { class: 'block' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class SurfaceCustomStylingDemo {}`;

@Component({
  selector: 'app-surface-custom-styling-demo',
  imports: [AvSurfaceComponent],
  host: { class: 'block' },
  template: DEMO_TEMPLATE,
})
export class SurfaceCustomStylingDemo {}
