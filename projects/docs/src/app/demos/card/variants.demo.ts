import { Component } from '@angular/core';

import { AvCardImports } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col gap-4">
      <div av-card class="w-[320px]" variant="transparent">
        <div av-card-header>
          <h3 av-card-title>Transparent</h3>
          <p av-card-description>Minimal prominence with transparent background</p>
        </div>
        <div av-card-content>
          <p>Use for less important content or nested cards</p>
        </div>
      </div>

      <div av-card class="w-[320px]" variant="default">
        <div av-card-header>
          <h3 av-card-title>Default</h3>
          <p av-card-description>Standard card appearance (bg-surface)</p>
        </div>
        <div av-card-content>
          <p>The default card variant for most use cases</p>
        </div>
      </div>

      <div av-card class="w-[320px]" variant="secondary">
        <div av-card-header>
          <h3 av-card-title>Secondary</h3>
          <p av-card-description>Medium prominence (bg-surface-secondary)</p>
        </div>
        <div av-card-content>
          <p>Use to draw moderate attention</p>
        </div>
      </div>

      <div av-card class="w-[320px]" variant="tertiary">
        <div av-card-header>
          <h3 av-card-title>Tertiary</h3>
          <p av-card-description>Higher prominence (bg-surface-tertiary)</p>
        </div>
        <div av-card-content>
          <p>Use for primary or featured content</p>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'card-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvCardImports } from '@avesra/angular';

@Component({
  selector: 'app-card-variants-demo',
  imports: [AvCardImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CardVariantsDemo {}`;

@Component({
  selector: 'app-card-variants-demo',
  imports: [AvCardImports],
  template: DEMO_TEMPLATE,
})
export class CardVariantsDemo {}
