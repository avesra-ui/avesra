export const SNIPPET_ID = 'alert-dialog-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-alert-dialog>
  <button av-button av-alert-dialog-trigger>Open Alert Dialog</button>
  <ng-template avAlertDialogContent>
    <div av-alert-dialog-dialog>
      <!-- Optional: Close button -->
      <av-alert-dialog-close-trigger />
      <div av-alert-dialog-header>
        <!-- Optional: Status icon -->
        <div av-alert-dialog-icon></div>
        <h2 av-alert-dialog-heading></h2>
      </div>
      <div av-alert-dialog-body></div>
      <div av-alert-dialog-footer></div>
    </div>
  </ng-template>
</av-alert-dialog>`;
