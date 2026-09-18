import { Component } from '@angular/core';

import { AvTypographyImports, type AvTypographyType } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex w-full flex-col divide-y divide-border">
  @for (row of scale; track row.label) {
    <div class="grid grid-cols-[160px_1fr] items-center gap-8 py-5">
      <div class="flex shrink-0 flex-col gap-0.5">
        <span class="text-sm font-semibold text-foreground">{{ row.label }}</span>
        <span class="text-xs whitespace-nowrap text-muted">{{ row.meta }}</span>
      </div>
      @switch (row.type) {
        @case ('h1') {
          <h1 av-typography [type]="row.type">{{ row.sample }}</h1>
        }
        @case ('h2') {
          <h2 av-typography [type]="row.type">{{ row.sample }}</h2>
        }
        @case ('h3') {
          <h3 av-typography [type]="row.type">{{ row.sample }}</h3>
        }
        @case ('h4') {
          <h4 av-typography [type]="row.type">{{ row.sample }}</h4>
        }
        @case ('h5') {
          <h5 av-typography [type]="row.type">{{ row.sample }}</h5>
        }
        @case ('h6') {
          <h6 av-typography [type]="row.type">{{ row.sample }}</h6>
        }
        @case ('code') {
          <code av-typography type="code">{{ row.sample }}</code>
        }
        @default {
          <p av-typography [type]="row.type">{{ row.sample }}</p>
        }
      }
    </div>
  }
</div>`;

export const DEMO_NAME = 'typography-typography-scale';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import { AvTypographyImports, type AvTypographyType } from '@avesra/angular';

interface ScaleRow {
  label: string;
  meta: string;
  sample: string;
  type: AvTypographyType;
}

@Component({
  selector: 'app-typography-typography-scale-demo',
  imports: [AvTypographyImports],
  template: \`${DEMO_TEMPLATE}\`,
})
export class TypographyTypographyScaleDemo {
  readonly scale: ScaleRow[] = [
    {
      label: 'h1',
      meta: '36px / 600 / 1.11 / tight',
      sample: 'Build better interfaces',
      type: 'h1',
    },
    {
      label: 'h2',
      meta: '30px / 600 / 1.17 / tight',
      sample: 'Built for the intelligence age',
      type: 'h2',
    },
    {
      label: 'h3',
      meta: '24px / 600 / 1.25 / tight',
      sample: 'Pricing on your terms',
      type: 'h3',
    },
    {
      label: 'h4',
      meta: '20px / 600 / 1.33 / tight',
      sample: 'Apply to the startup program',
      type: 'h4',
    },
    {
      label: 'h5',
      meta: '18px / 600 / 1.39 / tight',
      sample: 'Card titles',
      type: 'h5',
    },
    {
      label: 'h6',
      meta: '16px / 600 / 1.50 / tight',
      sample: 'Smaller feature headers',
      type: 'h6',
    },
    {
      label: 'body',
      meta: '16px / 400 / 1.75',
      sample: 'Primary body text used across documentation, marketing copy, and descriptions.',
      type: 'body',
    },
    {
      label: 'body-sm',
      meta: '14px / 400 / 1.50',
      sample: 'Secondary body, table cells, navigation, and sidebar items.',
      type: 'body-sm',
    },
    {
      label: 'body-xs',
      meta: '12px / 400 / 1.25',
      sample: 'Captions, badges, helper text, and fine print.',
      type: 'body-xs',
    },
    {
      label: 'code',
      meta: '14px / mono',
      sample: 'npm install @avesra/angular',
      type: 'code',
    },
  ];
}`;

interface ScaleRow {
  label: string;
  meta: string;
  sample: string;
  type: AvTypographyType;
}

@Component({
  selector: 'app-typography-typography-scale-demo',
  imports: [AvTypographyImports],
  template: DEMO_TEMPLATE,
})
export class TypographyTypographyScaleDemo {
  readonly scale: ScaleRow[] = [
    {
      label: 'h1',
      meta: '36px / 600 / 1.11 / tight',
      sample: 'Build better interfaces',
      type: 'h1',
    },
    {
      label: 'h2',
      meta: '30px / 600 / 1.17 / tight',
      sample: 'Built for the intelligence age',
      type: 'h2',
    },
    {
      label: 'h3',
      meta: '24px / 600 / 1.25 / tight',
      sample: 'Pricing on your terms',
      type: 'h3',
    },
    {
      label: 'h4',
      meta: '20px / 600 / 1.33 / tight',
      sample: 'Apply to the startup program',
      type: 'h4',
    },
    {
      label: 'h5',
      meta: '18px / 600 / 1.39 / tight',
      sample: 'Card titles',
      type: 'h5',
    },
    {
      label: 'h6',
      meta: '16px / 600 / 1.50 / tight',
      sample: 'Smaller feature headers',
      type: 'h6',
    },
    {
      label: 'body',
      meta: '16px / 400 / 1.75',
      sample: 'Primary body text used across documentation, marketing copy, and descriptions.',
      type: 'body',
    },
    {
      label: 'body-sm',
      meta: '14px / 400 / 1.50',
      sample: 'Secondary body, table cells, navigation, and sidebar items.',
      type: 'body-sm',
    },
    {
      label: 'body-xs',
      meta: '12px / 400 / 1.25',
      sample: 'Captions, badges, helper text, and fine print.',
      type: 'body-xs',
    },
    {
      label: 'code',
      meta: '14px / mono',
      sample: 'npm install @avesra/angular',
      type: 'code',
    },
  ];
}
