export const SNIPPET_ID = 'toggle-button-group-anatomy';
export const SNIPPET_LANG = 'html';
export const SNIPPET_SOURCE = `<av-toggle-button-group selection-mode="multiple">
  <button av-toggle-button value="first">First</button>
  <button av-toggle-button value="second">
    <span av-toggle-button-group-separator></span>
    Second
  </button>
  <button av-toggle-button value="third">
    <span av-toggle-button-group-separator></span>
    Third
  </button>
</av-toggle-button-group>`;
