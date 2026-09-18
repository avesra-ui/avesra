import { Component, inject, signal } from '@angular/core';
import {
  AV_DRAWER_DATA,
  AvButtonComponent,
  AvDrawerImports,
  AvDrawerService,
} from '@avesra/angular';

interface WorkspacePanelData {
  workspace: string;
  members: number;
}

const PANEL_TEMPLATE = `<div av-drawer-dialog>
      <av-drawer-close-trigger />
      <div av-drawer-header>
        <h2 av-drawer-heading>{{ data.workspace }}</h2>
      </div>
      <div av-drawer-body>
        <p>
          This panel was opened with <code>AvDrawerService.open()</code>. It receives
          <code>{{ data.members }}</code> members through the <code>data</code> config and injects
          it with <code>AV_DRAWER_DATA</code>.
        </p>
      </div>
      <div av-drawer-footer>
        <button av-button variant="secondary" [av-drawer-close]="'cancelled'">Cancel</button>
        <button av-button [av-drawer-close]="'invited'">Invite Members</button>
      </div>
    </div>`;

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col gap-4">
      <p class="text-sm text-muted">
        Open any component as a drawer with <code>AvDrawerService.open()</code> — no overlay markup
        in your template.
      </p>
      <button av-button variant="secondary" (click)="openWorkspacePanel()">Open Workspace Panel</button>
      @if (lastResult() !== null) {
        <p class="text-sm text-muted">
          Last result:
          <code class="font-mono text-foreground">{{ lastResult() }}</code>
        </p>
      }
    </div>`;

export const DEMO_NAME = 'drawer-service';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject, signal } from '@angular/core';
import {
  AV_DRAWER_DATA,
  AvButtonComponent,
  AvDrawerImports,
  AvDrawerService,
} from '@avesra/angular';

interface WorkspacePanelData {
  workspace: string;
  members: number;
}

@Component({
  selector: 'app-drawer-service-panel',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: \`${PANEL_TEMPLATE}\`,
})
export class DrawerServicePanel {
  readonly data = inject(AV_DRAWER_DATA) as WorkspacePanelData;
}

@Component({
  selector: 'app-drawer-service-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class DrawerServiceDemo {
  private readonly drawer = inject(AvDrawerService);

  readonly lastResult = signal<string | null>(null);

  openWorkspacePanel(): void {
    this.drawer
      .open<DrawerServicePanel, WorkspacePanelData, string>(DrawerServicePanel, {
        data: { workspace: 'Avesra Design Team', members: 12 },
        placement: 'right',
      })
      .afterClosed()
      .subscribe((result) => {
        this.lastResult.set(result ?? 'dismissed');
      });
  }
}`;

@Component({
  selector: 'app-drawer-service-panel',
  imports: [
    AvDrawerImports,
    AvButtonComponent,
  ],
  template: PANEL_TEMPLATE,
})
export class DrawerServicePanel {
  readonly data = inject(AV_DRAWER_DATA) as WorkspacePanelData;
}

@Component({
  selector: 'app-drawer-service-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class DrawerServiceDemo {
  private readonly drawer = inject(AvDrawerService);

  readonly lastResult = signal<string | null>(null);

  openWorkspacePanel(): void {
    this.drawer
      .open<DrawerServicePanel, WorkspacePanelData, string>(DrawerServicePanel, {
        data: { workspace: 'Avesra Design Team', members: 12 },
        placement: 'right',
      })
      .afterClosed()
      .subscribe((result) => {
        this.lastResult.set(result ?? 'dismissed');
      });
  }
}
