import { Component, computed, signal } from '@angular/core';

import { AvCloseButtonComponent } from '@avesra/angular';

const DEMO_TEMPLATE = `<div class="flex flex-col items-center justify-center gap-4">
  <button
    av-close-button
    [attr.aria-label]="ariaLabel()"
    (click)="increment()"
  ></button>
  <span class="text-sm text-muted">Clicked: {{ count() }} times</span>
</div>`;

export const DEMO_NAME = 'close-button-interactive';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, computed, signal } from '@angular/core';
import { AvCloseButtonComponent } from '@avesra/angular';

@Component({
  selector: 'app-close-button-interactive-demo',
  imports: [AvCloseButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CloseButtonInteractiveDemo {
  readonly count = signal(0);
  readonly ariaLabel = computed(() => \`Close (clicked \${this.count()} times)\`);

  increment(): void {
    this.count.update((value) => value + 1);
  }
}`;

@Component({
  selector: 'app-close-button-interactive-demo',
  imports: [AvCloseButtonComponent],
  template: DEMO_TEMPLATE,
})
export class CloseButtonInteractiveDemo {
  readonly count = signal(0);
  readonly ariaLabel = computed(() => `Close (clicked ${this.count()} times)`);

  increment(): void {
    this.count.update((value) => value + 1);
  }
}
