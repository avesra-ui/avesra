export const SNIPPET_ID = 'tabs-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-tabs>
  <div av-tabs-list-container>
    <div av-tabs-list aria-label="Options">
      <span av-tabs-indicator></span>
      <button av-tabs-tab id="tab-1">Tab 1</button>
      <button av-tabs-tab id="tab-2">
        <span av-tabs-separator></span> <!-- Optional -->
        Tab 2
      </button>
    </div>
  </div>
  <div av-tabs-panel id="tab-1"></div>
  <div av-tabs-panel id="tab-2"></div>
</av-tabs>`;
