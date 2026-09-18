import { Component, inject, signal } from '@angular/core';
import {
  AV_MODAL_DATA,
  AvButtonComponent,
  AvModalImports,
  AvModalService,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

interface WorkspacePanelData {
  workspace: string;
  members: number;
}

const PANEL_TEMPLATE = `<div av-modal-dialog>
      <av-modal-close-trigger />
      <div av-modal-header>
        <div av-modal-icon class="bg-accent-soft text-accent-soft-foreground">
          <app-icon icon="solar:users-group-rounded-linear" size="20" />
        </div>
        <h2 av-modal-heading>{{ data.workspace }}</h2>
      </div>
      <div av-modal-body>
        <p>
          This panel was opened with <code>AvModalService.open()</code>. It receives
          <code>{{ data.members }}</code> members through the <code>data</code> config and injects
          it with <code>AV_MODAL_DATA</code>.
        </p>
      </div>
      <div av-modal-footer>
        <button av-button variant="secondary" [av-modal-close]="'cancelled'">Cancel</button>
        <button av-button [av-modal-close]="'invited'">Invite Members</button>
      </div>
    </div>`;

const DEMO_TEMPLATE = `<div class="flex max-w-md flex-col gap-4">
      <p class="text-sm text-muted">
        Open any component as a modal with <code>AvModalService.open()</code> — no overlay markup
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

export const DEMO_NAME = 'modal-service';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, inject, signal } from '@angular/core';
import {
  AV_MODAL_DATA,
  AvButtonComponent,
  AvModalImports,
  AvModalService,
} from '@avesra/angular';
import { AppIconComponent } from '../../components/app-icon/app-icon.component';

interface WorkspacePanelData {
  workspace: string;
  members: number;
}

@Component({
  selector: 'app-modal-service-panel',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: \`${PANEL_TEMPLATE}\`,
})
export class ModalServicePanel {
  readonly data = inject(AV_MODAL_DATA) as WorkspacePanelData;
}

@Component({
  selector: 'app-modal-service-demo',
  imports: [AvButtonComponent],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ModalServiceDemo {
  private readonly modal = inject(AvModalService);

  readonly lastResult = signal<string | null>(null);

  openWorkspacePanel(): void {
    this.modal
      .open<ModalServicePanel, WorkspacePanelData, string>(ModalServicePanel, {
        data: { workspace: 'Avesra Design Team', members: 12 },
        size: 'sm',
      })
      .afterClosed()
      .subscribe((result) => {
        this.lastResult.set(result ?? 'dismissed');
      });
  }
}`;

@Component({
  selector: 'app-modal-service-panel',
  imports: [
    AppIconComponent,
    AvModalImports,
    AvButtonComponent,
  ],
  template: PANEL_TEMPLATE,
})
export class ModalServicePanel {
  readonly data = inject(AV_MODAL_DATA) as WorkspacePanelData;
}

@Component({
  selector: 'app-modal-service-demo',
  imports: [AvButtonComponent],
  template: DEMO_TEMPLATE,
})
export class ModalServiceDemo {
  private readonly modal = inject(AvModalService);

  readonly lastResult = signal<string | null>(null);

  openWorkspacePanel(): void {
    this.modal
      .open<ModalServicePanel, WorkspacePanelData, string>(ModalServicePanel, {
        data: { workspace: 'Avesra Design Team', members: 12 },
        size: 'sm',
      })
      .afterClosed()
      .subscribe((result) => {
        this.lastResult.set(result ?? 'dismissed');
      });
  }
}
