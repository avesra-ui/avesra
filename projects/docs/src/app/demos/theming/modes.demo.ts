import { Component, inject } from '@angular/core';

import { AvButtonComponent } from '@avesra/angular';
import { AvThemeService } from '@avesra/styles';

export const DEMO_NAME = 'theming-modes';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject } from '@angular/core';
import { AvButtonComponent } from '@avesra/angular';
import { AvThemeService } from '@avesra/styles';

@Component({
  imports: [AvButtonComponent],
  template: \`
    <div class="flex flex-wrap gap-2">
      <button av-button size="sm" (click)="theme.setMode('light')">Light</button>
      <button av-button size="sm" (click)="theme.setMode('dark')">Dark</button>
      <button av-button size="sm" (click)="theme.setMode('system')">System</button>
    </div>
  \`,
})
export class ThemingModesDemo {
  readonly theme = inject(AvThemeService);
}`;

@Component({
  selector: 'app-theming-modes-demo',
  imports: [AvButtonComponent],
  template: `
    <div class="flex flex-col gap-4 rounded-xl border border-border bg-surface p-4">
      <div class="grid gap-3 sm:grid-cols-3">
        <div class="rounded-lg bg-background p-3">
          <p class="text-xs text-muted">background</p>
          <p class="text-sm font-medium text-foreground">Sample text</p>
        </div>
        <div class="rounded-lg bg-accent p-3">
          <p class="text-xs text-accent-foreground/80">accent</p>
          <p class="text-sm font-medium text-accent-foreground">Accent text</p>
        </div>
        <div class="rounded-lg border border-border bg-default p-3">
          <p class="text-xs text-muted">default</p>
          <p class="text-sm font-medium text-default-foreground">Default surface</p>
        </div>
      </div>
      <p class="text-sm text-muted">
        Mode: <strong class="text-foreground">{{ theme.mode() }}</strong>
        · Scheme:
        <strong class="text-foreground">{{ theme.colorScheme() }}</strong>
        · Design:
        <strong class="text-foreground">{{ theme.designTheme() }}</strong>
      </p>
      <div class="flex flex-wrap gap-2">
        <button av-button size="sm" variant="secondary" (click)="theme.setMode('light')">Light</button>
        <button av-button size="sm" variant="secondary" (click)="theme.setMode('dark')">Dark</button>
        <button av-button size="sm" variant="tertiary" (click)="theme.setMode('system')">System</button>
      </div>
    </div>
  `,
})
export class ThemingModesDemo {
  readonly theme = inject(AvThemeService);
}
