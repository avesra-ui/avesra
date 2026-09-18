export const SNIPPET_ID = 'select-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div av-select>
  <label av-label></label>
  <button av-select-trigger>
    <span av-select-value></span>
    <span av-select-indicator></span>
  </button>
  <p av-description></p>
  <av-select-popover>
    <div av-list-box>
      <div av-list-box-item>
        <label av-label></label>
        <p av-description></p>
        <span av-list-box-item-indicator></span>
      </div>
      <div av-list-box-section>
        <p></p>
        <div av-list-box-item>
          <label av-label></label>
        </div>
      </div>
    </div>
  </av-select-popover>
</div>`;
