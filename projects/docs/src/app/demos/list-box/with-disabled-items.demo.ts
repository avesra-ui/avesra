import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvKbdImports,
  AvLabelComponent,
  AvListBoxImports,
  AvSeparatorImports,
  AvSurfaceComponent,
} from '@avesra/angular';

const DEMO_TEMPLATE = `<div av-surface class="w-64 rounded-3xl shadow-surface">
  <div
    av-list-box
    aria-label="File actions"
    selection-mode="none"
    class="w-full p-2"
    (action)="onAction($event)"
  >
    <div av-list-box-section>
      <p class="px-2.5 py-1 text-xs font-medium text-muted">Actions</p>
      <div av-list-box-item id="disabled-new" textValue="New file">
        <div class="flex h-8 items-start justify-center pt-px">
          <svg class="size-4 shrink-0 text-muted" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.75v4.25a.75.75 0 0 1-1.5 0V8.5H3a.75.75 0 0 1 0-1.5h4.25V2.75A.75.75 0 0 1 8 2Z" />
          </svg>
        </div>
        <div class="flex flex-col">
          <label av-label>New file</label>
          <p av-description>Create a new file</p>
        </div>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>N</span>
        </kbd>
      </div>
      <div av-list-box-item id="disabled-edit" textValue="Edit file">
        <div class="flex h-8 items-start justify-center pt-px">
          <svg class="size-4 shrink-0 text-muted" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.757l8.61-8.61Z" />
          </svg>
        </div>
        <div class="flex flex-col">
          <label av-label>Edit file</label>
          <p av-description>Make changes</p>
        </div>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <span av-kbd-content>E</span>
        </kbd>
      </div>
    </div>
    <div av-separator></div>
    <div av-list-box-section>
      <p class="px-2.5 py-1 text-xs font-medium text-muted">Danger zone</p>
      <div av-list-box-item id="disabled-delete" textValue="Delete file" variant="danger" disabled>
        <div class="flex h-8 items-start justify-center pt-px">
          <svg class="size-4 shrink-0 text-danger" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h2.25a.75.75 0 0 1 0 1.5H13v8.25A1.75 1.75 0 0 1 11.25 14.5h-6.5A1.75 1.75 0 0 1 3 12.75V4.5H1.75a.75.75 0 0 1 0-1.5H5V2.5Z" />
          </svg>
        </div>
        <div class="flex flex-col">
          <label av-label>Delete file</label>
          <p av-description>Move to trash</p>
        </div>
        <kbd av-kbd variant="light" class="ms-auto">
          <abbr av-kbd-abbr key-value="command"></abbr>
          <abbr av-kbd-abbr key-value="shift"></abbr>
          <span av-kbd-content>D</span>
        </kbd>
      </div>
    </div>
  </div>
</div>
@if (lastAction()) {
  <p class="mt-3 text-sm text-muted">Last action: {{ lastAction() }}</p>
}`;

export const DEMO_NAME = 'list-box-with-disabled-items';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component, signal } from '@angular/core';
import {
  AvDescriptionComponent,
  AvKbdImports,
  AvLabelComponent,
  AvListBoxImports,
  AvSeparatorImports,
  AvSurfaceComponent,
} from '@avesra/angular';

@Component({
  selector: 'app-list-box-with-disabled-items-demo',
  imports: [
    AvSurfaceComponent,
    AvListBoxImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvSeparatorImports,
    AvKbdImports,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class ListBoxWithDisabledItemsDemo {
  readonly lastAction = signal('');

  onAction(key: string): void {
    this.lastAction.set(key);
  }
}`;

@Component({
  selector: 'app-list-box-with-disabled-items-demo',
  imports: [
    AvSurfaceComponent,
    AvListBoxImports,
    AvLabelComponent,
    AvDescriptionComponent,
    AvSeparatorImports,
    AvKbdImports,
  ],
  template: DEMO_TEMPLATE,
})
export class ListBoxWithDisabledItemsDemo {
  readonly lastAction = signal('');

  onAction(key: string): void {
    this.lastAction.set(key);
  }
}
