export const SNIPPET_ID = 'drawer-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-drawer placement="right" backdrop="opaque">
  <button av-button av-drawer-trigger>Open Drawer</button>
  <ng-template avDrawerContent>
    <div av-drawer-dialog>
      <av-drawer-handle /> <!-- Optional: Drag handle -->
      <av-drawer-close-trigger /> <!-- Optional: Close button -->
      <div av-drawer-header>
        <h2 av-drawer-heading></h2>
      </div>
      <div av-drawer-body></div>
      <div av-drawer-footer></div>
    </div>
  </ng-template>
</av-drawer>`;
