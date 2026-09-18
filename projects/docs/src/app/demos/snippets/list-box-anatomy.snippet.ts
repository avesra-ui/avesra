export const SNIPPET_ID = 'list-box-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<div
  av-list-box
  aria-label="Options"
  selection-mode="single"
  [(selectedKeys)]="selected"
>
  <div av-list-box-item id="item-1" textValue="Item 1">
    <label av-label></label>
    <p av-description></p>
    <span av-list-box-item-indicator></span>
  </div>
  <div av-list-box-section>
    <!-- Section heading (plain text or your own heading styles) -->
    <div av-list-box-item id="item-2" textValue="Item 2">
      <label av-label></label>
      <span av-list-box-item-indicator></span>
    </div>
  </div>
</div>`;
