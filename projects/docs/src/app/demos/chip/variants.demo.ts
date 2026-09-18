import { Component } from '@angular/core';

import {
  AvChipImports,
  AvSeparatorImports,
} from '@avesra/angular';

type ChipDemoColor = 'accent' | 'default' | 'success' | 'warning' | 'danger';
type ChipDemoVariant = 'primary' | 'secondary' | 'tertiary' | 'soft';
type ChipDemoSize = 'sm' | 'md' | 'lg';

const DEMO_TEMPLATE = `<div class="w-full min-w-0 overflow-x-auto">
      <div class="flex w-max min-w-full flex-col gap-8">
        @for (size of sizes; track size; let last = $last) {
          <div class="flex flex-col gap-4">
            <h3 class="text-sm font-semibold text-muted capitalize">{{ size }}</h3>
            <div class="flex items-center gap-3">
              <div class="w-24 shrink-0"></div>
              @for (color of colors; track color) {
                <div class="flex w-[130px] shrink-0 items-center justify-center">
                  <span class="text-xs text-muted capitalize">{{ color }}</span>
                </div>
              }
            </div>
            <div class="flex flex-col gap-3">
              @for (variant of variants; track variant) {
                <div class="flex items-center gap-3">
                  <div class="w-24 shrink-0 text-sm text-muted capitalize">{{ variant }}</div>
                  @for (color of colors; track color) {
                    <div class="flex w-[130px] shrink-0 items-center justify-center">
                      <span av-chip [color]="color" [size]="size" [variant]="variant">
                        <svg class="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle
                            cx="8"
                            cy="8"
                            r="6"
                            stroke="currentColor"
                            stroke-dasharray="2 2"
                          />
                        </svg>
                        <span av-chip-label>Label</span>
                        <svg class="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle
                            cx="8"
                            cy="8"
                            r="6"
                            stroke="currentColor"
                            stroke-dasharray="2 2"
                          />
                        </svg>
                      </span>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
          @if (!last) {
            <hr av-separator />
          }
        }
      </div>
    </div>`;

export const DEMO_NAME = 'chip-variants';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvChipImports,
  AvSeparatorImports,
} from '@avesra/angular';

@Component({
  selector: 'app-chip-variants-demo',
  imports: [AvChipImports, AvSeparatorImports],
  host: { class: 'block w-full min-w-0' },
  template: \`${DEMO_TEMPLATE}\`,
})
export class ChipVariantsDemo {
  readonly sizes: Array<'lg' | 'md' | 'sm'> = ['lg', 'md', 'sm'];
  readonly variants: Array<'primary' | 'secondary' | 'tertiary' | 'soft'> = [
    'primary',
    'secondary',
    'tertiary',
    'soft',
  ];
  readonly colors: Array<'accent' | 'default' | 'success' | 'warning' | 'danger'> = [
    'accent',
    'default',
    'success',
    'warning',
    'danger',
  ];
}`;

@Component({
  selector: 'app-chip-variants-demo',
  imports: [AvChipImports, AvSeparatorImports],
  host: { class: 'block w-full min-w-0' },
  template: DEMO_TEMPLATE,
})
export class ChipVariantsDemo {
  readonly sizes: ChipDemoSize[] = ['lg', 'md', 'sm'];
  readonly variants: ChipDemoVariant[] = ['primary', 'secondary', 'tertiary', 'soft'];
  readonly colors: ChipDemoColor[] = ['accent', 'default', 'success', 'warning', 'danger'];
}
