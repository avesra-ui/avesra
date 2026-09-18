export const SNIPPET_ID = 'modal-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-modal>
  <button av-button av-modal-trigger>Open Modal</button>
  <ng-template avModalContent>
    <div av-modal-dialog>
      <!-- Optional: Close button -->
      <av-modal-close-trigger />
      <div av-modal-header>
        <!-- Optional: Icon -->
        <div av-modal-icon></div>
        <h2 av-modal-heading></h2>
      </div>
      <div av-modal-body></div>
      <div av-modal-footer></div>
    </div>
  </ng-template>
</av-modal>`;
